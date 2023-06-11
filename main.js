let carrot = new Decimal(10)
let carrotPerSecond = new Decimal(0)
let carrotFarm = new Decimal(0)
let carrotFarmCost = new Decimal(10)
let carrotFarmCostScale = new Decimal(1.3)
let carrotEmpire = new Decimal(0)
let carrotEmpireCost = new Decimal(10)
let carrotEmpireCostScale = new Decimal(10)
let carrotEmpireMultiplier = new Decimal(1)
let carrotEmpireMultiplierScale = new Decimal(10)

function harvestCarrot() {
    if (carrotFarm) { 
        carrotPerSecond = carrotFarm.times(carrotEmpireMultiplier)
        carrot = carrot.add(carrotPerSecond.div(30))
        document.getElementById("carrotHarvested").innerHTML = carrot.toFixed(1) + " Carrot harvested"
        document.getElementById("carrotPerSecond").innerHTML = carrotPerSecond.toFixed(1) + " Carrot per second"
    }
}

function buyCarrotFarm() {
    if (carrot.gte(carrotFarmCost)) {
        carrot = carrot.sub(carrotFarmCost)
        carrotFarm = carrotFarm.add(1)
        recalcCarrotFarm()
    }
}

function recalcCarrotFarm() {
    carrotFarmCost = carrotFarmCostScale.pow(carrotFarm).times(10)
    document.getElementById("carrotHarvested").innerHTML = carrot.toFixed(1) + " Carrot harvested"
    document.getElementById("carrotFarm").innerHTML = "Add Farm (Currently " + carrotFarm + ")<br>Cost: " + carrotFarmCost.toFixed() + " Carrot"
}

function buyEmpire() {
    if (carrotFarm.gte(carrotEmpireCost)) {
        carrotEmpire = carrotEmpire.add(1)
        recalcCarrotFarm()
        recalcCarrotEmpire()
    }
}

function recalcCarrotEmpire() {
    carrotEmpireCost = carrotEmpireCostScale.pow(carrotEmpire)
    carrotEmpireMultiplier = carrotEmpireMultiplierScale.pow(carrotEmpire)
    document.getElementById("carrotFarm").innerHTML = "Add Farm (Currently " + carrotFarm + ")<br>Cost: " + carrotFarmCost.toFixed() + " Carrot"
    if (carrotEmpire.eq(1)) {
        document.getElementById("carrotEmpire").innerHTML = "Build a town<br>x10 Carrot production<br>Req: 100 Farm"
    }
    if (carrotEmpire.eq(2)) {
        document.getElementById("carrotEmpire").innerHTML = "Build a Empire<br>x10 Carrot production<br>Req: 1000 Farm"
    }
    if (carrotEmpire.eq(3)) {
        document.getElementById("carrotEmpire").innerHTML = "You already have a Empire"
    }
}

var mainGameLoop = window.setInterval(function() {
    harvestCarrot()
}, 33)

//var saveGameLoop = window.setInterval(function() {
//    localStorage.setItem("carrotEmpireSave", JSON.stringify(gameData))
//}, 15000)

//var savegame = JSON.parse(localStorage.getItem("carrotEmpireSave"))
//if (savegame !== null) {
//    gameData = savegame
//    if (typeof savegame.dwarves !== "undefined") dwarves = savegame.dwarves;
//    document.getElementById("carrotHarvested").innerHTML = carrot + " Carrot Harvested"
//    document.getElementById("addFarm").innerHTML = "Add Farm (Currently " + carrotFarm + ") Cost: " + carrotFarmCost + " Carrot"
//}

