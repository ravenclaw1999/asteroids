class Laser {
  constructor(shipX, shipY, shipDX, shipDY) {
    this.x = shipX
    this.y = shipY

    this.dx = shipDX
    this.dy = shipDY

    this.hit = false
  }
  step() {
    // todo make the lasers move
    this.x += this.dx
    this.y += this.dy
  }
  draw() {
    ctx.fillStyle = 'white'
    ctx.beginPath()
    ctx.arc(
      this.x,
      this.y,
      3,
      0,
      2 * Math.PI,
      false
    )
    ctx.fill()
  }
}
