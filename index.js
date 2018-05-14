const Jimp = require('jimp');
const wresenham = require('wresenham');

const drawLine = (image, from, to, color = 0x000000FF, stroke = 1) => {
  wresenham(from, to, stroke, (x, y) => {
    image.setPixelColor(color, x, y);
  });
}

const drawTable = (image, from, width, columns, rowsCount, rowHeight, stroke, color) => {
  
}

const demo = () => {
  const color = Jimp.rgbaToInt(247, 134, 206, 255);
  console.log(color.toString(16));
  const image = new Jimp(500, 1000, 0xFF0000FF);

  drawLine(image, [0, 50], [500, 50], 0x000000FF, 3);

  image.write('test.jpg');
};

demo();
