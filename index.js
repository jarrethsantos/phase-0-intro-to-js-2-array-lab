// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
    return cats;
} 

function appendCat(name) {
    const newArray = [...cats, name];
    return newArray;
    return cats;
}

function prependCat (name) {
    const newArray = [name , ...cats];
    return newArray;
    return cats;

}

function removeLastCat (name) {
    const newArray = cats.slice(0, cats.length-1);
    return newArray;
    return cats;
}

function removeFirstCat (name) {
    const newArray = cats.slice(1);
    return newArray;
    return cats;
}