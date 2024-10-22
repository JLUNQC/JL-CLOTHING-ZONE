class Car {
    constructor(name, value ) {
        this.names = name;
        this.values = value
    }
}
//names
let proNames = document.querySelectorAll(".name");

let names = [];

proNames.forEach(dataName);

function dataName(nameElement) {
    let name = nameElement.textContent
    names.push(name);
}

//values
let proValues = document.querySelectorAll(".value");

let values = [];

proValues.forEach(dataValue);

function dataValue(valueElement) {
    let value = parseFloat(valueElement.textContent);
    values.push(value)
}

let productos = new Car(names, values);

//car
let addToCart = document.querySelectorAll(".add-to-cart");
let exists = [0,0,0,0];
let counter = [0,0,0,0];
let priceall = [0,0,0,0];
let total = 0;

addToCart.forEach((button, index) => {
    button.addEventListener('click', () => {
        switch(index){
            case 0:
                if (exists[index] == 0){
                    counter[index] = 1
                    document.getElementById("listCar").innerHTML +=
                    `<div>
                        <h2>${names[index]}</h2>
                        <p id="counter${index}">${counter[index]} x ${values[index]}</p>
                        <p id="price${index}"></p>
                        </div>
                    <div class="content-car-info"><img src="./ASSETS/IMG/product-0${index}.jpg" alt="imagen1"></div>`
                    exists[index] = 1
                    priceall[index] = 16.64
                }else{
                    counter[index]++;
                    priceall[index] = counter[index] * values[index];
                    document.getElementById( `counter${index}`).innerHTML = `<p>${counter[index]} x ${values[index]}</p>`;
                    document.getElementById( `price${index}`).innerHTML = "Price: $" + priceall[index]
                    console.log(priceall);
                }
                break;
            case 1:
                if (exists[index] == 0){
                    counter[index] = 1
                    document.getElementById("listCar").innerHTML +=
                    `<div>
                        <h2>${names[index]}</h2>
                        <p id="counter${index}">${counter[index]} x ${values[index]}</p>
                        <p id="price${index}"></p>
                        </div>
                    <div class="content-car-info"><img src="./ASSETS/IMG/product-0${index}.jpg" alt="imagen1"></div>`
                    exists[index] = 1
                    priceall[index] = 75.20
                }else{
                    counter[index]++;
                    priceall[index] = counter[index] * values[index];
                    document.getElementById( `counter${index}`).innerHTML = `<p>${counter[index]} x ${values[index]}</p>`;
                    document.getElementById( `price${index}`).innerHTML = "Price: $" + priceall[index]
                    console.log(priceall);
                }
                break;
            case 2:
                if (exists[index] == 0){
                    counter[index] = 1
                    document.getElementById("listCar").innerHTML +=
                    `<div>
                        <h2>${names[index]}</h2>
                        <p id="counter${index}">${counter[index]} x ${values[index]}</p>
                        <p id="price${index}"></p>
                        </div>
                    <div class="content-car-info"><img src="./ASSETS/IMG/product-0${index}.jpg" alt="imagen1"></div>`
                    exists[index] = 1
                    priceall[index] = 34.75
                }else{
                    counter[index]++;
                    priceall[index] = counter[index] * values[index];
                    document.getElementById( `counter${index}`).innerHTML = `<p>${counter[index]} x ${values[index]}</p>`;
                    document.getElementById( `price${index}`).innerHTML = "Price: $" + priceall[index]
                    console.log(priceall);
                }
                break;
            case 3:
                if (exists[index] == 0){
                    counter[index] = 1
                    document.getElementById("listCar").innerHTML +=
                    `<div>
                        <h2>${names[index]}</h2>
                        <p id="counter${index}">${counter[index]} x ${values[index]}</p>
                        <p id="price${index}"></p>
                        </div>
                    <div class="content-car-info"><img src="./ASSETS/IMG/product-0${index}.jpg" alt="imagen1"></div>`
                    exists[index] = 1
                    priceall[index] = 29.64
                }else{
                    counter[index]++;
                    priceall[index] = counter[index] * values[index];
                    document.getElementById( `counter${index}`).innerHTML = `<p>${counter[index]} x ${values[index]}</p>`;
                    document.getElementById( `price${index}`).innerHTML = "Price: $" + priceall[index]
                    console.log(priceall);
                }
                break;
        }
        total = priceall[0] + priceall[1] + priceall[2] + priceall[3]
        document.getElementById("total").innerHTML = "Total: $" + total;
    });
});