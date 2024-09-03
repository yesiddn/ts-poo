export class MyDate {
  constructor(
    public year: number = 1970,
    private _month: number = 1,
    private _day: number = 1
  ) { }

  printFormattedDate(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);

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
      this._month += amount;
    } else if (type === 'years') {
      this.year += amount;
    }
  }

  get day() {
    return this._day;
  }

  // como recomendacion, si el getter y el setter solo retornan o modifican el valor como se hace en este caso, es recomendable dejar la variable publica y no usar el getter y setter
  get month() {
    return this._month;
  }

  // en este caso se agrega una validacion para el setter por lo que es necesario usarlo
  set month(newValue: number) {
    // el set no retorna, solo modifica el valor
    if (newValue < 1 || newValue > 12) {
      throw new Error('Month must be between 1 and 12');
    }

    this._month = newValue;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;

    if (this.year % 100 === 0) return false;

    return this.year % 4 === 0;
  }
}

const date = new MyDate(2024, 9, 2);
console.log('date', date.printFormattedDate());

console.log('month', date.month);

date.month = 12;
console.log('month', date.month);

try {
  date.month = 13; // Error: Month must be between 1 and 12
console.log('month', date.month);
} catch(e){
  const error = (e as Error).message;
  console.error(error)
}
