//gets fighter click
var playerGhidora = document.getElementById("ghidora");
var playerGodzilla = document.getElementById("godzilla");
var playerRodan = document.getElementById("rodan");
var playerMothra = document.getElementById("mothra");
//gets attack button click
var attackBtn = document.getElementById("attack");
var attackLetters = document.getElementsByClassName("attack-letters");
var attck = document.getElementsByTagName("h6");
//get reset button clicked
var resetBtn = document.getElementById("reset");
//placeholder for player fighter which will dynamically create player fighter below
var playerDiv = document.getElementById("player1");
//placeholder for player opponent which will dynamically create player opponents below
var opponentDiv = document.getElementById("opponent");

var playerWrapGhidora = document.getElementById("ghidora-wrap")
var playerWrapGodzilla = document.getElementById("godzilla-wrap")
var playerWrapRodan = document.getElementById("rodan-wrap")
var playerWrapMothra = document.getElementById("mothra-wrap")

//placeholders for name of fighter and health 
var playerTitle = document.getElementById("char-name");
var opponentTitle = document.getElementById("")
var player1Health = document.getElementById("player-health-status1");
var opponentHealth = document.getElementById("player-health-status2");
var gameStats1 = document.getElementById("attack-stats");
var gameStats2 = document.getElementById("counter-stats");
var alertMessage = document.getElementById("game-info");
var playerOptions = document.getElementById("player-options");


//Fighter stats as object
var currentPlayers = [];
var monstersKilled = 0;


var monsters = [
    {
        name: "ghidorah",
        health: 140,
        attackHp: 5,
        selected: false,
        opponent: false,
        fighter: false,
        image: "./assets/images/ghidorah.jpg"
    },
    {
        name: "godzilla",
        health: 130,
        attackHp: 9,
        selected: false,
        opponent: false,
        fighter: false,
        image: "./assets/images/godzilla.jpg"

    },
    {
        name: "rodan",
        health: 95,
        attackHp: 8,
        selected: false,
        opponent: false,
        fighter: false,
        image: "./assets/images/rodan.jpg"

    },
    {
        name: "mothra",
        health: 85,
        attackHp: 8,
        selected: false,
        opponent: false,
        fighter: false,
        image: "./assets/images/mothra.jpg"

    }
]

//creates fighter & opponent

function createFighter(monsterPick, i) {
    if (currentPlayers.length < 2){
        currentPlayers.push(i);
        if (currentPlayers.length === 1) {
            monsters[i].fighter = true

            var wrap = document.createElement("div");
            wrap.setAttribute("class", "col-sm-2 col-3 players opponents");
            wrap.setAttribute("id", `${monsterPick}-wrap`);
    
            var playerFighter = document.createElement("img");
            playerFighter.src = monsters[i].image;
            playerFighter.setAttribute("class", "player1");
            wrap.appendChild(playerFighter);
    
            var name = document.createElement("h5");
            name.textContent = monsterPick;
            name.setAttribute("class", "fighter-name")
            wrap.appendChild(name);
    
            var hs = document.createElement("h5");
            hs.textContent = monsters[i].health;
            hs.setAttribute("class", "health-status");
            hs.setAttribute("id", `${monsterPick}-health`);
            wrap.appendChild(hs);
            playerDiv.appendChild(wrap);

        }else {
            monsters[i].opponent = true

            var wrap = document.createElement("div");
            wrap.setAttribute("class", "col-sm-2 col-3 players opponents");
            wrap.setAttribute("id", `${monsterPick}-wrap`);
    
            var playerOpt = document.createElement("img");
            playerOpt.src = monsters[i].image;
            playerOpt.setAttribute("class", "player1");
            wrap.appendChild(playerOpt);
    
            var name = document.createElement("h5");
            name.textContent = monsterPick;
            name.setAttribute("class", "opponent-name")
            wrap.appendChild(name);
    
            var hs = document.createElement("h5");
            hs.textContent = monsters[i].health;
            hs.setAttribute("class", "health-status");
            hs.setAttribute("id", `${monsterPick}-health`);
            wrap.appendChild(hs);
    
            opponentDiv.appendChild(wrap);

        }
        monsters[i].selected = true
        console.log(currentPlayers);


       
    

    }

}


function createFighterOpt(){
    for (var i = 0; i < monsters.length; i++) {
    //     <div id="ghidorah-wrap" class="col-sm-2 col-3 players-g opponents">
    //     <img id="ghidorah" class="ghid" src="./assets/images/ghidorah.jpg" alt="ghidorah">
    //     <h5 class="char-name ghi">GHIDORAH</h5>
    //     <h5 class="health-status">HP 100</h5>
    // </div>

        var wrap = document.createElement("div");
        wrap.setAttribute("class", "col-sm-2 col-3 players opponents");
        wrap.setAttribute("id", `${monsters[i].name}-wrap`);

        var playerFighter = document.createElement("img");
        playerFighter.setAttribute("id", `${monsters[i].name}`)
        playerFighter.setAttribute("class", "player1");
        playerFighter.src = monsters[i].image;
        wrap.appendChild(playerFighter);

        var name = document.createElement("h5");
        name.setAttribute("class", "char-name")
        name.textContent = monsters[i].name;
        wrap.appendChild(name);

        var hs = document.createElement("h5");
        hs.setAttribute("id", `${monsters[i].name}-health`);
        hs.setAttribute("class", "health-status");
        hs.textContent = monsters[i].health;
        wrap.appendChild(hs);
        playerOptions.appendChild(wrap);

    }
}


