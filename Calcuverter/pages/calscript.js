
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


function equlTo() {
    let display = document.getElementsByName('display')[0];
        display.value = eval(display.value);
}

function focusTextarea() {
    document.getElementsByName('display')[0].focus();
}

