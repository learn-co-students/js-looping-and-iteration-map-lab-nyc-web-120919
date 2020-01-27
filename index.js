// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    const lowerCaseDrivers = drivers.map(function(driver) {return driver.toLowerCase()});
    return lowerCaseDrivers;
}

const nameToAttributes = (drivers) => {

    // ["jules t", "scott b"]
    const attributeDrivers = drivers.map((driver) => {
        // "jules t"
        const names = driver.split(" ")
        return { firstName: names[0], lastName: names[1] };
    })
    return attributeDrivers;
    //{firstName: "jules", lastName: "t"}
}

function attributesToPhrase(drivers){
    const driverPhrases = drivers.map(function(driver) {
        return `${driver.name} is from ${driver.hometown}`
    })
    return driverPhrases;
}