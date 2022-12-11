const returnFirstTwoDrivers = (drivers) => [drivers[0], drivers[1]]

const returnLastTwoDrivers = (drivers) => [drivers[drivers.length - 2], drivers[drivers.length - 1]]

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (integer) => (function(fare) {return fare * integer})

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (array, fn) => fn(array) 