function moveElevator(floors, initialFloor, enteredFloors) {
    var currentFloor = initialFloor;
    var direction = 'Subiendo';
    // Ordena los pisos a visitar en orden ascendente
    floors.sort(function (a, b) { return a - b; });
    // Divide los pisos a visitar en pisos por encima y por debajo del piso inicial
    var floorsAbove = floors.filter(function (floor) { return floor >= initialFloor; });
    var floorsBelow = floors.filter(function (floor) { return floor < initialFloor; });
    // Comienza visitando los pisos en la dirección actual del elevador
    var floorsToVisit = direction === 'Subiendo' ? floorsAbove : floorsBelow;
    while (floorsToVisit.length > 0 || floorsAbove.length > 0 || floorsBelow.length > 0) {
        var nextFloor = void 0;
        if (floorsToVisit.length > 0) {
            nextFloor = floorsToVisit.shift();
        }
        else {
            // Cambia la dirección del elevador y actualiza los pisos a visitar
            direction = direction === 'Subiendo' ? 'Bajando' : 'Subiendo';
            floorsToVisit = direction === 'Subiendo' ? floorsAbove : floorsBelow;
            continue;
        }
        if (currentFloor == nextFloor)
            continue;
        if ((direction === 'Subiendo' && nextFloor >= currentFloor) || (direction === 'Bajando' && nextFloor <= currentFloor)) {
            currentFloor = nextFloor;
            console.log("Piso actual del elevador: ".concat(currentFloor, ", direcci\u00F3n: ").concat(direction));
        }
        else {
            continue;
        }
        if (enteredFloors[currentFloor]) {
            var newFloor = enteredFloors[currentFloor];
            console.log("Piso ingresado: ".concat(newFloor, " en el piso ").concat(currentFloor));
            // Añade el nuevo piso a los pisos a visitar en la dirección correcta
            if (newFloor >= currentFloor) {
                floorsAbove.unshift(newFloor);
                floorsAbove.sort(function (a, b) { return a - b; });
            }
            else {
                floorsBelow.unshift(newFloor);
                floorsBelow.sort(function (a, b) { return b - a; });
            }
            // Actualiza los pisos a visitar
            floorsToVisit = direction === 'Subiendo' ? floorsAbove : floorsBelow;
        }
    }
}
var floors = [5, 29, 13, 10];
var initialFloor = 4;
var enteredFloors = { 5: 2, 29: 10, 13: 1, 10: 1 };
moveElevator(floors, initialFloor, enteredFloors);
