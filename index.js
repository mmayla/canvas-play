const Jimp = require('jimp');
const wresenham = require('wresenham');
const _ = require('lodash');

const drawLine = (image, from, to, color = 0x000000FF, stroke = 1) => {
  wresenham(from, to, stroke, (x, y) => {
    image.setPixelColor(color, x, y);
  });
}

const drawTable = (image, from, columns, rowsCount, rowHeight, color = 0x000000FF, stroke = 1) => {
  const height = rowHeight * rowsCount;
  const width = _.sum(columns);

  // Draw rows
  let rowx = from[0];
  let rowy = from[1];

  for (let i = 0; i < rowsCount + 1; i+=1) {
    drawLine(image, [rowx, rowy], [rowx + width, rowy], color, stroke);
    rowy += rowHeight;
  }

  // Draw columns
  let colx = from[0];
  let coly = from[1];

  for (let i = 0; i < columns.length + 1; i+=1) {
    drawLine(image, [colx, coly], [colx, from[1] + height], color, stroke);
    colx += columns[i];
  }
}

const demo = () => {
  const color = Jimp.rgbaToInt(247, 134, 206, 255);
  console.log(color.toString(16));
  const image = new Jimp(700, 1100, 0xFFFFFFFF);

  // drawLine(image, [0, 50], [500, 50], 0x000000FF, 3);
  drawTable(image, [50, 30], [250, 100, 100, 100], 20, 50, 0x000000FF, 2);

  image.write('dist/test.jpg');
};

demo();
