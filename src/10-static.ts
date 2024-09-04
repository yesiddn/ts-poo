console.log('Math.PI', Math.PI); // static property
console.log('Math.max', Math.max(1, 8, 2, 3, 4, 5)); // static method
console.log('Math.max', Math.max(-2, -1, -8, -3, -4, -5));

class MyMath {
  static readonly PI = 3.1416;

  static max(...numbers: number[]): number {
    return numbers.reduce((max, item) => max > item ? max : item);
  }
}

// MyMath.PI = 3.14159; // ahora no se puede modificar la propiedad PI pero si acceder a ella

console.log('MyMath.PI', MyMath.PI);
console.log('MyMath.PI', MyMath.max(1, 8, 2, 3, 4, 5));
console.log('MyMath.PI', MyMath.max(-2, -1, -8, -3, -4, -5));
