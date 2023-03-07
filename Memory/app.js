///MEMORY GAME///

document.addEventListener("DOMContentLoaded", () => {

    //card options
    const cardArray = [
        {
            name: "Blue",
            img: "images/Blue.jpg"
        },
        {
            name: "Blue",
            img: "images/Blue.jpg"
        },
        {
            name: "Color",
            img: "images/Color.jpg"
        },
        {
            name: "Color",
            img: "images/Color.jpg"
        },
        {
            name: "Green",
            img: "images/Green.jpg"
        },
        {
            name: "Green",
            img: "images/Green.jpg"
        },
        {
            name: "Rose",
            img: "images/Rose.jpg"
        },
        {
            name: "Rose",
            img: "images/Rose.jpg"
        },
        {
            name: "Stars",
            img: "images/Stars.jpg"
        },
        {
            name: "Stars",
            img: "images/Stars.jpg"
        },
        {
            name: "Yellow",
            img: "images/Yellow.jpg"
        },
        {
            name: "Yellow",
            img: "images/Yellow.jpg"
        },
    ]
    

//Random  cards

cardArray.sort(() => 0.5 - Math.random());

//create gameboard

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result")
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

// check for matches

function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      //alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      //alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.jpg')
      cards[optionTwoId].setAttribute('src', 'images/white.jpg')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      //alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

// flip your card
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

createBoard();

}) 




