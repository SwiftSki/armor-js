const extras = {
  terrain(render, widthBetween, pSeed){ //lower number = jaggier terrain, higher number = smoother terrain
    let height = 0;
    let seedWrite = '';
    let ctx = render.ctx;
    let y = render.canvas.height / 2;
    ctx.strokeStyle = '#ffffff';
    ctx.beginPath();
    if(pSeed !== undefined){
      let seed = pSeed.toString().split('');
      seed += '1'
      for(let i = 0; i < (seed.length * widthBetween) + 1; i += widthBetween){
        height = Number(seed[i / 25]); //why divide the index by 25 and not the value?
        ctx.lineTo(i, y + (height * 10));
      }
      ctx.stroke();
      return pSeed;
    }
    for(let i = 0; i < render.canvas.width + 1; i += widthBetween){
        seedWrite += height.toString()
        height = Math.floor(Math.random() * 4);
        ctx.lineTo(i, y + (height * 10));
      }
    ctx.stroke();
    return Number(seedWrite);
  }
}
