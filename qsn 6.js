// 6️⃣ Nested Object Manipulation
let student = {
  name: "Alice",
  address: {
    city: "Nairobi",
    street: "Moi Avenue"
  }
};

// Access nested property
console.log("6 Access:", student.address.city);

// Update nested property
student.address.city = "Mombasa";

// Add new nested property
student.address.country = "Kenya";

console.log("6 Updated:", student);

