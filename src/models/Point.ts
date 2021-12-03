/** Represent a point in 3D Space */
class Point {

  public x: number;
  public y: number;
  public z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  
  /** point as an array [x, y, z] */
  asArray(): [number, number, number] {
    return [this.x, this.y, this.z];
  }
}

export default Point;