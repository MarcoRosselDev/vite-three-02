import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Cubos(props) {
  const { nodes, materials } = useGLTF('./public/model/cubos.glb')

  const meshRef = useRef()
  //useFrame((state, delta) => (meshRef.current.position.x += delta))

  return (
    <group {...props} dispose={null} ref={meshRef}  visible={true} >
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.001']} position={[5.159, 0, 0]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.002']} position={[5.159, 0, -11.287]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.004']} position={[-8.656, 0, -11.287]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials['Material.007']} position={[-8.656, 0, 7.184]} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Material.006']} position={[-2.395, 0, 7.184]} />
      <mesh geometry={nodes.Cube006.geometry} material={materials['Material.003']} position={[-2.395, 0, -3.225]} />
      <mesh geometry={nodes.Cube007.geometry} material={materials['Material.005']} position={[-8.193, 0, -3.225]} />
    </group>
  )
}

useGLTF.preload('/cubos.glb')
