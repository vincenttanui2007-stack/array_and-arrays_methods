/********************************************************************
 JAVASCRIPT OBJECTS – COMPLETE NOTES (WEB DEV FOCUSED)
 Topics Covered:
  1.  What Is an Object?
  2.  Dot Notation vs Bracket Notation
  3.  Adding, Updating, Deleting Properties
  4.  Shorthand Property Names
  5.  Computed Property Names
  6.  Object Methods & the `this` Keyword
  7.  Getters & Setters
  8.  Object Reference Behavior
  9.  Copying Objects (Spread, Object.assign)
  10. Shallow Copy Warning
  11. Deep Copy (structuredClone)
  12. Object Methods: keys, values, entries, fromEntries
  13. Looping Through Objects
  14. Destructuring Objects
  15. Nested Objects & Optional Chaining
  16. Object Spread for Immutable Updates
  17. Object.freeze() & Object.seal()
  18. Checking Property Existence
  19. Object.create() & Prototypes
  20. JSON Serialization (stringify / parse)
  21. Symbols as Keys
  22. Common Bugs & Traps
  23. Practice Challenges
********************************************************************/

/********************************************************************
 1️⃣  WHAT IS AN OBJECT?
 - An object is a collection of key-value pairs (also called properties).
 - Keys are always strings (or Symbols); values can be ANY data type:
   string, number, boolean, array, function, another object, etc.
 - Objects are REFERENCE types — stored in the heap, not on the stack.
 - Use objects to group related data and behaviour together.
********************************************************************/

const userExample = {
  name: "Kevin", // string value
  age: 30, // number value
  isDeveloper: true, // boolean value
};

console.log("Full Object:", userExample);
console.log("Access name:", userExample.name);
console.log("Access age:", userExample.age);
console.log("Access isDeveloper:", userExample.isDeveloper);

/********************************************************************
 2️⃣  DOT NOTATION vs BRACKET NOTATION
********************************************************************/

// --- Dot Notation ---
// Use when the property name is a known, valid identifier (no spaces/special chars).
console.log("Dot notation:", userExample.name);

// --- Bracket Notation ---
// Use when:
//   a) The property name is stored in a variable (dynamic access).
//   b) The key contains spaces or special characters.
console.log("Bracket notation for isDeveloper:", userExample["isDeveloper"]);

// Dynamic key stored in a variable
const key = "age";
console.log("Bracket notation (dynamic key):", userExample[key]); // same as userExample.age

// Key with a space — dot notation would fail here
const weirdObject = {
  "first name": "Kevin",
};
console.log("Space in key (bracket required):", weirdObject["first name"]);

/********************************************************************
 3️⃣  ADDING, UPDATING, DELETING PROPERTIES
 - You can modify objects even if declared with `const`.
 - `const` prevents re-assigning the variable, not modifying its contents.
********************************************************************/

// Add a new property
userExample.country = "Kenya";
console.log("After adding country:", userExample);

// Update an existing property
userExample.age = 31;
console.log("After updating age:", userExample);

// Delete a property entirely — the key is removed from the object
delete userExample.isDeveloper;
console.log("After deleting isDeveloper:", userExample);

/********************************************************************
 4️⃣  SHORTHAND PROPERTY NAMES
 - When a variable's name matches the desired key name,
   you can write the variable directly without repeating it.
 - Very common in modern JavaScript and React.
********************************************************************/

const shortName = "Alice";
const shortAge = 25;

// Long form:  { name: shortName, age: shortAge }
// Short form (shorthand):
const shorthandPerson = { name: shortName, age: shortAge };
const shorthandPersonShort = { shortName, shortAge }; // keys will be "shortName" and "shortAge"

console.log("Shorthand property names (explicit):", shorthandPerson);
console.log("Shorthand property names:", shorthandPerson);
// Output: { name: 'Alice', age: 25 }

/********************************************************************
 5️⃣  COMPUTED PROPERTY NAMES
 - Allows you to use an expression (variable or calculation)
   as a property key inside object literal syntax — using [ ].
 - Useful for building objects dynamically.
********************************************************************/

const field = "score";
const dynamicObj = {
  [field]: 100, // same as writing { score: 100 }
  [`${field}_label`]: "High", // evaluates to { score_label: "High" }
};

console.log("Computed property names:", dynamicObj);
// Output: { score: 100, score_label: 'High' }

