import textureMercury from "../assets/mercury.jpg";
import textureVenus from "../assets/venus.jpg";
import textureEarth from "../assets/earth.jpg";
import textureMars from "../assets/mars.jpg";
import textureJupiter from "../assets/jupiter.jpg";
import textureSaturn from "../assets/saturn.jpg";
import textureUranus from "../assets/uranus.jpg";
import textureNeptune from "../assets/neptune.jpg";
import textureMoon from "../assets/moon.jpg";
import ringTexture from "../assets/saturnRing.png";

export const planetsConfig = [
  {
    name: "mercury",
    texture: textureMercury,
    size: 0.4,
    xRadius: 20,
    zRadius: 20,
    transSpeed: 0.8
  },
  {
    name: "venus",
    texture: textureVenus,
    size: 1,
    xRadius: 25,
    zRadius: 25,
    transSpeed: 0.5,
    invertRotation: true
  },
  {
    name: "earth",
    texture: textureEarth,
    size: 1.1,
    xRadius: 30,
    zRadius: 30,
    transSpeed: 0.2,
    satelite: true,
    xSatelitePosition: 2,
    zSatelitePosition: 2,
    sateliteSize: 0.2,
    sateliteTexture: textureMoon
  },
  {
    name: "mars",
    texture: textureMars,
    size: 0.6,
    xRadius: 35,
    zRadius: 35,
    transSpeed: 0.09
  },
  {
    name: "jupiter",
    texture: textureJupiter,
    size: 1.9,
    xRadius: 45,
    zRadius: 45,
    transSpeed: 0.07
  },
  {
    name: "saturn",
    ring: true,
    texture: textureSaturn,
    size: 1.7,
    xRadius: 55,
    zRadius: 55,
    transSpeed: 0.05,
    ringTexture: ringTexture
  },
  {
    name: "uranus",
    texture: textureUranus,
    size: 1.3,
    xRadius: 65,
    zRadius: 65,
    transSpeed: 0.03,
    invertRotation: true
  },
  {
    name: "neptune",
    texture: textureNeptune,
    size: 2.29,
    xRadius: 75,
    zRadius: 75,
    transSpeed: 0.02
  }
]