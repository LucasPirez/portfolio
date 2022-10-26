import React, { useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
  Color,
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  PointLight,
  AmbientLight,
  Vector3,
  BufferGeometry,
  SphereGeometry,
  MeshStandardMaterial,
  Mesh,
  MathUtils,
  LineBasicMaterial,
  Line,
} from "three";
import useWidth from "../../hooks/useWidth";

function Animation({ visible }) {
  const { width } = useWidth();

  useEffect(() => {
    const color2 = new Color(0x1e293b);
    const color3 = new Color("rgb(75, 84, 98)");
    const scene = new Scene();
    scene.background = color2;
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new WebGLRenderer({
      canvas: document.querySelector("#bg"),
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    renderer.render(scene, camera);
    const pointLight = new PointLight();
    pointLight.position.set(0, 0, 0);

    const ambientLight = new AmbientLight({ color: 0x06b624 });
    scene.add(pointLight, ambientLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enabled = false;

    let point = [];
    point.push(new Vector3(0, 0, 0));
    point.push(new Vector3(0, 100, 100));

    // const ang = new BufferGeometry().setFromPoints(point);
    // scene.add(ang);
    if (visible) {
      function addStar() {
        const geometry = new SphereGeometry(0.1, 15, 2);
        const material = new MeshStandardMaterial({ color: 0x06b6d4 });
        const points = [];
        console.log("addStar");

        const star = new Mesh(geometry, material);
        const [x, y, z] = Array(3)
          .fill()
          .map(() => MathUtils.randFloatSpread(60));

        points.push(new Vector3(x, y, z));
        points.push(new Vector3(0, 100, 0));

        const lineMaterial = new LineBasicMaterial({ color: color3 });
        const lineGeometry = new BufferGeometry().setFromPoints(points);
        const line = new Line(lineGeometry, lineMaterial);

        star.position.set(x, y, z);

        scene.add(line);
        scene.add(star);
      }

      Array(100).fill().forEach(addStar);

      let ani;
      function animate() {
        if (!visible) return;
        ani = window.requestAnimationFrame(animate);

        scene.rotation.y += 0.0005;
        scene.scroll = false;

        renderer.render(scene, camera);
      }

      animate();

      return () => window.cancelAnimationFrame(ani);
    }
  }, [visible, width]);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "30vh",
          background: "trasparent",
          position: "absolute",
        }}
      ></div>

      <canvas id="bg" className="absolute h-[100%] w-[100%] z-0"></canvas>
    </>
  );
}

export default Animation;
