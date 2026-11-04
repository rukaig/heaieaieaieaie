import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.170.0/examples/jsm/controls/OrbitControls.js";

const CONFIG = {
  siteTitle: "Galaxy of Love",
  headerSubtitle: "42 little reasons I love you",
  music: "bgmusic.mp4",
  photoCount: 42,
  intro: {
    titleKo: "우리의 사랑 은하수",
    subtitleEn: "haei, my love",
    buttonEn: "Enter our universe",
  },
  ui: {
    loading: "huy",
    photoHint: "Tap a photo to visit a memory",
    back: "Back",
    previous: "Previous photo",
    next: "Next photo",
    photoAlt: "Photo",
    audioOn: "Mute music",
    audioOff: "Play music",
    loadingError: "A photo could not be loaded. Check the photos folder and reload.",
  },
  colors: {
    background: "#05010d",
    deepShadow: "#0d0420",
    shadow: "#1a0a3a",
    violet: "#8b3dff",
    amethyst: "#b57bff",
    orchid: "#e08bff",
    lavender: "#d9c2ff",
    highlight: "#f3eaff",
    constellation: "#a9b8ff",
    ring: "#7a4dff",
    white: "#ffffff",
    black: "#000000",
  },
  diskMessages: [
    { titleKo: "사랑해", subEn: "I LOVE YOU" },
    { titleKo: "언제나 너와", subEn: "ALWAYS WITH YOU" },
    { titleKo: "내 우주의 별", subEn: "MY FAVORITE STAR" },
    { titleKo: "너는 나의 봄", subEn: "YOU ARE MY SPRING" },
    { titleKo: "우리의 이야기", subEn: "OUR LITTLE STORY" },
    { titleKo: "늘 행복하자", subEn: "HAPPINESS WITH YOU" },
    { titleKo: "내 마음의 전부", subEn: "ALL OF MY HEART" },
    { titleKo: "오늘도 사랑해", subEn: "LOVE YOU TODAY" },
  ],
  photos: [
    { src: "photos/01.jpg", titleKo: "너는 나의 봄", subEn: "You make every day feel like spring." },
    { src: "photos/02.jpg", titleKo: "가장 빛나는 순간", subEn: "My favorite light in every room." },
    { src: "photos/03.jpg", titleKo: "너라서 좋아", subEn: "Every little thing is lovely because it's you." },
    { src: "photos/04.jpg", titleKo: "함께라서 행복해", subEn: "My happiest place is right beside you." },
    { src: "photos/05.jpg", titleKo: "웃음이 피어나는 날", subEn: "Your smile is my favorite kind of magic." },
    { src: "photos/06.jpg", titleKo: "사랑스러운 너", subEn: "A little reminder of how wonderful you are." },
    { src: "photos/07.jpg", titleKo: "내 마음의 별", subEn: "The brightest star in my little universe." },
    { src: "photos/08.jpg", titleKo: "오늘도 너를 사랑해", subEn: "Today, tomorrow, and all the days after." },
    { src: "photos/09.jpg", titleKo: "소중한 우리", subEn: "A precious moment, made even better with you." },
    { src: "photos/10.jpg", titleKo: "너와 걷는 길", subEn: "Anywhere feels like home when we're together." },
    { src: "photos/11.jpg", titleKo: "참 예쁜 너", subEn: "Beautiful in all the ways that matter most." },
    { src: "photos/12.jpg", titleKo: "내 하루의 선물", subEn: "You are the sweetest part of my every day." },
    { src: "photos/13.jpg", titleKo: "반짝이는 우리", subEn: "Little moments with you shine the longest." },
    { src: "photos/14.jpg", titleKo: "너의 다정함", subEn: "Your kind heart makes the whole world softer." },
    { src: "photos/15.jpg", titleKo: "언제나 너와", subEn: "My favorite story is the one we're writing." },
    { src: "photos/16.jpg", titleKo: "마음이 머무는 곳", subEn: "Wherever you are is where my heart belongs." },
    { src: "photos/17.jpg", titleKo: "너만 보면 웃음이 나", subEn: "You can make me smile without even trying." },
    { src: "photos/18.jpg", titleKo: "우리의 작은 우주", subEn: "Just you and me, in our own little universe." },
    { src: "photos/19.jpg", titleKo: "사랑이 닮은 순간", subEn: "This is what my kind of happiness looks like." },
    { src: "photos/20.jpg", titleKo: "매일 더 좋아져", subEn: "Somehow, I find a new reason every day." },
    { src: "photos/21.jpg", titleKo: "너는 나의 기쁨", subEn: "My heart feels lighter whenever you're near." },
    { src: "photos/22.jpg", titleKo: "오래오래 함께", subEn: "Here's to a lifetime of little memories." },
    { src: "photos/23.jpg", titleKo: "눈부신 너의 하루", subEn: "I hope your days are as lovely as you are." },
    { src: "photos/24.jpg", titleKo: "다정한 마음 하나", subEn: "Thank you for making ordinary days special." },
    { src: "photos/25.jpg", titleKo: "너와 나의 계절", subEn: "Every season is my favorite when it's with you." },
    { src: "photos/26.jpg", titleKo: "내가 아끼는 미소", subEn: "A smile I want to keep close forever." },
    { src: "photos/27.jpg", titleKo: "오늘의 가장 큰 행복", subEn: "The best thing about today is having you." },
    { src: "photos/28.jpg", titleKo: "너의 모든 순간", subEn: "I treasure every version of you." },
    { src: "photos/29.jpg", titleKo: "사랑이 가득한 날", subEn: "A little snapshot filled with so much love." },
    { src: "photos/30.jpg", titleKo: "언제나 내 편", subEn: "Thank you for being my favorite person." },
    { src: "photos/31.jpg", titleKo: "함께라서 더 예뻐", subEn: "The world looks a little lovelier beside you." },
    { src: "photos/32.jpg", titleKo: "내 마음속 한 사람", subEn: "There's only one you, and that's my favorite." },
    { src: "photos/33.jpg", titleKo: "너에게 물든 하루", subEn: "Every day is sweeter with a little bit of you." },
    { src: "photos/34.jpg", titleKo: "우리라서 참 좋아", subEn: "I love the little world we make together." },
    { src: "photos/35.jpg", titleKo: "가장 따뜻한 마음", subEn: "You make even the quiet moments feel warm." },
    { src: "photos/36.jpg", titleKo: "너와 함께한 선물", subEn: "One more memory I get to keep with you." },
    { src: "photos/37.jpg", titleKo: "너는 나의 행운", subEn: "I still feel lucky that our paths crossed." },
    { src: "photos/38.jpg", titleKo: "사랑스러운 우리", subEn: "My heart is happiest in this little moment." },
    { src: "photos/39.jpg", titleKo: "너에게 보내는 마음", subEn: "A small picture with a very big love." },
    { src: "photos/40.jpg", titleKo: "언제나 빛나는 너", subEn: "Keep shining, my favorite person." },
    { src: "photos/41.jpg", titleKo: "너와 만드는 내일", subEn: "I can't wait for all the days still to come." },
    { src: "photos/42.jpg", titleKo: "내 우주의 전부", subEn: "Out of all the stars, I would choose you." },
  ],
};
if (!window.gsap) {
  throw new Error("GSAP did not load. Check the GSAP CDN connection and reload.");
}

