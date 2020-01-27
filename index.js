// Code your solution in this file.
function lowerCaseDrivers(array) {
    let my_array = array.slice(0);
    return my_array.map(driver => driver.toLowerCase());
}

function nameToAttributes(driverArray) {
    return driverArray.map(function(driver) {
      const driverFirst = driver.split(' ')[0];
      const driverLast = driver.split(' ')[1];
  
      return { firstName: driverFirst, lastName: driverLast };
    });
}

function attributesToPhrase(drivers) {
    return drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
}