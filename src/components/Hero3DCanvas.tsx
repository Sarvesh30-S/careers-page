"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 3D Objects Group
    const group = new THREE.Group();
    scene.add(group);

    // 1. Central Golden Core (Stylized Torus Knot)
    const coreGeo = new THREE.TorusKnotGeometry(1.2, 0.35, 128, 32, 2, 3);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#FDC727"),
      emissive: new THREE.Color("#FF8C42"),
      emissiveIntensity: 0.15,
      metalness: 0.85,
      roughness: 0.2,
      clearcoat: 0.8,
      clearcoatRoughness: 0.15,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // 2. Floating Outer Orbital Ring
    const ringGeo = new THREE.TorusGeometry(2.1, 0.04, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#FF6B35"),
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.8,
    });
    const ringMesh1 = new THREE.Mesh(ringGeo, ringMat);
    ringMesh1.rotation.x = Math.PI / 3;
    group.add(ringMesh1);

    const ringMesh2 = new THREE.Mesh(ringGeo, ringMat.clone());
    ringMesh2.rotation.y = Math.PI / 2.5;
    ringMesh2.scale.set(1.15, 1.15, 1.15);
    group.add(ringMesh2);

    // 3. Floating Particles Field
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12;
      positions[i + 1] = (Math.random() - 0.5) * 8;
      positions[i + 2] = (Math.random() - 0.5) * 6;
    }
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: new THREE.Color("#FFB82E"),
      size: 0.06,
      transparent: true,
      opacity: 0.7,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff3d1, 2.5);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0xff6b35, 3.5, 20);
    rimLight.position.set(-5, -4, -2);
    scene.add(rimLight);

    const goldPoint = new THREE.PointLight(0xfdc727, 2, 10);
    goldPoint.position.set(0, 3, 2);
    scene.add(goldPoint);

    // Cursor Tracking and Scroll Logic
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let scrollY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX = x / (rect.width / 2);
      mouseY = y / (rect.height / 2);

      targetRotY = mouseX * 0.9;
      targetRotX = mouseY * 0.6;
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Window Resize
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Idle floating animation
      coreMesh.rotation.y += 0.005;
      coreMesh.rotation.x = Math.sin(elapsedTime * 0.7) * 0.15;
      ringMesh1.rotation.z += 0.008;
      ringMesh2.rotation.x -= 0.006;
      particles.rotation.y = elapsedTime * 0.02;

      // Cursor smoothing (lerp)
      group.rotation.y += (targetRotY - group.rotation.y) * 0.06;
      group.rotation.x += (targetRotX - group.rotation.x) * 0.06;

      // Scroll response (subtle downward/rotation parallax)
      const scrollFactor = Math.min(scrollY * 0.0015, 2);
      group.position.y = -scrollFactor * 0.6;
      group.rotation.z = scrollFactor * 0.4;
      group.scale.setScalar(Math.max(0.7, 1 - scrollFactor * 0.2));

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[380px] sm:h-[460px] cursor-grab active:cursor-grabbing select-none"
      aria-label="Interactive 3D TheBoredMonkey Visual"
    />
  );
}
