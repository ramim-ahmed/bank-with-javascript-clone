
// login eventHandler
const btn = document.querySelector('#enter-btn');
btn.addEventListener('click', function (event) {
    let mainArea = document.querySelector('#area');
    mainArea.style.display = 'none';
    const transactinArea = document.querySelector('#transaction-area');
    transactinArea.style.display = 'block';
})

// deposit eventHandler

const deposit = document.querySelector('#depositAdd');

deposit.addEventListener('click', function () {

    const depositNumber = getInputAmount('depositAmount')

    update('currentDeposit', depositNumber);
    update('currentBalance', depositNumber);

    document.getElementById('depositAmount').value = '';
    
})

function update (id, depositNumber) {
       
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;
    document.getElementById(id).innerText = total;
}


function getInputAmount (id) {

    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}
// withdraw handler 

const withdrawBtn = document.querySelector('#withdrawAdd');

withdrawBtn.addEventListener('click', function () {
   const withdrawInputAmount = getInputAmount ('withdrawAmount');
   update('currentWithdrawNumber', withdrawInputAmount);
   update('currentBalance', -1 * withdrawInputAmount);
   document.getElementById('withdrawAmount').value = '';
})


