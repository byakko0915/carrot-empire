var gameData = {
    carrot: 10,
    carrotMultiplier: 1,
    carrotPerSecond: 0,
    carrotFarm: 0,
    carrotFarmCost: 10,
    empire: 0,
    empireCost: 10,
    empireMultiplier: 1,
    dwarves: 0.1
}

function harvestCarrot() {
    if (gameData.carrotFarm !== null) {
        gameData.carrotMultiplier = gameData.empireMultiplier
        gameData.carrotPerSecond = gameData.carrotFarm * gameData.carrotMultiplier
        gameData.carrot += gameData.carrotPerSecond
        document.getElementById("carrotHarvested").innerHTML = gameData.carrot + " Carrot harvested"
        document.getElementById("carrotPerSecond").innerHTML = gameData.carrotPerSecond + " Carrot per second"
    }
}

function buyCarrotFarm() {
    if (gameData.carrot >= gameData.carrotFarmCost) {
        gameData.carrot -= gameData.carrotFarmCost
        gameData.carrotFarm += 1
        gameData.carrotFarmCost = Math.floor(gameData.carrotFarmCost * 1.4)
        document.getElementById("carrotHarvested").innerHTML = gameData.carrot + " Carrot harvested"
        document.getElementById("carrotFarm").innerHTML = "Add Farm (Currently " + gameData.carrotFarm + ")<br>Cost: " + gameData.carrotFarmCost + " Carrot"
        if (gameData.carrotFarm >= 10) {
            
        }
    }
}

function buildEmpire() {
    if (gameData.carrotFarm >= gameData.empireCost) {
        gameData.carrotFarm -= gameData.empireCost
        gameData.empire += 1
        gameData.empireCost *= 10
        gameData.empireMultiplier *=10
        gameData.carrotFarmCost = Math.floor(10 * (1.4 ** gameData.carrotFarm))
        document.getElementById("carrotFarm").innerHTML = "Add Farm (Currently " + gameData.carrotFarm + ")<br>Cost: " + gameData.carrotFarmCost + " Carrot"
        if (gameData.empire == 1) {
            document.getElementById("buildEmpire").innerHTML = "Build a town<br>x10 Carrot production<br>Cost: 100 Farm"
        }
        if (gameData.empire == 2) {
            document.getElementById("buildEmpire").innerHTML = "Build a Empire<br>x10 Carrot production<br>Cost: 1000 Farm"
        }
        if (gameData.empire == 3) {
            document.getElementById("buildEmpire").innerHTML = "You already have a Empire"
        }
    }
}

var mainGameLoop = window.setInterval(function() {
    harvestCarrot()
}, 1000)

//var saveGameLoop = window.setInterval(function() {
//    localStorage.setItem("carrotEmpireSave", JSON.stringify(gameData))
//}, 15000)

//var savegame = JSON.parse(localStorage.getItem("carrotEmpireSave"))
//if (savegame !== null) {
//    gameData = savegame
//    if (typeof savegame.dwarves !== "undefined") gameData.dwarves = savegame.dwarves;
//    document.getElementById("carrotHarvested").innerHTML = gameData.carrot + " Carrot Harvested"
//    document.getElementById("addFarm").innerHTML = "Add Farm (Currently " + gameData.carrotFarm + ") Cost: " + gameData.carrotFarmCost + " Carrot"
//}

