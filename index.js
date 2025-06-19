let lengthInput = document.getElementById("length");
let widthInput = document.getElementById("width");

let calculateArea = document.getElementById('calculate');
let result = document.getElementById('result');

calculateArea.onclick = () => {
    let length = +lengthInput.value;
    let width = +widthInput.value;
    let area = length * width;
    result.innerText = 'Area: ' + area;

};