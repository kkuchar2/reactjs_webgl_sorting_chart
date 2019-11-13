export function onCondition(condition, component) {
    return condition ? component : null;
}

export function getRandomInt(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    let value = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("Got rangom int range(" + min + ", " + max + ") = " + value);
    return value;
}