import Game from './game.js'

const End = (()=> {

    // -- Cache the DOM
    const $hangman = document.querySelector(".hangman")

    // -- Initialize
    const init = () => {
        render();
        listeners();
    }

    const state = () => {
        win: false
    }

    // -- Render
    const render = () => {
        if(Game.state.lives > 0) {
            state.win = true;
        } 

        let markup = `
            <div class="end">
                <h1 class="title">Hangman</h1>
                <h2>You ${state.win ? "Win" : "Lose"}!</h2>
                <h2>The word is: CAT</h2>
                <button class="btn">Main Menu</button>
            </div>
        `

        $hangman.innerHTML = markup;
    }

    return {
        init
    }
})();

export default End;