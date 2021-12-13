import { assertEquals } from 'https://deno.land/std@0.116.0/testing/asserts.ts';
import Point from "../../models/point/Point.ts";
import Triangle from "../../models/triangle/Triangle.ts";
import Camera from "../../high_level_objects/camera/Camera.ts";
import Plane from "../../models/plane/Plane.ts";
import Vector from "../../models/vector/Vector.ts";
import render from "./render.ts";
import renderOnCanvas from "../canvas_adaptor/canvasAdaptor.ts";
import Geometry from "../geometry/Geometry.ts";


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
  const p1 = new Point(100, 100, 100); // red
  const p2 = new Point(-100, 100, 100); // orange
  const p3 = new Point(100, -100, 100); // yellow
  const p4 = new Point(100, 100, -100); // green
  const p5 = new Point(-100, 100, -100); // cyan
  const p6 = new Point(100, -100, -100); // blue
  const p7 = new Point(-100, -100, -100); // violet
  const p8 = new Point(-100, -100, 100); // pink

  const t1 = new Triangle(p7, p4, p6);
  const t2 = new Triangle(p7, p4, p5);
  const t3 = new Triangle(p7, p3, p6);
  const t4 = new Triangle(p7, p3, p8);
  const t5 = new Triangle(p7, p2, p8);
  const t6 = new Triangle(p7, p2, p5);
  const t7 = new Triangle(p1, p5, p2);
  const t8 = new Triangle(p1, p5, p4);
  const t9 = new Triangle(p1, p6, p3);
  const t10 = new Triangle(p1, p6, p4);
  const t11 = new Triangle(p1, p8, p2);
  const t12 = new Triangle(p1, p8, p3);

  const triangles = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12];



  const plane = new Plane(new Point(110, 0, 0), new Vector(-50, 0, 0));
  const camera = new Camera(500, 500, plane, 200);

  console.log(camera.viewPoint);

  const data = render(camera, triangles);
  data.paths.forEach((p) => {
    p.forEach((t) => {
      console.log(`(${t.x}, ${t.y})`)
    })
  });

  // await renderOnCanvas(data);
  for (let i=0.01 ; i< 0.5 ;i+=0.01 ) {
    // rotate
    const data = render(camera, triangles);
    await renderOnCanvas(data, `${i}_image.png`);
    triangles.forEach((t) => {
    t.points.forEach((p) => {
      let rotatedPoint = Geometry.rotateZPoint(p, i);
      // rotatedPoint = Geometry.rotateYPoint(p, Math.PI / 3);
      p.x = rotatedPoint.x;
      p.y = rotatedPoint.y;
      p.z = rotatedPoint.z;
    }); 
  })
  }


});