/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/AllDango.glb");
  const [hovered, toggleHovered] = useState(false);

  ////CHANGE POINTER WHEN HOVERING OVER CERTAIN OBJECTS
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  useEffect(() => {
    if (!materials) return;

    materials.testTexture.toneMapped = true;
    materials.testTexture.roughness = 0.8;
    materials.testTexture.metalness = 0.5;
    materials.testTexture.transparent = true;
    materials.testTexture.side = DoubleSide;

    //FLOOR
    materials["grass specular2"].toneMapped = true;
    materials["grass specular2"].metalness = 0.5;
    materials["grass specular2"].roughness = 1;

    //TREES
    materials["SeekPng.com_japanese-maple-png_955558.015"].roughness = 1;
    materials["SeekPng.com_japanese-maple-png_955558.015"].metalness = 0.3;
    materials["kindpng_509015.001"].roughness = 1;
    materials["kindpng_509015.001"].metalness = 0.3;
    materials["PngItem_1230215.002"].roughness = 1;
    materials["PngItem_1230215.002"].metalness = 0.3;

    materials["PngItem_1230215.002"].toneMapped = false;
    materials["kindpng_509015.001"].toneMapped = false;
    materials["SeekPng.com_japanese-maple-png_955558.015"].toneMapped = false;

    materials["PngItem_1230215.002"].side = DoubleSide;
    materials["kindpng_509015.001"].side = DoubleSide;
    materials["SeekPng.com_japanese-maple-png_955558.015"].side = DoubleSide;

    materials.PlantMaterial.roughness = 1;
    materials.PlantMaterial.toneMapped = true;
    materials.PlantMaterial.metalness = 1;

    //CASTLE
    materials["japan_map.002"].metalness = 0;
    materials["japan_map.002"].roughness = 1;
    materials["japan_map.002"].toneMapped = false;

    //LAMPY
    materials.lampTexture.transparent = true;
    materials.lampTexture.opacity = 1;
    materials.lampTexture.roughness = 1;
    materials.lampTexture.toneMapped = true;

    //PATH
    materials.path.toneMapped = false;
    materials.path.roughness = 0.9;
    materials.path.metalness = 0.8;

    //river

    materials.riverMaterial.metalness = 0.3;
    materials.riverMaterial.opacity = 0.1;
    materials.riverMaterial.roughness = 0.3;
    materials.riverMaterial.transparent = true;

    //TORI
    materials.toriMaterial.toneMapped = true;
  }, [materials]);

  return (
    <group {...props}>
      <group position={[-10.62, -0.24, 16.73]}>
        <group scale={1.78}>
          <mesh
            receiveShadow
            geometry={nodes.BigTree.geometry}
            material={materials.PlantMaterial}
            position={[0.2, -0.02, 0.31]}
            rotation={[Math.PI, -1.3, Math.PI]}
            scale={0.8}
          />
        </group>
      </group>
      {props.objectsToDecluter && (
        <>
          <mesh
            geometry={nodes.landToDelete4.geometry}
            material={materials["grass specular2"]}
            position={[-64.84, 6.26, -65.56]}
            rotation={[0, -0.57, 0]}
            scale={[2.54, 2.55, 2.04]}
          />
          <mesh
            geometry={nodes.landToDelete3.geometry}
            material={materials["grass specular2"]}
            position={[116.23, -29.23, -38.83]}
            rotation={[0, -0.21, 0]}
            scale={33.44}
          />
          <mesh
            geometry={nodes.landToDelete2.geometry}
            material={materials["grass specular2.004"]}
            position={[123.99, -45.54, 66.21]}
            scale={33.44}
          />
          <mesh
            geometry={nodes.landToDelete5.geometry}
            material={materials["grass specular2"]}
            position={[-61.95, -31.99, -35.35]}
            rotation={[0, 0.61, 0]}
          />
          <mesh
            geometry={nodes.landToDelete1.geometry}
            material={materials["grass specular2"]}
            position={[76.99, -21.15, 102.62]}
            rotation={[-0.03, 1.23, -0.3]}
          />
          <mesh
            geometry={nodes.landToDelete7.geometry}
            material={materials.toriMaterial}
            position={[140.79, 2.25, 4.97]}
          />
          <group position={[-10.38, 5.1, -23.25]}>
            <mesh
              geometry={
                nodes["SeekPngcom_japanese-maple-png_955558002"].geometry
              }
              material={materials["SeekPng.com_japanese-maple-png_955558.015"]}
            />
            <mesh
              geometry={
                nodes["SeekPngcom_japanese-maple-png_955558002_1"].geometry
              }
              material={materials["PngItem_1230215.002"]}
            />
            <mesh
              geometry={
                nodes["SeekPngcom_japanese-maple-png_955558002_2"].geometry
              }
              material={materials["kindpng_509015.001"]}
            />
          </group>
        </>
      )}
      <group
        position={[-1.94, 0.22, 7.9]}
        rotation={[Math.PI, -0.46, Math.PI]}
        scale={0.51}
      >
        <group position={[11.71, 0.51, -10.79]}>
          <mesh
            geometry={nodes.Object_0067.geometry}
            material={materials.orangeLis}
          />
          <mesh
            geometry={nodes.Object_0067_1.geometry}
            material={materials.whiteLis}
          />
          <mesh
            geometry={nodes.Object_0067_2.geometry}
            material={materials.blackLis}
          />
          <mesh
            geometry={nodes.Object_0067_3.geometry}
            material={materials.pinkLis}
          />
          <mesh
            geometry={nodes.Object_0067_4.geometry}
            material={materials.glowGreen}
          />
        </group>
      </group>
      <group
        position={[-6.2, 0.97, 8.55]}
        rotation={[Math.PI, -0.46, Math.PI]}
        scale={0.14}
      >
        <group position={[11.71, 0.51, -10.79]}>
          <mesh
            geometry={nodes.Object_0070.geometry}
            material={materials.orangeLis}
          />
          <mesh
            geometry={nodes.Object_0070_1.geometry}
            material={materials.whiteLis}
          />
          <mesh
            geometry={nodes.Object_0070_2.geometry}
            material={materials.blackLis}
          />
          <mesh
            geometry={nodes.Object_0070_3.geometry}
            material={materials.pinkLis}
          />
          <mesh
            geometry={nodes.Object_0070_4.geometry}
            material={materials["glow pink.002"]}
          />
        </group>
      </group>
      <group
        position={[-10.57, 0.66, 7.58]}
        rotation={[0, 1.21, 0]}
        scale={0.43}
      >
        <group position={[11.71, 0.51, -10.79]}>
          <mesh
            geometry={nodes.Object_0071.geometry}
            material={materials.whiteLis}
          />
          <mesh
            geometry={nodes.Object_0071_1.geometry}
            material={materials.blackLis}
          />
          <mesh
            geometry={nodes.Object_0071_2.geometry}
            material={materials.pinkLis}
          />
          <mesh
            geometry={nodes.Object_0071_3.geometry}
            material={materials["ghost eyes.001"]}
          />
        </group>
      </group>
      <group
        position={[-12.33, -0.25, 14.7]}
        rotation={[-Math.PI, 0.81, -Math.PI]}
        scale={0.75}
      >
        <group position={[11.71, 0.51, -10.79]}>
          <mesh
            geometry={nodes.Object_0072.geometry}
            material={materials.blackLis}
          />
          <mesh
            geometry={nodes.Object_0072_1.geometry}
            material={materials.pinkLis}
          />
          <mesh
            geometry={nodes.Object_0072_2.geometry}
            material={materials.glowGreen}
          />
        </group>
      </group>
      <group
        position={[-12.2, -0.25, 2.48]}
        rotation={[-Math.PI, 1.41, -Math.PI]}
        scale={0.75}
      >
        <group position={[11.71, 0.51, -10.79]}>
          <mesh
            geometry={nodes.Object_0073.geometry}
            material={materials.whiteLis}
          />
          <mesh
            geometry={nodes.Object_0073_1.geometry}
            material={materials.blackLis}
          />
          <mesh
            geometry={nodes.Object_0073_2.geometry}
            material={materials.pinkLis}
          />
          <mesh
            geometry={nodes.Object_0073_3.geometry}
            material={materials["Material.313"]}
          />
        </group>
      </group>
      <group position={[-3.82, 0.99, 1.2]} rotation={[0, 1.41, 0]} scale={0.39}>
        <group position={[11.71, 0.51, -10.79]}>
          <mesh
            geometry={nodes.Object_0069.geometry}
            material={materials.orangeLis}
          />
          <mesh
            geometry={nodes.Object_0069_1.geometry}
            material={materials.whiteLis}
          />
          <mesh
            geometry={nodes.Object_0069_2.geometry}
            material={materials.blackLis}
          />
          <mesh
            geometry={nodes.Object_0069_3.geometry}
            material={materials.pinkLis}
          />
          <mesh
            geometry={nodes.Object_0069_4.geometry}
            material={materials["glow red.050"]}
          />
        </group>
      </group>
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials.path}
        position={[-0.12, -0.23, 4.95]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials.path}
        position={[-0.12, -0.23, 4.95]}
      />
      <mesh
        geometry={nodes.A_TORI002.geometry}
        castShadow
        material={materials.toriMaterial}
        position={[9.64, 2.25, 4.97]}
      />
      <mesh
        geometry={nodes.A_TORI005.geometry}
        castShadow
        material={materials.toriMaterial}
        position={[16.34, 2.25, 4.97]}
      />
      <group position={[-24.3, -0.34, 4.88]}>
        <mesh
          geometry={nodes.Cube004.geometry}
          material={materials["japan_map.002"]}
        />
        <mesh
          geometry={nodes.Cube004_1.geometry}
          material={materials["rubble.001"]}
        />
        <mesh geometry={nodes.Cube004_2.geometry} material={materials.path} />
      </group>
      <group position={[18.09, 0, 8.51]}>
        <mesh
          geometry={nodes.Cube007.geometry}
          castShadow
          receiveShadow
          material={materials["1BLACK"]}
        />
        <mesh
          geometry={nodes.Cube007_1.geometry}
          castShadow
          receiveShadow
          material={materials["2RED"]}
        />
      </group>
      <mesh
        geometry={nodes.grassMaterial.geometry}
        receiveShadow
        material={materials["grass specular2"]}
        position={[-61.95, -31.99, -35.35]}
        rotation={[0, 0.61, 0]}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        castShadow
        material={materials.testTexture}
        position={[-0.12, -0.5, 4.95]}
      />
      <mesh
        geometry={nodes.water.geometry}
        material={materials.riverMaterial}
        position={[-0.12, 9.59, -10.4]}
      />
      <group position={[-5.94, -0.37, 9.78]}>
        <mesh
          geometry={nodes.Cube079.geometry}
          material={materials["Light.001"]}
        />
        <mesh
          geometry={nodes.Cube079_1.geometry}
          receiveShadow
          material={materials["Lantern.001"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube012.geometry}
        receiveShadow
        material={materials.path}
        position={[-8.13, -0.23, 5.98]}
      />
      <mesh
        geometry={nodes.trees3_used.geometry}
        castShadow
        receiveShadow
        material={materials["SeekPng.com_japanese-maple-png_955558.015"]}
        position={[-10.38, 5.1, -23.25]}
      />
      <group position={[-21.42, -0.49, 7.82]}>
        <mesh
          geometry={nodes.Cube015.geometry}
          receiveShadow
          castShadow
          material={materials["japan_map.013"]}
        />
        <mesh
          geometry={nodes.Cube015_1.geometry}
          receiveShadow
          castShadow
          material={materials["japan_map.002"]}
        />
      </group>
      <mesh
        geometry={nodes.trees1_used.geometry}
        receiveShadow
        castShadow
        material={materials["kindpng_509015.001"]}
        position={[-4.38, -0.47, 11.24]}
      />

      <mesh
        geometry={nodes.trees2_used.geometry}
        receiveShadow
        castShadow
        material={materials["PngItem_1230215.002"]}
        position={[-14.23, -0.75, 9.85]}
        rotation={[1.56, 0, -0.66]}
      />
      <group
        position={[-1.45, 0.86, 7.41]}
        rotation={[0, 0, 0.04]}
        scale={0.93}
      >
        <mesh
          geometry={nodes.Sphere020.geometry}
          material={materials.testDangoTexture}
        />
        <mesh
          geometry={nodes.Sphere020_1.geometry}
          material={materials.testTexture}
        />
      </group>
      <mesh
        geometry={nodes.Chair.geometry}
        material={materials.chairMaterial}
        position={[-5.63, -0.57, 11.46]}
        rotation={[0.01, 0, 0]}
      />
      <mesh
        geometry={nodes.Chair2.geometry}
        material={materials.chairMaterial}
        position={[-5.63, -0.62, 14.88]}
        rotation={[0.01, 0, 0]}
      />
      <mesh
        geometry={nodes.wachlarz5.geometry}
        castShadow
        material={materials.testTexture}
        position={[-1.98, 1.11, 1.49]}
        rotation={[2.94, 0, 0]}
      />
      <mesh
        geometry={nodes.wachlarz4.geometry}
        castShadow
        material={materials.testTexture}
        position={[-3.48, 1.11, 1.49]}
        rotation={[2.94, 0, 0]}
      />
      <mesh
        geometry={nodes.wachlarz1.geometry}
        castShadow
        material={materials.testTexture}
        position={[-3.82, 1.11, 2.2]}
        rotation={[2.94, 0, 0]}
      />
      <mesh
        geometry={nodes.wachlarz2.geometry}
        castShadow
        material={materials.testTexture}
        position={[-2.74, 1.11, 2.2]}
        rotation={[2.94, 0, 0]}
      />
      <mesh
        geometry={nodes.wachlarz3.geometry}
        castShadow
        material={materials.testTexture}
        position={[-1.67, 1.11, 2.2]}
        rotation={[2.94, 0, 0]}
      />
      <group position={[-10.81, 1.02, 1.59]}>
        <mesh
          geometry={nodes.Cube083.geometry}
          castShadow
          material={materials.testTexture}
        />
        <mesh
          geometry={nodes.Cube083_1.geometry}
          castShadow
          material={materials["maskRed.002"]}
        />
      </group>
      <group position={[-9.73, 0.79, 2.2]}>
        <mesh
          geometry={nodes.Cube084.geometry}
          castShadow
          material={materials["maskRed.002"]}
        />
        <mesh
          geometry={nodes.Cube084_1.geometry}
          castShadow
          material={materials.testTexture}
        />
      </group>
      <mesh
        geometry={nodes.mask2002.geometry}
        castShadow
        material={materials.testTexture}
        position={[-10.2, 1.06, 1.63]}
      />
      <group position={[-11.33, 0.8, 2.16]}>
        <mesh
          geometry={nodes.Cube086.geometry}
          castShadow
          material={materials.testTexture}
        />
        <mesh
          geometry={nodes.Cube086_1.geometry}
          castShadow
          material={materials["maskRed.002"]}
        />
      </group>
      <mesh
        geometry={nodes.origamiDuck.geometry}
        receiveShadow
        material={materials.testTexture}
        position={[-5.01, 1.04, 7.98]}
        rotation={[0, -1.03, 0]}
      />
      <mesh
        geometry={nodes.origamiBird.geometry}
        receiveShadow
        material={materials.testTexture}
        position={[-5.52, 1.02, 8.22]}
        rotation={[0, -1.32, 0]}
      />
      <mesh
        geometry={nodes.origamiCapybara.geometry}
        receiveShadow
        material={materials.testTexture}
        position={[-5.97, 1.04, 8.42]}
        rotation={[0, -0.81, 0]}
      />
      <mesh
        geometry={nodes.origamiDinosaur.geometry}
        receiveShadow
        material={materials.testTexture}
        position={[-5.66, 0.98, 8.38]}
        rotation={[0, -1.09, 0]}
      />
      <mesh
        geometry={nodes.origamiFox.geometry}
        receiveShadow
        material={materials.testTexture}
        position={[-5.3, 1.1, 7.9]}
        rotation={[0, -1.47, 0]}
      />
      <mesh
        geometry={nodes.origamiPanda.geometry}
        receiveShadow
        material={materials.testTexture}
        position={[-5.83, 0.97, 8.71]}
        rotation={[Math.PI, -1.4, Math.PI]}
      />
      <mesh
        geometry={nodes.languageCardJapanese.geometry}
        castShadow
        material={materials.testTexture}
        position={[-10.96, 0.74, 14.96]}
      />
      <mesh
        geometry={nodes.languageCardEnglish.geometry}
        castShadow
        material={materials.testTexture}
        position={[-10.96, 0.74, 14.64]}
      />
      <mesh
        geometry={nodes.languageCardPolish.geometry}
        castShadow
        material={materials.testTexture}
        position={[-10.96, 0.74, 14.33]}
      />
      <mesh
        geometry={nodes.languageCardGerman.geometry}
        castShadow
        material={materials.testTexture}
        position={[-10.53, 0.74, 14.98]}
      />
      <mesh
        geometry={nodes.languageCardSpanish.geometry}
        castShadow
        material={materials.testTexture}
        position={[-10.53, 0.74, 14.65]}
      />
      <mesh
        geometry={nodes.languageCardChinese.geometry}
        castShadow
        material={materials.testTexture}
        position={[-10.53, 0.74, 14.32]}
      />
      <mesh
        geometry={nodes["4_wishes006"].geometry}
        material={materials.testTexture}
        position={[-7.94, 1.24, 2.06]}
      />

      <group position={[-5.94, -0.37, 9.78]}>
        <mesh
          geometry={nodes.Cube024.geometry}
          material={materials["Light.001"]}
        />
        <mesh
          geometry={nodes.Cube024_1.geometry}
          receiveShadow
          material={materials["Lantern.001"]}
        />
      </group>

      <group position={[-7.87, 0.69, 16.71]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Cube012_1.geometry}
          material={materials["1BLACK"]}
        />
        <mesh
          geometry={nodes.Cube012_2.geometry}
          material={materials["glow grey"]}
        />
        <mesh
          geometry={nodes.Cube012_3.geometry}
          material={materials["glow blue"]}
        />
        <mesh
          geometry={nodes.Cube012_4.geometry}
          material={materials["glow dark blue"]}
        />
        <mesh geometry={nodes.Cube012_5.geometry} material={materials.glass} />
        <mesh
          geometry={nodes.Cube012_6.geometry}
          material={materials.testDangoTexture}
        />
      </group>
      <mesh
        geometry={nodes.BudkaProjects.geometry}
        onClick={(e) => {
          e.stopPropagation();
          props.setnewCameraArgs([-6.5, 1.6, 5.5, 0, 0, 0, 50, "BLOG"]);
        }}
        onPointerEnter={() => {
          toggleHovered(true);
        }}
        onPointerLeave={() => {
          toggleHovered(false);
        }}
        receiveShadow
        castShadow
        material={materials.testTexture}
        position={[-6.62, -0.15, 1.99]}
        scale={1.08}
      />
      <mesh
        geometry={nodes.BudkaBricscad.geometry}
        onClick={(e) => {
          e.stopPropagation();
          props.setnewCameraArgs([
            -9.7,
            1.95,
            9.5,
            -1,
            Math.PI / 5,
            0.9,
            60,
            "BRICSCAD",
          ]);
        }}
        onPointerEnter={() => {
          toggleHovered(true);
        }}
        onPointerLeave={() => {
          toggleHovered(false);
        }}
        receiveShadow
        castShadow
        material={materials.testTexture}
        position={[-10.95, 0.15, 8.87]}
        rotation={[0, -1.55, 0]}
        scale={1.12}
      />
      <mesh
        geometry={nodes.Budka3D.geometry}
        onClick={(e) => {
          e.stopPropagation();
          props.setnewCameraArgs([-6.3, 1.4, 7.4, 0.2, 3.7, 0.1, 50, "MODELS"]);
        }}
        onPointerEnter={() => {
          toggleHovered(true);
        }}
        onPointerLeave={() => {
          toggleHovered(false);
        }}
        receiveShadow
        castShadow
        material={materials.testTexture}
        position={[-5.59, 0.21, 8.4]}
        rotation={[0, 0.65, 0]}
      />
      <mesh
        geometry={nodes.BudkaVideos.geometry}
        onClick={(e) => {
          e.stopPropagation();
          props.setnewCameraArgs([-2.6, 1.78, 3.15, -0.3, 0, 0, 90, "VIDEOS"]);
        }}
        onPointerEnter={() => {
          toggleHovered(true);
        }}
        onPointerLeave={() => {
          toggleHovered(false);
        }}
        receiveShadow
        castShadow
        material={materials.testTexture}
        position={[-2.74, 0.4, 1.8]}
      />
      <mesh
        geometry={nodes.BudkaUnity.geometry}
        onClick={(e) => {
          e.stopPropagation();
          props.setnewCameraArgs([-10.4, 1.25, 4.8, 0, 0, 0, 50, "UNITY"]);
        }}
        onPointerEnter={() => {
          toggleHovered(true);
        }}
        onPointerLeave={() => {
          toggleHovered(false);
        }}
        receiveShadow
        castShadow
        material={materials.testTexture}
        position={[-10.53, 0.89, 1.96]}
        scale={1.33}
      />
      <mesh
        geometry={nodes.BudkaWebdev.geometry}
        onClick={(e) => {
          e.stopPropagation();
          props.setnewCameraArgs([
            -2.3,
            1.48,
            5.95,
            0.3,
            Math.PI,
            0,
            80,
            "WEBDEV",
          ]);
        }}
        onPointerEnter={() => {
          toggleHovered(true);
        }}
        onPointerLeave={() => {
          toggleHovered(false);
        }}
        receiveShadow
        castShadow
        material={materials.testTexture}
        position={[-2.23, 0.28, 7.74]}
        scale={1.02}
      />
      <mesh
        geometry={nodes.BudkaLanguages.geometry}
        onClick={(e) => {
          e.stopPropagation();
          props.setnewCameraArgs([
            -9.7,
            1.95,
            14.9,
            -1,
            Math.PI / 5,
            0.9,
            60,
            "SKILLS",
          ]);
        }}
        onPointerEnter={() => {
          toggleHovered(true);
        }}
        onPointerLeave={() => {
          toggleHovered(false);
        }}
        receiveShadow
        castShadow
        material={materials.testTexture}
        position={[-11.21, -0.53, 13.68]}
        rotation={[-Math.PI, 1.55, -Math.PI]}
      />
      {/* <mesh dispose={null}  geometry={nodes.BudkaLanguages.geometry} ref={budkaRef} onClick={(e) => {console.log(budkaRef.current); budkaRef.current.geometry.dispose(true)}} receiveShadow  castShadow  material={materials.testTexture} position={[-11.21, -0.53, 13.68]} rotation={[-Math.PI, 1.55, -Math.PI]} /> */}
      <mesh
        geometry={nodes.Sphere001.geometry}
        castShadow
        material={materials.testTexture}
        position={[-2.1, 1.76, 3.15]}
      />
      <mesh
        geometry={nodes.Sphere002.geometry}
        castShadow
        material={materials.testTexture}
        position={[-9.9, 1.76, 3.15]}
      />
      <mesh
        geometry={nodes.Sphere006.geometry}
        castShadow
        material={materials.testTexture}
        position={[-3.74, 1.76, 6.67]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />

      <mesh
        geometry={nodes.Sphere004.geometry}
        receiveShadow
        castShadow
        material={materials.testTexture}
        position={[-9.9, 1.81, 13.07]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Sphere016.geometry}
        receiveShadow
        castShadow
        material={materials.testTexture}
        position={[-12.93, 1.76, 6.78]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.Sphere017.geometry}
        receiveShadow
        castShadow
        material={materials.testTexture}
        position={[-6, 1.83, 3.15]}
      />
      <mesh
        geometry={nodes.BricscadPaper1.geometry}
        material={materials.testTexture}
        position={[-11.09, 0.35, 9.24]}
        rotation={[0, -1.13, 0]}
        scale={1.12}
      />
      <mesh
        geometry={nodes.BricscadPaper2.geometry}
        material={materials.testTexture}
        position={[-10.52, 0.36, 8.71]}
        rotation={[-Math.PI, 1.3, -Math.PI]}
        scale={1.12}
      />
      <mesh
        geometry={nodes.BricscadPaper3.geometry}
        material={materials.testTexture}
        position={[-10.43, 0.37, 8.3]}
        rotation={[-Math.PI, 1.44, -Math.PI]}
        scale={1.12}
      />
      <mesh
        geometry={nodes.BricscadPaper4.geometry}
        material={materials.testTexture}
        position={[-11.11, 1, 7.77]}
        rotation={[0, -1.55, 0]}
        scale={1.12}
      />
      <mesh
        geometry={nodes.Lampy.geometry}
        castShadow
        material={materials.lampTexture}
        position={[-9.9, 1.81, 8.41]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Sphere003.geometry}
        castShadow
        receiveShadow
        material={materials.testTexture}
        position={[-9.99, 1.76, 8.41]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </group>
  );
}

// useGLTF.preload('/allObjectsFinal.glb')
useGLTF.preload("/AllDango.glb");
