//Step - 1 Add event handler with withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {

    //Step - 2 Get withdraw amount from input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //Clear the input field
    withdrawField.value = '';

    //Validation for valid number input
    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    //Step - 3 Previous withdraw total amount 
    const withdrawtotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawtotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    //Step - 5 Previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //Validation
    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Not Enough Money')
        return;
    }

    //Step - 4 Calculate total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount
    withdrawtotalElement.innerText = currentWithdrawTotal;


    //Step - 6 Calculate new balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})