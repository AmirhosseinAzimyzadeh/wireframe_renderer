import { assertEquals } from 'https://deno.land/std@0.116.0/testing/asserts.ts';
import Point from "../point/Point.ts";
import Vector from "../vector/Vector.ts";
import Triangle from "./Triangle.ts";

Deno.test('Triangle normal vector' , () => {
  const p1 = new Point(0, 0, 1);
  const p2 = new Point(0, 1, 0);
  const p3 = new Point(1, 0, 0);

  const t = new Triangle(p1, p2, p3);
  const normal = t.normal;

  assertEquals(normal.isEqual(
    new Vector(-1, -1, -1),
  ), true);
})