//step 1: add event listener
document.getElementById('btn-deposit').addEventListener('click', function () {

    //step 2 get deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //step 3 get the current deposit toatal amount
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step 4 add numbers to set total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    //set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    //step 5 balance current total
    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step 6 calculate current total balance
    const currentBalanceToatal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceToatal


    //clear the seposit field
    depositField.value = '';

})