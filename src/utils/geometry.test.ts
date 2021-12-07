import { assertEquals } from 'https://deno.land/std@0.116.0/testing/asserts.ts';
import Plane from "../models/plane/Plane.ts";
import Point from "../models/point/Point.ts";
import Ray from "../models/ray/Ray.ts";
import Vector from "../models/vector/Vector.ts";
import Geometry from "./Geometry.ts";

Deno.test('Geometry "subtract points"', () => {
  const p1 = new Point(1, 3, 5);
  const p2 = new Point(3, 2, 0);

  const resultVec = Geometry.subtractPoints(p1, p2);

  const expectedVec = new Vector(-2, 1, 5);
  
  assertEquals(expectedVec.isEqual(resultVec), true);
});

Deno.test('Geometry "inner product"', () => {
  const vec1 = new Vector(1,-2,13);
  const vec2 = new Vector(-4, 23, 10);

  assertEquals(Geometry.innerProduct(vec1, vec2), 80);
});

Deno.test('Geometry "cross product"', () => {
  const vec1 = new Vector(1,-2,13);
  const vec2 = new Vector(-4, 23, 10);

  assertEquals(Geometry.crossProduct(vec1, vec2).isEqual(
    new Vector(-319, -62, 15)
  ), true);
});

Deno.test('Geometry "ray plane intersection"', () => {
  const plane = new Plane(
    new Point(0, 0, 0),
    new Vector(0, 1, 0),
  );

  const ray = Ray.createFromPoints(
    new Point(1, -10, 0),
    new Point(1, 10, 0),
  );

  const intersect: Point | Ray = Geometry.rayPlaneIntersection(
    plane,
    ray,
  );

  if (intersect instanceof Point) {
    assertEquals(intersect.isEqual(new Point(1, 0, 0)), true);
  } else {
    throw new Error("Test failed");
  }

});
