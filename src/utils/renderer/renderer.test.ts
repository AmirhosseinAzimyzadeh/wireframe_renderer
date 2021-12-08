import { assertEquals } from 'https://deno.land/std@0.116.0/testing/asserts.ts';
import Point from "../../models/point/Point.ts";
import Triangle from "../../models/triangle/Triangle.ts";
import Camera from "../../high_level_objects/camera/Camera.ts";
import Plane from "../../models/plane/Plane.ts";
import Vector from "../../models/vector/Vector.ts";
import render from "./render.ts";
import renderOnCanvas from "../canvas_adaptor/canvasAdaptor.ts";


Deno.test("Renderer", () => {
  const p1 = new Point(0, 0, 0);
  const p2 = new Point(1, 0, 0);
  const p3 = new Point(0, 1, 0);
  const p4 = new Point(0, 0, 1);

  const t1 = new Triangle(p1, p2, p3);
  const t2 = new Triangle(p1, p3, p4);
  const t3 = new Triangle(p2, p3, p4);


  const plane = new Plane(new Point(5, 6, 5), new Vector(-0.5, -0.4, -1));
  const camera = new Camera(100, 100, plane)

  const data = render(camera, [t1, t2, t3]);
  
  data.paths.forEach((p) => {
    p.forEach((t) => {
      console.log(`(${t.x}, ${t.y})`)
    })
  });
});

Deno.test("Renderer 2", async () => {
  const p1 = new Point(0, 0, 0);
  const p2 = new Point(0, 0, 500);
  const p3 = new Point(-500, 0, 0);
  const p4 = new Point(-500, 0, 500);
  const p5 = new Point(-500, 500, 500);
  const p6 = new Point(0, 500, 500);
  const p7 = new Point(0, 500, 0);
  const p8 = new Point(-500, 500, 0);

  const t1 = new Triangle(p1, p2, p3);
  const t2 = new Triangle(p2, p3, p4);
  const t3 = new Triangle(p1, p2, p6);
  const t4 = new Triangle(p1, p6, p7);
  const t5 = new Triangle(p6, p7, p8);
  const t6 = new Triangle(p5, p6, p8);

  
  const t7 = new Triangle(p5, p3, p8);
  const t8 = new Triangle(p3, p4, p5);
  const t9 = new Triangle(p1, p2, p6);
  const t10 = new Triangle(p1, p7, p8);
  const t11 = new Triangle(p6, p7, p8);
  const t12 = new Triangle(p3, p1, p8);


  const plane = new Plane(new Point(0, 100, -100), new Vector(0, -10, -10));
  const camera = new Camera(6000, 3000, plane, 100000);

  const data = render(camera, [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12]);
  
  data.paths.forEach((p) => {
    p.forEach((t) => {
      console.log(`(${t.x}, ${t.y})`)
    })
  });

  await renderOnCanvas(data);
});