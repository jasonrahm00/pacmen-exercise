var direction = 0
var focus = 0
const pacArray = [
  ['pacman1.png', 'pacman2.png'],
  ['pacman3.png', 'pacman4.png'],
]
const pacMen = [] // This array holds all the pacmen

function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  }
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10) // {x:?, y:?}
  let position = setToRandom(200)
  // Add image to div id = game
  let game = document.getElementById('game')
  let newimg = document.createElement('img')
  newimg.style.position = 'absolute'
  newimg.src = './images/' + pacArray[direction][focus]
  newimg.width = 100
  newimg.style.left = position.x
  newimg.style.top = position.y

  // add new Child image to game
  game.appendChild(newimg)
  // return details in an object
  return {
    position,
    velocity,
    newimg,
    direction,
    focus,
  }
}

function update() {
  //loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    item.focus = (item.focus + 1) % 2
    checkCollisions(item)
    item.position.x += item.velocity.x
    item.position.y += item.velocity.y

    item.newimg.style.left = item.position.x
    item.newimg.style.top = item.position.y

    // Update the image to open/close the mouth when they're moving
    item.newimg.src = './images/' + pacArray[item.direction][item.focus]
  })
  setTimeout(update, 20)
}

function checkCollisions(item) {
  // Determine whether each pacman hits the edges of the screeen
  // Reverse their direction if they do
  if (
    item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
    item.position.x + item.velocity.x < 0
  ) {
    item.velocity.x = -item.velocity.x
    item.direction = item.direction === 0 ? 1 : 0
  }

  if (
    item.position.y + item.velocity.y + item.newimg.height >
      window.innerHeight ||
    item.position.y + item.velocity.y < 0
  ) {
    item.velocity.y = -item.velocity.y
  }
}

function makeOne() {
  pacMen.push(makePac()) // add a new PacMan
}
