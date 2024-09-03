export class MyDate {
  // public year: number;
  // month: number;
  // private day: number;

  // constructor(year: number, month: number, day: number) {
  //   this.year = year;
  //   this.month = month;
  //   this.day = day;
  // }

  // lo anterior se puede simplificar de la siguiente manera
  // se definen e inicializan las propiedades en el constructor
  // si no se usan los access modifiers, no se auto-generan las propiedades
  constructor(
    public year: number = 1970,
    public month: number = 1,
    private day: number = 1
  ) { }

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
console.log('date', date.printFormattedDate());

const date2 = new MyDate();
console.log('date2', date2.printFormattedDate());
