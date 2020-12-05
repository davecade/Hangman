import How from "./how.js"

const Home = (()=> {

    // -- Render the DOM
    const $hangman = document.querySelector(".hangman")

    
    // -- Initialize
    const init = () => {
        render();
        listeners();
    }

    // -- Event Listeners
    const listeners = () => {
        const $newGameButton = document.querySelector(".new-game")
        const $instructions = document.querySelector(".instructions")

        $newGameButton.addEventListener('click', () => {
            console.log("New Game button clicked")
        })

        $instructions.addEventListener('click', () => {
            How.init();
        })


    }

    const render = () => {
        let markup = `
            <div class="start-screen">
                <h1 class="title">Hangman</h1>
                <div class="btn new-game">New Game</div>
                <div class="btn instructions">How to Play</div>
            </div>
        `
        $hangman.innerHTML = markup;
    }

    return {
        init
    }
})();

export default Home;