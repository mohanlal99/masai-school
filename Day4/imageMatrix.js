import { read, intToRGBA } from "jimp";

const imagePath = "E:/Javascript/Day4/mohanlal.jpg";

read(imagePath)
  .then((image) => {
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    const imgMatrix = [];

    for (let y = 0; y < height; y++) {
      const row = [];
      for (let x = 0; x < width; x++) {
        const pixelColor = intToRGBA(image.getPixelColor(x, y));
        row.push([pixelColor.r, pixelColor.g, pixelColor.b]);
      }
      imgMatrix.push(row);
    }

    console.log("Original Image Matrix:");
    console.log(imgMatrix);
    console.log("Matrix Shape: ", [height, width, 3]);
  })
  .catch((err) => {
    console.error("Error loading image:", err);
  });
