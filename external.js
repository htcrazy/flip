const flipNum = document.getElementById("times");
const flipIt = document.getElementById("flippeth");
const winNum = document.getElementById("wins");
const lossNum = document.getElementById("losses");

flipIt.addEventListener("click", () => {
    let win = 0;
    let loss = 0;

    for (let i = 0; i < flipNum.value; i++) {
        if (Math.random() < 0.5) {
            win++;
        } else {
            loss++;
        }
    }

    winNum.textContent = win;
    lossNum.textContent = loss;

});