/********************************************************************
 6️⃣  OBJECT METHODS & THE `this` KEYWORD
 - A method is a function stored as a property in an object.
 - Inside a method, `this` refers to the object the method belongs to.
 - Arrow functions do NOT have their own `this` — avoid them for methods
   when you need to reference the object via `this`.
********************************************************************/

const car = {
  brand: "Toyota",
  speed: 0,

  // Regular method — `this` works correctly
  accelerate(amount) {
    this.speed += amount; // `this` = car
    console.log(`${this.brand} is now going ${this.speed} km/h`);
  },

  // Shorthand method syntax (same as above, just shorter)
  brake(amount) {
    this.speed -= amount;
    console.log(`Braked! Speed is now ${this.speed} km/h`);
  },

  describe() {
    // Template literal using `this` to reference own properties
    return `This is a ${this.brand} going ${this.speed} km/h`;
  },
};

car.accelerate(60); // Toyota is now going 60 km/h
car.brake(20); // Braked! Speed is now 40 km/h
console.log(car.describe());

/********************************************************************
 7️⃣  GETTERS & SETTERS
 - `get` defines a property that is computed when accessed (read).
 - `set` defines logic that runs when a property is assigned (write).
 - Useful for validation, derived/computed values, and encapsulation.
 - Accessed like a normal property — no () needed.
********************************************************************/

const circle = {
  radius: 5,

  // Getter — accessed like a property: circle.area (no parentheses)
  get area() {
    return Math.PI * this.radius ** 2; // πr²
  },

  // Getter for diameter
  get diameter() {
    return this.radius * 2;
  },

  // Setter — called when you assign: circle.diameter = 20
  set diameter(value) {
    this.radius = value / 2; // updates radius from diameter
  },
};

console.log("Circle radius:", circle.radius); // 5
console.log("Circle area:", circle.area); // ~78.54 (computed on read)
console.log("Circle diameter:", circle.diameter); // 10

circle.diameter = 20; // triggers the setter
console.log("After setting diameter to 20, radius:", circle.radius); // 10

/********************************************************************
 8️⃣  OBJECT REFERENCE BEHAVIOR
 - Objects are passed and assigned by REFERENCE, not by value.
 - Two variables can point to the exact same object in memory.
 - Changing one will change the other — they are the same object!
 - Primitives (strings, numbers, booleans) are copied by VALUE.
********************************************************************/

const objA = { value: 10 };
const objB = objA; // objB points to the SAME object as objA

objB.value = 30; // modifies the shared object

console.log("objA after modifying objB:", objA.value); // 30 — same object!
console.log("objB:", objB.value); // 30

// Comparison: primitives are copied by value
let x = 5;
let y = x; // y gets a COPY of the value 5
y = 99;
console.log("x after changing y:", x); // still 5 — independent copy

/********************************************************************
 9️⃣  COPYING OBJECTS
 - Spread operator { ...obj } creates a SHALLOW copy.
 - Object.assign(target, source) also creates a SHALLOW copy.
 - Both are fine for flat (non-nested) objects.
********************************************************************/

// --- Spread Operator (most common, modern way) ---
const originalObj = { name: "Kevin", age: 30 };
const copiedObj = { ...originalObj }; // new object, separate memory

copiedObj.age = 40; // only changes the copy

console.log("Original after spread copy:", originalObj); // age: 30 — unchanged
console.log("Spread copy:", copiedObj); // age: 40

// --- Object.assign() ---
// Object.assign(target, source) — copies source properties INTO target.
// The TARGET object is mutated, source is not.
const assignTarget = { a: 1 };
const assignSource = { b: 2, c: 3 };

Object.assign(assignTarget, assignSource); // target now has a, b, c
console.log("Target after Object.assign:", assignTarget); // { a: 1, b: 2, c: 3 }

// To avoid mutating anything, pass an empty object as target:
const safeAssign = Object.assign({}, originalObj, { age: 99 });
console.log("Safe Object.assign result:", safeAssign); // { name: 'Kevin', age: 99 }

/********************************************************************
 🔟  SHALLOW COPY WARNING
 - Spread and Object.assign only copy the TOP LEVEL of an object.
 - Nested objects (arrays, child objects) still share the same reference.
 - Mutating a nested property in the copy ALSO changes the original!
********************************************************************/

const shallowExample = {
  name: "Kevin",
  skills: ["JS", "Node"], // nested array — reference type
};

