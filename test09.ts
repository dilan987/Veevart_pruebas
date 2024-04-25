function moveElevator(floors: number[], initialFloor: number, enteredFloors: {[key: number]: number}) {
    let currentFloor = initialFloor;
    let direction = 'Subiendo';

    // Ordena los pisos a visitar en orden ascendente
    floors.sort((a, b) => a - b);

    // Divide los pisos a visitar en pisos por encima y por debajo del piso inicial
    let floorsAbove = floors.filter(floor => floor >= initialFloor);
    let floorsBelow = floors.filter(floor => floor < initialFloor);

    // Comienza visitando los pisos en la dirección actual del elevador
    let floorsToVisit = direction === 'Subiendo' ? floorsAbove : floorsBelow;
    while(floorsToVisit.length > 0 || floorsAbove.length > 0 || floorsBelow.length > 0) {
        let nextFloor;
        if (floorsToVisit.length > 0) {
            nextFloor = floorsToVisit.shift();
        } else {
            // Cambia la dirección del elevador y actualiza los pisos a visitar
            direction = direction === 'Subiendo' ? 'Bajando' : 'Subiendo';
            floorsToVisit = direction === 'Subiendo' ? floorsAbove : floorsBelow;
            continue;
        }

        if (currentFloor == nextFloor) continue;
        if ((direction === 'Subiendo' && nextFloor >= currentFloor) || (direction === 'Bajando' && nextFloor <= currentFloor)) {
            currentFloor = nextFloor;
            console.log(`Piso actual del elevador: ${currentFloor}, dirección: ${direction}`);
        } else {
            continue;
        }

        if (enteredFloors[currentFloor]) {
            let newFloor = enteredFloors[currentFloor];
            console.log(`Piso ingresado: ${newFloor} en el piso ${currentFloor}`);

            // Añade el nuevo piso a los pisos a visitar en la dirección correcta
            
            if (newFloor >= currentFloor) {
                floorsAbove.unshift(newFloor);
                floorsAbove.sort((a, b) => a - b);
            } else {
                floorsBelow.unshift(newFloor);
                floorsBelow.sort((a, b) => b - a);
                
            } 
            // Actualiza los pisos a visitar
            floorsToVisit = direction === 'Subiendo' ? floorsAbove : floorsBelow;
        }
    }
}

let floors = [5, 29, 13, 10];
let initialFloor = 4;
let enteredFloors = {5:2, 29:10, 13:1, 10:1};

moveElevator(floors, initialFloor, enteredFloors);










