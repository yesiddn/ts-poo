export class MyDate {
  public year: number;
  month: number;
  private day: number; // solo se puede acceder o modificar desde la misma clase

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormattedDate(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);

    return `${this.year}-${month}-${day}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }

    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years'): void {
    if (type === 'days') {
      this.day += amount;
    } else if (type === 'months') {
      this.month += amount;
    } else if (type === 'years') {
      this.year += amount;
    }
  }
  
  getDay() {
    return this.day;
  }
}

const date = new MyDate(2024, 9, 2);
// date.addPadding(2); // Error: Property 'addPadding' is private and only accessible within class 'MyDate'.
console.log('date', date.printFormattedDate());

// date.day = 21; // Error: Property 'day' is private and only accessible within class 'MyDate'.
// console.log('date', date.printFormattedDate());
console.log('day', date.getDay());
