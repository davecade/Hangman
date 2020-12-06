const Game = (()=> {

    // -- Cache the DOM
    const $hangman = document.querySelector(".hangman")

    //-- Variables
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    // -- Initialize
    const init = () => {
        render();
        listeners();
    }

    // -- State
    const state = {
        selectedLetters: []
    }

    // -- Event Listeners
    const listeners = () => {

    }

    const createLetters = () => {
        let markup = ''
        alphabet.forEach(letter => {
            markup += `<li ${state.selectedLetters.includes(letter) ? "class='selected'" : ""}>${letter.toUpperCase()}</li>`
        })
        return markup
    }

    const render = () => {
        let markup = `
            <p class="lives">Lives: 0</p>
            <div class="game">
                <h1 class="title">Hangman</h1>
                <canvas class="hangman-board" height="155px"></canvas>
                <div class="guessing-word">____</div>
                <p>Pick a letter below to guess the whole word.</p>
                <ul class="hangman-letters">
                    ${createLetters()}
                </ul>
                <button class="btn">Main Menu</button>
            </div>
        `
        console.log(state.selectedLetters)
        $hangman.innerHTML = markup;
    }

    return {
        init
    }
})();

export default Game;