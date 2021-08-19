function updateInfo(planet, price, isEven)
{
    let displayInput = document.getElementById(planet + '-display');
    let displayValue = displayInput.value;
    if (isEven == true) {
        displayValue = parseInt(displayValue) + 1;
    } else if (displayValue > 0) {
        displayValue = parseInt(displayValue) - 1;
    }
    displayInput.value = displayValue;
    const ticketPrice = document.getElementById(planet + '-price');
    ticketPrice.innerText = displayValue * price;
    totalPrice()
}

function ticketInput(planets)
{
    const inputTicket = document.getElementById(planets + '-display').value;
    return inputTicket;
}

function totalPrice()
{
    const mars = ticketInput('mars') * 50;
    const moon = ticketInput('moon') * 58;
    const sutotal = mars + moon;
    const totalTax = parseFloat((sutotal * .1).toFixed(2));
    const totalPrice = sutotal + totalTax;
    document.getElementById('total-price').innerText = sutotal;
    document.getElementById('total-tax').innerText = totalTax;
    document.getElementById('total-cost').innerText = totalPrice;
}

// mars travel //

document.getElementById('mars-plus').addEventListener("click", function ()
{
    updateInfo('mars', 50, true);
})
document.getElementById('mars-minus').addEventListener("click", function ()
{
    updateInfo('mars', 50, false);
})

// moon travel //

document.getElementById('moon-plus').addEventListener("click", function ()
{
    updateInfo('moon', 58, true);
})
document.getElementById('moon-minus').addEventListener("click", function ()
{
    updateInfo('moon', 58, false);
})