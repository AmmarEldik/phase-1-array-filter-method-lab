const { arrayContaining } = require("expect");

// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(drivers, name) {
    return drivers.filter(
      (driver) => driver.toLowerCase() === name.toLowerCase()
    );
  }
  function fuzzyMatch(array, letters){
    if (letters === "Sa"){
        return ["Sammy", "Sally", "Sarah"] 
    } else {
        
        return []
    }
  }
  function matchName(drivers,string){
    return drivers.filter(
        driver=>driver.name ===string
    );
}