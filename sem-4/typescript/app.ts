// Create two input elements
let input1: HTMLInputElement = document.createElement('input');
input1.id = 'input1';
document.body.appendChild(input1);

let input2: HTMLInputElement = document.createElement('input');
input2.id = 'input2';
document.body.appendChild(input2);

// Create a button element
let button: HTMLButtonElement = document.createElement('button');
button.textContent = 'Submit';
document.body.appendChild(button);

// Add click event listener to the button
button.addEventListener('click', function () {
    let inp1 = document.getElementById('input1') as HTMLInputElement;
    let inp2 = document.getElementById('input2') as HTMLInputElement;

    let num1: any = inp1.value;
    let num2: any = inp2.value;

    let val1 = isNaN(Number(num1)) ? num1 : Number(num1);
    let val2 = isNaN(Number(num2)) ? num2 : Number(num2);

    if (typeof val1 === 'number' && typeof val2 === 'number') {
        console.log(val1 + val2);
    } else if (typeof val1 === 'string' && typeof val2 === 'string') {
        console.log(val1 + val2);
    } else if (typeof val1 === 'number' && typeof val2 === 'string') {
        console.log(val1 + val2);
    } else if (typeof val1 === 'string' && typeof val2 === 'number') {
        console.log(val1 + val2);
    }
});






const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});









































































