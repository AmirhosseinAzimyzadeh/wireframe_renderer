import Geometry from "../../utils/geometry/Geometry.ts";
import Point from "../point/Point.ts";
import Vector from "../vector/Vector.ts";

class Plane {
  public normal: Vector;
  public point: Point;

  constructor(p: Point, n: Vector) {
    this.normal = n;
    this.point = p;
  }

  isInPlane(p: Point): boolean {
    if (p.isEqual(this.point)) return true;
    else {
      const tempVec = Geometry.subtractPoints(p, this.point);
      return Geometry.innerProduct(tempVec, this.normal) === 0;
    }
  }
}

export default Plane;