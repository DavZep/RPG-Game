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
var currentPlayers = [];


var monsters = [
    {
        name: "ghidorah",
        health: 1000,
        attackHp: 100,
        selected: false,
        opponent: false,
        fighter: false,
        image: "./assets/images/ghidorah.jpg"
    },
    {
        name: "godzilla",
        health: 900,
        attackHp: 100,
        selected: false,
        opponent: false,
        fighter: false,
        image: "./assets/images/godzilla.jpg"

    },
    {
        name: "rodan",
        health: 850,
        attackHp: 80,
        selected: false,
        opponent: false,
        fighter: false,
        image: "./assets/images/rodan.jpg"

    },
    {
        name: "mothra",
        health: 850,
        attackHp: 75,
        selected: false,
        opponent: false,
        fighter: false,
        image: "./assets/images/mothra.jpg"

    }
]


function createPlayer(monsterPick, i) {
    if (currentPlayers.length < 2){
        currentPlayers.push(i);
        if (currentPlayers.length === 1) {
            monsters[i].fighter = true
        }else {
            monsters[i].opponent = true

        }
        monsters[i].selected = true

        console.log(currentPlayers)
        console.log(monsters[i]);
            // <div id="ghidorah-wrap" class="col-sm-2 col-3 players-g opponents">
        // <img id="ghidorah" class="ghid" src="./assets/images/ghidorah.jpg" alt="ghidorah">
        // <h5 class="char-name ghi">Ghidorah</h5>
        // <h5 class="health-status">HP</h5>
        // </div>
        var wrap = document.createElement("div");
        wrap.setAttribute("class", "col-sm-2 col-3 players-g opponents");
        wrap.setAttribute("id", `${monsterPick}-wrap`);

        var playerGhi = document.createElement("img")
        playerGhi.src = monsters[i].image;
        playerGhi.setAttribute("class", "player1");
        wrap.appendChild(playerGhi);

        var name = document.createElement("h5");
        name.textContent = monsterPick;
        name.setAttribute("class", "char-name")
        wrap.appendChild(name);

        var hs = document.createElement("h5");
        hs.textContent = monsters[i].health;
        hs.setAttribute("class", "health-status")
        wrap.appendChild(hs);

        playerDiv.appendChild(wrap);
        console.log(monsters[i].health)
        console.log(monsters[i].attackHp);
    

    }




}

function attack(){
    /* 
    selected fighter takes the attack hp and substracts from the oppponent health hp
    then counter attack from opponent subtracts from fighter healthHp
    update it in there object monster[i]
    then we redisplay it on screen everytime
    check if health gets to 0 then you lose, reseting game
    if opponent loses remove loser currentPlayer array
    alert user to select next opponnent
    */
    console.log("fighter: " + monsters[currentPlayers[0]].health)
    console.log("opponent: " + monsters[currentPlayers[1]].health)
    
    if (monsters[currentPlayers[0]].health > 0 && monsters[currentPlayers[1]].health > 0) {
        monsters[currentPlayers[1]].health = monsters[currentPlayers[1]].health - monsters[currentPlayers[0]].attackHp
        monsters[currentPlayers[0]].health = monsters[currentPlayers[0]].health - monsters[currentPlayers[1]].attackHp
    }else if (monsters[currentPlayers[0]].health === 0){
        //fighter died game over
        console.log("fighter died")
        


    }else {
        //opponent died
        console.log("opponent died")
    }

}








document.addEventListener("click", function(event) {
    var monsterPick = event.target.id
    var attackHit = event.target.id
    
        if(monsterPick === "ghidorah" || monsterPick === "godzilla" || monsterPick === "rodan" || monsterPick === "mothra"){
            var elm = document.getElementById(`${monsterPick}-wrap`);
            elm.remove();
        }

        switch (monsterPick){
            case "ghidorah": 
            createPlayer(monsterPick, 0)
            break

            case "godzilla": 
            createPlayer(monsterPick, 1)
            break

            case "rodan": 
            createPlayer(monsterPick, 2)
            break

            case "mothra": 
            createPlayer(monsterPick, 3)
            break

            default:
            console.log(monsterPick)

        }
        if (attackHit === "attack") {
           attack();
            
        }


});


