import Game from './game.js'
import Home from './home.js';

const End = (() => {

    // -- State of the game
    const state = {
        win: false
    }

    // -- Initialize
    const init = () => {
        Game.state.gameInProgress = false;
        render();
        listeners();
    }

    // -- Render
    const render = () => {
        const $display = document.querySelector(".display")

        if (Game.state.lives > 0) {
            state.win = true;
        }

        let markup = `
            <div class="end">
                <h2 class="end-message">You ${state.win ? "Win" : "Lose"}!</h2>
            </div>
        `
        $display.innerHTML = markup;

        const $message = document.querySelector(".end-message")
        $message.style = state.win ? "color: #4dcc7d" : "color: #cc3232"
    }

    return {
        init,
        state
    }
})();

export default End;