function test19(items: number[][], capacity: number) {
    let limitValues = Array(capacity + 1).fill(0);
    let chosenItems = Array(capacity + 1).fill([]);

    // Recorremos cada elemento en la lista de elementos.
    for (let i = 0; i < items.length; i++) {
        // Sacamos el elemento actual en su peso y valor.
        let [peso, value] = items[i];
        // Recorremos desde la capacidad máxima de la mochila hasta el peso del elemento actual.
        for (let j = capacity; j >= peso; j--) {
            if (limitValues[j - peso] + value > limitValues[j]) {
                limitValues[j] = limitValues[j - peso] + value;
                chosenItems[j] = [...chosenItems[j - peso], items[i]];
            }
        }
    }

    return [chosenItems[capacity], limitValues[capacity]];
}


let items = [[2, 3], [3, 4], [4, 5], [5, 6]];
let capacity = 8;
console.log(test19(items, capacity));


