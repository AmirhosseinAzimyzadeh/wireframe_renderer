import Point from "../../models/point/Point.ts";
import Vector from "../../models/vector/Vector.ts";
import { TwoDPoint } from "./render.ts";
import Geometry from "../geometry/Geometry.ts";
import Plane from "../../models/plane/Plane.ts";

/**
 * Before using this function make sure that all point are
 * in the same place
 */
export default function find2DCoordinate(
  origin: Point,
  targetPoint: Point,
  cameraPlane: Plane,
): TwoDPoint {
  // initiate necessary vectors
  const xVector = Geometry.rotate90Degree(cameraPlane.normal);
  const radianVector = Geometry.subtractPoints(origin, targetPoint);
  const distanceFromOrigin = radianVector.size;
  
  const cos = (Geometry.innerProduct(xVector, radianVector)
    / ((xVector.size) * (radianVector.size)));
  
  const sin = Geometry.crossProduct(xVector, radianVector).size
    / ((xVector.size) * (radianVector.size));

  const x = distanceFromOrigin * cos;
  const y = distanceFromOrigin * sin;

  return {
    x: isNaN(x) ? 0 : x ,
    y: isNaN(y) ? 0 : y,
  };
}
