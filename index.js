let driverId = 0
let passengerId = 0
let store = {drivers: [], passengers: []}

class Driver {
  constructor(name){
  this.id = ++driverId
  this.name = name

  store.drivers.push(this)
  }

  trips() {

  }

  passengers(){

  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name
  }

  rips() {

  }

  drivers(){

  }
}
