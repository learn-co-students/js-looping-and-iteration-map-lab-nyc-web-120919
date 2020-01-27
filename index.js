// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    let new_arr = drivers.map(function(driver) { return driver.toLowerCase() } )
    return new_arr;
    }

function nameToAttributes(drivers) {
    let new_arr = drivers.map(function(driver) { 
        return Object.assign({'firstName': driver.split(" ")[0]},{'lastName': driver.split(" ")[1]}) })
    return new_arr;
}

function attributesToPhrase(driver_obj) {
    let new_arr = []
    new_arr = driver_obj.map (function(driver) {
        return `${driver['name']} is from ${driver['hometown']}`
    })
    return new_arr
}
