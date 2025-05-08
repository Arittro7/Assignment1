# What is the use of the keyof keyword in TypeScript? Provide an example.

With the help of keyof keyword in TypeScript **we can extract the keys of a type as a union of string or number .** It is useful for ensuring type safety when working with object properties dynamically.

:anchor: For example:  
``` 
type Person = {  
  name: string;  
  age: number;  
  email: string;  
}
type PersonKeys = keyof Person;  
```
basically keyof represent as "name" | "age" | "email" 

:dart: Real Use Case  
Let’s make a function that gets a value from an object, but only using its keys safely:

```
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {  
  return obj[key];  
}

const student = {  
  name: "Nahid",
  age: 20,  
  email: "nahid@gmail.com",  
};
```

const result = getValue(student, "email");

Here I used keyof to make sure only pass a key from the student object

If I try to pass an object using keyof which is not declared in student object it will throw an error.

<br>

# What is type inference in TypeScript? Why is it helpful?
Type inference means TypeScript automatically guesses the type of a variable, function, or expression without telling it. 

In simple words, TypeScript is smart. If you assign a value, it will understand the type by itself.


:jigsaw: Example of Type Inference:
```
let name = "Nahid"; // TypeScript understands this is a string
let age = 20;       // TypeScript knows this is a number
```
`Even though we didn’t write : string or : number, TypeScript figured it out.`