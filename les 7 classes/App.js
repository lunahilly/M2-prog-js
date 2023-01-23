class Dino
{
    constructor(naam, vleeseter , leeftijd, leeft, honger)
    {
        this.naam = naam
        this.vleeseter = vleeseter
        this.leeftijd = leeftijd
        this.leeft = leeft
        this.honger = honger
        leeft = true
        honger = true
    }

    eetDino(naam1, naam2)
    {
        this.leeft = false
        this.honger = false
        this.naam = naam1
        this.naam = naam2
        console.log("Tyrannosaurus eet de dino Brachiosaurus")
    }

    eetPlant()
    {

        console.log("Brachiosaurus eet de plant grass")
    }
}

class Plant
{
    constructor(grass)
    {
        this.grass = grass
    }
}

class App
{
    runApplication()
    {
        let trex= new Dino("Trex", true, 10);
        console.log(trex)
        let tyran = new Dino("Tyrannosaurus", true, 8)
        console.log(tyran)
        let branch = new Dino("Brachiosaurus", false, 20)
        console.log(branch)
        let grass = new Plant("grass")
        console.log(grass)
        let dino = new Dino
        dino.eetPlant(branch, grass)
        dino.eetDino(tyran, branch)
    }
}

let trex= new Dino("Trex", true, 10, true, true);
console.log(trex)
let tyran = new Dino("Tyrannosaurus", true, 8, true, true)
console.log(tyran)
let branch = new Dino("Brachiosaurus", false, 20, true, true)
console.log(branch)
let dino = new Dino
dino.eetPlant()
dino.eetDino()