const themeProperties = {
  "--theme-bg": CONFIG.colors.background,
  "--theme-deep": CONFIG.colors.deepShadow,
  "--theme-shadow": CONFIG.colors.shadow,
  "--theme-violet": CONFIG.colors.violet,
  "--theme-amethyst": CONFIG.colors.amethyst,
  "--theme-orchid": CONFIG.colors.orchid,
  "--theme-lavender": CONFIG.colors.lavender,
  "--theme-highlight": CONFIG.colors.highlight,
  "--theme-white": CONFIG.colors.white,
};
Object.entries(themeProperties).forEach(([property, value]) => {
  document.documentElement.style.setProperty(property, value);
});

console.info(`[gallery] ${CONFIG.photos.length} photos configured.`);
if (CONFIG.photos.length !== CONFIG.photoCount) {
  console.warn(`[gallery] Expected ${CONFIG.photoCount} photos; found ${CONFIG.photos.length}.`);
}

const $ = (selector) => document.querySelector(selector);
const canvasHost = $("#canvas-host");
const loading = $("#loading");
const progress = $("#loading-progress");
const progressCount = $("#loading-count");
const progressBar = $("#progress-bar");
const loadError = $("#load-error");
const intro = $("#intro");
const introAvatar = $("#intro-avatar");
const introTitle = $("#intro-title");
const introSubtitle = $("#intro-subtitle");
const enterButton = $("#enter-button");
const music = $("#background-music");
const musicButton = $("#music-toggle");
const musicIcon = $("#music-icon");
const hint = $("#hint");
const photoOverlay = $("#photo-overlay");
const memoryImage = $("#memory-image");
const memoryTitle = $("#memory-title");
const memorySubtitle = $("#memory-subtitle");
const memoryCount = $("#memory-count");
const photoAlt = $("#photo-alt");

document.title = CONFIG.siteTitle;
$("#site-title").textContent = CONFIG.siteTitle.toUpperCase();
$("#header-subtitle").textContent = CONFIG.headerSubtitle;
introTitle.textContent = CONFIG.intro.titleKo;
introSubtitle.textContent = CONFIG.intro.subtitleEn;
enterButton.textContent = CONFIG.intro.buttonEn;
$("#loading-copy").textContent = CONFIG.ui.loading;
$("#hint-copy").textContent = CONFIG.ui.photoHint;
$("#back-label").textContent = CONFIG.ui.back;
$("#prev-photo").setAttribute("aria-label", CONFIG.ui.previous);
$("#next-photo").setAttribute("aria-label", CONFIG.ui.next);
music.src = CONFIG.music;
music.volume = 0.6;
introAvatar.src = CONFIG.photos[0].src;
musicButton.setAttribute("aria-label", CONFIG.ui.audioOff);

const scene = new THREE.Scene();
scene.background = new THREE.Color(CONFIG.colors.background);
scene.fog = new THREE.FogExp2(CONFIG.colors.background, 0.00055);

const camera = new THREE.PerspectiveCamera(54, window.innerWidth / window.innerHeight, 0.1, 500);
const initialAspect = window.innerWidth / window.innerHeight;
const initialCameraDistance = initialAspect < 0.7 ? 142 : initialAspect < 1 ? 100 : 68;
const initialCameraPosition = new THREE.Vector3(
  0,
  initialCameraDistance * 0.39,
  initialCameraDistance,
);
camera.position.copy(initialCameraPosition);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;
canvasHost.append(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 2, 0);
controls.enableDamping = true;
controls.dampingFactor = 0.045;
controls.enablePan = false;
controls.minDistance = 25;
controls.maxDistance = 240;
controls.maxPolarAngle = Math.PI * 0.82;
controls.autoRotate = false;
controls.autoRotateSpeed = 0.16;

scene.add(new THREE.AmbientLight(CONFIG.colors.lavender, 0.28));
const galaxyLight = new THREE.PointLight(CONFIG.colors.amethyst, 75, 58, 2);
galaxyLight.position.set(0, 7, 0);
scene.add(galaxyLight);

const galaxy = new THREE.Group();
scene.add(galaxy);
const photos = [];
const heartGroup = [];
const constellationGroups = [];
const shootingStars = [];
let nextShootingStarAt = 0;
let selectedPhoto = 0;
let galleryOpen = false;
let photoTransitioning = false;
let orbitMotion = { value: 1 };
let photoDim = { value: 0 };
let savedCameraState = null;
let cameraTimeline = null;
let introStarted = false;
let warp = null;
let elapsed = 0;
let hoveredSprite = null;
let photoPointerDown = null;
let photoPointerDragged = false;
let nebulaCloud;
let cosmicDust;
let diskPulse;
let particleHeart;
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function makeHaloTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 128;
  const context = canvas.getContext("2d");
  const gradient = context.createRadialGradient(64, 64, 2, 64, 64, 64);
  gradient.addColorStop(0, "rgba(255,255,255,.92)");
  gradient.addColorStop(0.1, "rgba(243,234,255,.76)");
  gradient.addColorStop(0.28, "rgba(181,123,255,.3)");
  gradient.addColorStop(1, "rgba(122,77,255,0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(canvas);
}

function addBackgroundStars() {
  const count = 6200;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const lilac = new THREE.Color(CONFIG.colors.lavender);
  const white = new THREE.Color(CONFIG.colors.highlight);
  const purple = new THREE.Color(CONFIG.colors.violet);
  for (let i = 0; i < count; i += 1) {
    const radius = 70 + Math.random() * 170;
    const theta = Math.random() * Math.PI * 2;
    const cosPhi = randomBetween(-1, 1);
    const sinPhi = Math.sqrt(1 - cosPhi * cosPhi);
    positions[i * 3] = radius * sinPhi * Math.cos(theta);
    positions[i * 3 + 1] = radius * cosPhi;
    positions[i * 3 + 2] = radius * sinPhi * Math.sin(theta);
    const color = lilac.clone().lerp(white, Math.random() * 0.68).lerp(purple, Math.random() * 0.15);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  scene.add(new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.78,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  ));
}

