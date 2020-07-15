// create a generic biosensor class 

let getRandomArbitrary=function(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

class Biosensor{
    constructor(name){
        this.name=name;
        this.live();
        this.currentHearBeat=0;
        this.config={
            minHR:60,
            maxHR:80
        }
    }
    display(){
        console.log('Person:'+this.name+"  || HR: "+this.currentHearBeat);
    }
    heartBeat(){
        this.currentHearBeat=getRandomArbitrary(this.config.minHR,this.config.maxHR);
        this.display()
    }

    //activate all the living biofunctions
    live(){
        console.log("IT'S ALIVEEE")
        setInterval(()=>{this.heartBeat()},1000)
    }
}

let james=new Biosensor('James')
let sara=new Biosensor('Sara')