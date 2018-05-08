let driverId = 0
let passengerId = 0
let tripId = 0
let store = {drivers: [], passengers: [], trips: []}

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
  constructor(name, driver) {
    this.id = ++passengerId
    this.name = name
    this.driver = driver.id
    store.passengers.push(this)
  }

  rips() {

  }

  drivers(){

  }
}

class Trip {
  constructor() {
    this.id = ++tripId
    store.trips.push(this)
  }

  driver(){

  }

  passenger(){

  }
}
