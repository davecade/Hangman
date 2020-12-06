import Home from "./home.js"
import { sound } from "../data/sound.js"

const How = (()=> {

    // -- Cache the DOM
    const $hangman = document.querySelector(".hangman")

    // --intialize
    const init = () => {
        render();
        listeners();
    }

    // -- Event Listeners
    const listeners = () => {
        const $mainMenuButton = document.querySelector(".main-menu")
        $mainMenuButton.addEventListener("click", () => {
            Home.init();
            sound.click.play();
        })
    }

    const render = () => {
        let markup = `
            <div class="instructions">
                <h1>INSTRUCTIONS</h1>
                <ul>
                    <li> <i class="fas fa-caret-right"></i> Alright here is how you play</li>
                    <li> <i class="fas fa-caret-right"></i> When you start a new game, the game will automatically choose a random word.</li>
                    <li> <i class="fas fa-caret-right"></i> Your job is to guess that chosen word completely by guessing a letter at a time by clicking on the buttons</li>
                    <li> <i class="fas fa-caret-right"></i> If you successfully guess the word within 7 tries, you win or else you lose.</li>
                    <li> <i class="fas fa-caret-right"></i> If you lose, you will be hanged without mercy.</li>
                </ul>
                <div class="btn main-menu">Main Menu</div>
            </div>
        `

        $hangman.innerHTML = markup;
    }

    return {
        init
    }

})();

export default How;