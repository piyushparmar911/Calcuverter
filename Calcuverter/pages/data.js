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
    document.getElementById('display1').value = "Kb";
    unitFrom = "Kb";
}

function selectminiuted1() {
    document.getElementById('display1').value = "Mb";
    unitFrom="Mb";
}

function selecthourd1() {
    document.getElementById('display1').value = "Gb";
    unitFrom="Gb";
}

function selectdayd1() {
    document.getElementById('display1').value = "Tb";
    unitFrom="Tb";
}


function selectyeard1() {
    document.getElementById('display1').value = "Pb";
    unitFrom="Pb";
}



// for display2
function selectsecond() {
    document.getElementById('display2').value = "Kb";
    unitTo="Kb";
}

function selectminiute() {
    document.getElementById('display2').value = "Mb";
    unitTo="Mb";
}

function selecthour() {
    document.getElementById('display2').value = "Gb";
    unitTo="Gb";
}

function selectday() {
    document.getElementById('display2').value = "Tb";
    unitTo="Tb";
}


function selectyear() {
    document.getElementById('display2').value = "Pb";
    unitTo="Pb";

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
    const MbtoKb = 1024;
    const GbtoKb = 1048576;
    const TbtoKb = 1073741824;
    const PbtoKb = 1099511627776;

    // unitto value
    let convertsecond = convertValue;
    switch (unitFrom) {
        case "Mb":
            convertsecond = convertValue * MbtoKb;
            break;

        case "Gb":
            convertsecond = convertValue * GbtoKb;
            break;

        case "Tb":
            convertsecond = convertValue * TbtoKb;
            break;

        case "Pb":
            convertsecond = convertValue * PbtoKb;
            break;
    }


    // convertFrom
    switch (unitTo) {
        case "Kb":
            result = convertsecond;
            break;

        case "Mb":
            result = convertsecond / MbtoKb;
            break;

        case "Gb":
            result = convertsecond / GbtoKb;
            break;

        case "Tb":
            result = convertsecond / TbtoKb;
            break;

        case "Pb":
            result = convertsecond / PbtoKb;
            break;
    }

    document.getElementsByName('display2')[0].value = result.toFixed(2);
}
