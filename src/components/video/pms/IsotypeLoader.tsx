"use client";

import { useEffect, useRef } from "react";
import {
  ISOTYPE_DOT,
  ISOTYPE_PATH,
  ISOTYPE_VIEWBOX,
} from "@/components/site/logoPaths";
import styles from "./IsotypeLoader.module.css";

/**
 * El loader de arranque del PMS, reciclado.
 *
 * Es el `LoaderGeneral` de `pms-core/app/src/components/globalComponents`:
 * el isotipo (las cuatro formas) dibujado con una trama de píxeles que aparecen
 * del centro hacia afuera, tiemblan un poco en luminosidad y se quedan
 * quietos. Acá se copia el motor de píxeles tal cual y se le sacan las dos
 * cosas que en un video no aplican: el ciclo infinito (armar → quieto →
 * desarmar) y el tema por clase del `<html>`. El video decide con `tone` sobre
 * qué fondo va y con `paused` si el reloj corre.
 *
 * Colores: los de la marca, sin recolorear (manual §13). Tinta + musgo sobre
 * papel; papel + pistacho sobre tinta. El temblor es de luminosidad, nunca de
 * matiz.
 */

function hexToHsl(hex: string): { h: number; s: number; l: number } {
  const sanitized = hex.replace("#", "").trim();
  const expanded =
    sanitized.length === 3
      ? sanitized
          .split("")
          .map((c) => c + c)
          .join("")
      : sanitized;
  const num = parseInt(expanded, 16);
  const r = ((num >> 16) & 255) / 255;
  const g = ((num >> 8) & 255) / 255;
  const b = (num & 255) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h *= 60;
  }
  return { h, s: s * 100, l: l * 100 };
}

class Pixel {
  x: number;
  y: number;
  color: string;
  speed: number;
  size: number;
  sizeStep: number;
  minSize: number;
  maxSizeAvailable: number;
  maxSize: number;
  sizeDirection: number;
  delay: number;
  counter: number;
  counterStep: number;
  isFlicking: boolean;

  constructor(x: number, y: number, color: string, speed: number, delay: number, step: number, boundSize: number) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = this.rand(0.1, 0.9) * speed;
    this.size = 0;
    this.sizeStep = this.rand(0.15, 0.5);
    this.minSize = 0.5;
    this.maxSizeAvailable = boundSize;
    this.maxSize = this.rand(this.minSize, this.maxSizeAvailable);
    this.sizeDirection = 1;
    this.delay = delay;
    this.counter = 0;
    this.counterStep = step;
    this.isFlicking = false;
  }

  private rand(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const centerOffset = this.maxSizeAvailable * 0.5 - this.size * 0.5;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x + centerOffset, this.y + centerOffset, this.size, this.size);
  }

  /** Armando: espera su turno (la distancia al centro) y crece. */
  show() {
    if (this.counter <= this.delay) {
      this.counter += this.counterStep;
      return;
    }
    if (this.size >= this.maxSize) this.isFlicking = true;
    if (this.isFlicking) this.flicking();
    else this.size += this.sizeStep;
  }

  /** Quieto y entero: el tamaño final, sin el parpadeo de show(). */
  rest() {
    this.isFlicking = false;
    this.size = this.maxSize;
  }

  flicking() {
    if (this.size >= this.maxSize) this.sizeDirection = -1;
    else if (this.size <= this.minSize) this.sizeDirection = 1;
    this.size += this.sizeDirection * this.speed;
  }
}

/* A 60 fps: ~1,7 s armando. Es el mismo número del PMS. */
const ARM_FRAMES = 100;

