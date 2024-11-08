// problem-5.ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Sample Input
const personData = { name: "Alice", age: 30 };
console.log(getProperty(personData, "name")); // Output: Alice
