//gets fighter click
var playerGhidora = document.getElementById("ghidora");
var playerGodzilla = document.getElementById("godzilla");
var playerRodan = document.getElementById("rodan");
var playerMothra = document.getElementById("mothra");
//gets attack button click
var attackBtn = document.getElementById("attack");
//get reset button clicked
var resetBtn = document.getElementById("reset");
//placeholder for player fighter which will dynamically create player fighter below
var playerDiv = document.getElementById("player1");
//placeholder for player opponent which will dynamically create player opponents below
var opponentDiv = document.getElementById("opponent");

//placeholder for name of fighter, health and  
var playerTitle = document.getElementById("char-name");
var opponentTitle = document.getElementById("")
var player1Health = document.getElementById("player-health-status1");
var opponentHealth = document.getElementById("player-health-status2");
//Fighter stats as object
var monsters = [
    {
        name: "ghidorah",
        health: 1000,
        attackHp: 250,
        selected: false,
        image: "./assets/images/ghidorah.jpg"
    },
    {
        name: "godzilla",
        health: 900,
        attackHp: 250,
        selected: false,
        image: "./assets/images/godzilla.jpg"

    },
    {
        name: "rodan",
        health: 850,
        attackHp: 250,
        selected: false,
        image: "./assets/images/rodan.jpg"

    },
    {
        name: "mothra",
        health: 800,
        attackHp: 250,
        selected: false,
        image: "./assets/images/mothra.jpg"

    }
]


function ghidorah() {
    var playerGhi = document.createElement("img")
    playerGhi.src = monsters[0].image;
    playerGhi.setAttribute("class", "player1");
    playerDiv.appendChild(playerGhi);
    
}


function godzilla() {
    var playerGodz = document.createElement("img");
    playerGodz.src = monsters[1].image;
    playerGodz.setAttribute("class", "player1");
    playerDiv.appendChild(playerGodz);
}

function rodan() {
    var playerRod = document.createElement("img");
    playerRod.src = monsters[2].image;
    playerRod.setAttribute("class", "player1");
    playerDiv.appendChild(playerRod);
}

function mothra() {
    var playerMoth = document.createElement("img");
    playerMoth.src = monsters[3].image;
    playerMoth.setAttribute("class", "player1");
    playerDiv.appendChild(playerMoth);
}


document.addEventListener("click", function(event) {
    if (event.target.id == "ghidorah") {
        ghidorah();


    }


    
    if (event.target.id == "godzilla") {
        godzilla();
        
    }
    
    
    if (event.target.id == "rodan") {
        rodan();
    }
    
    
    if (event.target.id == "mothra") {
        mothra();
    }
    
    
    if (event.target.id == "attack") {

        console.log("Attack clicked")
    }


});


