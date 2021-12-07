import Camera from "../../high_level_objects/camera/Camera.ts";
import Triangle from "../../models/triangle/Triangle.ts";
import projectTriangle from "./projectTriangle.ts";
import find2DCoordinate from "./findTwoDCoordinate.ts";

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
): Canvas {

  const projectedTriangles: Triangle[] = triangles
    .map((t) => projectTriangle(camera, t));
  
  const new2DOrigin = camera.plane.point;

  const paths: Path[] = projectedTriangles.map((t) => ([
    find2DCoordinate(new2DOrigin, t.points[0]),
    find2DCoordinate(new2DOrigin, t.points[1]),
    find2DCoordinate(new2DOrigin, t.points[2]),
  ]));

  return {
    width: camera.width,
    height: camera.height,
    paths,
  };
}

export default render;