function addPurpleAtmosphere() {
  nebulaCloud = new THREE.Group();
  const nebulaColors = [CONFIG.colors.violet, CONFIG.colors.amethyst, CONFIG.colors.orchid, CONFIG.colors.ring];
  for (let i = 0; i < 6; i += 1) {
    const cloud = new THREE.Sprite(new THREE.SpriteMaterial({
      map: makeHaloTexture(),
      color: nebulaColors[i % nebulaColors.length],
      transparent: true,
      opacity: randomBetween(0.08, 0.15),
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    }));
    const direction = new THREE.Vector3(randomBetween(-1, 1), randomBetween(-0.65, 0.65), randomBetween(-1, 1)).normalize();
    cloud.position.copy(direction.multiplyScalar(randomBetween(48, 112)));
    cloud.scale.setScalar(randomBetween(38, 76));
    nebulaCloud.add(cloud);
  }
  scene.add(nebulaCloud);

  const count = 1100;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const direction = new THREE.Vector3(randomBetween(-1, 1), randomBetween(-1, 1), randomBetween(-1, 1)).normalize();
    direction.multiplyScalar(randomBetween(32, 145));
    positions.set(direction.toArray(), i * 3);
  }
  const dustGeometry = new THREE.BufferGeometry();
  dustGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  cosmicDust = new THREE.Group();
  cosmicDust.add(new THREE.Points(
    dustGeometry,
    new THREE.PointsMaterial({
      color: CONFIG.colors.lavender,
      size: 0.11,
      transparent: true,
      opacity: 0.28,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  ));
  scene.add(cosmicDust);

  diskPulse = new THREE.Mesh(
    new THREE.TorusGeometry(1, 0.024, 6, 160),
    new THREE.MeshBasicMaterial({
      color: CONFIG.colors.lavender,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  diskPulse.rotation.x = Math.PI / 2;
  galaxy.add(diskPulse);
}

function makeSpiralGalaxy() {
  const count = 14500;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const core = new THREE.Color(CONFIG.colors.highlight);
  const amethyst = new THREE.Color(CONFIG.colors.amethyst);
  const orchid = new THREE.Color(CONFIG.colors.orchid);
  const violet = new THREE.Color(CONFIG.colors.violet);

  for (let i = 0; i < count; i += 1) {
    const radius = 1.3 + Math.random() ** 0.72 * 29;
    const arm = Math.floor(Math.random() * 3);
    const angle = arm * (Math.PI * 2 / 3) + radius * 0.28 + randomBetween(-0.2, 0.2);
    const spread = 0.2 + radius * 0.04;
    positions[i * 3] = Math.cos(angle) * radius + randomBetween(-spread, spread);
    positions[i * 3 + 1] = randomBetween(-0.48, 0.48) * (0.3 + radius * 0.025);
    positions[i * 3 + 2] = Math.sin(angle) * radius + randomBetween(-spread, spread);

    const brightness = Math.min(1, radius / 12);
    const color = core.clone().lerp(amethyst, brightness * 0.65)
      .lerp(orchid, randomBetween(0.08, 0.48))
      .lerp(violet, randomBetween(0, 0.17));
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const spiral = new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      size: 0.17,
      vertexColors: true,
      transparent: true,
      opacity: 0.86,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  galaxy.add(spiral);

  const swirlCount = 2200;
  const swirlPositions = new Float32Array(swirlCount * 3);
  const swirlColors = new Float32Array(swirlCount * 3);
  for (let i = 0; i < swirlCount; i += 1) {
    const radius = 1.15 + Math.random() * 4.8;
    const angle = Math.random() * Math.PI * 2 + radius * 0.7;
    swirlPositions[i * 3] = Math.cos(angle) * radius;
    swirlPositions[i * 3 + 1] = randomBetween(-0.12, 0.12);
    swirlPositions[i * 3 + 2] = Math.sin(angle) * radius;
    const color = new THREE.Color(CONFIG.colors.lavender).lerp(new THREE.Color(CONFIG.colors.violet), Math.random() * 0.65);
    swirlColors[i * 3] = color.r;
    swirlColors[i * 3 + 1] = color.g;
    swirlColors[i * 3 + 2] = color.b;
  }
  const swirlGeometry = new THREE.BufferGeometry();
  swirlGeometry.setAttribute("position", new THREE.BufferAttribute(swirlPositions, 3));
  swirlGeometry.setAttribute("color", new THREE.BufferAttribute(swirlColors, 3));
  const swirl = new THREE.Points(
    swirlGeometry,
    new THREE.PointsMaterial({
      size: 0.11,
      vertexColors: true,
      transparent: true,
      opacity: 0.88,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  galaxy.add(swirl);

  for (const [radius, color, opacity, tube] of [
    [1.32, CONFIG.colors.highlight, 0.92, 0.07],
    [1.62, CONFIG.colors.amethyst, 0.62, 0.045],
    [2.05, CONFIG.colors.violet, 0.4, 0.035],
    [4.6, CONFIG.colors.orchid, 0.2, 0.012],
    [9.5, CONFIG.colors.violet, 0.13, 0.009],
  ]) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(radius, tube, 8, 220),
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    ring.rotation.x = Math.PI / 2;
    galaxy.add(ring);
  }
}

function makeCentralBlackHole() {
  const core = new THREE.Mesh(
    new THREE.SphereGeometry(0.94, 40, 32),
    new THREE.MeshBasicMaterial({ color: CONFIG.colors.black }),
  );
  core.position.y = 0.28;
  galaxy.add(core);

  const halo = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeHaloTexture(),
    color: CONFIG.colors.amethyst,
    transparent: true,
    opacity: 0.74,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  }));
  halo.position.y = 0.24;
  halo.scale.set(8.5, 8.5, 1);
  galaxy.add(halo);
}

function makeBeam() {
  const beam = new THREE.Mesh(
    new THREE.CylinderGeometry(0.11, 0.7, 7.5, 24, 1, true),
    new THREE.MeshBasicMaterial({
      color: CONFIG.colors.violet,
      transparent: true,
      opacity: 0.1,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  beam.position.set(0, 4.8, 0);
  galaxy.add(beam);
  const shaft = new THREE.Mesh(
    new THREE.CylinderGeometry(0.035, 0.09, 7, 16, 1, true),
    new THREE.MeshBasicMaterial({
      color: CONFIG.colors.lavender,
      transparent: true,
      opacity: 0.28,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  shaft.position.set(0, 4.8, 0);
  galaxy.add(shaft);
}

function makeHeartParticleCloud() {
  const heart = new THREE.Group();
  heart.position.set(0, 8.5, 0);
  heart.scale.setScalar(initialAspect < 0.7 ? 1.9 : 1.3);
  galaxy.add(heart);
  const count = 5300;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const heartPink = new THREE.Color(CONFIG.colors.violet);
  const heartLight = new THREE.Color(CONFIG.colors.amethyst);
  const white = new THREE.Color(CONFIG.colors.highlight);

  for (let i = 0; i < count; i += 1) {
    const t = Math.random() * Math.PI * 2;
    const x = 16 * Math.sin(t) ** 3;
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    const edge = i < 3900;
    const fill = edge ? 0.91 + Math.random() * 0.09 : Math.sqrt(Math.random()) * 0.82;
    const scale = 0.23;
    positions[i * 3] = x * fill * scale + (Math.random() - 0.5) * (edge ? 0.07 : 0);
    positions[i * 3 + 1] = (y * fill + 2.1 * (1 - fill)) * scale + (Math.random() - 0.5) * 0.07;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 0.3;
    const color = heartPink.clone().lerp(heartLight, Math.random() * 0.62);
    if (Math.random() > 0.94) color.lerp(white, 0.8);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const pointHeart = new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      size: 0.09,
      vertexColors: true,
      transparent: true,
      opacity: 0.97,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  heart.add(pointHeart);
  heart.userData.baseY = heart.position.y;
  heart.userData.phase = Math.random() * Math.PI * 2;
  return heart;
}

function heartShape() {
  const shape = new THREE.Shape();
  shape.moveTo(0, -0.5);
  shape.bezierCurveTo(-0.15, -0.35, -0.82, 0.03, -0.82, 0.48);
  shape.bezierCurveTo(-0.82, 0.96, -0.21, 0.98, 0, 0.57);
  shape.bezierCurveTo(0.21, 0.98, 0.82, 0.96, 0.82, 0.48);
  shape.bezierCurveTo(0.82, 0.03, 0.15, -0.35, 0, -0.5);
  return shape;
}

function makeOrbitingHearts() {
  const geometry = new THREE.ExtrudeGeometry(heartShape(), {
    depth: 0.12,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 1,
    bevelSize: 0.06,
    bevelThickness: 0.05,
  });
  geometry.center();
  const material = new THREE.MeshBasicMaterial({
    color: CONFIG.colors.orchid,
    transparent: true,
    opacity: 0.86,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  for (let i = 0; i < 42; i += 1) {
    const heart = new THREE.Mesh(geometry, material.clone());
    heart.scale.setScalar(randomBetween(0.32, 0.78));
    heart.userData = {
      radius: 4 + Math.random() * 14,
      angle: Math.random() * Math.PI * 2,
      ySpeed: 0.006 + Math.random() * 0.012,
      yOffset: (Math.random() - 0.5) * 6,
      phase: Math.random() * Math.PI * 2,
    };
    galaxy.add(heart);
    heartGroup.push(heart);
  }
}

function createTextTexture(title, subtitle) {
  const canvas = document.createElement("canvas");
  canvas.width = 768;
  canvas.height = 192;
  const context = canvas.getContext("2d");
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.shadowColor = CONFIG.colors.violet;
  context.shadowBlur = 22;
  context.fillStyle = CONFIG.colors.amethyst;
  context.font = "700 62px 'Playfair Display', serif";
  context.fillText(title, 384, 68);
  context.shadowBlur = 15;
  context.fillStyle = CONFIG.colors.lavender;
  context.font = "600 27px Poppins, sans-serif";
  context.letterSpacing = "5px";
  context.fillText(subtitle, 384, 143);
  return new THREE.CanvasTexture(canvas);
}

function makeGalaxyMessages() {
  CONFIG.diskMessages.forEach((message, index) => {
    const angle = (index / CONFIG.diskMessages.length) * Math.PI * 2;
    const radius = index % 2 === 0 ? 13.8 : 19;
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(7.2, 1.8),
      new THREE.MeshBasicMaterial({
        map: createTextTexture(message.titleKo, message.subEn),
        transparent: true,
        opacity: 0.78,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    );
    mesh.rotation.x = -Math.PI / 2;
    mesh.rotation.z = -angle;
    mesh.position.set(Math.cos(angle) * radius, -0.17, Math.sin(angle) * radius);
    mesh.userData = { phase: index * 0.9, baseY: mesh.position.y };
    galaxy.add(mesh);
  });
}

function makeDistantBlackHole() {
  const distant = new THREE.Group();
  distant.position.set(120, 50, -150);
  distant.rotation.set(0.62, -0.4, 0.9);
  scene.add(distant);

  const voidSphere = new THREE.Mesh(
    new THREE.SphereGeometry(6.5, 40, 32),
    new THREE.MeshBasicMaterial({ color: CONFIG.colors.black }),
  );
  distant.add(voidSphere);

  const ringMaterial = new THREE.MeshBasicMaterial({
    color: CONFIG.colors.lavender,
    transparent: true,
    opacity: 0.82,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(10.2, 0.24, 10, 160), ringMaterial);
  ring.rotation.x = Math.PI / 2;
  distant.add(ring);
  const outerRing = new THREE.Mesh(
    new THREE.RingGeometry(8, 14.5, 192, 2),
    new THREE.MeshBasicMaterial({
      color: CONFIG.colors.ring,
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  outerRing.rotation.x = Math.PI / 2;
  distant.add(outerRing);

  const halo = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeHaloTexture(),
    color: CONFIG.colors.violet,
    transparent: true,
    opacity: 0.64,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  }));
  halo.scale.set(38, 38, 1);
  distant.add(halo);

  const orbitGeometry = new THREE.BufferGeometry();
  const orbitPositions = [];
  for (let i = 0; i < 80; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const radius = randomBetween(12, 22);
    orbitPositions.push(Math.cos(angle) * radius, randomBetween(-0.5, 0.5), Math.sin(angle) * radius);
  }
  orbitGeometry.setAttribute("position", new THREE.Float32BufferAttribute(orbitPositions, 3));
  distant.add(new THREE.Points(
    orbitGeometry,
    new THREE.PointsMaterial({
      color: CONFIG.colors.constellation,
      size: 0.3,
      transparent: true,
      opacity: 0.74,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  ));
  distant.userData.ring = ring;
  return distant;
}

const constellationShapes = [
  { points: [[0, 0, 0], [1, 1.4, 0.3], [2.1, 0.8, -0.2], [3, 1.9, 0.1], [4, 1.2, 0.5]], links: [[0, 1], [1, 2], [2, 3], [3, 4], [2, 4]] },
  { points: [[0, 0, 0], [1.1, 0.4, 0.2], [2.3, 0, 0], [3, 1.5, -0.2], [4.1, 1.7, 0.2], [5, 0.8, 0]], links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]] },
  { points: [[0, 0.8, 0], [0.65, 1.5, 0.1], [1.3, 1.15, 0], [1.95, 1.5, -0.1], [2.6, 0.8, 0], [1.3, -0.65, 0.1]], links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]] },
  { points: [[0, 0, 0], [0.8, 1, 0], [2, 1.4, 0.2], [3, 0.7, 0], [4, 1.5, -0.2], [5, 0.2, 0]], links: [[0, 1], [1, 2], [2, 3], [3, 4], [3, 5]] },
  { points: [[0, 0, 0], [1, 1, 0.2], [2, 0, 0], [3, 1, -0.2], [4, 0, 0]], links: [[0, 1], [1, 2], [2, 3], [3, 4], [1, 3]] },
  { points: [[0, 0, 0], [1, 0.8, 0.3], [2, 0.3, 0], [2.8, 1.4, -0.2], [4, 0.5, 0.1]], links: [[0, 1], [1, 2], [2, 3], [3, 4]] },
  { points: [[0, 0, 0], [1, 1.5, 0], [2, 0, 0.2], [1.5, -1.2, 0], [0.5, -1.2, -0.2]], links: [[0, 1], [1, 2], [2, 3], [3, 4]] },
  { points: [[0, 0, 0], [1.2, 0.5, -0.2], [1.8, 1.8, 0.2], [3, 2.2, 0], [3.8, 0.9, -0.3]], links: [[0, 1], [1, 2], [2, 3], [3, 4], [1, 4]] },
  { points: [[0, 0, 0], [1, 1.3, 0.1], [2, 0.2, -0.2], [3.1, 1.5, 0], [4.4, 0.4, 0.3]], links: [[0, 1], [1, 2], [2, 3], [3, 4]] },
  { points: [[0, 0, 0], [1, 0.7, 0], [2, 1.5, 0.2], [2.8, 0.1, -0.2], [4, 0.8, 0]], links: [[0, 1], [1, 2], [2, 3], [3, 4], [1, 3]] },
];

function makeConstellations() {
  const lineMaterial = new THREE.LineBasicMaterial({
    color: CONFIG.colors.violet,
    transparent: true,
    opacity: 0.28,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const starMaterial = new THREE.PointsMaterial({
    color: CONFIG.colors.constellation,
    size: 0.56,
    transparent: true,
    opacity: 0.7,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  constellationShapes.forEach((shape, index) => {
    const group = new THREE.Group();
    const direction = new THREE.Vector3(
      randomBetween(-1, 1),
      randomBetween(-0.85, 0.85),
      randomBetween(-1, 1),
    ).normalize();
    const distance = 80 + index * 10 + Math.random() * 20;
    group.position.copy(direction.multiplyScalar(distance));
    group.rotation.set(randomBetween(-Math.PI, Math.PI), randomBetween(-Math.PI, Math.PI), randomBetween(-Math.PI, Math.PI));

    const points = shape.points.map(([x, y, z]) => new THREE.Vector3(x * 2.4, y * 2.4, z * 2.4));
    const pointGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const stars = new THREE.Points(pointGeometry, starMaterial.clone());
    group.add(stars);

    const linePositions = [];
    for (const [from, to] of shape.links) {
      linePositions.push(...points[from].toArray(), ...points[to].toArray());
    }
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial.clone());
    group.add(lines);
    scene.add(group);
    const phase = Math.random() * Math.PI * 2;
    const speed = randomBetween(0.6, 1.2);
    const baseOpacity = randomBetween(0.16, 0.34);
    const baseStarOpacity = randomBetween(0.38, 0.72);
    lines.material.opacity = baseOpacity;
    stars.material.opacity = baseStarOpacity;
    constellationGroups.push({ group, lines, stars, phase, speed, baseOpacity, baseStarOpacity });
  });
}

function makeShootingStarPool() {
  const glow = makeHaloTexture();
  for (let i = 0; i < 10; i += 1) {
    const position = new Float32Array(9 * 3);
    const colors = new Float32Array(9 * 3);
    for (let point = 0; point < 9; point += 1) {
      const fade = 1 - point / 8;
      const color = new THREE.Color(CONFIG.colors.amethyst).lerp(new THREE.Color(CONFIG.colors.highlight), fade * fade);
      colors[point * 3] = color.r;
      colors[point * 3 + 1] = color.g;
      colors[point * 3 + 2] = color.b;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(position, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const tail = new THREE.Line(
      geometry,
      new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    tail.frustumCulled = false;
    tail.visible = false;
    scene.add(tail);

    const head = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glow,
      color: CONFIG.colors.highlight,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }));
    head.scale.set(1.25, 1.25, 1);
    head.visible = false;
    scene.add(head);
    shootingStars.push({ tail, head, velocity: new THREE.Vector3(), age: 0, lifetime: 0, active: false, length: 0 });
  }
  nextShootingStarAt = performance.now() + randomBetween(2000, 6000);
}

function spawnShootingStar() {
  const star = shootingStars.find((item) => !item.active);
  if (!star) return;

  const direction = new THREE.Vector3(randomBetween(-1, 1), randomBetween(-0.7, 0.7), randomBetween(-1, 1)).normalize();
  const distance = Math.random() < 0.35 ? randomBetween(25, 48) : randomBetween(85, 175);
  const start = direction.multiplyScalar(distance);
  start.add(new THREE.Vector3(randomBetween(-16, 16), randomBetween(4, 30), randomBetween(-16, 16)));
  const travel = new THREE.Vector3(randomBetween(-1, 1), randomBetween(-0.7, 0.7), randomBetween(-1, 1)).normalize();
  const end = start.clone().addScaledVector(travel, randomBetween(24, 48));
  const centerHeart = new THREE.Vector3(0, 8.5, 0);
  if (new THREE.Line3(start, end).closestPointToPoint(centerHeart, true, new THREE.Vector3()).distanceTo(centerHeart) < 15) {
    start.x += 22;
    end.x += 22;
  }

  star.head.position.copy(start);
  star.velocity.copy(end.sub(start));
  star.age = 0;
  star.lifetime = randomBetween(1.1, 1.8);
  star.length = randomBetween(7, 14);
  star.active = true;
  star.head.visible = true;
  star.tail.visible = true;
}

function updateShootingStars(delta, now) {
  if (!introStarted) return;
  if (now >= nextShootingStarAt) {
    spawnShootingStar();
    nextShootingStarAt = now + randomBetween(2000, 6000);
  }
  shootingStars.forEach((star) => {
    if (!star.active) return;
    star.age += delta;
    if (star.age >= star.lifetime) {
      star.active = false;
      star.head.visible = false;
      star.tail.visible = false;
      return;
    }
    star.head.position.addScaledVector(star.velocity, delta);
    const travelDirection = star.velocity.clone().normalize();
    const positions = star.tail.geometry.attributes.position;
    for (let i = 0; i < 9; i += 1) {
      const behind = star.head.position.clone().addScaledVector(travelDirection, -star.length * i / 8);
      positions.setXYZ(i, behind.x, behind.y, behind.z);
    }
    positions.needsUpdate = true;
    const fade = Math.sin(Math.PI * star.age / star.lifetime);
    star.head.material.opacity = fade;
    star.head.scale.setScalar(0.65 + fade * 0.75);
    star.tail.material.opacity = fade * 0.82;
  });
}

function makeWarpParticles() {
  const count = 6200;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const velocities = new Float32Array(count * 3);
  const palette = [CONFIG.colors.violet, CONFIG.colors.amethyst, CONFIG.colors.lavender, CONFIG.colors.highlight]
    .map((color) => new THREE.Color(color));
  for (let i = 0; i < count; i += 1) {
    const direction = new THREE.Vector3(randomBetween(-1, 1), randomBetween(-1, 1), randomBetween(-1, 1)).normalize();
    const speed = randomBetween(10, 45);
    velocities[i * 3] = direction.x * speed;
    velocities[i * 3 + 1] = direction.y * speed;
    velocities[i * 3 + 2] = direction.z * speed;
    const color = palette[Math.floor(Math.random() * palette.length)];
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const points = new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      size: 0.24,
      vertexColors: true,
      transparent: true,
      opacity: 1,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  scene.add(points);
  warp = { points, velocities, start: performance.now(), duration: 2600 };
}

function updateWarp(now) {
  if (!warp) return;
  const age = now - warp.start;
  const positions = warp.points.geometry.attributes.position;
  const time = Math.min(age / 1000, warp.duration / 1000);
  for (let i = 0; i < positions.count; i += 1) {
    positions.setXYZ(
      i,
      warp.velocities[i * 3] * time,
      warp.velocities[i * 3 + 1] * time,
      warp.velocities[i * 3 + 2] * time,
    );
  }
  positions.needsUpdate = true;
  warp.points.material.opacity = Math.max(0, 1 - age / warp.duration);
  if (age >= warp.duration) {
    scene.remove(warp.points);
    warp.points.geometry.dispose();
    warp.points.material.dispose();
    warp = null;
    controls.enabled = true;
    controls.autoRotate = true;
    hint.hidden = false;
  }
}

function roundedPhotoTexture(image) {
  const maxSize = 512;
  const ratio = Math.min(1, maxSize / Math.max(image.naturalWidth, image.naturalHeight));
  const width = Math.max(1, Math.round(image.naturalWidth * ratio));
  const height = Math.max(1, Math.round(image.naturalHeight * ratio));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  const radius = Math.max(10, Math.round(Math.min(width, height) * 0.065));
  context.save();
  context.beginPath();
  context.roundRect(1, 1, width - 2, height - 2, radius);
  context.clip();
  context.drawImage(image, 0, 0, width, height);
  context.restore();
  context.save();
  context.beginPath();
  context.roundRect(1.5, 1.5, width - 3, height - 3, radius);
  context.strokeStyle = CONFIG.colors.highlight;
  context.lineWidth = Math.max(2, Math.round(Math.min(width, height) * 0.009));
  context.shadowColor = "rgba(196, 139, 255, 0.85)";
  context.shadowBlur = Math.max(8, Math.round(Math.min(width, height) * 0.055));
  context.stroke();
  context.restore();
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 4);
  return texture;
}

function loadPhoto(photo) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(roundedPhotoTexture(image));
    image.onerror = () => reject(new Error(`${CONFIG.ui.loadingError} ${photo.src}`));
    image.src = photo.src;
  });
}

function createPhotoSprites(textures) {
  const ringCounts = [10, 14, 18];
  const ringRadii = [10.5, 18.5, 26.5];
  let photoIndex = 0;
  ringCounts.forEach((count, ring) => {
    for (let slot = 0; slot < count; slot += 1) {
      const texture = textures[photoIndex];
      const angle = (slot / count) * Math.PI * 2 + ring * 0.11;
      const radius = ringRadii[ring] + randomBetween(-0.3, 0.3);
      const photo = new THREE.Sprite(new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        toneMapped: false,
      }));
      photo.position.set(
        Math.cos(angle) * radius,
        randomBetween(-1.8, 1.5),
        Math.sin(angle) * radius,
      );
      const baseHeight = 3.15;
      const aspect = texture.image.width / texture.image.height;
      const baseWidth = THREE.MathUtils.clamp(baseHeight * aspect, 1.8, 2.65);
      photo.scale.set(baseWidth, baseHeight, 1);
      photo.userData = {
        index: photoIndex,
        angle,
        radius,
        baseY: photo.position.y,
        phase: Math.random() * Math.PI * 2,
        baseScale: new THREE.Vector2(baseWidth, baseHeight),
      };
      galaxy.add(photo);
      photos.push(photo);
      photoIndex += 1;
    }
  });
}

function setProgress(loaded) {
  const percent = Math.round(loaded / CONFIG.photos.length * 100);
  progress.textContent = `${percent}%`;
  progressCount.textContent = `${loaded} / ${CONFIG.photos.length}`;
  progressBar.style.width = `${percent}%`;
}

function setCard(index) {
  selectedPhoto = (index + CONFIG.photos.length) % CONFIG.photos.length;
  const item = CONFIG.photos[selectedPhoto];
  memoryImage.src = item.src;
  memoryImage.alt = `${CONFIG.ui.photoAlt} ${String(selectedPhoto + 1).padStart(2, "0")}`;
  memoryTitle.textContent = item.titleKo;
  memorySubtitle.textContent = item.subEn;
  memoryCount.textContent = `${String(selectedPhoto + 1).padStart(2, "0")} / ${CONFIG.photos.length}`;
}

function flyToPhoto(index, firstOpen) {
  const photo = photos[index];
  const startPosition = camera.position.clone();
  const startTarget = controls.target.clone();
  const startFov = camera.fov;
  const flight = { value: 0 };
  const direction = new THREE.Vector3();
  const worldPosition = new THREE.Vector3();
  photoTransitioning = true;
  controls.enabled = false;
  photoOverlay.style.pointerEvents = "none";
  if (cameraTimeline) cameraTimeline.kill();

  cameraTimeline = window.gsap.timeline({
    onComplete: () => {
      photo.getWorldPosition(worldPosition);
      direction.copy(startPosition).sub(worldPosition).normalize();
      camera.position.copy(worldPosition).addScaledVector(direction, 7);
      controls.target.copy(worldPosition);
      camera.fov = startFov;
      camera.updateProjectionMatrix();
      controls.enabled = true;
      controls.autoRotate = false;
      photoTransitioning = false;
      photoOverlay.style.pointerEvents = "auto";
      cameraTimeline = null;
    },
  });
  cameraTimeline.to(flight, {
    value: 1,
    duration: 1.8,
    ease: "power3.inOut",
    onUpdate: () => {
      photo.getWorldPosition(worldPosition);
      direction.copy(startPosition).sub(worldPosition).normalize();
      const destination = worldPosition.clone().addScaledVector(direction, 7);
      camera.position.lerpVectors(startPosition, destination, flight.value);
      controls.target.lerpVectors(startTarget, worldPosition, flight.value);
      camera.fov = startFov - 3 * Math.sin(Math.PI * flight.value);
      camera.updateProjectionMatrix();
    },
  }, 0);
  cameraTimeline.to(orbitMotion, { value: 0, duration: 1.05, ease: "power2.out" }, 0);
  cameraTimeline.to(photoDim, { value: 1, duration: 0.65, ease: "power2.out" }, 0.2);
  cameraTimeline.to(controls, { autoRotateSpeed: 0, duration: 1.05, ease: "power2.out" }, 0);
  if (firstOpen) {
    cameraTimeline.to(photoOverlay, { opacity: 1, duration: 0.42, ease: "power1.out" }, 1.08);
  }
}

function openPhoto(index) {
  if (photoTransitioning || !introStarted || !photos.length) return;
  const nextIndex = (index + photos.length) % photos.length;
  if (galleryOpen) {
    if (nextIndex === selectedPhoto) return;
    const cardContent = [memoryImage, memoryTitle, memorySubtitle, memoryCount];
    window.gsap.to(cardContent, {
      opacity: 0,
      duration: 0.12,
      onComplete: () => {
        setCard(nextIndex);
        window.gsap.to(cardContent, { opacity: 1, duration: 0.2, ease: "power1.out" });
      },
    });
    flyToPhoto(nextIndex, false);
    return;
  }

  savedCameraState = {
    position: camera.position.clone(),
    target: controls.target.clone(),
    zoom: camera.zoom,
    fov: camera.fov,
    autoRotate: controls.autoRotate,
    autoRotateSpeed: controls.autoRotateSpeed,
    controlsEnabled: controls.enabled,
  };
  galleryOpen = true;
  setCard(nextIndex);
  photoOverlay.hidden = false;
  photoOverlay.style.pointerEvents = "none";
  window.gsap.set(photoOverlay, { opacity: 0 });
  flyToPhoto(nextIndex, true);
}

function closePhoto() {
  if (!galleryOpen || photoTransitioning || !savedCameraState) return;
  const state = savedCameraState;
  const startPosition = camera.position.clone();
  const startTarget = controls.target.clone();
  const startZoom = camera.zoom;
  const startFov = camera.fov;
  const flight = { value: 0 };
  photoTransitioning = true;
  controls.enabled = false;
  photoOverlay.style.pointerEvents = "none";
  if (cameraTimeline) cameraTimeline.kill();

  cameraTimeline = window.gsap.timeline({
    onComplete: () => {
      camera.position.copy(state.position);
      controls.target.copy(state.target);
      camera.zoom = state.zoom;
      camera.fov = state.fov;
      camera.updateProjectionMatrix();
      galleryOpen = false;
      photoOverlay.hidden = true;
      photoOverlay.style.pointerEvents = "";
      window.gsap.set(photoOverlay, { clearProps: "opacity" });
      controls.enabled = state.controlsEnabled;
      controls.autoRotate = state.autoRotate;
      controls.autoRotateSpeed = 0;
      if (state.autoRotate) {
        window.gsap.to(controls, { autoRotateSpeed: state.autoRotateSpeed, duration: 1, ease: "power2.inOut" });
      } else {
        controls.autoRotateSpeed = state.autoRotateSpeed;
      }
      photoDim.value = 0;
      orbitMotion.value = 1;
      savedCameraState = null;
      photoTransitioning = false;
      cameraTimeline = null;
      controls.update();
    },
  });
  cameraTimeline.to(flight, {
    value: 1,
    duration: 1.8,
    ease: "power3.inOut",
    onUpdate: () => {
      camera.position.lerpVectors(startPosition, state.position, flight.value);
      controls.target.lerpVectors(startTarget, state.target, flight.value);
      camera.zoom = THREE.MathUtils.lerp(startZoom, state.zoom, flight.value);
      camera.fov = THREE.MathUtils.lerp(startFov, state.fov, flight.value);
      camera.updateProjectionMatrix();
    },
  }, 0);
  cameraTimeline.to(photoDim, { value: 0, duration: 0.8, ease: "power2.out" }, 0);
  cameraTimeline.to(orbitMotion, { value: 1, duration: 1, ease: "power2.inOut" }, 0.65);
  cameraTimeline.to(photoOverlay, { opacity: 0, duration: 0.3, ease: "power1.in" }, 0);
}

function updateMusicButton(isPlaying) {
  musicButton.setAttribute("aria-pressed", String(isPlaying));
  musicButton.setAttribute("aria-label", isPlaying ? CONFIG.ui.audioOn : CONFIG.ui.audioOff);
  musicIcon.textContent = isPlaying ? "♡" : "♥";
}

async function startMusic() {
  try {
    await music.play();
    updateMusicButton(true);
  } catch (error) {
    console.warn("[music] Playback did not start; use the heart button to retry.", error);
    updateMusicButton(false);
  }
}

musicButton.addEventListener("click", () => {
  if (music.paused) void startMusic();
  else music.pause();
});
music.addEventListener("play", () => updateMusicButton(true));
music.addEventListener("pause", () => updateMusicButton(false));

enterButton.addEventListener("click", () => {
  if (introStarted) return;
  introStarted = true;
  nextShootingStarAt = performance.now() + randomBetween(2000, 6000);
  controls.enabled = false;
  controls.autoRotate = false;
  makeWarpParticles();
  intro.classList.add("is-leaving");
  void startMusic();
  window.setTimeout(() => {
    intro.hidden = true;
  }, 850);
});

function updatePointer(event) {
  const bounds = renderer.domElement.getBoundingClientRect();
  pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
  pointer.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
}

renderer.domElement.addEventListener("pointermove", (event) => {
  updatePointer(event);
  if (photoPointerDown) {
    const distance = Math.hypot(event.clientX - photoPointerDown.x, event.clientY - photoPointerDown.y);
    if (distance > 6) photoPointerDragged = true;
  }
  if (!introStarted || galleryOpen || !photos.length) return;
  raycaster.setFromCamera(pointer, camera);
  const next = raycaster.intersectObjects(photos, false)[0]?.object ?? null;
  if (hoveredSprite !== next) {
    hoveredSprite = next;
    renderer.domElement.style.cursor = hoveredSprite ? "pointer" : "grab";
  }
});

renderer.domElement.addEventListener("pointerleave", () => {
  hoveredSprite = null;
  renderer.domElement.style.cursor = "grab";
});

renderer.domElement.addEventListener("pointerdown", (event) => {
  if (!introStarted || galleryOpen || event.button > 0) return;
  photoPointerDown = { x: event.clientX, y: event.clientY };
  photoPointerDragged = false;
});

renderer.domElement.addEventListener("pointerup", (event) => {
  if (!photoPointerDown) return;
  photoPointerDown = null;
  if (photoPointerDragged || !introStarted || galleryOpen || !photos.length) return;
  updatePointer(event);
  raycaster.setFromCamera(pointer, camera);
  const selected = raycaster.intersectObjects(photos, false)[0]?.object;
  if (selected) {
    openPhoto(selected.userData.index);
  }
});

renderer.domElement.addEventListener("pointercancel", () => {
  photoPointerDown = null;
});

$("#prev-photo").addEventListener("click", () => openPhoto(selectedPhoto - 1));
$("#next-photo").addEventListener("click", () => openPhoto(selectedPhoto + 1));
$("#back-button").addEventListener("click", closePhoto);
photoOverlay.addEventListener("click", (event) => {
  if (event.target === photoOverlay) closePhoto();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closePhoto();
  if (galleryOpen && event.key === "ArrowLeft") openPhoto(selectedPhoto - 1);
  if (galleryOpen && event.key === "ArrowRight") openPhoto(selectedPhoto + 1);
});
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const distantBlackHole = makeDistantBlackHole();

function animate(now) {
  requestAnimationFrame(animate);
  const delta = Math.min((now - elapsed) / 1000 || 0, 0.05);
  elapsed = now;
  controls.update();
  galaxy.rotation.y += delta * 0.012 * orbitMotion.value;
  galaxy.children.forEach((child) => {
    if (child.userData.baseY !== undefined && child.geometry?.type === "PlaneGeometry") {
      child.position.y = child.userData.baseY + Math.sin(now * 0.0007 + child.userData.phase) * 0.12;
    }
  });

  heartGroup.forEach((heart) => {
    const data = heart.userData;
    heart.position.x = Math.cos(data.angle) * data.radius;
    heart.position.z = Math.sin(data.angle) * data.radius;
    heart.position.y = data.yOffset;
    data.angle += data.ySpeed * delta * 60 * orbitMotion.value;
    heart.rotation.y += delta * 0.35;
    heart.rotation.z = Math.sin(now * 0.0007 + data.phase) * 0.16;
  });

  const heart = particleHeart;
  if (heart) {
    heart.position.y = heart.userData.baseY + Math.sin(now * 0.0012 + heart.userData.phase) * 0.22;
    heart.quaternion.copy(camera.quaternion);
    heart.rotateZ(Math.sin(now * 0.0007) * 0.035);
    const heartPoints = heart.children.find((child) => child.isPoints);
    if (heartPoints) heartPoints.material.opacity = 0.97 * (1 - 0.75 * photoDim.value);
  }

  photos.forEach((photo) => {
    const fade = Math.min(1, (now - photo.userData.readyAt) / 450);
    const dim = photo.userData.index === selectedPhoto ? 1 : 1 - 0.75 * photoDim.value;
    photo.material.opacity = fade * dim;
    photo.position.y = photo.userData.baseY + Math.sin(now * 0.00065 + photo.userData.phase) * 0.13;
    const isHovered = photo === hoveredSprite && !galleryOpen;
    const hoverScale = isHovered ? 1.12 : 1;
    photo.material.color.set(isHovered ? CONFIG.colors.lavender : CONFIG.colors.white);
    photo.scale.set(
      photo.userData.baseScale.x * hoverScale,
      photo.userData.baseScale.y * hoverScale,
      1,
    );
  });

  constellationGroups.forEach((item) => {
    const twinkle = 0.82 + Math.sin(now * 0.00055 * item.speed + item.phase) * 0.18;
    item.lines.material.opacity = item.baseOpacity * twinkle;
    item.stars.material.opacity = item.baseStarOpacity * twinkle;
  });

  distantBlackHole.userData.ring.rotation.z += delta * 0.12;
  if (nebulaCloud) nebulaCloud.rotation.y += delta * 0.0013;
  if (cosmicDust) {
    cosmicDust.rotation.y += delta * 0.002;
    cosmicDust.rotation.x += delta * 0.0004;
  }
  if (diskPulse) {
    const pulsePhase = (now % 7200) / 7200;
    const pulseRadius = 1.8 + pulsePhase * 26;
    diskPulse.scale.setScalar(pulseRadius);
    diskPulse.material.opacity = Math.sin(Math.PI * pulsePhase) * 0.12;
  }
  galaxyLight.intensity = 75 + Math.sin(now * 0.00087) * 2.5;
  updateShootingStars(delta, now);
  updateWarp(now);
  renderer.render(scene, camera);
}

addBackgroundStars();
addPurpleAtmosphere();
makeSpiralGalaxy();
makeCentralBlackHole();
makeBeam();
particleHeart = makeHeartParticleCloud();
makeOrbitingHearts();
makeGalaxyMessages();
makeConstellations();
makeShootingStarPool();
controls.enabled = false;
hint.hidden = true;
requestAnimationFrame(animate);

let loaded = 0;
setProgress(loaded);
Promise.all(CONFIG.photos.map(async (photo) => {
  const texture = await loadPhoto(photo);
  loaded += 1;
  setProgress(loaded);
  return texture;
}))
  .then((textures) => {
    createPhotoSprites(textures);
    console.info(`[gallery] ${photos.length} photo sprites created.`);
    if (photos.length !== CONFIG.photoCount) {
      console.warn(`[gallery] Expected ${CONFIG.photoCount} photo sprites; created ${photos.length}.`);
    }
    photos.forEach((photo) => { photo.userData.readyAt = performance.now(); });
    loading.classList.add("is-done");
    window.setTimeout(() => {
      loading.hidden = true;
      intro.hidden = false;
    }, 700);
  })
  .catch((error) => {
    console.error("[gallery] Photo loading failed.", error);
    loadError.hidden = false;
    loadError.textContent = error.message;
  });
