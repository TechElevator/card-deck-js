document.addEventListener( 'DOMContentLoaded',
    () => {

        const moveToLeftBtn = document.getElementById('move-to-left');
        moveToLeftBtn.addEventListener('click', moveToLeft);

        const moveToRightBtn = document.getElementById('move-to-right');
        moveToRightBtn.addEventListener('click', moveToRight);

        const shuffleLeftBtn = document.getElementById('shuffle-left');
        shuffleLeftBtn.addEventListener('click', ()=>{shuffleDeck('left')});

        const shuffleRightBtn = document.getElementById('shuffle-right');
        shuffleRightBtn.addEventListener('click', ()=>{shuffleDeck('right')});

    }
)

function moveToRight() {
    // Nothing to move.
    if (deck.length === 0) {
         window.alert('Hey, there is nothing to move.')
         return;
    }
  
    let currentCard = deck[0];
    deckSecondHalf.push(currentCard);
    deck.shift(currentCard);
    displayDeck('right');
    displayDeck('left');
}

function moveToLeft() {
    // Nothing to move.
    if (deckSecondHalf.length === 0) {
         window.alert('Hey, there is nothing to move.')
         return;
    }
  
    let currentCard = deckSecondHalf[0];
    deck.push(currentCard);
    deckSecondHalf.shift(currentCard);
    displayDeck('right');
    displayDeck('left');
}

function buildDeck() {

    for (let i = 1; i < 14; i++) {
        deck.push( {suit: 'H', value: i})
        // deck.push(new Card('H', i));
    }

    for (let i = 1; i < 14; i++) {
        // deck.push(new Card('S', i));
        deck.push( {suit: 'S', value: i})
    }

    for (let i = 1; i < 14; i++) {
        // deck.push(new Card('C', i));
        deck.push( {suit: 'C', value: i})
    }

    for (let i = 1; i < 14; i++) {
        // deck.push(new Card('D', i));
        deck.push( {suit: 'D', value: i})
    }

    console.log(deck);
}


// Fisher Yates.
function shuffleDeck(half) {
  
    const deckToShuffle = half === 'left' ? deck : deckSecondHalf;

    if (deckToShuffle.length === 0) {
         window.alert('Hey there is nothing to shuffle.');
         return;
    }

    for (let i = deckToShuffle.length - 1; i > 0; i--) {

        let random = Math.floor(Math.random() * (i + 1));
        let currentCard = deckToShuffle[i];
        let randomCard = deckToShuffle[random];

        deckToShuffle[i] = randomCard;
        deckToShuffle[random] = currentCard;
    }

    displayDeck('left');
    displayDeck('right');
}

function displayDeck(half) {

    const deckToDisplay = half === 'left' ? deck : deckSecondHalf;
    const parentContainer = document.getElementById(half);

    parentContainer.innerHTML = '';

    for (let i=0; i < deckToDisplay.length; i++) {
      
        // outputString += '<div class=';
        const cardDiv = document.createElement('div');
    
        if (deckToDisplay[i].suit == 'H'){
            cardDiv.classList.add('redCard');
            cardDiv.innerHTML = '&hearts;';
        }

        else if (deckToDisplay[i].suit == 'S'){
            cardDiv.classList.add('blackCard');
            cardDiv.innerHTML = '&spades;';
        }

        else if (deckToDisplay[i].suit == 'D'){
            cardDiv.classList.add('redCard');
            cardDiv.innerHTML = '&diams;';
        }

        else if (deckToDisplay[i].suit == 'C'){
            cardDiv.classList.add('blackCard');
            cardDiv.innerHTML = '&clubs;';
        }
        
        let outputString = determineCardValue(deckToDisplay[i].value);
        cardDiv.innerHTML += outputString;
      
        parentContainer.appendChild(cardDiv);

    }

    // let currentDeck = document.getElementById(half);
    // currentDeck.innerHTML = outputString;
}

function determineCardValue(cardValue) {

  if (cardValue === 1) {
    return 'A';
  }
  else if (cardValue === 11) {
    return 'J';
  }
  
   else if (cardValue === 12) {
    return 'Q';
  }
  
    else if (cardValue === 13) {
    return 'K';
  }
  
  return cardValue;
}

let deck = new Array();
let deckSecondHalf = new Array();
buildDeck();
displayDeck('left');