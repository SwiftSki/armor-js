"use strict";
const extras = {
  terrain(render, widthBetween, pSeed, y = render.canvas.height / 2, fill=true, color='#fff'){ //lower widthBetween = jaggier terrain, higher number = smoother terrain
    let height = 0;
    let seedWrite = '';
    let ctx = render.ctx;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(0, render.canvas.height);
    if(pSeed !== undefined){
      let seed = pSeed.toString().split('');
      for(let i = 0; i < render.canvas.width; i += widthBetween){
        if(typeof seed[i / widthBetween] == undefined){
          i = 0;
        }
        height = Number(seed[i / widthBetween]);
        ctx.lineTo(i, y + (height * 10));
      }
      ctx.lineTo(render.canvas.left + render.canvas.width, render.canvas.top + render.canvas.height);
      ctx.lineTo(0, render.canvas.top + render.canvas.height);
      ctx.lineTo(0, y + (pSeed[0] * 10));
      ctx.lineTo(render.canvas.width, render.canvas.height);
      if(!fill){
        ctx.stroke();
      }
      else{
        ctx.fill();
      }
      return pSeed;
    }
    for(let i = 0; i < render.canvas.width + widthBetween; i += widthBetween){
        seedWrite += height.toString();
        height = Math.floor(Math.random() * 5);
        ctx.lineTo(i, y + (height * 10));
      }
    ctx.lineTo(render.canvas.left + render.canvas.width, render.canvas.top + render.canvas.height);
    ctx.lineTo(render.canvas.width, render.canvas.height);
    if(!fill){
      ctx.stroke();
    }
    else{
      ctx.fill();
    }
    return seedWrite;
  }
}