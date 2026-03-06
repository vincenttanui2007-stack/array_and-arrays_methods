 
/*-----------------------------------------------------------------------

## 3️⃣ Convert Object to Array

Create an object that stores subject names as keys and scores as values.

Transform it into an array of objects where each object contains: -
subject - score

------------------------------------------------------------------------*/

const subjects = {
    math : 70,
    english : 50,
    biology :20,
};
console.log("The original objects", subjects)
//Output  The original objects { math: 70, english: 50, biology: 20 }

const theArray = Object.values(subjects)
console.log("The new array", theArray)
//Output   The new array [ 70, 50, 20 ]


