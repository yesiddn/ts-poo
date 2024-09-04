// todas las propiedades y métodos de una interfaz by default son públicos, no se pueden usar access modifiers como protected o private
export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnect(name: string): boolean;
}

// const driver: Driver = {
//   database: 'mysql',
//   password: 'password',
//   port: 3306
// }

class PostgresDriver implements Driver { // la palabra reservada implements se usa para implementar una interfaz
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) { }

  connect() {
    console.log('Connecting to Postgres...');
  }

  disconnect() {
    console.log('Disconnecting from Postgres...');
  }

  isConnect(name: string): boolean {
    return true;
  }
}