const shallowCopy = { ...shallowExample }; // shallow copy

shallowCopy.name = "Alice"; // OK — top-level string, independent
shallowCopy.skills.push("React"); // DANGER — mutates the shared nested array

console.log("Original after shallow copy change:", shallowExample.skills);
// ["JS", "Node", "React"] — also changed! skills array is shared.
console.log("Shallow copy:", shallowCopy.skills); // also ["JS", "Node", "React"]

/********************************************************************
 1️⃣1️⃣  DEEP COPY (structuredClone)
 - Fully copies an object including all nested levels.
 - Nested arrays and objects become completely independent copies.
 - structuredClone() is the modern built-in way (no library needed).
 - Note: does NOT copy functions or Symbols — only data.
********************************************************************/

const deepOriginal = {
  name: "Kevin",
  skills: ["JS", "Node"], // nested array
  address: {
    // nested object
    city: "Nairobi",
  },
};

const deepCopy = structuredClone(deepOriginal); // full independent copy

deepCopy.skills.push("React"); // only affects the copy
deepCopy.address.city = "Mombasa"; // only affects the copy

console.log("Deep original skills:", deepOriginal.skills); // ["JS", "Node"] — unchanged
console.log("Deep original city:", deepOriginal.address.city); // "Nairobi"  — unchanged
console.log("Deep copy skills:", deepCopy.skills); // ["JS", "Node", "React"]
console.log("Deep copy city:", deepCopy.address.city); // "Mombasa"

/********************************************************************
 1️⃣2️⃣  OBJECT STATIC METHODS: keys, values, entries, fromEntries
 - These are utility methods on the Object constructor itself.
 - Very commonly used in real-world JS and React dev.
********************************************************************/

const config = {
  theme: "dark",
  layout: "grid",
  version: 1,
};

// Object.keys() — returns an array of all the object's own keys
console.log("Object.keys:", Object.keys(config));
// ["theme", "layout", "version"]

// Object.values() — returns an array of all the object's own values
console.log("Object.values:", Object.values(config));
// ["dark", "grid", 1]

// Object.entries() — returns an array of [key, value] pairs
console.log("Object.entries:", Object.entries(config));
// [["theme","dark"], ["layout","grid"], ["version",1]]

// Object.fromEntries() — converts [key, value] pairs back into an object.
// Opposite of Object.entries().
const entriesArray = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];
const rebuiltObject = Object.fromEntries(entriesArray);
console.log("Object.fromEntries:", rebuiltObject); // { a: 1, b: 2, c: 3 }

// Practical use: transform object values using map + entries + fromEntries
const doubled = Object.fromEntries(
  Object.entries(config).map(([k, v]) => [
    k,
    typeof v === "number" ? v * 2 : v,
  ]),
);
console.log("Doubled numeric values:", doubled);
// { theme: 'dark', layout: 'grid', version: 2 }

/********************************************************************
 1️⃣3️⃣  LOOPING THROUGH OBJECTS
********************************************************************/

// --- for...in loop ---
// Iterates over all enumerable keys in the object.
// Also iterates over inherited keys — pair with hasOwnProperty if needed.
for (let k in config) {
  console.log(`for...in  key: ${k}, value: ${config[k]}`);
}

// --- Object.keys() + for...of ---
// Cleaner — only own keys, no inherited ones.
for (let k of Object.keys(config)) {
  console.log(`Object.keys loop  key: ${k}`);
}

// --- Object.entries() + forEach (most modern, destructured) ---
// Gives access to both key and value at once.
Object.entries(config).forEach(([k, v]) => {
  console.log(`Entry  key: ${k}, value: ${v}`);
});

/********************************************************************
 1️⃣4️⃣  DESTRUCTURING OBJECTS
 - Extract properties into variables in a single line.
 - Very common in function parameters, React props, API responses, etc.
********************************************************************/

const person = {
  firstName: "Kevin",
  lastName: "Mwangi",
  age: 30,
  country: "Kenya",
};

// Basic destructuring — variable names must match the key names
const { firstName, lastName } = person;
console.log("Destructured firstName:", firstName); // "Kevin"
console.log("Destructured lastName:", lastName); // "Mwangi"

// Renaming during destructuring — use a colon to assign a new name
const { age: personAge, country: personCountry } = person;
console.log("Renamed age:", personAge); // 30
console.log("Renamed country:", personCountry); // "Kenya"