//attack and counter attack
function attack(){
    if (monsterPick = "attack"){
        alertMessage.classList.add("alert-dark");
        gameStats2.textContent = " You need to Choose a Monster"

    
        console.log(monsters[currentPlayers[1]].attackHp)
            alertMessage.classList.add("alert-dark");
            gameStats1.textContent = "You attacked " + monsters[currentPlayers[1]].name + " and inflicted -" + monsters[currentPlayers[0]].attackHp + " HP Damage"
            gameStats2.textContent = "Oh no!..." + monsters[currentPlayers[1]].name + " counter Attacked with -" + monsters[currentPlayers[1]].attackHp + " HP Damage"
            /* 
            selected fighter takes the attack hp and substracts from the oppponent health hp
            then counter attack from opponent subtracts from fighter healthHp
            update it in there object monster[i]
            then we redisplay it on screen everytime
            check if health gets to 0 then you lose, reseting game
            if opponent loses remove loser currentPlayer array
            alert user to select next opponnent
            */
            var fighterHealthWrap = document.getElementById(`${monsters[currentPlayers[0]].name}-health`)
            var optHealthWrap = document.getElementById(`${monsters[currentPlayers[1]].name}-health`)

            if (monsters[currentPlayers[0]].health > 0 && monsters[currentPlayers[1]].health > 0) {
                for (var attackD = 0; attackD < 2;attackD++){
                    monsters[currentPlayers[0]].attackHp - monsters[currentPlayers[0]].attackHp
                }
                monsters[currentPlayers[1]].health = monsters[currentPlayers[1]].health - monsters[currentPlayers[0]].attackHp - monsters[currentPlayers[0]].attackHp
                optHealthWrap.textContent = monsters[currentPlayers[1]].health
                monsters[currentPlayers[0]].health = monsters[currentPlayers[0]].health - monsters[currentPlayers[1]].attackHp
                fighterHealthWrap.textContent = monsters[currentPlayers[0]].health


            }
            
            else if (monsters[currentPlayers[0]].health <= 0){
                //fighter died game over
                alertMessage.classList.add("alert-dark");
                gameStats1.textContent = "You LOST! your Monster " + monsters[currentPlayers[0]].name + " died! "
                gameStats2.textContent = "Press reset to re-Play!";

                var fighterDiv = document.getElementById(`${monsters[currentPlayers[0]].name}-wrap`);
                var optnDiv = document.getElementById(`${monsters[currentPlayers[1]].name}-wrap`);
                fighterDiv.remove();
                optnDiv.remove();


            }else {
                //opponent died 
                monstersKilled++
                gameOver();
                gameStats1.textContent = "You DEFEATED! " + monsters[currentPlayers[1]].name + " Choose your next Opponent!"
                gameStats2.textContent = "" 
                var opt = document.getElementById(`${monsters[currentPlayers[1]].name}-wrap`);
                opt.remove();
                currentPlayers.pop();
                monsters[currentPlayers[0]].health = monsters[currentPlayers[0]].health + 50
                optHealthWrap.textContent = monsters[currentPlayers[1]].health
                fighterHealthWrap.textContent = monsters[currentPlayers[0]].health


            }
        
    }
}

//checks game over function
function gameOver() {
    if(monstersKilled === 3) {
        gameStats1.textContent = "Congrats! " + monsters[currentPlayers[0]].name + " is KING OF THE MONSTERS!"
        gameStats2.textContent = "" 

    }
}

//resets game
function reset() {
    
    gameStats1.textContent = "";
    gameStats2.textContent = "";
    alertMessage.classList.remove("alert-dark");
    currentPlayers = [];
    monstersKilled = 0;
    console.log(currentPlayers);

    // createFighterOpt()
    /* 
    add monster choose options back so they reappear
    set all monster stat values original
    remove fighter and opponent from their positions
    */
   

}



//dynamic click event
document.addEventListener("click", function(event) {
 
    console.log("monsters killed " + monstersKilled)
    var monsterPick = event.target.id
    gameOver();
    
    if(monsterPick === "ghidorah" || monsterPick === "godzilla" || monsterPick === "rodan" || monsterPick === "mothra"){
        var playerElm = document.getElementById(`${monsterPick}-wrap`);
        playerElm.remove();
        gameOver()
    }

    switch (monsterPick){
        case "ghidorah": 
        createFighter(monsterPick, 0)
        break

        case "godzilla": 
        createFighter(monsterPick, 1)
        break

        case "rodan": 
        createFighter(monsterPick, 2)
        break

        case "mothra": 
        createFighter(monsterPick, 3)
        break

        default:

    }
    if (monsterPick === "attack") {
        attack();

    }
    if (monsterPick === "reset") {
        console.log(event.target.id)
        reset()
    }

});


