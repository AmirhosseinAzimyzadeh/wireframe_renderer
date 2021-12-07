import Camera from "../../high_level_objects/camera/Camera.ts";
import Triangle from "../../models/triangle/Triangle.ts";

export interface Canvas {
  width: number,
  height: number,
  paths: Array<Path>
}

/** 2D path that represent a projected triangle */
export type Path = [TwoDPoint, TwoDPoint, TwoDPoint];
export interface TwoDPoint {
  x: number,
  y: number,
}

function render(
  camera: Camera,
  triangles: Triangle[],
): Canvas | null {

  
  return null;
}

export default render;