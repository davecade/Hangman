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
                <h2>You ${state.win ? "Win" : "Lose"}!</h2>
            </div>
        `
        $display.innerHTML = markup;
    }

    return {
        init,
        state
    }
})();

export default End;