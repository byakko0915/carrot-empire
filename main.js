var gameData = {
    carrot: 10,
    carrotFarm: 0,
    carrotFarmCost: 10,
    dwarves: 0.1
}

function harvestCarrot() {
    if (gameData.carrotFarm !== null) {
        gameData.carrot += gameData.carrotFarm
        document.getElementById("carrotHarvested").innerHTML = gameData.carrot + " Carrot Harvested"
    }
}

function buyCarrotFarm() {
    if (gameData.carrot >= gameData.carrotFarmCost) {
        gameData.carrot -= gameData.carrotFarmCost
        gameData.carrotFarm += 1
        gameData.carrotFarmCost *= 2
        document.getElementById("carrotHarvested").innerHTML = gameData.carrot + " Carrot Harvested"
        document.getElementById("carrotFarm").innerHTML = "Add Farm (Currently " + gameData.carrotFarm + ") Cost: " + gameData.carrotFarmCost + " Carrot"
    }
}

function hardReset() {
    gameData.carrot = 10
    gameData.carrotFarm = 0
    gameData.CarrotFarmCost = 10
    document.getElementById("carrotHarvested").innerHTML = "10 Carrot Harvested"
    document.getElementById("carrotFarm").innerHTML = "Add Farm (Currently 0) Cost: 10 Carrot"
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

