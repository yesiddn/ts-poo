// function getValue(value: unknown) {
//   return value;
// }

// function getValue(value: string | number) {
//   return value;
// }

// getValue(5).toFixed(2);
// getValue("5").toFixed(2);

// si queremos retornar cosas dinamicamente, se puede enviar el tipo como parametro
// ver README para conocer mas sobre generics
function getValue<myType, myType2>(value: myType) { // al lado del nombre de la funcion se pone el tipo de dato y luego se pone como tipo de valor que va a recibir en el parametro
  // se pueden enviar mas de dos tipos de datos y no es necesario enviar el tipo de dato en el parametro, pero si se puede usar dentro de la funcion
  let myValue2: myType2;
  return value;
}

// de esta forma puede inferir el tipo de dato que se le envia y poder asi usar el tipado y ayuda que ofrece typescript
getValue<number, string>(5).toFixed(2); // tambien se puede ser mas explicito y decirle que tipo de dato va a recibir
getValue("5").toLowerCase();
getValue([]).forEach(() => { });

// estos genericos tambien se usan en librerias o funciones como axios o Promise
// Promise<number>
// axios.get<number>("url")
