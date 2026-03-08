// 1️⃣4️⃣ Object Property Counter by Condition

// Write a function that counts how many properties in an object have numeric values greater than 50.

function greaterThanFifty (objectData) {
let count = 0

for (let key in objectData) {
        if (typeof objectData[key] === "number" && objectData[key] > 50) {
            count++;
        }
    }
    return count;
}

const scores = { physics: 60, math: 40, chemistry: 85, name: "Student A" };
console.log(greaterThanFifty(scores)); // Output: 2