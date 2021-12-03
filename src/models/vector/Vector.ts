/** Represent a vector in 3D space */
class Vector {

  private _x: number;
  private _y: number;
  private _z: number;

  // Computational properties
  // these kind of properties will be compute only once unless
  // the direction or size of vector changes
  private _size: number | null = null;
  private _unit: Vector | null = null;

  constructor(x: number, y: number, z: number) {
    this._x = x;
    this._y = y;
    this._z = z;
    this.resetComputationalProps();
  }

  private resetComputationalProps() {
    this._unit = null;
    this._size = null;
  }

  get x() { return this._x; }
  set x(x: number) {
    this._x = x;
    this.resetComputationalProps();
  }

  get y() { return this._y; }
  set y(y: number) {
    this._y = y;
    this.resetComputationalProps();
  }

  get z() { return this._z; }
  set z(z: number) {
    this._z = z;
    this.resetComputationalProps();
  }

  get size(): number {
    if (this._size === null) {
      this._size = Math.sqrt((
          Math.pow(this._x, 2)
        + Math.pow(this._y, 2)
        + Math.pow(this._z, 2)
      ));
    }
    return this._size;
  }

  get unit(): Vector {
    if (this._unit === null) {
      const size = this.size;
      if (size === 0) this._unit = this;
      else {
        this._unit = new Vector(
          (this._x / size),
          (this._y / size),
          (this._z / size),
        );
      }
    }
    return this._unit;
  }

  isEqual(vec: Vector): boolean {
    return (this.x === vec.x && this.y === vec.y && this.z === vec.z)
  }
}


export default Vector;