// Playerable Area
let playableArea = document.getElementById('playableArea');
playableArea.style.background = "yellow";

let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

playableArea.width = windowWidth;
playableArea.height = windowHeight;

class Circle {
    constructor(xPos, yPos, radius, colour, text) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
        this.colour = colour;
        this.text = text;
    }

    draw(context) {
        context.beginPath();

        context.strokeStyle = this.colour;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = "20px Arial";
        context.lineWidth = 5;
        this.checkForBoundary(context);
        context.fillText(this.text, this.xPos, this.yPos);
        context.arc(this.xPos, this.yPos, this.radius, 0, Math.PI * 2, false);
        context.stroke();
        context.closePath();
    }


    moveUp(context){
        context.clearRect(0,0, windowWidth, windowHeight);
        this.yPos -= this.radius;
        this.draw(context);
        this.checkForBoundary(context);
    }

    moveDown(context){
        context.clearRect(0,0, windowWidth, windowHeight);
        this.yPos += this.radius;
        this.draw(context);
        this.checkForBoundary(context);
    }

    moveLeft(context){
        context.clearRect(0,0, windowWidth, windowHeight);
        this.xPos -= this.radius;
        this.draw(context);
        
    }

    moveRight(context){
        context.clearRect(0,0, windowWidth, windowHeight);
        this.xPos += this.radius;
        this.draw(context);
        this.checkForBoundary(context);
    }

    checkForBoundary(context){

        // Check if going off right
        if ((this.xPos) >= windowWidth) {
            this.xPos -= this.radius;
        }

        // Check if going off left
        if ((this.xPos - this.radius) < 0) {
            this.xPos += this.radius;
        }

        // Check if going off top
        if ((this.yPos - this.radius) < 0) {        
            this.yPos += this.radius;
        }

        if ((this.yPos) >= windowHeight) {
            this.yPos -= this.radius;
        }
    }

    checkIfTwoContextCollide(playerContext, lootContext){

    }
}

// Player
let playerContext = playableArea.getContext('2d');
let player = new Circle(100,100,50,"red", 1);
player.draw(playerContext)

// let lootContext = playableArea.getContext('2d');
// let loot = new Circle(250,250,50,"red", 1);
// loot.draw(lootContext)

window.addEventListener('keydown', event => {
    switch (event.key) {
        case "ArrowLeft":
            player.moveLeft(playerContext);
            console.log("Left");
            break;
        case "ArrowRight":
            player.moveRight(playerContext);
            console.log("Right");
            break;
        case "ArrowUp":
            player.moveUp(playerContext);
            console.log("Up");
            break;
        case "ArrowDown":
            player.moveDown(playerContext);
            console.log("Down");
            break;
    }
});