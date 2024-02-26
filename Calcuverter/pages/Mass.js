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
function focusTextarea() {
      document.getElementsByName('display1')[0].focus();
}

// for display1
function selectsecondd1() {
    document.getElementById('display1').value = "Miligram";
    unitFrom = "Miligram";
}

function selectminiuted1() {
    document.getElementById('display1').value = "Gram";
    unitFrom="Gram";
}

function selecthourd1() {
    document.getElementById('display1').value = "Kilogram";
    unitFrom="Kilogram";
}

function selectdayd1() {
    document.getElementById('display1').value = "Quintal";
    unitFrom="Quintal";
}


function selectyeard1() {
    document.getElementById('display1').value = "Ton";
    unitFrom="Ton";
}



// for display2
function selectsecond() {
    document.getElementById('display2').value = "Miligram";
    unitTo="Miligram";
}

function selectminiute() {
    document.getElementById('display2').value = "Gram";
    unitTo="Gram";
}

function selecthour() {
    document.getElementById('display2').value = "Kilogram";
    unitTo="Kilogram";
}

function selectday() {
    document.getElementById('display2').value = "Quintal";
    unitTo="Quintal";
}


function selectyear() {
    document.getElementById('display2').value = "Ton";
    unitTo="Ton";

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
    const GramtoMg = 1000;
    const KilogramtoMg = 1000000;
    const QuintaltoMg = 100000000;
    const TontoMg = 1000000000;

    // unitto value
    let convertsecond = convertValue;
    switch (unitFrom) {
        case "Gram":
            convertsecond = convertValue * GramtoMg;
            break;

        case "Kilogram":
            convertsecond = convertValue * KilogramtoMg;
            break;

        case "Quintal":
            convertsecond = convertValue * QuintaltoMg;
            break;

        case "Ton":
            convertsecond = convertValue * TontoMg;
            break;
    }


    // convertFrom
    switch (unitTo) {
        case "Miligram":
            result = convertsecond;
            break;

        case "Gram":
            result = convertsecond / GramtoMg;
            break;

        case "Kilogram":
            result = convertsecond / KilogramtoMg;
            break;

        case "Quintal":
            result = convertsecond / QuintaltoMg;
            break;

        case "Ton":
            result = convertsecond / TontoMg;
            break;
    }

    document.getElementsByName('display2')[0].value = result.toFixed(2);
}
