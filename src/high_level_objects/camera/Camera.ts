import Plane from '../../models/plane/Plane.ts';
import Point from '../../models/point/Point.ts';
/**
 * Represent an imaginary camera in 3D space for rendering a scene
 * Note that "viewPoint" is always behind the plane
 * (opposite direction of normal vector)
 * 2D schema => 
 * 
 *                    |
 *      (*) ----d---- |    [scene]
 *  [view point]      | 
 *              [camera plane]
 * 
 * 
 */
class Camera {

  private height: number;
  private width: number;
  private cameraPlane: Plane;
  private viewPointDistanceFromPlane: number;
  private _viewPoint: Point;

  constructor(
    w: number,
    h: number,
    plane: Plane,
    viewPointDistance?: number
  ) {
    this.height = h;
    this.width = w;
    this.cameraPlane = plane;

    if (viewPointDistance === undefined) {
      this.viewPointDistanceFromPlane = 20;
    } else {
      this.viewPointDistanceFromPlane = viewPointDistance;
    }
    this._viewPoint = this.findViewPoint();
  }

  private findViewPoint(): Point {
    const d = this.viewPointDistanceFromPlane;
    return new Point(
      ((-1 * d * this.cameraPlane.normal.x) + this.cameraPlane.point.x),
      ((-1 * d * this.cameraPlane.normal.y) + this.cameraPlane.point.y),
      ((-1 * d * this.cameraPlane.normal.z) + this.cameraPlane.point.z),
    );
  }

  get viewPoint(): Point {
    return this._viewPoint;
  }
}

export default Camera;