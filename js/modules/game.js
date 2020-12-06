import Home from "./home.js"

const Game = (()=> {

    // -- Cache the DOM
    const $hangman = document.querySelector(".hangman")

    //-- Variables
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const words = ['apple', 'cat', 'headphones', 'sanitizer']
    let lives = 10;
    let answer
    let guessingWord

    // -- Initialize
    const init = () => {
        answer = words[Math.floor(Math.random()*words.length)].split("")
        guessingWord = Array(answer.length).fill('_')
        resetGame();
        render();
        listeners();
    }

    // -- State
    const state = {
        selectedLetters: [],
    }

    // -- Event Listeners
    const listeners = () => {
    
        $hangman.addEventListener('click', event => {
            if(event.target.parentNode.matches('.hangman-letters')) {
                check(event.target.innerHTML.toLowerCase())
                render();
            } else if(event.target.matches('.main-menu')) {
                Home.init();
            }
        })
    }

    const resetGame = () => {
        lives = 10;
        state.selectedLetters = []
    }

    const alreadyTaken = letter => {
        return state.selectedLetters.includes(letter)
    }

    const updateGuessingWord = guess => {
        answer.forEach((letter, index) => {
            if(letter===guess.toLowerCase()) {
                guessingWord[index] = guess.toLowerCase()
            }
        })
    }

    const createLetters = () => {
        let markup = ''
        alphabet.forEach(letter => {
            markup += `<li ${alreadyTaken(letter) ? "class='selected'" : ""}>${letter.toUpperCase()}</li>`
        })
        return markup
    }

    const check = guess => {
        if(!alreadyTaken(guess)) {
            state.selectedLetters.push(guess)

            if(answer.includes(guess)) {
                updateGuessingWord(guess)
            } else {
                lives--;
            }
        } 
    }

    const render = () => {
        let markup = `
            <p class="lives">Lives: ${lives}</p>
            <div class="game">
                <h1 class="title">Hangman</h1>
                <canvas class="hangman-board" height="155px"></canvas>
                <div class="guessing-word">${guessingWord.join("")}</div>
                <p>Pick a letter below to guess the whole word.</p>
                <ul class="hangman-letters">
                    ${createLetters()}
                </ul>
                <button class="btn main-menu">Main Menu</button>
            </div>
        `
        $hangman.innerHTML = markup;
    }

    return {
        init
    }
})();

export default Game;