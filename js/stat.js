'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  
  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, 420, 270);
  
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 225, 20);
  ctx.fillText('Список результатов:', 215, 35);
};