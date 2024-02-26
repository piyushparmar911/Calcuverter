let unitFrom="";
let unitTo="";
let convertValue=0;



function deleteLast() {
    let display = document.getElementsByName('display')[0];
    display.value = display.value.slice(0, -1);
}
document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        equlTo();
        focusTextarea();
    }
});

// for display1
function selectsecondd1() {
    document.getElementById('display1').value = "Centimeter";
    unitFrom = "Centimeter";
}

function selectminiuted1() {
    document.getElementById('display1').value = "Inch";
    unitFrom="Inch";
}

function selecthourd1() {
    document.getElementById('display1').value = "Foot";
    unitFrom="Foot";
}

function selectdayd1() {
    document.getElementById('display1').value = "Meter";
    unitFrom="Meter";
}


function selectyeard1() {
    document.getElementById('display1').value = "Kilometer";
    unitFrom="Kilometer";
}



// for display2
function selectsecond() {
    document.getElementById('display2').value = "Centimeter";
    unitTo="Centimeter";
}

function selectminiute() {
    document.getElementById('display2').value = "Inch";
    unitTo="Inch";
}

function selecthour() {
    document.getElementById('display2').value = "Foot";
    unitTo="Foot";
}

function selectday() {
    document.getElementById('display2').value = "Meter";
    unitTo="Meter";
}


function selectyear() {
    document.getElementById('display2').value = "Kilometer";
    unitTo="Kilometer";

}
function focusTextarea() {
      document.getElementsByName('display1')[0].focus();
}

function equlTo() {
    let number = document.getElementsByName('display1')[0].value;
    convertValue = parseFloat(number);

    if (isNaN(convertValue)) {
        alert("Enter valid value");
        return;
    }


    let result = 0;

    // convertation value
    const InchtoCm = 2.54;
    const FeettoCm = 30.48;
    const MetertoCm = 100;
    const KilometertoCm = 10000;

    // unitto value
    let convertsecond = convertValue;
    switch (unitFrom) {
        case "Inch":
            convertsecond = convertValue * InchtoCm;
            break;

        case "Foot":
            convertsecond = convertValue * FeettoCm;
            break;

        case "Meter":
            convertsecond = convertValue * MetertoCm;
            break;

        case "Kilometer":
            convertsecond = convertValue * KilometertoCm;
            break;
    }


    // convertFrom
    switch (unitTo) {
        case "Centimeter":
            result = convertsecond;
            break;

        case "Inch":
            result = convertsecond / InchtoCm;
            break;

        case "Foot":
            result = convertsecond / FeettoCm;
            break;

        case "Meter":
            result = convertsecond / MetertoCm;
            break;

        case "Kilometer":
            result = convertsecond / KilometertoCm;
            break;
    }

    document.getElementsByName('display2')[0].value = result.toFixed(2);
}
