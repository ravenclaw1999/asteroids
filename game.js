
// game state
let ship = new Ship()
let lasers = []
let rocks = [
  new Rock(),
  new Rock(),
  new Rock(),
  new Rock(),
  new Rock(),
]
let keyPressed = {}

// track user input
window.addEventListener('keydown', event => {
  keyPressed[event.code] = true
})
window.addEventListener('keyup', event => {
  keyPressed[event.code] = false
})
window.addEventListener('keypress', event => {
  if(event.code === 'Space'){
    lasers.push(ship.pewpew())
  }
})

// game loop
let ticks = 0
function loop() {
  ticks += 1
  if(ticks % 300 === 0){
    rocks.push(new Rock())
  }
  // check user input to change game state
  if (keyPressed['ArrowLeft']) {
    ship.rotateLeft()
  }
  if (keyPressed['ArrowRight']) {
    ship.rotateRight()
  }
  if (keyPressed['ArrowUp']) {
    ship.thrust()
  }

  // state steps through time
  ship.step()
  lasers.forEach(l => l.step())
  rocks.forEach(r => r.step())

  rocks.forEach(r => {
    lasers.forEach(l => {
      r.checkForHit(l)
    })
  })

  // remove hit things 
  rocks = rocks.filter(r => r.hit === false)
  lasers = lasers.filter(l => l.hit === false)
  // draw all
  erase()
  ship.draw()
  lasers.forEach(l => l.draw())
  rocks.forEach(r => r.draw())

  // trigger loop
  setTimeout(() => loop(), 1000 / 60)
}

// wait for images to load
async function loadGame() {
  await shipSprite.loaded
  await rockSprite.loaded
  loop()
}
loadGame()




