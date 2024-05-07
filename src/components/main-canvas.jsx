import { Canvas, useFrame } from "@react-three/fiber"
//import { Box } from "./Cubo"
import { Cubos } from "./Cubos"
import { useRef } from "react"

export function Main_canvas(){

  const canv = useRef()
  useFrame((state, delta) => (canv.current.camera.position = [4, 3, 5]))

  return (
    <Canvas ref={canv} camera={{position:[3, 2, 5], fov:75, near:0.1, far:1000}}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

      <Cubos />
    </Canvas>
  )
}