// Default values — used if the property does not exist on the object
const { language = "English", nickname = "Kev" } = person;
console.log("language (default used):", language); // "English" (missing in object)
console.log("nickname (default used):", nickname); // "Kev"   (missing in object)

// Rest in destructuring — collect remaining properties into a new object
const { firstName: fn, ...restOfPerson } = person;
console.log("fn:", fn); // "Kevin"
console.log("Rest:", restOfPerson); // { lastName, age, country }

// Destructuring in function parameters — very common in React
function greet({ firstName: greetName, age: greetAge }) {
  console.log(`Hi ${greetName}, you are ${greetAge} years old.`);
}
greet(person); // Hi Kevin, you are 30 years old.

/********************************************************************
 1️⃣5️⃣  NESTED OBJECTS & OPTIONAL CHAINING
 - Access deep properties using chained dot or bracket notation.
 - Optional chaining (?.) prevents errors when a property might be undefined.
 - Nullish coalescing (??) provides a fallback when value is null/undefined.
********************************************************************/

const nestedUser = {
  name: "Kevin",
  address: {
    city: "Nairobi",
    zip: 10001,
    geo: {
      lat: -1.286389,
      lng: 36.817223,
    },
  },
};

// Regular nested access
console.log("Nested city:", nestedUser.address.city); // "Nairobi"
console.log("Deep nested lat:", nestedUser.address.geo.lat); // -1.286389

// Optional chaining — returns undefined instead of throwing an error
// if any part of the chain is null or undefined
console.log("Optional chaining city:", nestedUser.address?.city); // "Nairobi"
console.log("Optional chaining missing:", nestedUser.contact?.phone); // undefined (no error)

// Nullish coalescing — provides a default if result is null/undefined
const phone = nestedUser.contact?.phone ?? "No phone on file";
console.log("Phone with fallback:", phone); // "No phone on file"

// Nested destructuring — extract deep values immediately
const {
  address: {
    city,
    geo: { lat },
  },
} = nestedUser;
console.log("Nested destructured city:", city); // "Nairobi"
console.log("Nested destructured lat:", lat); // -1.286389

/********************************************************************
 1️⃣6️⃣  OBJECT SPREAD FOR IMMUTABLE UPDATES
 - Instead of mutating an object, produce a new one with changes.
 - Standard pattern in React state management.
 - Later keys override earlier ones when the same key appears twice.
********************************************************************/

const stateUser = {
  name: "Kevin",
  role: "User",
  active: true,
};

// Update role without mutating stateUser
const updatedStateUser = {
  ...stateUser, // spread all existing properties first
  role: "Admin", // then override role — "Admin" wins over "User"
};

console.log("Original stateUser:", stateUser); // role: "User"  (unchanged)
console.log("Updated stateUser:", updatedStateUser); // role: "Admin"

// Merging two objects — second one takes priority on conflicts
const defaults = { theme: "light", lang: "en" };
const userPrefs = { theme: "dark" };
const merged = { ...defaults, ...userPrefs }; // userPrefs overrides defaults
console.log("Merged object:", merged); // { theme: 'dark', lang: 'en' }

/********************************************************************
 1️⃣7️⃣  Object.freeze() & Object.seal()
********************************************************************/

// --- Object.freeze() ---
// Makes an object completely immutable (shallow).
// Cannot add, update, or delete any property.
// Changes are silently ignored in non-strict mode, or throw in strict mode.
const frozenObj = {
  name: "Kevin",
  role: "Admin",
};

Object.freeze(frozenObj);

frozenObj.name = "John"; // silently ignored
frozenObj.age = 25; // silently ignored (new property)
delete frozenObj.role; // silently ignored

console.log("Frozen object (unchanged):", frozenObj); // { name: "Kevin", role: "Admin" }
console.log("Is frozen:", Object.isFrozen(frozenObj)); // true

// --- Object.seal() ---
// Prevents ADDING or DELETING properties, but ALLOWS updating existing ones.
const sealedObj = {
  name: "Kevin",
};

Object.seal(sealedObj);

sealedObj.name = "John"; // allowed — updating an existing property
sealedObj.age = 30; // silently ignored — adding a new property is blocked

console.log("Sealed object:", sealedObj); // { name: "John" }
console.log("Is sealed:", Object.isSealed(sealedObj)); // true

