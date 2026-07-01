/**
 * Interactive 3D SF6 equipment model (Three.js).
 * Used in "Why Choose Mechfield" section on the homepage.
 * Target element: [data-sf6-model]
 */
import * as THREE from "three";

/** Builds and animates the 3D model inside the viewer container */
export function initSf6Model() {
  const viewer = document.querySelector("[data-sf6-model]");
  if (!viewer || viewer.dataset.sf6ModelReady === "true") return;

  viewer.dataset.sf6ModelReady = "true";

  // ── Scene, camera, renderer ──
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(6.5, 3.55, 7.25);
  camera.lookAt(-0.18, 0.42, 0);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  viewer.appendChild(renderer.domElement);

  const model = new THREE.Group();
  model.rotation.y = -0.42;
  model.position.x = -0.18;
  model.scale.setScalar(0.84);
  scene.add(model);

  // ── Materials (orange equipment theme) ──
  const orange = new THREE.MeshPhysicalMaterial({
    color: 0xff5b00,
    metalness: 0.42,
    roughness: 0.3,
    clearcoat: 0.62,
    clearcoatRoughness: 0.24
  });
  const orangeDark = new THREE.MeshPhysicalMaterial({
    color: 0xca3700,
    metalness: 0.38,
    roughness: 0.36,
    clearcoat: 0.45
  });
  const black = new THREE.MeshStandardMaterial({ color: 0x111317, metalness: 0.5, roughness: 0.28 });
  const rubber = new THREE.MeshStandardMaterial({ color: 0x101114, roughness: 0.66 });
  const steel = new THREE.MeshStandardMaterial({ color: 0xc9c5bd, metalness: 0.88, roughness: 0.2 });
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0x62717a,
    metalness: 0.1,
    roughness: 0.08,
    transmission: 0.08,
    clearcoat: 1
  });

  // ── Geometry helpers ──
  const addBox = (parent, size, position, material, options = {}) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
    mesh.position.set(...position);
    mesh.castShadow = options.castShadow ?? true;
    mesh.receiveShadow = options.receiveShadow ?? true;
    if (options.rotation) mesh.rotation.set(...options.rotation);
    parent.add(mesh);

    if (options.edges !== false) {
      const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(mesh.geometry, 35),
        new THREE.LineBasicMaterial({ color: options.edgeColor || 0xffa15f, transparent: true, opacity: options.edgeOpacity || 0.22 })
      );
      edges.position.copy(mesh.position);
      edges.rotation.copy(mesh.rotation);
      parent.add(edges);
    }

    return mesh;
  };

  const addCylinder = (parent, radiusTop, radiusBottom, depth, position, material, options = {}) => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radiusTop, radiusBottom, depth, options.segments || 40), material);
    mesh.position.set(...position);
    mesh.rotation.set(...(options.rotation || [0, 0, 0]));
    mesh.castShadow = options.castShadow ?? true;
    mesh.receiveShadow = options.receiveShadow ?? true;
    parent.add(mesh);
    return mesh;
  };

  // ── Build cabinet, frame, wheels ──
  const cabinet = new THREE.Group();
  cabinet.position.y = 1.7;
  model.add(cabinet);

  addBox(cabinet, [5.8, 2.15, 2.45], [0, 0, 0], orange);
  addBox(cabinet, [5.95, 0.16, 2.6], [0, 1.16, 0], orangeDark);
  addBox(cabinet, [5.95, 0.14, 2.62], [0, -1.16, 0], orangeDark);
  addBox(cabinet, [0.16, 2.36, 2.62], [-3.05, 0, 0], orangeDark);
  addBox(cabinet, [0.16, 2.36, 2.62], [3.05, 0, 0], orangeDark);

  addBox(cabinet, [1.82, 1.48, 0.08], [-1.86, 0.04, 1.27], orangeDark, { edgeOpacity: 0.35 });
  addBox(cabinet, [2.1, 1.48, 0.08], [0.82, 0.04, 1.28], orangeDark, { edgeOpacity: 0.35 });
  addBox(cabinet, [0.9, 0.62, 0.12], [0.72, 0.2, 1.36], black, { edgeColor: 0xffffff, edgeOpacity: 0.12 });
  addBox(cabinet, [0.68, 0.42, 0.13], [0.72, 0.2, 1.43], glass, { edges: false });
  addBox(cabinet, [0.32, 0.34, 0.1], [-2.42, 0.58, 1.36], black, { edgeOpacity: 0.12 });
  addBox(cabinet, [0.38, 0.34, 0.1], [-1.98, 0.58, 1.36], black, { edgeOpacity: 0.12 });
  addBox(cabinet, [0.23, 0.22, 0.12], [-2.42, 0.58, 1.43], glass, { edges: false });
  addBox(cabinet, [0.28, 0.22, 0.12], [-1.98, 0.58, 1.43], glass, { edges: false });

  const knobPositions = [
    [-2.5, 0.08, 1.38], [-2.12, 0.08, 1.38], [-1.75, 0.08, 1.38],
    [-2.5, -0.42, 1.38], [-2.08, -0.42, 1.38], [-1.63, -0.42, 1.38],
    [-0.08, -0.38, 1.38], [1.54, -0.24, 1.38], [2.08, -0.22, 1.38]
  ];
  knobPositions.forEach((position, index) => {
    addCylinder(cabinet, 0.085, 0.085, 0.12, position, index % 4 === 0 ? steel : black, { rotation: [Math.PI / 2, 0, 0], segments: 32 });
    addCylinder(cabinet, 0.052, 0.052, 0.08, [position[0], position[1], position[2] + 0.07], index === 1 ? orange : steel, { rotation: [Math.PI / 2, 0, 0], segments: 28 });
  });

  [-2.36, -1.86].forEach((x) => {
    addCylinder(cabinet, 0.18, 0.18, 0.055, [x, -0.68, 1.4], steel, { rotation: [Math.PI / 2, 0, 0], segments: 44 });
    addCylinder(cabinet, 0.145, 0.145, 0.064, [x, -0.68, 1.45], glass, { rotation: [Math.PI / 2, 0, 0], segments: 44 });
    addBox(cabinet, [0.018, 0.17, 0.018], [x + 0.04, -0.65, 1.49], black, { rotation: [0, 0, -0.55], edges: false });
  });

  addCylinder(cabinet, 0.105, 0.105, 0.08, [-1.45, 0.58, 1.4], new THREE.MeshStandardMaterial({ color: 0xd81919, roughness: 0.22 }), { rotation: [Math.PI / 2, 0, 0] });

  for (let row = 0; row < 7; row += 1) {
    for (let col = 0; col < 4; col += 1) {
      addBox(cabinet, [0.32, 0.035, 0.05], [3.13, 0.72 - row * 0.22, -0.76 + col * 0.36], orangeDark, { edges: false });
    }
  }

  addBox(cabinet, [0.9, 0.24, 0.2], [-0.82, 1.42, 0.98], orange, { rotation: [0, 0, -0.06] });
  addBox(cabinet, [0.36, 0.2, 0.34], [-1.42, 1.4, 1.02], black, { rotation: [0, 0, -0.06], edgeOpacity: 0.12 });
  addBox(cabinet, [0.14, 0.3, 2.62], [2.86, 1.34, 0], orangeDark, { rotation: [0, 0, -0.06] });

  const frame = new THREE.Group();
  frame.position.y = 0.43;
  model.add(frame);
  addBox(frame, [6.3, 0.32, 0.28], [0, 0.64, 1.38], orange);
  addBox(frame, [6.1, 0.24, 0.22], [0, -0.7, 1.28], orange);
  addBox(frame, [6.1, 0.2, 0.2], [0, -1.26, 1.25], orangeDark);
  addBox(frame, [6.1, 0.2, 0.2], [0, -1.26, -1.22], orangeDark);
  addBox(frame, [0.22, 1.95, 0.22], [-2.92, -0.2, 1.18], orange);
  addBox(frame, [0.22, 1.95, 0.22], [2.92, -0.2, 1.18], orange);
  addBox(frame, [0.22, 1.9, 0.22], [-2.92, -0.26, -1.15], orange);
  addBox(frame, [0.22, 1.9, 0.22], [2.92, -0.26, -1.15], orange);
  addBox(frame, [2.25, 0.5, 0.32], [-0.85, -0.18, 1.1], orange);
  addCylinder(frame, 0.11, 0.11, 0.56, [0, 0.08, 1.2], steel, { segments: 32 });

  const wheelPositions = [[-2.72, -1.55, 1.2], [2.72, -1.55, 1.2], [-2.72, -1.55, -1.1], [2.72, -1.55, -1.1]];
  wheelPositions.forEach((position, index) => {
    addBox(frame, [0.12, 0.48, 0.08], [position[0], position[1] + 0.28, position[2]], steel, { rotation: [0.28 * (index % 2 ? -1 : 1), 0, 0], edges: false });
    addCylinder(frame, 0.28, 0.28, 0.2, position, rubber, { rotation: [0, 0, Math.PI / 2], segments: 52 });
    addCylinder(frame, 0.15, 0.15, 0.215, position, orangeDark, { rotation: [0, 0, Math.PI / 2], segments: 44 });
    addCylinder(frame, 0.07, 0.07, 0.23, position, steel, { rotation: [0, 0, Math.PI / 2], segments: 28 });
  });

  // ── Lighting ──
  const keyLight = new THREE.DirectionalLight(0xffffff, 3.4);
  keyLight.position.set(4, 6, 5);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(1024, 1024);
  scene.add(keyLight);
  scene.add(new THREE.HemisphereLight(0xb8ecff, 0x2b1304, 1.4));

  const rim = new THREE.DirectionalLight(0xff8a3a, 2.2);
  rim.position.set(-5, 2.5, -4);
  scene.add(rim);

  // ── Drag to rotate + auto-spin ──
  let targetRotation = model.rotation.y;
  let isDragging = false;
  let startX = 0;
  let startRotation = 0;

  const resize = () => {
    const width = viewer.clientWidth || 640;
    const height = viewer.clientHeight || 420;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    camera.lookAt(-0.18, 0.42, 0);
    renderer.setSize(width, height, false);
  };

  const handlePointerDown = (event) => {
    isDragging = true;
    startX = event.clientX;
    startRotation = targetRotation;
    viewer.classList.add("is-dragging");
    viewer.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!isDragging) return;
    const delta = event.clientX - startX;
    targetRotation = startRotation + delta * 0.012;
  };

  const stopDragging = (event) => {
    isDragging = false;
    viewer.classList.remove("is-dragging");
    if (viewer.hasPointerCapture(event.pointerId)) {
      viewer.releasePointerCapture(event.pointerId);
    }
  };

  viewer.addEventListener("pointerdown", handlePointerDown);
  viewer.addEventListener("pointermove", handlePointerMove);
  viewer.addEventListener("pointerup", stopDragging);
  viewer.addEventListener("pointercancel", stopDragging);
  window.addEventListener("resize", resize);

  const clock = new THREE.Clock();

  const animate = () => {
    const elapsed = clock.getElapsedTime();
    if (!isDragging) {
      targetRotation += 0.0032;
    }
    model.rotation.y += (targetRotation - model.rotation.y) * 0.08;
    model.position.y = Math.sin(elapsed * 1.25) * 0.035;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  resize();
  renderer.render(scene, camera);
  viewer.classList.add("is-ready");
  animate();
}
