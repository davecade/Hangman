
const Home = (()=> {

    // -- Render the DOM
    const $hangman = document.querySelector(".hangman")
    const $newGameButton = document.querySelector(".new-game")
    
    // -- Initialize
    const init = () => {
        render();
        listeners();
    }

    // -- Event Listeners
    const listeners = () => {
        
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