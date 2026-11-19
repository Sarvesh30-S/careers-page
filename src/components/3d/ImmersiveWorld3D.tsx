"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ImmersiveWorld3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xffffff, 0.015);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 16);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = false;
    container.appendChild(renderer.domElement);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xfff9e8, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffd43b, 3.5);
    keyLight.position.set(10, 15, 12);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 2.0);
    fillLight.position.set(-12, -8, 8);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xffd43b, 4.0, 50);
    rimLight.position.set(0, 5, -5);
    scene.add(rimLight);

    // --- Shared High-End Materials ---
    const goldChromeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffd43b,
      emissive: 0x553e00,
      metalness: 0.88,
      roughness: 0.18,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 1.0,
    });

    const obsidianMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x171717,
      metalness: 0.75,
      roughness: 0.25,
      clearcoat: 0.8,
    });

    const wireframeGoldMaterial = new THREE.MeshBasicMaterial({
      color: 0xffd43b,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });

    const wireframeDarkMaterial = new THREE.MeshBasicMaterial({
      color: 0x222222,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });

    // --- GROUP 1: HERO ASSEMBLY (Floating Studio Geometry & Fragments) ---
    const heroGroup = new THREE.Group();
    scene.add(heroGroup);

    // Floating exploded studio fragments (film frames, prisms, aperture blades)
    const fragmentCount = 36;
    const fragments: {
      mesh: THREE.Mesh;
      basePos: THREE.Vector3;
      explodeDir: THREE.Vector3;
      rotSpeed: THREE.Vector3;
    }[] = [];

    const fragGeometries = [
      new THREE.BoxGeometry(0.7, 0.7, 0.7),
      new THREE.OctahedronGeometry(0.6),
      new THREE.CylinderGeometry(0.4, 0.4, 0.8, 6),
      new THREE.TetrahedronGeometry(0.6),
    ];

    for (let i = 0; i < fragmentCount; i++) {
      const geom = fragGeometries[i % fragGeometries.length];
      const mat = i % 3 === 0 ? goldChromeMaterial : i % 3 === 1 ? obsidianMaterial : wireframeGoldMaterial;
      const mesh = new THREE.Mesh(geom, mat);

      const angle = (i / fragmentCount) * Math.PI * 2;
      const radius = 3.5 + Math.random() * 2.5;
      const x = Math.cos(angle) * radius;
      const y = (Math.random() - 0.5) * 4;
      const z = Math.sin(angle) * radius;

      mesh.position.set(x, y, z);
      heroGroup.add(mesh);

      fragments.push({
        mesh,
        basePos: new THREE.Vector3(x, y, z),
        explodeDir: new THREE.Vector3(x, y, z).normalize().multiplyScalar(4 + Math.random() * 6),
        rotSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
      });
    }

    // --- GROUP 2: ABOUT / PILLARS FORMATION (Builds out of depth) ---
    const aboutGroup = new THREE.Group();
    aboutGroup.position.set(0, -18, -10);
    scene.add(aboutGroup);

    const pillarCount = 6;
    const pillars: {
      mesh: THREE.Group;
      targetPos: THREE.Vector3;
      spawnPos: THREE.Vector3;
      rotSpeed: number;
    }[] = [];

    for (let i = 0; i < pillarCount; i++) {
      const pGroup = new THREE.Group();
      const pMesh = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 4.2, 0.4),
        i % 2 === 0 ? goldChromeMaterial : obsidianMaterial
      );
      pGroup.add(pMesh);

      const wireMesh = new THREE.Mesh(
        new THREE.BoxGeometry(1.3, 4.3, 0.5),
        wireframeGoldMaterial
      );
      pGroup.add(wireMesh);

      // Orbital placement in an amphitheater curve
      const angle = ((i - (pillarCount - 1) / 2) / pillarCount) * 1.8;
      const targetX = Math.sin(angle) * 8.5;
      const targetY = (Math.random() - 0.5) * 1.5;
      const targetZ = Math.cos(angle) * -4 + 2;

      // Spawn position far away in depth & scattered
      const spawnX = targetX * 3 + (Math.random() - 0.5) * 10;
      const spawnY = targetY + (Math.random() - 0.5) * 20;
      const spawnZ = targetZ - 30;

      pGroup.position.set(spawnX, spawnY, spawnZ);
      pGroup.rotation.y = -angle * 0.8;
      aboutGroup.add(pGroup);

      pillars.push({
        mesh: pGroup,
        targetPos: new THREE.Vector3(targetX, targetY, targetZ),
        spawnPos: new THREE.Vector3(spawnX, spawnY, spawnZ),
        rotSpeed: (Math.random() - 0.5) * 0.005,
      });
    }

    // --- GROUP 3: PHILOSOPHY HELIX RUNWAY (Builds as you scroll down) ---
    const philosophyGroup = new THREE.Group();
    philosophyGroup.position.set(0, -42, -5);
    scene.add(philosophyGroup);

    // 5 Stages nodes along a spatial spiral: THINK, CREATE, EXPERIMENT, EXECUTE, GROW
    const stages = [
      { name: "THINK", radius: 5, y: 6, angle: 0 },
      { name: "CREATE", radius: 5, y: 3, angle: Math.PI * 0.5 },
      { name: "EXPERIMENT", radius: 5, y: 0, angle: Math.PI },
      { name: "EXECUTE", radius: 5, y: -3, angle: Math.PI * 1.5 },
      { name: "GROW", radius: 5, y: -6, angle: Math.PI * 2.0 },
    ];

    const stageNodes: {
      group: THREE.Group;
      targetPos: THREE.Vector3;
      spawnPos: THREE.Vector3;
      ring: THREE.Mesh;
    }[] = [];

    // Helix ribbon backbone
    const helixCurve = new THREE.CatmullRomCurve3(
      stages.map((s) => new THREE.Vector3(
        Math.cos(s.angle) * s.radius,
        s.y,
        Math.sin(s.angle) * s.radius
      ))
    );
    const helixTubeGeom = new THREE.TubeGeometry(helixCurve, 64, 0.12, 12, false);
    const helixTube = new THREE.Mesh(helixTubeGeom, goldChromeMaterial);
    philosophyGroup.add(helixTube);

    stages.forEach((s) => {
      const sGroup = new THREE.Group();
      const nodeSphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.8, 32, 32),
        goldChromeMaterial
      );
      sGroup.add(nodeSphere);

      const nodeRing = new THREE.Mesh(
        new THREE.TorusGeometry(1.5, 0.06, 16, 64),
        obsidianMaterial
      );
      sGroup.add(nodeRing);

      const halo = new THREE.Mesh(
        new THREE.RingGeometry(1.6, 1.8, 32),
        wireframeGoldMaterial
      );
      halo.rotation.x = Math.PI / 2;
      sGroup.add(halo);

      const targetPos = new THREE.Vector3(
        Math.cos(s.angle) * s.radius,
        s.y,
        Math.sin(s.angle) * s.radius
      );
      const spawnPos = new THREE.Vector3(
        targetPos.x * 0.1,
        targetPos.y + 15,
        targetPos.z * 0.1 - 25
      );

      sGroup.position.copy(spawnPos);
      sGroup.scale.set(0.01, 0.01, 0.01);
      philosophyGroup.add(sGroup);

      stageNodes.push({
        group: sGroup,
        targetPos,
        spawnPos,
        ring: nodeRing,
      });
    });

    // --- GROUP 4: CAREERS / HOLOGRAPHIC WORKSTATION PORTAL ---
    const careersGroup = new THREE.Group();
    careersGroup.position.set(0, -70, -2);
    scene.add(careersGroup);

    // Dynamic 3D Horizon Grid
    const gridHelper = new THREE.GridHelper(60, 40, 0xffd43b, 0xdddddd);
    gridHelper.position.y = -6;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.45;
    careersGroup.add(gridHelper);

    // Floating Holo-Beacon Arcs
    const beaconRings: THREE.Mesh[] = [];
    for (let i = 0; i < 4; i++) {
      const bGeom = new THREE.TorusGeometry(3.5 + i * 1.5, 0.05, 16, 80);
      const bMesh = new THREE.Mesh(bGeom, i % 2 === 0 ? wireframeGoldMaterial : wireframeDarkMaterial);
      bMesh.rotation.x = Math.PI / 2;
      bMesh.position.y = -4 + i * 0.8;
      careersGroup.add(bMesh);
      beaconRings.push(bMesh);
    }

    // --- GROUP 5: CLOSING CTA WARP SINGULARITY ---
    const warpGroup = new THREE.Group();
    warpGroup.position.set(0, -96, 0);
    scene.add(warpGroup);

    const warpRings: THREE.Mesh[] = [];
    for (let i = 0; i < 18; i++) {
      const wGeom = new THREE.TorusGeometry(1.0 + i * 0.65, 0.08, 16, 60);
      const wMesh = new THREE.Mesh(
        wGeom,
        i % 2 === 0 ? goldChromeMaterial : obsidianMaterial
      );
      wMesh.position.z = -i * 2.2;
      warpGroup.add(wMesh);
      warpRings.push(wMesh);
    }

    // --- COSMIC GOLDEN PARTICLE DUST (Across the entire journey) ---
    const particleCount = 450;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3 + 0] = (Math.random() - 0.5) * 45;
      particlePositions[i * 3 + 1] = 10 - Math.random() * 120; // Stretches all the way down
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 35;
      particleScales[i] = Math.random() * 0.8 + 0.2;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffd43b,
      size: 0.16,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // --- INTERACTIVE MOUSE TRACKING (LERP) ---
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    // --- INTERACTIVE SCROLL PROGRESS TRACKING (LERP & REVERSE) ---
    let scrollProgress = 0;
    let targetScrollProgress = 0;

    const onScroll = () => {
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      targetScrollProgress = Math.min(
        1,
        Math.max(0, window.scrollY / maxScroll)
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Resize Handler
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // --- RENDER & ANIMATION LOOP ---
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      // Smooth scroll lerp (crucial for reversible scrub)
      scrollProgress += (targetScrollProgress - scrollProgress) * 0.07;

      // ---------------------------------------------------------
      // SCROLL STAGE 1: HERO (0.0 -> 0.20)
      // As user scrolls down, core disassembles and expands
      // ---------------------------------------------------------
      const heroScrub = THREE.MathUtils.clamp(scrollProgress / 0.2, 0, 1);

      // Explode studio fragments outward on scroll down, reassemble on scroll up!
      fragments.forEach((frag) => {
        frag.mesh.rotation.x += frag.rotSpeed.x;
        frag.mesh.rotation.y += frag.rotSpeed.y;

        // Linear interpolation between base assembly and exploded position
        frag.mesh.position.lerpVectors(
          frag.basePos,
          frag.basePos.clone().add(frag.explodeDir),
          heroScrub
        );
        frag.mesh.scale.setScalar(1 - heroScrub * 0.6);
      });

      // ---------------------------------------------------------
      // SCROLL STAGE 2: ABOUT PILLARS (0.18 -> 0.42)
      // Pillars fly in from depth and click into amphitheater formation
      // ---------------------------------------------------------
      const aboutScrub = THREE.MathUtils.clamp((scrollProgress - 0.15) / 0.22, 0, 1);

      pillars.forEach((p, idx) => {
        // Build in front of user as they scroll down
        p.mesh.position.lerpVectors(p.spawnPos, p.targetPos, aboutScrub);
        p.mesh.rotation.y += p.rotSpeed + mouseX * 0.01;
        p.mesh.rotation.x = mouseY * 0.15;

        // Slight float
        p.mesh.position.y = p.targetPos.y + Math.sin(elapsedTime * 1.5 + idx) * 0.2;
      });

      // ---------------------------------------------------------
      // SCROLL STAGE 3: PHILOSOPHY HELIX (0.38 -> 0.65)
      // Stages fly in along the 3D helix and illuminate
      // ---------------------------------------------------------
      const philosophyScrub = THREE.MathUtils.clamp((scrollProgress - 0.35) / 0.26, 0, 1);

      helixTube.rotation.y = elapsedTime * 0.2 + philosophyScrub * Math.PI * 2;
      helixTube.scale.setScalar(0.2 + philosophyScrub * 0.8);

      stageNodes.forEach((node, idx) => {
        // Stagger each node's arrival based on sub-progress
        const nodeThreshold = idx / (stageNodes.length - 1);
        const nodeArrival = THREE.MathUtils.clamp(
          (philosophyScrub - nodeThreshold * 0.5) / 0.5,
          0,
          1
        );

        node.group.position.lerpVectors(node.spawnPos, node.targetPos, nodeArrival);
        node.group.scale.setScalar(Math.max(0.01, nodeArrival));

        node.ring.rotation.x = elapsedTime * 2 + idx;
        node.ring.rotation.y = elapsedTime * 1.5;
      });

      // ---------------------------------------------------------
      // SCROLL STAGE 4: CAREERS HORIZON GRID (0.60 -> 0.85)
      // Futuristic grid perspective tilts and beacons pulse
      // ---------------------------------------------------------
      const careersScrub = THREE.MathUtils.clamp((scrollProgress - 0.58) / 0.24, 0, 1);

      gridHelper.rotation.y = mouseX * 0.2;
      gridHelper.position.z = -careersScrub * 10;

      beaconRings.forEach((b, idx) => {
        b.rotation.z = elapsedTime * (0.4 + idx * 0.1) + mouseX * 0.5;
        b.scale.setScalar(1 + Math.sin(elapsedTime * 3 + idx) * 0.08);
      });

      // ---------------------------------------------------------
      // SCROLL STAGE 5: CLOSING CTA WARP SINGULARITY (0.80 -> 1.0)
      // Rings spin and accelerate into an endless hyper-portal
      // ---------------------------------------------------------
      const warpScrub = THREE.MathUtils.clamp((scrollProgress - 0.78) / 0.22, 0, 1);

      warpRings.forEach((w, idx) => {
        w.rotation.z = elapsedTime * (0.8 + idx * 0.15) * (warpScrub * 2 + 1);
        w.scale.setScalar(1 + warpScrub * 0.8);
      });

      // ---------------------------------------------------------
      // MASTER CAMERA TRAJECTORY (Spline through 3D space)
      // Moves seamlessly from Y: 0 -> -96 with mouse offset
      // ---------------------------------------------------------
      const targetCameraY = -scrollProgress * 96;
      const targetCameraZ = 16 - Math.sin(scrollProgress * Math.PI) * 4;

      camera.position.y += (targetCameraY - camera.position.y) * 0.08;
      camera.position.z += (targetCameraZ - camera.position.z) * 0.08;
      camera.position.x += (mouseX * 2.5 - camera.position.x) * 0.05;

      // Slight dynamic pitch
      camera.rotation.x = -mouseY * 0.08;
      camera.rotation.y = -mouseX * 0.08;

      // Subtle particle float
      particles.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
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
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    />
  );
}
