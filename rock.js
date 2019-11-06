class Rock{
	constructor(){
		this.x = Math.random() * canvas.width
		this.y = Math.random() * canvas.height

		this.dx = (6 * Math.random()) - 3 // generates number between 0 and 1
		this.dy = (6 * Math.random()) - 3

		this.size = 100
	}

	step(){
		this.x += this.dx
		this.y += this.dy

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


	draw(){
		ctx.drawImage(
			rockSprite.image,
			this.x - this.size/2,
			this.y - this.size/2,
			this.size,
			this.size
		)

	}

}