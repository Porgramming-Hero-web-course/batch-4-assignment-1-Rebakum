
# Union Type to Intersection Type in TypeScript
In TypeScript, we often deal with various types to handle the flexibility and structure of data. One of the core features of TypeScript is its ability to work with Union and Intersection types, which allow developers to create more versatile and maintainable code. This article explores how we can convert a Union Type to an Intersection Type using different methods.

## Table of Contents
 Introduction to Union and Intersection Types

 ### Method 1: Applying Conditional Types Distributively

 ### Method 2: Using Literal Types in Conditional  Template

 ### Conclusion
## What is a Union Type in TypeScript?
In TypeScript, a Union Type allows a variable to hold multiple types, providing flexibility. A union type is defined using the pipe (|) operator.

### Example:
typescript

type Animal = "Dog" | "Cat" | "Bird";

Here, the variable Animal can be either "Dog", "Cat", or "Bird". The union type makes it possible for a variable to hold any one of these types.

## What is an Intersection Type in TypeScript?
An Intersection Type allows you to combine multiple types into one. It requires a variable to fulfill all the types involved. An intersection type is defined using the ampersand (&) operator.

### Example:
typescript


type Person = { name: string } & { age: number };

In this example, a variable of type Person must have both a name property (a string) and an age property (a number). The intersection ensures that both types are required.

## Method 1: Applying Conditional Types Distributively
One of the ways to convert a union type to an intersection type is by using conditional types distributively. Conditional types allow you to check if a type extends another type, and based on that, transform it into a new type.

### Example:
To convert a union type to an intersection type, we use a type helper that applies conditional types distributively over each member of the union.

typescript

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
Here, the UnionToIntersection type works by applying the conditional type (k: U) => void to each member of the union U and inferring the result. The final type is the intersection of all the union members.

### Usage Example:
typescript


type UnionType = { a: number } | { b: string } | { c: boolean };

type IntersectionType = UnionToIntersection<UnionType>;

const myObject: IntersectionType = { a: 42, b: "hello", c: true };

console.log(myObject);
## Output:


{
  "a": 42,
  "b": "hello",
  "c": true
}
In this example, we successfully convert a union type of { a: number } | { b: string } | { c: boolean } into an intersection type that requires all three properties (a, b, and c).

## Method 2: Using Literal Types in Conditional Templates
Another elegant approach is to use literal types combined with conditional types to create an intersection type from a union type. Conditional template literal types allow us to recursively distribute over each union member and form the intersection iteratively.

### Example:
typescript


type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
This approach works similarly to the first method, but it uses literal types to build the transformation iteratively, ensuring each union member is processed into an intersection.

## Usage Example:
typescript

type UnionType = { a: number } | { b: string } | { c: boolean };

type IntersectionType = UnionToIntersection<UnionType>;

const myObject: IntersectionType = { a: 22, b: "GFG", c: true };

console.log(myObject);
## Output:


{
  "a": 22,
  "b": "GFG",
  "c": true
}

In this case, the result is an intersection type that combines all three properties (a, b, and c), which are required for the object to conform to the IntersectionType.

## Conclusion
TypeScript’s Union and Intersection types are powerful tools that enhance the flexibility and safety of your code. While union types allow a variable to take on one of several types, intersection types require a variable to meet the requirements of all the types it intersects.

By using conditional types and leveraging literal types in template types, we can easily convert union types into intersection types, providing us with even more control over the structure and requirements of our data. This not only enhances type safety but also enables the creation of reusable and maintainable code.

Mastering Union and Intersection types is essential for any TypeScript developer aiming to write cleaner, more efficient, and reliable code.