import Camera from "../../high_level_objects/camera/Camera.ts";
import Triangle from "../../models/triangle/Triangle.ts";
import Ray from "../../models/ray/Ray.ts";
import Geometry from "../geometry/Geometry.ts";

/** returns projected triangle on a plane */
function projectTriangle(
  camera: Camera,
  triangle: Triangle
): Triangle {
  const projectedPoints = triangle.points.map((currentPoint) => {
    const ray: Ray = Ray.createFromPoints(
      currentPoint,
      camera.viewPoint,
    );
    const intersection = Geometry.rayPlaneIntersection(camera.plane, ray);
    if (intersection instanceof Ray) return currentPoint;
      console.log("HERE");
      console.log(intersection);
    return intersection;
  });

  return new Triangle(
    projectedPoints[0],
    projectedPoints[1],
    projectedPoints[2],
  );
}

export default projectTriangle;