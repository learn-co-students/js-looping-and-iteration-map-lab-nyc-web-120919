// Code your solution in this file.
function lowerCaseDrivers(list) {
    return list.map((driver) => {
        return driver.toLowerCase();
    });
}

function nameToAttributes(list) {
    return list.map((driver) => {
        const driverFirst = driver.split(' ')[0];
        const driverLast = driver.split(' ')[1];

        return { firstName: driverFirst, lastName: driverLast };
    });
}

function attributesToPhrase(drivers) {
    return drivers.map((driver) => {
        return `${driver.name} is from ${driver.hometown}`;
    });
}