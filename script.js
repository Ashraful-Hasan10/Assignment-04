//function to handle increase and decrease...
function handleTicketCount (condition, isIncrease){
    const input = document.getElementById(condition + '-count');
    const Count = parseInt(input.value);
    let NewCount = Count;
    if (isIncrease == true){
        NewCount = Count + 1;
    }
    if( isIncrease == false && Count > 0){
        NewCount = Count - 1;
    }
    input.value = NewCount;
    calculateTotal();
}

// function to calculate total & tax & grand-total
function calculateTotal(){
    const firstInput = document.getElementById('first-count');
    const firstCount = parseInt(firstInput.value);
    const economyInput = document.getElementById('economy-count');
    const economyCount = parseInt(economyInput.value);
    const totalPrice = firstCount * 150 + economyCount * 100;
    document.getElementById('total-price').innerText = '$' + totalPrice;

    
    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;
    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}

