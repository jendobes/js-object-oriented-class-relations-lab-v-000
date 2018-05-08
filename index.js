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
    return this.trips().map(trip => {
      return trip.passenger();
    });
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }

  drivers(){
    return this.trips().map(trip => {
      return trip.driver()
    })
  }
}

class Trip {
//   constructor(passenger, driver) {
//     this.id = ++tripId
//     this.passenger = passenger.id
//     this.driver = driver.id
//     store.trips.push(this)
//   }
//
//   driver(){
//     return store.drivers.find(driver => {
//       return driver.id === this.driverId
//     })
//   }
//
//   passenger(){
//     return store.passengers.find(passenger => {
//       return passenger.id === this.passengerId
//     })
//   }
// 
// class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = tripId++;
    store.trips.push(this);
  }
  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    });
  }
  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    });
  }
}
