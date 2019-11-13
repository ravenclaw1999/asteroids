
// setup canvas
let canvas = document.getElementById('display')
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
let ctx = canvas.getContext('2d')

// loading images so we can draw them later
function loadSprite(url) {
  let image = new Image()
  let loaded = new Promise((resolve, reject) => {
    image.onload = resolve
  })
  image.src = url
  return {
    image: image,
    loaded: loaded,
  }
}
let shipSprite = loadSprite('ship.png')
let rockSprite = loadSprite('rock.png')

// draw helpers
function erase() {
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}
