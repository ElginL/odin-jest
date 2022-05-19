function analyzeArray(array) {
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }

        if (array[i] > max) {
            max = array[i];
        }

        sum += array[i];
    }

    const data = {
        average: sum / array.length,
        min,
        max,
        length: array.length
    };

    return data;
}

export default analyzeArray;