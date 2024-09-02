export class MyDate {
  // propiedades plucas
  public year: number; // por  default es public
  month: number;
  // readonly day: number; // tanto dentro como fuera de la clase no se puede modificar
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormattedDate(): string {
    return `${this.year}-${this.month}-${this.day}`;
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
}

const date = new MyDate(2024, 9, 2);
console.log('date', date.printFormattedDate());

date.add(10, 'days');
console.log('date', date.printFormattedDate());

date.add(1, 'months');
console.log('date', date.printFormattedDate());

date.day = 21;
console.log('date', date.printFormattedDate());
