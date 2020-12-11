import Game from "./game.js"

const Board = (() => {
    let lives = null;
    let canvas;
    let c;
    let testArray = []

    const init = () => {
        canvas = document.querySelector(".hangman-board")
        c = canvas.getContext("2d")
        c.lineWidth = 2
        c.strokeStyle = "#c252df"
        testArray = [line1, line2, line3]
        base();
    }

    const base = () => {

        testArray.forEach(item => {
            item();
        })
        // line1();
        // line2();
        // line3();
        //rope();
        // head();
        // torso();
        // leftArm();
        // rightArm();
        // leftLeg();
        // rightLeg();
    }

    const draw = (startX, startY, endX, endY) => {
        c.moveTo(startX, startY)
        c.lineTo(endX, endY)
        c.stroke()
    }

    const head = () => {
        c.beginPath();
        c.arc(100, 42, 12, 0, 2 * Math.PI);
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
    const parts = [rightLeg, leftLeg, , rightArm, leftArm, torso, head, rope]

    const render = () => {
        testArray.forEach(item => {
            console.log(testArray)
            item();
        })
        
        //
        // head();
        // torso();
        // leftArm();
        // rightArm();
        // leftLeg();
        // rightLeg();


        // switch(Game.state.lives) {
        //     case 6:
        //         rope();
        //     case 5:
        //         head();
        //     case 4:
        //         torso();
        //     case 3:
        //         leftArm();
        //     case 2:
        //         rightArm();
        //     case 1:
        //         leftLeg();
        //     case 0:
        //         rightLeg();
        // }
    }

    const setLives = newLives => {
        lives = newLives
        
        switch(lives) {
            case 6:
                testArray.push(rope);
            case 5:
                testArray.push(head);
            case 4:
                testArray.push(torso);
            case 3:
                testArray.push(leftArm);
            case 2:
                testArray.push(rightArm);
            case 1:
                testArray.push(leftLeg);
            case 0:
                testArray.push(rightLeg);
        }

        render();   
    }

    return {
        init,
        setLives
    }
})();

export default Board;