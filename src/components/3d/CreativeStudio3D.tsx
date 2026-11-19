"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function CreativeStudio3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 7.5);

    // Renderer with ACES Filmic Tone Mapping for cinematic studio look
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    mount.appendChild(renderer.domElement);

    // Main Studio Objects Group
    const studioGroup = new THREE.Group();
    scene.add(studioGroup);

    // Materials Palette: #FFD43B (Warm Yellow), #171717 (Deep Black), #FFF9E8 (Cream)
    const goldYellowMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#FFD43B"),
      metalness: 0.85,
      roughness: 0.18,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
    });

    const deepBlackMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#171717"),
      metalness: 0.9,
      roughness: 0.25,
      clearcoat: 0.6,
    });

    const softCreamMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#FFF9E8"),
      roughness: 0.4,
      metalness: 0.2,
    });

    const wireMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#FFD43B"),
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });

    // 1. Central Core: Sculptural Torus Knot (Creative Thinking)
    const coreGeo = new THREE.TorusKnotGeometry(1.1, 0.32, 128, 32, 2, 3);
    const coreMesh = new THREE.Mesh(coreGeo, goldYellowMat);
    studioGroup.add(coreMesh);

    // 2. Studio Lens Ring / Orbit 1 (Black & Gold)
    const ringGeo1 = new THREE.TorusGeometry(2.3, 0.05, 16, 100);
    const ringMesh1 = new THREE.Mesh(ringGeo1, deepBlackMat);
    ringMesh1.rotation.x = Math.PI / 3.2;
    ringMesh1.rotation.y = Math.PI / 8;
    studioGroup.add(ringMesh1);

    // 3. Floating Studio Camera Lens Ring 2 (Warm Yellow)
    const ringGeo2 = new THREE.TorusGeometry(1.9, 0.04, 16, 100);
    const ringMesh2 = new THREE.Mesh(ringGeo2, goldYellowMat);
    ringMesh2.rotation.x = -Math.PI / 4;
    ringMesh2.rotation.z = Math.PI / 5;
    studioGroup.add(ringMesh2);

    // 4. Floating Creative Blocks (Cubes & Cylinders representing Content & Production)
    const cubesGroup = new THREE.Group();
    studioGroup.add(cubesGroup);

    // Floating Studio Cube 1
    const cubeGeo1 = new THREE.BoxGeometry(0.55, 0.55, 0.55);
    const cube1 = new THREE.Mesh(cubeGeo1, deepBlackMat);
    cube1.position.set(-2.0, 1.4, 0.6);
    cube1.rotation.set(0.4, 0.6, 0.2);
    cubesGroup.add(cube1);

    // Floating Studio Cube 2 (Wireframe Gold)
    const cube2 = new THREE.Mesh(cubeGeo1, wireMat);
    cube2.position.set(2.2, -1.2, 0.8);
    cube2.rotation.set(-0.5, 0.3, -0.4);
    cubesGroup.add(cube2);

    // Floating Icosahedron (Ideas & Ideation)
    const icoGeo = new THREE.IcosahedronGeometry(0.45, 0);
    const ico = new THREE.Mesh(icoGeo, softCreamMat);
    ico.position.set(1.9, 1.6, -0.5);
    cubesGroup.add(ico);

    // Floating Cylinder (Film reel / Studio lens barrel)
    const cylGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.4, 32);
    const cyl = new THREE.Mesh(cylGeo, goldYellowMat);
    cyl.position.set(-1.8, -1.6, -0.2);
    cyl.rotation.set(0.8, 0, 0.5);
    cubesGroup.add(cyl);

    // 5. Ambient Stardust Particle Field (Creative Energy)
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 14;
      particlePos[i + 1] = (Math.random() - 0.5) * 10;
      particlePos[i + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: new THREE.Color("#FFD43B"),
      size: 0.055,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lighting Setup: Warm Key + Studio Rim + Soft Ambient
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff5d6, 3.2);
    keyLight.position.set(5, 6, 6);
    scene.add(keyLight);

    const yellowRim = new THREE.PointLight(0xffd43b, 4.0, 15);
    yellowRim.position.set(-5, -4, 2);
    scene.add(yellowRim);

    const warmFill = new THREE.PointLight(0xff8c42, 2.5, 12);
    warmFill.position.set(3, -4, -3);
    scene.add(warmFill);

    // Mouse Tracking with Damped Spring / Lerp
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;

    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;
    let dragRotX = 0;
    let dragRotY = 0;

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      const rect = mount.getBoundingClientRect();
      const x = clientX - rect.left - rect.width / 2;
      const y = clientY - rect.top - rect.height / 2;

      mouseX = x / (rect.width / 2);
      mouseY = y / (rect.height / 2);

      targetY = mouseX * 0.9;
      targetX = mouseY * 0.6;

      if (isDragging) {
        const deltaX = clientX - previousPointerX;
        const deltaY = clientY - previousPointerY;
        dragRotY += deltaX * 0.01;
        dragRotX += deltaY * 0.01;
        previousPointerX = clientX;
        previousPointerY = clientY;
      }
    };

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      previousPointerX = clientX;
      previousPointerY = clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    mount.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mouseup", onPointerUp);
    mount.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("touchend", onPointerUp);

    // Resize Handler
    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Idle continuous rotation & floating
      coreMesh.rotation.y += 0.006;
      coreMesh.rotation.x = Math.sin(t * 0.8) * 0.12;

      ringMesh1.rotation.z += 0.007;
      ringMesh2.rotation.x -= 0.005;

      cube1.rotation.x += 0.01;
      cube1.rotation.y += 0.012;
      cube2.rotation.x -= 0.008;
      cube2.rotation.z += 0.01;
      ico.rotation.y += 0.015;
      cyl.rotation.z += 0.008;

      particles.rotation.y = t * 0.025;

      // Mouse Lerp + Drag
      const combinedTargetX = targetX + dragRotX;
      const combinedTargetY = targetY + dragRotY;

      studioGroup.rotation.y += (combinedTargetY - studioGroup.rotation.y) * 0.05;
      studioGroup.rotation.x += (combinedTargetX - studioGroup.rotation.x) * 0.05;

      // Scroll-driven camera and position translation
      const scrollFactor = Math.min(scrollY * 0.0018, 2.5);
      studioGroup.position.y = -scrollFactor * 0.5;
      studioGroup.rotation.z = scrollFactor * 0.35;
      studioGroup.scale.setScalar(Math.max(0.65, 1 - scrollFactor * 0.15));

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      mount.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mouseup", onPointerUp);
      mount.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[400px] sm:h-[500px] lg:h-[560px] cursor-grab active:cursor-grabbing select-none"
      aria-label="Interactive 3D The Bored Monkey Creative Studio"
    />
  );
}
