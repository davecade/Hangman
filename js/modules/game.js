import Home from "./home.js"
import {sound} from "../data/sound.js"
import End from "./end.js";
import Board from "./board.js"

const Game = (() => {

    // -- Cache the DOM
    const $hangman = document.querySelector(".hangman")

    //-- Variables
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const words = ['apple', 'cat', 'headphones', 'sanitizer']
    let guessingWord

    // -- Initialize
    const init = () => {
        state.answer = words[Math.floor(Math.random() * words.length)].split("")
        guessingWord = Array(state.answer.length).fill('_')
        resetGame();
        render();
        Board.init();
        listeners();
    }

    // -- State
    const state = {
        selectedLetters: [],
        lives: 7,
        answer: null
    }

    // -- Event Listeners
    const listeners = () => {

        $hangman.addEventListener('click', event => {
            if (event.target.parentNode.matches('.hangman-letters')) {
                check(event.target.innerHTML.toLowerCase())
                sound.click.play();
                render();
            } else if (event.target.matches('.main-menu')) {
                Home.init();
                sound.click.play();
            }
        })
    }

    const resetGame = () => {
        state.lives = 7;
        state.selectedLetters = []
        End.state.win = false;
        Board.state.parts = []
    }

    const alreadySelected = letter => {
        return state.selectedLetters.includes(letter)
    }

    const updateGuessingWord = guess => {
        state.answer.forEach((letter, index) => {
            if (letter === guess.toLowerCase()) {
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
        if (!alreadySelected(guess)) {
            state.selectedLetters.push(guess)
            if (state.answer.includes(guess)) {
                updateGuessingWord(guess)
            } else {
                state.lives--;
                Board.setLives(state.lives)
            }
        }
    }

    const checkGameOver = () => {
        if (guessingWord.join("") === state.answer.join("")) {
            End.init();
        } else if (state.lives < 1) {
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
        Board.render();
        checkGameOver();
    }

    return {
        init,
        state,
        resetGame
    }
})();

export default Game;