const Board = (() => {

    const init = () => {
        const $canvas = document.querySelector(".hangman-board")
        let c = $canvas.getContext("2d")
        c.fillStyle = "#FF0000";
        c.fillRect(0, 0, 150, 75);
    }

    return {
        init
    }
})();

export default Board;