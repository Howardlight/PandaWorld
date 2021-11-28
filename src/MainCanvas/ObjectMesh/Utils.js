
// Helper Func
// Creates 2 Arrays, one with the file names,
// the other with the Paths
// Returns: List in the Shape of [availableTextures, availableTexturesPaths]
export function getAvailableTexturePaths() {
    // list that will contain the output
    let output = [];

    // TODO: explain this maybe
    let availableTextures = [];
    let availableTexturesPaths = [];
    for(let value of textureArr){
        availableTextures.push(value.name + "Texture");
        availableTexturesPaths.push(process.env.PUBLIC_URL + value.fileName);
    }
    
    output = [availableTextures, availableTexturesPaths];
    return output;
}

// Helper Func: returns random [r, r, r] list
export function getRandomImpulse(multiplier) {
    return [
      (Math.round(Math.random()) * 2 - 1) * multiplier,
      (Math.random() * 3) * multiplier,
      (Math.round(Math.random()) * 2 - 1) * multiplier
    ];
}

export const Shapes = [

    "Box", // 0
    "Circle", // 1
    // "Cone", // 2
    "Cylinder", // 3
    // "Dodecahedron", // 4
    // "Icoashedron", // 5
    // "Octagedron", // 6
    // "Torus", // 7

];

// Array that contains all the meshes
export const textureArr = [
    
    {
        name: "Apandah",
        fileName: "/Apandah.jpg"
    },
    {
        name: "Aztrosist",
        fileName: "/Aztro.jpg"
    },
    {
        name: "Jschlatt",
        fileName: "/Jschlatt.png"
    },
    {
        name: "Mikasacus",
        fileName: "/Mikasacus.jpg"
    }
];