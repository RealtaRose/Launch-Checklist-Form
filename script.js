// Write your JavaScript code here!
window.addEventListener('load', function() {
  fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
    response.json().then( function(json) {
      document.getElementById("missionTarget").innerHTML =  `
        <h2>Mission Destination</h2>
        <ol>
        <li>Name: ${json[2].name}
        <li>Diameter: ${json[2].diameter}</li>
        <li>Star: ${json[2].star}</li>
        <li>Distance from Earth: ${json[2].distance}</li>
        <li>Number of Moons: ${json[2].moons}</li>
        </ol>
        <img src="${json[2].image}"></img>
        </li>
    
      `
    } )
  }  );

  let form = document.querySelector("form");
  form.addEventListener("submit", function() { 
    event.preventDefault();
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
      window.alert("All fields required!");
      
      };
    if (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value)) {
      window.alert("Pilot Names must not be numbers!");
     };
    if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
      window.alert("Fuel Level and Cargo Mass must be numbers!");
    };

    
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} Ready`;
    document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotNameInput.value} Ready`;

    let test = true;
    document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
    document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";


    if (fuelLevelInput.value < 10000) {
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
      document.getElementById("fuelStatus").innerHTML = "Not enough fuel! Must have at least 10,000 units.";
      document.getElementById("launchStatus").style.color = '#ff0000';
      test = false;
    };

    if (cargoMassInput.value > 10000) {
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
      document.getElementById("cargoStatus").innerHTML = "Too heavy! Must have at most 10,000 units.";
      document.getElementById("launchStatus").style.color = '#ff0000';
      test = false;
    };

    if (test === true) {
      document.getElementById("faultyItems").style.visibility = "invisible";
      document.getElementById("launchStatus").style.color = '#1AFF00';
      document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch.";
    }

  });

});
