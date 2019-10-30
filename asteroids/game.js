
// game state
let ship = new Ship()
let keyPressed = {}

// check for user input
window.addEventListener('keydown', event => {
  keyPressed[event.code] = true
})

window.addEventListener('keyup', event => {
  keyPressed[event.code] = false 
})

// game loop
function loop() {
  // change game state
  if(keyPressed['ArrowLeft']){
    ship.rotateLeft()
  }
  if(keyPressed['ArrowRight']){
    ship.rotateRight()
  }
  if(keyPressed['ArrowUp']){
    ship.thrust()
  }
  
  ship.step()

  // draw all
  erase()
  ship.draw()

  // trigger loop
  setTimeout(() => loop(), 1000 / 60) //will run after a certain amount of time, change second number to change speed
}

// wait for images to load
async function loadGame() {
  await shipSprite.loaded
  await meteorSprite.loaded
  // add images here
  loop()
}
loadGame()
