import React, { useEffect, useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import {
  Color,
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  Vector3,
  BufferGeometry,
  SphereGeometry,
  MeshStandardMaterial,
  Mesh,
  MathUtils,
  LineBasicMaterial,
  Line,
  Group
} from 'three'
import useWidth from '../../hooks/useWidth'

function Animation({ visible, changeTheme }) {
  const { width } = useWidth()
  const color = useRef({
    bg: '',
    line: '',
    animation: '',
    star: ''
  })

  const scene = new Scene()
  scene.rotateX(0.65)
  scene.rotateZ(0.3)

  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      color.current.bg = new Color(0x212124)
      color.current.line = new Color(0x30343a)
      color.current.colorAnimation = new Color(0x5b5e63)
      color.current.star = 0x36aac8
    } else {
      color.current.bg = new Color(0x25283d)
      color.current.line = new Color('rgb(75, 84, 98)')
      color.current.colorAnimation = new Color(0x646c78)
      color.current.star = 0x26a7d0
    }
    const renderer = new WebGLRenderer({
      canvas: document.querySelector('#bg')
    })

    const group = new Group()

    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)

    scene.background = color.current.bg
    camera.position.setZ(30)

    const ambientLight = new AmbientLight({ color: 0xa6b624 })
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enabled = false

    if (visible === 'home') {
      function addStar() {
        const geometry = new SphereGeometry(0.1, 15, 2)
        const material = new MeshStandardMaterial({
          color: color.current.star
        })
        const points = []
        const star = new Mesh(geometry, material)
        const [x, y, z] = Array(3)
          .fill()
          .map(() => MathUtils.randFloatSpread(60))

        points.push(new Vector3(x, y, z))
        points.push(new Vector3(0, 100, 0))

        const lineMaterial = new LineBasicMaterial({
          color: new Color(color.current.line)
        })
        const lineGeometry = new BufferGeometry().setFromPoints(points)
        const line = new Line(lineGeometry, lineMaterial)

        star.position.set(x, y, z)
        group.add(ambientLight, line, star)
        group.position.set(0, 0, 0)
        scene.add(group)
      }

      Array(130).fill().forEach(addStar)
      let ani
      function animate() {
        if (visible !== 'home') return
        ani = window.requestAnimationFrame(animate)
        group.rotation.y += 0.0006
        scene.scroll = false
        renderer.render(scene, camera)
      }
      animate()

      return () => window.cancelAnimationFrame(ani)
    }
  }, [width, visible, changeTheme])

  return (
    <>
      <canvas
        id="bg"
        className="absolute h-[100%] w-full overflow-hidden "
      ></canvas>
    </>
  )
}

export default Animation
