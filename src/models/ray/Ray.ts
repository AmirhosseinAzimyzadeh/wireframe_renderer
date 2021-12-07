import Geometry from "../../utils/geometry/Geometry.ts";
import Point from '../point/Point.ts';
import Vector from '../vector/Vector.ts';

class Ray {

  private _samplePoint: Point;
  private _vector: Vector;

  private constructor(p: Point, v: Vector) {
    this._samplePoint = p;
    this._vector = v;
  }
  public static createFromPoints(p1: Point, p2: Point): Ray {
    return new Ray(
      p1,
      Geometry.subtractPoints(p1, p2),
    )
  }

  public static createFromVector(p: Point, v: Vector): Ray {
    return new Ray(p, v);
  }

  get vector(): Vector {
    return this._vector.copy();
  }

  get samplePoint(): Point {
    return this._samplePoint.copy();
  }

  getPointAt(t: number): Point {
    const p = this._samplePoint;
    const d = this._vector;
    return new Point(
      (p.x + (t * d.x)),
      (p.y + (t * d.y)),
      (p.z + (t * d.z)),
    );
  }
}

export default Ray;
