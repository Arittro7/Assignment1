function formatString(input: string, toUpper?: boolean): string {
  if (toUpper) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}


function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((result, current) => [...result, ...current], []);
}


class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}


function processValue(value: string | number): number{
  if(typeof value === "string"){
    return value.length;
  }else{
    return value * 2;
  }
}


interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null{
  if(products.length === 0){
    return null
  }
  return products.reduce((prev, curr) => (prev.price > curr.price ? prev : curr))
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string{
  return (day === Day.Saturday || day === Day.Sunday) ? "Weekend" : "Weekday";
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      if ( n < 0 ){
        reject(new Error ("You Can't Input Negative Number"))
    } else {
      resolve(n * n);
    }
  },1000)
  })
}