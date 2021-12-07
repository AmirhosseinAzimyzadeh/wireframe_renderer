import Point from "../../models/point/Point.ts";
import Vector from "../../models/vector/Vector.ts";
import { TwoDPoint } from "./render.ts";
import Geometry from "../geometry/Geometry.ts";

/**
 * Before using this function make sure that all point are
 * in the same place
 */
export default function find2DCoordinate(
  origin: Point,
  targetPoint: Point
): TwoDPoint {
  // initiate necessary vectors
  const xVector = new Vector(1, 0, 0);
  const radianVector = Geometry.subtractPoints(origin, targetPoint);
  const distanceFromOrigin = radianVector.size;
  
  const cos = (Geometry.innerProduct(xVector, radianVector)
    / ((xVector.size) * (radianVector.size)));
  
  const sin = Geometry.crossProduct(xVector, radianVector).size
    / ((xVector.size) * (radianVector.size));

  return {
    x: distanceFromOrigin * cos,
    y: distanceFromOrigin * sin,
  };
}
