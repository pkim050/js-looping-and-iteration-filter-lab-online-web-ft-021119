// Code your solution in this file
function findMatching(drivers, name) {
  const newDrivers = [];
  for (const driver of drivers) {
    if (driver.toLowerCase() === name.toLowerCase()) {
      newDrivers.push(driver);
    }
  }
  return newDrivers;
}

function fuzzyMatch(drivers, characters) {
  const newDrivers = [];
  let counter = 0;
  for (const driver of drivers) {
    for (let i = 0; i < characters.length; i++) {
      if (characters[i] === driver[i]) {
        counter++;
      }
    }
    if (counter - characters.length === 0) {
      newDrivers.push(driver);
    }
    counter = 0;
  }
  return newDrivers;
}
function cb(hash, name) {
  return hash.name === name;
}

function matchName(drivers, name) {
  const newDrivers = [];
  for (const driver of drivers) {
    if (cb(driver, name)) {
      newDrivers.push(driver);
    }
  }
  return newDrivers;
}
