import { assertEquals } from 'https://deno.land/std@0.116.0/testing/asserts.ts';
import Point from "../models/point/Point.ts";
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