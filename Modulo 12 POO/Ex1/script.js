class Spaceship{
    constructor(name, crew){
        this.name = name
        this.crew = crew
        this.engated = false
        this.doorsIsOpen = false
    }
    engate(){
        this.engated = true
        this.doorsIsOpen = true
    }
}