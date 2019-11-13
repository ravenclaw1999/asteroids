class Rock {
  constructor() {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height

    // make random number between -3, 3
    this.dx = (6 * Math.random()) - 3
    this.dy = (6 * Math.random()) - 3

    this.size = 100
    this.hit = false
  }
  checkForHit(laser){
    let width = Math.abs(this.x - laser.x)
    let height = Math.abs(this.y - laser.y)
    let diagonal = Math.sqrt(width*width + height*height)
    let isContained = diagonal <= this.size / 2
    if (isContained){
      this.hit = true
      laser.hit = true
    }
  }
  step() {
    // apply speed dx,dy to ship position x,y
    this.x += this.dx
    this.y += this.dy

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
    ctx.drawImage(
      rockSprite.image,
      this.x - this.size/2,
      this.y - this.size/2,
      this.size,
      this.size
    )
  }
}












