# Pacmen Exercise
The goal of the exercise is to create a simple game where users can click a button to add a PacMan to the webpage and have that head move randomly across the screen, changing direction whenever it hits a screen edge. This repository was created as an assingment for the MIT Full-Stack MERN Certification. For information on other projects I created for this certficiation, visit my [Github Portfolio Page](https://jasonrahm00.github.io/).
## Features
### Original Features
- Add Pacman button which triggers a function to add a Pacman image to the screen randomly
  - Subsequent button pushes will add more pacmen  
- Start Game button which causes the Pacmen to move vertically and horizontally across the screen
  - Each Pacman moves at a different speed
  - Each Pacman will bounce off the edge of the screen and move in the opposite direction
### Enhancements
- Utilized the different pacmen images so the image flips direction to correspond with a change of direction along the x-axis
- Rotate between the mouth-open and mouth-close image whenever the pacman moves
### Improvement Roadmap
- Add a reset button to clear the screen of all pacmen and clear the timeout
- Add a gameboard/container for the pacmen so they don't move over the buttons and obstruct potential button clicks
- Adjust the velocity/focus so the mouth open/closed images don't flip so often; they're moving really fast currently 
## Implementation
- Clone, fork or download the repository
- Load the index.html into the browser or use a local server
## Licensing
Licensed under the terms of the MIT license.
