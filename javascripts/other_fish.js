import MovingObject from './moving_object'

class OtherFish extends MovingObject {
  constructor(props){
    super(props)
    let num = Math.random();
    this.color = "rgba(198, 85, 60, 0)";
    this.radius = 37;
    this.height = 75;
    this.width = 75;
    this.vel = 1;

    let fish_pic = new Image();
    fish_pic.src="https://i.imgur.com/6AH9dwz.png"
    this.fish_pic = fish_pic
  }

  update(vel, ctx){
    if (this.vel < 0) {
      vel = -vel
    }
    this.pos[0] += vel
    this.draw(ctx)
    ctx.drawImage(this.fish_pic, this.pos[0]-4, this.pos[1]-5, this.width+10, this.height+10)

  }
}

OtherFish.RND_DM = Math.random()




export default OtherFish;
