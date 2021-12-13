import Point from "../../models/point/Point.ts";
import Vector from "../../models/vector/Vector.ts";
import { TwoDPoint } from "./render.ts";
import Geometry from "../geometry/Geometry.ts";
import Plane from "../../models/plane/Plane.ts";

/**
 * Before using this function make sure that all points are
 * in the same place
 */
export default function find2DCoordinate(
  origin: Point,
  targetPoint: Point,
  cameraPlane: Plane,
): TwoDPoint {
  // initiate necessary vectors
  // const xVector = Geometry.rotate90Degree(cameraPlane.normal);
  const xVector = new Vector(0, -1, 0);
  const yVector = new Vector(0, 0, 1);
  const radianVector = Geometry.subtractPoints(origin, targetPoint);
  const distanceFromOrigin = radianVector.size;
  
  const cos = (Geometry.innerProduct(xVector, radianVector)
    / ((xVector.size) * (radianVector.size)));
  
  const sin = Geometry.crossProduct(xVector, radianVector).size
    / ((xVector.size) * (radianVector.size));

  let x = distanceFromOrigin * cos * (targetPoint.z / targetPoint.z);
  let y = distanceFromOrigin * sin * (targetPoint.y / targetPoint.y);

  const xAngle = Geometry.getAngle(xVector, radianVector);

  // if (xAngle > Math.PI / 2) {
  //   x = -1 * x;
  // }

  // const yAngle = Geometry.getAngle(yVector, radianVector);
  // if (yAngle > Math.PI / 2) {
  //   y = -1 * y;
  // }

  // return {
  //   x: isNaN(x) ? 0 : x ,
  //   y: isNaN(y) ? 0 : y,
  // };

  return {
    x: targetPoint.z,
    y: targetPoint.y,
  };
}