/********************************************************************
 1️⃣8️⃣  CHECKING PROPERTY EXISTENCE
 - Multiple ways to check if an object has a property.
 - Be careful using truthiness — falsy values (0, false, "") can mislead.
********************************************************************/

const checkObj = { name: "Kevin", score: 0, active: false };

// `in` operator — checks own AND inherited properties
console.log("'name' in checkObj:", "name" in checkObj); // true
console.log("'age' in checkObj:", "age" in checkObj); // false

// hasOwnProperty() — checks ONLY own properties (not inherited)
console.log("hasOwnProperty 'name':", checkObj.hasOwnProperty("name")); // true

// Modern: Object.hasOwn() — same as hasOwnProperty but safer (static method)
console.log("Object.hasOwn 'score':", Object.hasOwn(checkObj, "score")); // true

// PITFALL: checking with truthiness fails for falsy values like 0 or false!
if (checkObj.score) {
  // This branch is skipped even though score EXISTS (because 0 is falsy)
  console.log("score exists");
} else {
  console.log(
    "Truthy check: wrong result for score:0 — use 'in' or Object.hasOwn instead",
  );
}

// Optional chaining for safe access without errors
console.log("Safe access with ?.", checkObj?.name); // "Kevin"
console.log("Safe access missing:", checkObj?.email); // undefined (no error thrown)

/********************************************************************
 1️⃣9️⃣  Object.create() & PROTOTYPES
 - Every object in JS has a hidden internal prototype (like a parent).
 - Object.create(proto) creates a new object with `proto` as its prototype.
 - The new object inherits all properties/methods from `proto`.
 - This is the foundation of prototype-based inheritance in JavaScript.
 - `class` syntax is just cleaner syntax on top of this same mechanism.
********************************************************************/

// Create a "blueprint" prototype object
const animalProto = {
  breathe() {
    console.log(`${this.name} is breathing.`);
  },
  eat(food) {
    console.log(`${this.name} is eating ${food}.`);
  },
};

// Create a dog that inherits from animalProto
const dog = Object.create(animalProto);
dog.name = "Rex"; // own property
dog.breed = "Lab"; // own property

dog.breathe(); // "Rex is breathing."  — method inherited from animalProto
dog.eat("bone"); // "Rex is eating bone." — inherited

console.log("dog own keys:", Object.keys(dog)); // ["name", "breed"] (own only)
console.log("breathe in prototype chain:", "breathe" in dog); // true (inherited)
console.log("dog hasOwn breathe:", dog.hasOwnProperty("breathe")); // false (not own)

/********************************************************************
 2️⃣0️⃣  JSON SERIALIZATION (stringify & parse)
 - JSON.stringify(obj)  converts a JS object → JSON string.
 - JSON.parse(str)      converts a JSON string → JS object.
 - Used when: saving to localStorage, sending data to an API, deep copying data.
 - IMPORTANT: Functions, Symbols, and undefined are SILENTLY DROPPED.
********************************************************************/

const apiData = {
  userId: 1,
  username: "kevin123",
  scores: [95, 87, 100],
  active: true,
};

// Object → JSON string
const jsonString = JSON.stringify(apiData);
console.log("JSON.stringify:", jsonString);
// '{"userId":1,"username":"kevin123","scores":[95,87,100],"active":true}'

// JSON string → Object
const parsedBack = JSON.parse(jsonString);
console.log("JSON.parse:", parsedBack);
console.log("Accessed after parse:", parsedBack.username); // "kevin123"

// Pretty-print with indentation — useful for debugging
console.log("Pretty JSON:\n", JSON.stringify(apiData, null, 2));

// Functions are silently dropped during JSON serialization
const objWithFn = {
  name: "Kevin",
  greet() {
    return "hi";
  },
};
console.log("stringify with function:", JSON.stringify(objWithFn));
// '{"name":"Kevin"}' — greet() is gone

/********************************************************************
 2️⃣1️⃣  SYMBOLS AS KEYS
 - Symbol() creates a guaranteed unique, hidden identifier.
 - Symbol keys do NOT appear in for...in, Object.keys(), Object.entries().
 - Useful for "private-like" metadata properties on objects.
 - Access them via Object.getOwnPropertySymbols().
********************************************************************/

const idSymbol = Symbol("id"); // unique symbol with description "id"
const secretSymbol = Symbol("secret");

const symbolObj = {
  name: "Kevin",
  [idSymbol]: 42, // computed property using symbol
  [secretSymbol]: "hidden-value",
};

