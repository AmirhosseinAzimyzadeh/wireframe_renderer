/** Represent a point in 3D Space */
class Point {

  private _x: number;
  private _y: number;
  private _z: number;

  private changeCallback: (() => void) | null = null;

  constructor(x: number, y: number, z: number) {
    this._x = x;
    this._y = y;
    this._z = z;
  }

  set x(x: number) {
    this._x = x;
    this.runCallback();
  }
  get x() { return this._x; }

  set y(y: number) {
    this._y = y;
    this.runCallback();
  }
  get y() { return this._y; }

  set z(z: number) {
    this._z = z;
    this.runCallback();
  }
  get z() { return this._z; }

  setChangeCallback(callback: () => void): Point {
    this.changeCallback = callback;
    return this;
  }

  private runCallback() {
    if (this.changeCallback !== null) {
      this.changeCallback();
    }
  }
  
  isEqual(point: Point) {
    return (this._x === point.x && this._y === point.y && this._z === point.z)
  }

  /** point as an array [x, y, z] */
  asArray(): [number, number, number] {
    return [this._x, this._y, this._z];
  }

  copy(): Point {
    return new Point(this._x, this._y, this._z);
  }
}

export default Point;