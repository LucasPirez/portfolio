import React, { useEffect, useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
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
  Vector2,
  Raycaster
} from 'three'
import useWidth from '../../hooks/useWidth'

function Animation({ visible }) {
  const { width } = useWidth()
  const color3 = useRef()
  const colorAnimation = useRef()

  const scene = new Scene()
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  function onMouseMove(event) {
    const mouse = new Vector2(
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1
    )
    const raycaster = new Raycaster()

    raycaster.setFromCamera(mouse, camera)

    const intersects = raycaster.intersectObjects(
      scene.children.filter((child) => child instanceof Line)
    )

    for (const intersect of intersects) {
      intersect.object.material.color.set(colorAnimation.current)
    }

    for (const child of scene.children.filter(
      (child) => child instanceof Line
    )) {
      if (!intersects.find((intersect) => intersect.object === child)) {
        child.material.color.set(color3.current)
      }
    }
  }

  useEffect(() => {
    let color2
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      color2 = new Color(0x18181b)
      color3.current = new Color('#30343a')
      colorAnimation.current = new Color(0x5b5e63)
    } else {
      color2 = new Color(0x1e293b)
      color3.current = new Color('rgb(75, 84, 98)')
      colorAnimation.current = new Color('#646c78')
    }
    const renderer = new WebGLRenderer({
      canvas: document.querySelector('#bg')
    })

    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    scene.background = color2
    camera.position.setZ(30)

    const pointLight = new PointLight()
    pointLight.position.set(0, 0, 0)
    const ambientLight = new AmbientLight({ color: 0x06b624 })
    scene.add(pointLight, ambientLight)
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enabled = false

    if (visible === 'home') {
      function addStar() {
        const geometry = new SphereGeometry(0.1, 15, 2)
        const material = new MeshStandardMaterial({ color: 0x06b6d4 })
        const points = []
        const star = new Mesh(geometry, material)
        const [x, y, z] = Array(3)
          .fill()
          .map(() => MathUtils.randFloatSpread(60))

        points.push(new Vector3(x, y, z))
        points.push(new Vector3(0, 100, 0))

        const lineMaterial = new LineBasicMaterial({
          color: new Color(color3.current)
        })
        const lineGeometry = new BufferGeometry().setFromPoints(points)
        const line = new Line(lineGeometry, lineMaterial)

        star.position.set(x, y, z)
        scene.add(line)
        scene.add(star)
      }

      Array(100).fill().forEach(addStar)
      let ani
      function animate() {
        if (visible !== 'home') return
        ani = window.requestAnimationFrame(animate)
        scene.rotation.y += 0.0005
        scene.scroll = false
        renderer.render(scene, camera)
      }
      animate()

      return () => window.cancelAnimationFrame(ani)
    }
  }, [width, visible]) /* eslint-disable-line react-hooks/exhaustive-deps */

  return (
    <>
      <canvas
        onMouseMove={onMouseMove}
        id="bg"
        className="absolute h-[100%] w-full overflow-hidden "
      ></canvas>
    </>
  )
}

export default Animation
