import { Canvas } from "../renderer/render.ts";
import { createCanvas } from "https://deno.land/x/canvas/mod.ts";


export default async function renderOnCanvas(renderedCanvas: Canvas, name = "imag.png") {
  const { width, height, paths } = renderedCanvas;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);

  // origin in camera starts from center but origin in
  // context api starts from top left
  const xOffset = width / 2;
  const yOffset = height / 2;
  // const xOffset =0;
  // const yOffset = 0;

  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  paths.forEach((triangle) => {
    ctx.moveTo((triangle[0].x) + xOffset,(triangle[0].y) + yOffset)

    ctx.lineTo((triangle[1].x) + xOffset, (triangle[1].y) + yOffset);
    ctx.moveTo((triangle[1].x) + xOffset, (triangle[1].y) + yOffset);

    ctx.lineTo((triangle[2].x) + xOffset, (triangle[2].y) + yOffset);
    ctx.moveTo((triangle[2].x) + xOffset, (triangle[2].y) + yOffset);

    ctx.lineTo((triangle[0].x) + xOffset, (triangle[0].y) + yOffset);

    ctx.stroke();
  });
  await Deno.writeFile(name, canvas.toBuffer());
}
