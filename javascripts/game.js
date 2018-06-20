

class Game {
  constructor(){
    this.allFish = []
  }

  addFish(fish){
    this.allFish.push(this.randomize(fish))
  }

  drawGame(ctx){
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.allFish.forEach((fish, idx) =>{
      if (fish.pos[0] < 0 || fish.pos[0] > 700) {
        this.allFish.shift()
      }

      if (fish.isCollidedWith(cat_fish)) {
        this.allFish.splice(idx, 1);

      }

      this.allFish[idx].update(1, ctx)


    })
    this.allFish[this.allFish.length-1].update(0, ctx)
    console.log(this.allFish.length)
  }

  randomize(fish){
    let random_y = Math.random() * (Game.DIM_Y - fish.rad);
    let num = Math.random();

    fish.height = fish.height * 0.25 + (fish.height * 0.75 * num)
    fish.width = fish.width * 0.25 + (fish.width * 0.75 * num)

    switch (Math.round(Math.random())) {

      case 0:
        fish.pos = [0, random_y];
        fish.vel = Math.abs(fish.vel);
        return fish;

      case 1:
        fish.pos = [Game.DIM_X - fish.rad, random_y];
        fish.vel = -fish.vel;
        return fish;

      default:
        fish.pos = [Game.DIM_X - fish.rad, random_y];
        fish.vel = -fish.vel;
        return fish;
    }
  }

}

Game.DIM_X = 700;
Game.DIM_Y = 400;
Game.NUM_ASTEROIDS;


export default Game;
