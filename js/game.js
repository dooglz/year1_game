
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var score = 0;
var text;

function preload() {
}

function create() {
    var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
    text = game.add.text(game.world.centerX-300, 0, "", style);
}

function update() {
    score++;
    text.text = "Hello world: " + score;
}