console.log("Accessing symbol key:", symbolObj[idSymbol]); // 42
console.log("Object.keys (no symbols):", Object.keys(symbolObj)); // ["name"] — symbols hidden

// To see symbol keys, use:
console.log("Own symbol keys:", Object.getOwnPropertySymbols(symbolObj));
// [Symbol(id), Symbol(secret)]

/********************************************************************
 2️⃣2️⃣  COMMON OBJECT BUGS & TRAPS
********************************************************************/

// BUG 1: Using an object as a key — both become "[object Object]"
const badKeyObj = {};
const objKey1 = { x: 1 };
const objKey2 = { y: 2 };

badKeyObj[objKey1] = "first";
badKeyObj[objKey2] = "second"; // overwrites! Both stringify to "[object Object]"

console.log("Object-as-key bug:", badKeyObj);
// { '[object Object]': 'second' } — only ONE key, data lost!

// BUG 2: Comparing objects with === — compares references, not content
const o1 = { a: 1 };
const o2 = { a: 1 };
console.log("o1 === o2:", o1 === o2); // false — different objects in memory
console.log(
  "Content equal via JSON:",
  JSON.stringify(o1) === JSON.stringify(o2),
); // true

// BUG 3: Mutating function arguments (objects are passed by reference)
function addLevel(user) {
  user.level = 10; // MUTATES the original object — unintended side effect!
}
const gameUser = { name: "Alice" };
addLevel(gameUser);
console.log("gameUser after function:", gameUser); // { name: "Alice", level: 10 }
// FIX: return a new object instead — return { ...user, level: 10 }

// BUG 4: Accessing a missing property returns undefined, not an error
const emptyUser = {};
console.log("Missing property:", emptyUser.name); // undefined
console.log("Chained missing:", emptyUser.address?.city); // undefined (safe with ?.)
// emptyUser.address.city  // ❌ TypeError — cannot chain without ?.

/********************************************************************
 2️⃣3️⃣  PRACTICE CHALLENGES
 (All answers use the concepts from these notes)
********************************************************************/

// Challenge 1: Update user role without mutating the original.
const challengeUser = { name: "Kevin", role: "User", active: true };
const updatedChallengeUser = { ...challengeUser, role: "Admin" };
console.log("Challenge 1 — original:", challengeUser); // role: "User"
console.log("Challenge 1 — updated:", updatedChallengeUser); // role: "Admin"

// Challenge 2: Safely extract city from a deeply nested object.
const challengeNested = {
  profile: {
    location: {
      city: "Nairobi",
    },
  },
};
const challengeCity = challengeNested.profile?.location?.city ?? "Unknown";
console.log("Challenge 2 — city:", challengeCity); // "Nairobi"

// Challenge 3: Convert object into array of key-value pairs, then back.
const challengeObj = { a: 1, b: 2, c: 3 };
const entries = Object.entries(challengeObj); // → [["a",1],["b",2],["c",3]]
const backToObj = Object.fromEntries(entries); // → { a:1, b:2, c:3 }
console.log("Challenge 3 — entries:", entries);
console.log("Challenge 3 — back to object:", backToObj);

// Challenge 4: Count how many own properties an object has.
const challengeCar = {
  make: "Toyota",
  model: "GR86",
  year: 2024,
  color: "red",
};
const propertyCount = Object.keys(challengeCar).length;
console.log("Challenge 4 — property count:", propertyCount); // 4

// Challenge 5: Merge two objects, with the second taking priority.
const baseConfig = { lang: "en", theme: "light", fontSize: 14 };
const overrideConfig = { theme: "dark", fontSize: 16 };
const finalConfig = { ...baseConfig, ...overrideConfig };
console.log("Challenge 5 — merged config:", finalConfig);
// { lang: "en", theme: "dark", fontSize: 16 }

// Challenge 6: Deep copy an object with nested data, then mutate the copy.
const original = { title: "Dev", tags: ["js", "node"], meta: { views: 50 } };
const deepClone = structuredClone(original);
deepClone.tags.push("react");
deepClone.meta.views = 999;
console.log("Challenge 6 — original tags:", original.tags); // ["js", "node"] — untouched
console.log("Challenge 6 — original views:", original.meta.views); // 50 — untouched

/********************************************************************
 END OF JAVASCRIPT OBJECTS NOTES
********************************************************************/
