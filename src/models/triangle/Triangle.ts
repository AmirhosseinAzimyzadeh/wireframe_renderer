import Geometry from "../../utils/geometry/Geometry.ts";
import Point from "../point/Point.ts";
import Vector from "../vector/Vector.ts";

class Triangle {

  public readonly points: [Point, Point, Point];
  
  // Computational properties
  private _normal: Vector | null = null;

  /**
   * Points will be copied and are not referenced to the original points 
   */
  constructor(p1: Point, p2: Point, p3: Point) {
    // set observer to reset computational properties whenever points
    // properties changes
    const changeObserver = () => { this.resetComputationalProps(); }
    this.points = [
      p1.copy().setChangeCallback(changeObserver),
      p2.copy().setChangeCallback(changeObserver),
      p3.copy().setChangeCallback(changeObserver),
    ];
  }

  get normal(): Vector {
    if (this._normal === null) {
      const v1 = Geometry.subtractPoints(this.points[1], this.points[0]);
      const v2 = Geometry.subtractPoints(this.points[2], this.points[1]);
      this._normal = Geometry.crossProduct(v1, v2);
    }
    return this._normal.copy();
  }

  private resetComputationalProps() {
    this._normal = null;
  }
}

export default Triangle;