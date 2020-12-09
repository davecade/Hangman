const Board = (() => {
    let canvas
    let c

    const init = () => {
        canvas = document.querySelector(".hangman-board")
        c = canvas.getContext("2d")
        c.lineWidth = 2
        c.strokeStyle = "#c252df"
        base();
    }

    const base = () => {
        line1();
    }

    const draw = (startX, startY, endX, endY) => {
        c.moveTo(startX, startY)
        c.lineTo(endX, endY)
        c.stroke()
    }

    const line1 = () => draw(0, 150, 150, 150);

    return {
        init
    }
})();

export default Board;