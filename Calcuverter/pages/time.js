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
    document.getElementById('display1').value = "Second";
    unitFrom = "Second";
}

function selectminiuted1() {
    document.getElementById('display1').value = "Miniute";
    unitFrom="Miniute";
}

function selecthourd1() {
    document.getElementById('display1').value = "Hours";
    unitFrom="Hours";
}

function selectdayd1() {
    document.getElementById('display1').value = "Day";
    unitFrom="Day";
}


function selectyeard1() {
    document.getElementById('display1').value = "Year";
    unitFrom="Year";
}



// for display2
function selectsecond() {
    document.getElementById('display2').value = "Second";
    unitTo="Second";
}

function selectminiute() {
    document.getElementById('display2').value = "Miniute";
    unitTo="Miniute";
}

function selecthour() {
    document.getElementById('display2').value = "Hours";
    unitTo="Hours";
}

function selectday() {
    document.getElementById('display2').value = "Day";
    unitTo="Day";
}


function selectyear() {
    document.getElementById('display2').value = "Year";
    unitTo="Year";

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
    const MiniutetoSecond = 60;
    const HourtoSecond = 3600
    const DaytoSecond = 86400;
    const YeartoSecond = 31536000;

    // unitto value
    let convertsecond = convertValue;
    switch (unitFrom) {
        case "Miniute":
            convertsecond = convertValue * MiniutetoSecond;
            break;

        case "Hours":
            convertsecond = convertValue * HourtoSecond;
            break;

        case "Day":
            convertsecond = convertValue * DaytoSecond;
            break;

        case "Year":
            convertsecond = convertValue * YeartoSecond;
            break;
    }


    // convertFrom
    switch (unitTo) {
        case "Second":
            result = convertsecond;
            break;

        case "Miniute":
            result = convertsecond / MiniutetoSecond;
            break;

        case "Hours":
            result = convertsecond / HourtoSecond;
            break;

        case "Day":
            result = convertsecond / DaytoSecond;
            break;

        case "Year":
            result = convertsecond / YeartoSecond;
            break;
    }

    document.getElementsByName('display2')[0].value = result.toFixed(2);
}
