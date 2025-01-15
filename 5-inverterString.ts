function invertString(string: string) {
    const stringArray = string.split('');

    const inverseArray = []
    for (let i = stringArray.length - 1; i >= 0; i--) {
        inverseArray.push(stringArray[i]);
    }

    return inverseArray.join('');
}

console.log(invertString('teste'));