

let colors = [];
let result = [];

let saulSays = {
    startGame: null,// start stop button;

    
    initialization: function (){
        saulSays.startGame = document.getElementById('start-game');
        saulSays.startGame.addEventListener("click", saulSays.startGame);
    },
    start: function (){

    }

}
function getRandomColors(count) {
    colors = ["red", "blue", "yellow", "green"];
    for (let i = 0; i < count; i++) {
        result.push(colors[Math.floor(Math.random() * colors.length)])
    }
    return result;
};

function startGameFunction(){
    alert("heyyyyyyyyyy");
}
