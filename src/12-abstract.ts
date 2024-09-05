import { Animal, Dog } from "./09-protected";

// las clases abstractas no permiten ser instanciadas ya que deben ser usadas por medio de las clases hijas y estas deben tener comportamientos mas especificos
// Las clases abstractas son tan 'genericas' que no tiene sentido que sean instanciadas
// los métodos de una clase pueden ser abstractos, eso significa que no van a tener una implementación como tal, si no que cuando se extienda la clase que lo contiene ( que también debe ser abstracta ) se debe de implementar el método. Es una forma de hacer que las clases hijas obligatoriamente tengan que implementar ciertos métodos.
// const animal = new Animal('animal');
// animal.greeting();

const charlie = new Dog('Charlie', 'Golden Retriever');
charlie.greeting();
charlie.woof(1);
