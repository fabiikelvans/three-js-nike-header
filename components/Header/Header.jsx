import React, { Suspense, useRef, useState } from 'react'
import Nav from "../Nav/Nav";
import {PaperAirplaneIcon} from "@heroicons/react/outline";
import { Canvas } from '@react-three/fiber'
import {OrbitControls, PerspectiveCamera, useGLTF} from '@react-three/drei'
import Card from "../Cards/Card";
import {Progress} from "flowbite-react";

function Model(props) {
    const { nodes, materials } = useGLTF('/models/nike-pegasus/scene.gltf')
    return (
        <group {...props} dispose={null} scale={3} rotation={[0,-2,0]} >
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh geometry={nodes.defaultMaterial.geometry} material={materials.NikeShoe} />
                </group>
            </group>
        </group>
    )
}

function Header(props) {
    return (
        <div className='relative'>
            <Nav/>

            <div className=' absolute top-[40%] md:top-20 left-[20%] text-center opacity-10'>
                <h1 className='-z-1 text-[30vw] md:text-[25vw] tracking-wide font-semibold'>NIKE</h1>
            </div>

            <div className='px-14 md:px-32 flex flex-col md:flex-row justify-between mt-16'>
                <div className=''>
                    <h1 className='text-7xl uppercase font-bold'>Just<br/> Do<br/> it</h1>
                    <p className='text-[16px] w-[80%] mt-4'>You will be amazed to find the best designer shoes</p>
                </div>

                <div className='absolute top-8 right-0 md:left-0 w-[80%] md:w-[100%] h-[80%] md:h-[100%] '>
                    <Canvas>
                        <Suspense fallback={null}>
                            <ambientLight/>
                            <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Model  />
                            <OrbitControls autoRotate enablePan={true} enableZoom={false} enableRotate={true}/>
                        </Suspense>
                    </Canvas>
                </div>

                <div className='mt-4 md:mt-0'>
                    <h4 className='text-[#FFD664] text-xl md:text-2xl uppercase font-bold'>Nike zoom air</h4>
                    <h1 className='text-3xl md:text-4xl font-bold my-2 md:my-4'>$260</h1>
                    <div className='flex cursor-pointer'>
                        <PaperAirplaneIcon className='h-6 w-6 rotate-45 text-red-400'/>
                        <span className='ml-2 text-[14px] md:text-[18px] font-semibold'>Buy Now</span>
                    </div>
                </div>
            </div>

            <div className='relative hidden md:flex flex-col md:flex-row justify-between space-x-12 space-y-4 md:space-y-0 items-center pl-32 mt-6'>
                <div className='space-y-2'>
                    <h2 className='text-[14px]'>01 / 05</h2>
                    <div className='w-24'>
                        <Progress progress={20} size={'sm'} color={'dark'}></Progress>
                    </div>
                </div>
                <Card image={'/shoes/01.png'} name='Nike Air Huaree' price={185} colors='3 Colors'/>
                <Card image={'/shoes/02.png'} name='Nike Air Force' price={235} colors='2 Colors'/>
                <Card image={'/shoes/03.png'} name='Nike Air Span' price={270} colors='3 Colors'/>
                <Card image={'/shoes/04.png'} name='Nike High LV8' price={165} colors='3 Colors'/>
            </div>
        </div>
    );
}

export default Header;