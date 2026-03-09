
// ## 4️⃣ Sum Object Values

// Create an object representing monthly expenses.

// Write a function that calculates the total expense.

// ------------------------------------------------------------------------

let monthlyExpenses = {
    rent: 500,
    food:200,
    transport :100,
    internet:50,
    entertainment:150,
};
function calculateTotalExpense(expenses) {
    let total = 0;
    for (let key in expenses) {
        total += expenses[key];
    }
    return total;
}
let totalExpense = calculateTotalExpense(monthlyExpenses);
console.log("Total Monthly Expense:", totalExpense);
           
