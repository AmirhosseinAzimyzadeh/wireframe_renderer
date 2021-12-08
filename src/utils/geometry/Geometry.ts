import Point from "../../models/point/Point.ts";
import Vector from "../../models/vector/Vector.ts";
import Ray from "../../models/ray/Ray.ts";
import Plane from "../../models/plane/Plane.ts";

function subtractPoints(p1: Point, p2: Point): Vector {
  return new Vector(
    p1.x - p2.x,
    p1.y - p2.y,
    p1.z - p2.z,
  );
}

function innerProduct(v: Vector, w: Vector): number {
  return (v.x * w.x)
    + (v.y * w.y)
    + (v.z * w.z);
}

function crossProduct(v: Vector, w: Vector): Vector {
  return new Vector(
    ((v.y * w.z) - (v.z * w.y)),
    ((v.z * w.x) - (v.x * w.z)),
    ((v.x * w.y) - (v.y * w.x)),
  );
}

/**
 * returns the input ray if it's in the input plane
 */
function rayPlaneIntersection(plane: Plane, ray: Ray): Point | Ray {
  if (innerProduct(plane.normal, ray.vector) === 0) { // ray is in the plane
    return ray;
  }

  const rayToPoint = subtractPoints(
    plane.point,
    ray.samplePoint,
  );

  const t = innerProduct(rayToPoint, plane.normal)
    / innerProduct(ray.vector, plane.normal);

  return ray.getPointAt(t);
}

/** rotate around z axios */
function rotateZ(vector: Vector, amount: number): Vector {
  return new Vector(
    (Math.cos(amount) * vector.x) - (Math.sin(amount) * vector.y),
    (Math.sin(amount) * vector.x) + (Math.cos(amount) * vector.y),
    vector.z,
  );
}

function rotate90Degree(v: Vector): Vector {
  // check if it's parallel with z-axios
  const zAxios = new Vector(0,0,1);
  const crossP = crossProduct(v, zAxios);
  if (crossP.size === 0) {
    return new Vector(1, 0, 0);
  }

  return rotateZ(v, (Math.PI / 2));
}

const Geometry = {
  subtractPoints,
  innerProduct,
  crossProduct,
  rayPlaneIntersection,
  rotateZ,
  rotate90Degree,
}

export default Geometry;