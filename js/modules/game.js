import Home from "./home.js"
import { sound } from "../data/sound.js"
import End from "./end.js";

const Game = (()=> {

    // -- Cache the DOM
    const $hangman = document.querySelector(".hangman")

    //-- Variables
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const words = ['apple', 'cat', 'headphones', 'sanitizer']
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
        lives: 10
    }

    // -- Event Listeners
    const listeners = () => {
    
        $hangman.addEventListener('click', event => {
            if(event.target.parentNode.matches('.hangman-letters')) {
                check(event.target.innerHTML.toLowerCase())
                sound.click.play();
                render();
            } else if(event.target.matches('.main-menu')) {
                Home.init();
                sound.click.play();
            }
        })
    }

    const resetGame = () => {
        state.lives = 10;
        state.selectedLetters = []
        End.state.win = false;
    }

    const alreadySelected = letter => {
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
            markup += `<li ${alreadySelected(letter) ? "class='selected'" : ""}>${letter.toUpperCase()}</li>`
        })
        return markup
    }

    const check = guess => {
        if(!alreadySelected(guess)) {
            state.selectedLetters.push(guess)
            if(answer.includes(guess)) {
                updateGuessingWord(guess)

            } else {
                state.lives--;
            }
        } 
    }

    const checkGameOver = () => {
        if(guessingWord.join("") === answer.join("")) {
            End.init();
        } else if(state.lives < 1) {
            End.init();
        }
    }

    const render = () => {
        let markup = `
            <p class="lives">Lives: ${state.lives}</p>
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
        checkGameOver();
    }

    return {
        init,
        state,
        resetGame
    }
})();

export default Game;