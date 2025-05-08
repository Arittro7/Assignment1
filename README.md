## What is the use of the keyof keyword in TypeScript? Provide an example.

With the help of keyof keyword in TypeScript we can extract the keys of a type as a union of string or number . It is useful for ensuring type safety when working with object properties dynamically.

For example: 
type Person = {
  name: string;
  age: number;
  email: string;
}

type PersonKeys = keyof Person;
basically keyof represent as "name" | "age" | "email" 