class Laser{
	constructor(shipX, shipY){
		this.x = shipX
		this.y = shipY
	}
	step(){

	}
	draw(){
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