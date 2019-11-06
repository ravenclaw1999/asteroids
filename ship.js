
// define classes to track our state
class Ship {
  constructor() {
    this.sprite = shipSprite.image
    // x,y describe the center of the ship
    this.x = canvas.width / 2
    this.y = canvas.height / 2
    // dx,dy describe the speed the ship is traveling
    this.dx = 0
    this.dy = 0
    // the angle is in radians, meaning it goes from 0 - 2*Math.PI
    this.angle = Math.PI * 1.5
    this.size = 50
  }
  rotateLeft() {
    this.angle -= 0.1
  }
  rotateRight() {
    this.angle += 0.1
  }
  thrust() {
    this.dx += Math.cos(this.angle)
    this.dy += Math.sin(this.angle)
  }
  step() {
    // apply speed dx,dy to ship position x,y
    this.x += this.dx
    this.y += this.dy

    // slow down by bringing speed closer to 0
    this.dx *= 0.98
    this.dy *= 0.98

    // check if out of bound, to wrap to the other side
    if (this.x > canvas.width + this.size) {
      this.x = 0
    }
    if (this.x < 0 - this.size) {
      this.x = canvas.width
    }
    if (this.y > canvas.height + this.size){
      this.y = 0
    }
    if (this.y < 0 - this.size) {
      this.y = canvas.height
    }
  }
  draw() {
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.rotate(this.angle)
    ctx.drawImage(this.sprite, -this.size / 2, -this.size / 2, this.size, this.size)
    ctx.restore()
  }
}















