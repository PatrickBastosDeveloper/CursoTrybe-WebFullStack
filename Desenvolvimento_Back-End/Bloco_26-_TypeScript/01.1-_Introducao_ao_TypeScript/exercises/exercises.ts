export function greeter(name: string) {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
} 

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function diamond(diagonalLarger: number, diagonalMinor: number): number {
  return (diagonalLarger * diagonalMinor) / 2;
}

export function trapezio(h: number, B: number, b: number): number{
  return ((B + b) * h) / 2;
}

export const circle = (radius: number): number => {
  const PI: number = 3.14;
  return PI * radius **2;
}