import MovingObject from './moving_object';
import OtherFish from './other_fish';
import CatFish from './cat_fish';
import Game from './game';

document.addEventListener("DOMContentLoaded", ()=>{
  const canvas = document.getElementById('canny');
  const c = canvas.getContext('2d');
  const start = document.getElementById('start');






  function gameStart(){
    if (game.started === false) {
      animate()
      start.classList.add('hideStart');
    }
  }



  start.addEventListener("click", gameStart)

  let game = new Game



  function animate(){
    if (game.started === false){
      requestAnimationFrame(animate);
      game.drawGame(c)
    }

  }








})
