document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('transaction-form');
    const transactionList = document.getElementById('transaction-list');
    const totalIncomeElement = document.getElementById('total-income');
    const totalExpensesElement = document.getElementById('total-expenses');
    const remainingBalanceElement = document.getElementById('remaining-balance');

    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    const updateDashboard = () => {
        let totalIncome = 0;
        let totalExpenses = 0;

        transactions.forEach(transaction => {
            if (transaction.type === 'income') {
                totalIncome += parseFloat(transaction.amount);
            } else {
                totalExpenses += parseFloat(transaction.amount);
            }
        });

        totalIncomeElement.textContent = totalIncome.toFixed(2);
        totalExpensesElement.textContent = totalExpenses.toFixed(2);
        const remainingBalance = totalIncome - totalExpenses;
        remainingBalanceElement.textContent = remainingBalance.toFixed(2);
    };

    const renderTransactions = () => {
        transactionList.innerHTML = '';
        transactions.forEach((transaction, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${transaction.description}</span>
                <span>${transaction.amount}</span>
                <button onclick="removeTransaction(${index})">Delete</button>
            `;
            transactionList.appendChild(li);
        });
    };

    window.removeTransaction = (index) => {
        transactions.splice(index, 1);
        localStorage.setItem('transactions', JSON.stringify(transactions));
        updateDashboard();
        renderTransactions();
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const type = document.getElementById('type').value;
        const amount = document.getElementById('amount').value;
        const description = document.getElementById('description').value;

        const newTransaction = { type, amount, description };
        transactions.push(newTransaction);

        localStorage.setItem('transactions', JSON.stringify(transactions));
        updateDashboard();
        renderTransactions();

        form.reset();
    });

    updateDashboard();
    renderTransactions();
});
