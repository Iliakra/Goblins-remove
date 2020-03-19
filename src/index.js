
const newImg = document.createElement('img');
newImg.classList.add('goblin-image');
newImg.setAttribute('src', './image/goblin.png');

const positions = document.getElementsByClassName('field');
let images = document.getElementsByClassName('goblin-image');
const goblinImage = images[0];
const positionsArray = [...positions];
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function removeGoblin() {
  let randomNum = getRandomInRange(0, 16);
  const parentElement = positionsArray[randomNum];
  if (!parentElement.contains(goblinImage)) {
    parentElement.appendChild(newImg);
    images = [...images];
  } else if (images.length > 1) {
    images[0].remove();
  } else {
    removeGoblin();
  }
}


setInterval(removeGoblin, 1000);
