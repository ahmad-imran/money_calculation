//Step - 1 Add event listener
document.getElementById('btn-deposit').addEventListener('click', function () {

    //Step - 2 Get Deposit input from input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //Step -3 Current deposit total amount
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //Step - 4 Add numbers to set total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    //Set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    //Step - 5 Current total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //Step - 6 calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    //Set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    //Clear the deposit field
    depositField.value = '';

})