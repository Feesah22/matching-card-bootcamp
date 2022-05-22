// start game all cards blank
// when you click on a card it flips over to show image
// you can only have two cards showing at one time (if they arent matching???)
// when two are the same stay flipped over, 
// use sort & Math.random methods to sort cards randomly 

// add event listener to target the 10 cards
// maybe toggle flipped and not flipped??? idk
// adding src to image and if it doesnt match set back to ""
// setTimeout ===> to flip over if they don't match

//Event Listener to flip the card when it is clicked


// Create an array for all 10 possible cards (two of each image)
const cards = [
    'images/beauty.jpeg',
    'images/beauty.jpeg',
    'images/dope.jpeg',
    'images/dope.jpeg',
    'images/fashion.jpeg',
    'images/fashion.jpeg',
    'images/gang.jpeg',
    'images/gang.jpeg',
    'images/sneakers.jpeg',
    'images/sneakers.jpeg',]
    let shuffledImages=[]
    while(cards.length>0){
        let randomNumber =Math.floor(Math.random() * cards.length)
        shuffledImages.push(cards[randomNumber])
        cards.splice(randomNumber, 1)
    }
    const imageSrc=Array.from(document.querySelectorAll('.hide'))
    for (let i =0; i<imageSrc.length; i++){
        imageSrc[i].src=shuffledImages[i]
    }

// sorts the cards
// This will have all of our images in it
// the initial card of a match
let count = 0

function flipCard() {
    //console.log(e.target)
    if (this.children[0].classList.contains('hide') === false) {
        return
    }
    const check =Array.from(document.querySelectorAll(".check"))
    
    if(check.length > 1){
        return
    }

    this.children[0].classList.toggle('hide')
    this.children[0].classList.add('check')
    this.children[1].classList.toggle('hide')
    this.children[1].classList.add('backside')
    
    count++
    console.log(count)
    match()
    endGame()
}



function match() {
    const twoCards = Array.from(document.querySelectorAll('.check'))
    const backTwoCards = Array.from(document.querySelectorAll('.backside'))
    
    if (count % 2 === 0) {
        if (twoCards[0].src === twoCards[1].src) {
            twoCards.forEach(image => image.classList.remove('check'))
        } else { //remove check and toggle hide after 5 seconds
            setTimeout(function () {
                backTwoCards.forEach(image => image.classList.toggle('hide'))
                twoCards.forEach(image => image.classList.remove('check'))
                twoCards.forEach(image => image.classList.toggle('hide'))   
            }, 1000)
            count -=2
        }
        backTwoCards.forEach(image => image.classList.remove('backside'))
    } else {
        return
    }
}

function endGame(){
    if(count ===10){
        document.querySelector('.result').innerText= "you Win!!!"
    }
}


//if count is even, run function that checks if src matches
//if src is same then take away event listener and always have it showing
//if src is different then setTimeout to toggle them back ie. run flip card
//if count is odd return



// i is iterating through the cards, starting from the first card
//imgArray.forEach((e, i) => e.src = cards[i])



// if src === src then they match


// https://www.w3schools.com/jsref/met_loc_reload.asp
const startOver = () => {
    location.reload()
}

document.querySelectorAll('.card').forEach(card => card.addEventListener('click',flipCard))
document.querySelector('button').addEventListener('click', startOver)
