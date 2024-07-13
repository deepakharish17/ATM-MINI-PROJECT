let balance = 100000;

document.getElementById('atmForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;

    if (password >= 1111 && password <= 9999) {
        alert("YOUR PIN IS VERIFIED...");
        document.getElementById('actions').classList.remove('hidden');
        document.getElementById('atmForm').classList.add('hidden');
    } else {
        alert("INVALID PIN!");
    }
});

function deposit() {
    const amount = parseFloat(prompt("Enter your deposit amount:"));
    if (!isNaN(amount)) {
        balance += amount;
        updateBalance();
        showReceipt('Deposit', amount, balance);
    }
}

function withdraw() {
    const amount = parseFloat(prompt("Enter your withdraw amount:"));
    if (!isNaN(amount)) {
        if (amount <= balance) {
            balance -= amount;
            updateBalance();
            showReceipt('Withdrawal', amount, balance);
        } else {
            alert("INSUFFICIENT FUNDS!!");
        }
    }
}

function updateBalance() {
    document.getElementById('result').innerText = `Current Balance: ${balance}`;
    document.getElementById('result').classList.remove('hidden');
}

function showReceipt(type, amount, balance) {
    const receiptDetails = document.getElementById('receipt-details');
    receiptDetails.innerHTML = `
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Amount:</strong> ${amount}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Balance:</strong> ${balance}</p>
    `;
    document.getElementById('receipt').classList.remove('hidden');
}
