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
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }

  passengers(){
    return store.passengers.filter(passenger => {
      return passenger.driverId === this.id
    })
  }
}

class Passenger {
  constructor(name, driver) {
    this.id = ++passengerId
    this.name = name
    this.driver = driver.id
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }
  // 
  // drivers(){
  // }
}

class Trip {
  constructor(passenger, driver) {
    this.id = ++tripId
    this.passenger = passenger.id
    this.driver = driver.id
    store.trips.push(this)
  }

  driver(){

  }

  passenger(){

  }
}
