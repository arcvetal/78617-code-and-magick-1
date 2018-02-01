'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var MAX_BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_X = CLOUD_X + BAR_GAP;
var BAR_Y = 240;
var TEXT_STYLE = '16px PT Mono';
var TEXT_GAP = 15;

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (maxElement < arr[i]) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y, font, fontColor) {
  ctx.fillStyle = fontColor;
  ctx.font = font;
  ctx.textBaseline = 'hanging';
  ctx.fillText(text, x, y);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');

  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 225, 20);
  ctx.fillText('Список результатов:', 215, 35);

  var maxTime = getMaxElement(times);


  for (var i = 0; i < times.length; i++) {

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }
    ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * [i], BAR_Y, BAR_WIDTH, -(MAX_BAR_HEIGHT * times[i]) / maxTime);

    renderText(ctx, names[i], BAR_X + (BAR_WIDTH + BAR_GAP) * [i], BAR_Y + TEXT_GAP, TEXT_STYLE, '#000');

    renderText(ctx, Math.round(times[i]), BAR_X + (BAR_WIDTH + BAR_GAP) * [i], (BAR_Y - (MAX_BAR_HEIGHT * times[i]) / maxTime) - 20, TEXT_STYLE, '#000');
  }
};
