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

//placeholders for name of fighter and health 
var playerTitle = document.getElementById("char-name");
var opponentTitle = document.getElementById("")
var player1Health = document.getElementById("player-health-status1");
var opponentHealth = document.getElementById("player-health-status2");
var gameStats1 = document.getElementById("attack-stats");
var gameStats2 = document.getElementById("counter-stats");


//Fighter stats as object
var currentPlayers = [];
var monstersKilled = 0;


var monsters = [
    {
        name: "ghidorah",
        health: 100,
        attackHp: 10,
        selected: false,
        opponent: false,
        fighter: false,
        image: "./assets/images/ghidorah.jpg"
    },
    {
        name: "godzilla",
        health: 90,
        attackHp: 9,
        selected: false,
        opponent: false,
        fighter: false,
        image: "./assets/images/godzilla.jpg"

    },
    {
        name: "rodan",
        health: 85,
        attackHp: 8,
        selected: false,
        opponent: false,
        fighter: false,
        image: "./assets/images/rodan.jpg"

    },
    {
        name: "mothra",
        health: 85,
        attackHp: 7,
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
    
            var playerGhi = document.createElement("img");
            playerGhi.src = monsters[i].image;
            playerGhi.setAttribute("class", "player1");
            wrap.appendChild(playerGhi);
    
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
    
            var playerGhi = document.createElement("img");
            playerGhi.src = monsters[i].image;
            playerGhi.setAttribute("class", "player1");
            wrap.appendChild(playerGhi);
    
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

       
    

    }

}


//attack and counter attack
function attack(){
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

    // console.log("fighter name: " + monsters[currentPlayers[0]].name)
    // console.log("fighter health points: " + monsters[currentPlayers[0]].health)
    // console.log("________________________________________________")
    // console.log("opponent name: " + monsters[currentPlayers[1]].name)
    // console.log("opponent health points: " + monsters[currentPlayers[1]].health)
    


    if (monsters[currentPlayers[0]].health > 0 && monsters[currentPlayers[1]].health > 0) {
        monsters[currentPlayers[1]].health = monsters[currentPlayers[1]].health - monsters[currentPlayers[0]].attackHp
        optHealthWrap.textContent = monsters[currentPlayers[1]].health
        monsters[currentPlayers[0]].health = monsters[currentPlayers[0]].health - monsters[currentPlayers[1]].attackHp
        fighterHealthWrap.textContent = monsters[currentPlayers[0]].health



    }else if (monsters[currentPlayers[0]].health <= 0){
        //fighter died game over
        gameStats1.textContent = "You LOST! your Monster " + monsters[currentPlayers[0]].name + " died! Press reset to re-Play!" 
        gameStats2.textContent = ""
        var fighterDiv = document.getElementById(`${monsters[currentPlayers[0]].name}-wrap`);
        fighterDiv.remove();

    }else {
        //opponent died 
        monstersKilled++
        console.log("monsters killed " + monstersKilled)
        gameStats1.textContent = "You DEFEATED! " + monsters[currentPlayers[1]].name + " Choose your next Opponent!"
        gameStats2.textContent = "" 
        var opt = document.getElementById(`${monsters[currentPlayers[1]].name}-wrap`);
        opt.remove();
        currentPlayers.pop();
        monsters[currentPlayers[0]].health = monsters[currentPlayers[0]].health + 60
        optHealthWrap.textContent = monsters[currentPlayers[1]].health
        fighterHealthWrap.textContent = monsters[currentPlayers[0]].health


    }
    if(monstersKilled === 3) {
        gameStats2.textContent = "Congrats!... " + monsters[currentPlayers[0]].name + " is KING OF THE MONSTERS"
    }


}

reset.onclick = function (){
    console.log("reset clicked")
    /* 
    add monster choose options back so they reappear
    set all monster stat values original
    remove fighter and opponent from their positions
    */
    var currentPlayers = [];

}

//dynamic click event
document.addEventListener("click", function(event) {
    var monsterPick = event.target.id
    var attackHit = event.target.id

    
    if(monsterPick === "ghidorah" || monsterPick === "godzilla" || monsterPick === "rodan" || monsterPick === "mothra"){
        var playerElm = document.getElementById(`${monsterPick}-wrap`);
        playerElm.remove();
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
    if (attackHit === "attack") {
        attack();
    }

});


