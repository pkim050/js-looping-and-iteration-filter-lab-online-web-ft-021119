// Code your solution in this file
function findMatching(drivers, name) {
  const newDrivers = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  return newDrivers;
}

function fuzzyMatch(drivers, characters) {
  const newDrivers = drivers.filter(driver => driver.slice(0, characters.length).toLowerCase() === characters.toLowerCase());
  return newDrivers;
}

function cb(hash, name) {
  return hash.name === name;
}

function matchName(drivers, name) {
  const newDrivers = drivers.filter(driver => cb(driver, name));
  return newDrivers;
}
