function generatePin()
{
    const random = Math.round(Math.random() * 10000);
    const string = '' + random;
    if (string.length == 4) {
        return random;
    } else {
        console.log('4 digit not number');
        return generatePin();
    }
}
function generate()
{
    const pin = generatePin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function (event)
{
    const number = document.getElementById('typed-numbers');
    const numberValue = number.value;
    const previous = event.target.innerText
    if (isNaN(previous)) {
        if (previous == 'C') {
            number.value = ' ';
        }
    } else {
        number.value = previous;
        number.value = numberValue + previous;
    }


    console.log(numberValue, event.target.innerText)
});
document.getElementById('submit').addEventListener("click", function ()
{
    const generateValue = document.getElementById('display-pin').value;
    const caculateValue = document.getElementById('typed-numbers').value;
    if (generateValue == caculateValue) {
        document.getElementById('notify-fail').style.display = "none";
        document.getElementById('notify-success').style.display = "block";
        window.location.href = 'index.html';
    } else {
        document.getElementById('notify-fail').style.display = "block";
        document.getElementById('notify-success').style.display = "none";
    }
})