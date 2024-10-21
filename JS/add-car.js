class Car {
    constructor(name, value ) {
        this.names = name;
        this.values = value;
        this.clicks = click
    }
}
//names
let proNames = document.querySelectorAll("#name");

let names = [];

proNames.forEach(dataName);

function dataName(nameElement) {
    let name = nameElement.textContent
    names.push(name)
}

//values
let proValues = document.querySelectorAll("#value");

let values = [];

proValues.forEach(dataValue);

function dataValue(valueElement) {
    let value = parseFloat(valueElement.textContent);
    values.push(value)
}

