function isEvenOrOdd(num: number): string {
  return num % 2 === 0 ? "ლუწია" : "კენტია";
}

function checkAge(age: number): string {
  return age >= 18 ? "სრულწლოვანია" : "არასრულწლოვანია";
}

function isEmpty(str: string): string {
  return str === "" ? "ცარიელია" : "არ არის ცარიელი";
}

function maxNumber(a: number, b: number): number {
  return a > b ? a : b;
}

function checkPasswordStrength(password: string): string {
  return password.length >= 8 ? "ძლიერია" : "სუსტია";
}
