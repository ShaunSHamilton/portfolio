const sharp = require("sharp");
const fs = require("fs");
const directory = "./src/images";

fs.readdirSync(directory).forEach((filename) => {
  const file = filename.slice(0, -4);
  sharp(`${directory}/${file}`)
    .resize(300, 160) // width, height
    .toFile(`${directory}/${file}-small.jpg`);
  sharp(`${directory}/${file}`)
    .resize(400, 225) // width, height
    .toFile(`${directory}/${file}-medium.jpg`);
  sharp(`${directory}/${file}`)
    .resize(600, 270) // width, height
    .toFile(`${directory}/${file}-large.jpg`);
});
