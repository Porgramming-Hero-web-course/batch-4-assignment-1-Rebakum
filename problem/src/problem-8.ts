// problem-8.ts
function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    return keys.every(key => key in obj);
}

// Sample Input
const user = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(user, ["name", "age"])); // Output: true