export default function IsotypeLoader({
  size = 220,
  tone = "paper",
  paused = false,
  className,
}: {
  /** Lado del cuadrado, en px de layout. */
  size?: number;
  /** El fondo sobre el que va: decide tinta/papel para las formas. */
  tone?: "paper" | "ink";
  paused?: boolean;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pausedRef = useRef(paused);
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = size;
    const height = size;

    // Resolución: el escenario del video se escala con `transform`, así que
    // el canvas se dibuja al doble para que no se vea blando al agrandar.
    const dpr = Math.max(2, window.devicePixelRatio || 1);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // 0 = afuera, 1 = formas de tinta, 2 = el punto. Se rasteriza el path del
    // isotipo una vez y después se consulta por celda.
    const [vbX, vbY, vbW, vbH] = ISOTYPE_VIEWBOX.split(" ").map(Number);
    const sampleRate = 3;
    const temp = document.createElement("canvas");
    temp.width = width;
    temp.height = height;
    const tctx = temp.getContext("2d")!;
    const scale = Math.min(width / vbW, height / vbH);
    const offsetX = (width - vbW * scale) / 2 - vbX * scale;
    const offsetY = (height - vbH * scale) / 2 - vbY * scale;
    tctx.setTransform(scale, 0, 0, scale, offsetX, offsetY);
    tctx.fillStyle = "#ffffff";
    tctx.fill(new Path2D(ISOTYPE_PATH), "evenodd");
    // El punto en rojo puro: G=0 lo distingue del blanco de las formas.
    tctx.fillStyle = "#ff0000";
    tctx.beginPath();
    tctx.arc(ISOTYPE_DOT.cx, ISOTYPE_DOT.cy, ISOTYPE_DOT.r, 0, Math.PI * 2);
    tctx.fill();
    tctx.setTransform(1, 0, 0, 1, 0, 0);
    const image = tctx.getImageData(0, 0, width, height).data;
    const mask: number[][] = [];
    for (let y = 0; y < height; y += sampleRate) {
      const row: number[] = [];
      for (let x = 0; x < width; x += sampleRate) {
        const idx = (y * width + x) * 4;
        const alpha = image[idx + 3];
        row.push(alpha === 0 ? 0 : image[idx + 1] === 0 ? 2 : 1);
      }
      mask[Math.floor(y / sampleRate)] = row;
    }
    const regionAt = (x: number, y: number) => {
      const my = Math.floor(y / sampleRate);
      const mx = Math.floor(x / sampleRate);
      if (my >= mask.length || mx >= mask[my].length) return 0;
      return mask[my][mx];
    };

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;
    const inkHsl = hexToHsl(tone === "ink" ? "#f2efe8" : "#14150f");
    const dotHsl = hexToHsl(tone === "ink" ? "#c8e293" : "#4e6b28");
    const shade = (base: { h: number; s: number; l: number }, spread: number) => {
      const l = Math.max(0, Math.min(100, base.l + rand(-spread, spread)));
      return `hsl(${base.h} ${base.s}% ${l}%)`;
    };

    const gap = 3;
    const step = (width + height) * 0.005;
    const speed = rand(0.008, 0.25);
    const maxSize = gap;
    const pixels: Pixel[] = [];
    for (let x = 0; x < width; x += gap) {
      for (let y = 0; y < height; y += gap) {
        const region = regionAt(x + maxSize / 2, y + maxSize / 2);
        if (!region) continue;
        const color = region === 2 ? shade(dotHsl, 6) : shade(inkHsl, tone === "ink" ? 6 : 9);
        const delay = Math.sqrt((x - width * 0.5) ** 2 + (y - height * 0.5) ** 2);
        pixels.push(new Pixel(x, y, color, speed, delay, step, maxSize));
      }
    }

    let phase: "show" | "hold" = "show";
    let ticker = 0;
    let request = 0;
    let lastTime = 0;
    const interval = 1000 / 60;

    const animate = () => {
      request = requestAnimationFrame(animate);
      const now = performance.now();
      const diff = now - lastTime;
      if (diff < interval) return;
      lastTime = now - (diff % interval);
      if (pausedRef.current) return;

      ctx.clearRect(0, 0, width, height);
      if (phase === "show") {
        ticker += 1;
        if (ticker >= ARM_FRAMES) phase = "hold";
      }
      for (const pixel of pixels) {
        if (phase === "show") pixel.show();
        else pixel.rest();
        if (pixel.size > 0) pixel.draw(ctx);
      }
    };
    animate();

    return () => cancelAnimationFrame(request);
  }, [size, tone]);

  return (
    <canvas
      ref={canvasRef}
      className={[styles.canvas, className ?? ""].join(" ")}
      style={{ width: size, height: size }}
      aria-hidden
    />
  );
}
