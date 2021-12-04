import { assertEquals } from 'https://deno.land/std@0.116.0/testing/asserts.ts';
import Plane from "../../models/plane/Plane.ts";
import Point from "../../models/point/Point.ts";
import Vector from "../../models/vector/Vector.ts";
import Camera from "./Camera.ts";

Deno.test('Camera "View Point"', () => {
  const plane = new Plane(
    new Point(0, 0, 0),
    new Vector(0, 1, 0),
  );

  const camera = new Camera(
    1920,
    1080,
    plane,
    10,
  );

  const viewPoint = camera.viewPoint;
  assertEquals(viewPoint.isEqual(new Point(0, -10, 0)), true);
});