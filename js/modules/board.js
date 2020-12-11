import Game from "./game.js"

const Board = (() => {
    let lives = null;
    let canvas;
    let c;

    const state = {
        parts: []
    }

    const init = () => {
        state.parts = [line1, line2, line3]
        render();
    }



    const draw = (startX, startY, endX, endY) => {
        c.moveTo(startX, startY)
        c.lineTo(endX, endY)
        c.stroke()
    }

    const head = () => {
        c.beginPath();
        c.arc(100, 42, 12, 0, 2 * Math.PI);
        c.stroke();
    }

    const line1 = () => draw(0, 145, 150, 145);
    const line2 = () => draw(10, 145, 10, 10)
    const line3 = () => draw(10, 10, 100, 10)
    const rope = () => draw(100, 10, 100, 30)
    const torso = () => draw(100,54, 100, 100)
    const leftArm = () => draw(100, 65, 80, 80)
    const rightArm = () => draw(100, 65, 120, 80)
    const leftLeg = () => draw(100, 100, 80, 125)
    const rightLeg = () => draw(100, 100, 120, 125)

    const render = () => {
        canvas = document.querySelector(".hangman-board")
        c = canvas.getContext("2d")
        c.lineWidth = 2
        c.strokeStyle = "#c252df"
        state.parts.forEach(line => {
            line();
        })
    }

    const addLines = () => {
        if(lives===6) {
            state.parts.push(rope);
        }

        if(lives===5) {
            state.parts.push(head);
        }

        if(lives===4) {
            state.parts.push(torso);
        }

        if(lives===3) {
            state.parts.push(leftArm);
        }

        if(lives===2) {
            state.parts.push(rightArm);
        }

        if(lives===1) {
            state.parts.push(leftLeg);
        }

        if(lives===0) {
            state.parts.push(rightLeg);
        }
    }

    const setLives = newLives => {
        lives = newLives
        addLines();
    }

    return {
        init,
        setLives,
        render,
        state
    }
})();

export default Board;