export class MyDate {
  constructor(
    public year: number = 1970,
    public month: number = 1,
    private _day: number = 1 // por convencion se usa el underscore (_) para señalar que es un atributo privado y asi no choque con el getter
  ) { }

  printFormattedDate(): string {
    const day = this.addPadding(this._day);
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
      this._day += amount;
    } else if (type === 'months') {
      this.month += amount;
    } else if (type === 'years') {
      this.year += amount;
    }
  }

  // definicion de getters
  get day() {
    // se puede agregar logica adicional
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;

    if (this.year % 100 === 0) return false;

    return this.year % 4 === 0;
  }
}

const date = new MyDate(2024, 9, 2);
console.log('date', date.printFormattedDate());
console.log('day', date.day);
console.log('isLeapYear', date.isLeapYear); // el get se mustea como una propiedad y no se necesita invocar como un metodo

const date2 = new MyDate(1900);
console.log('date2', date2.printFormattedDate());
console.log('isLeapYear', date2.isLeapYear);
