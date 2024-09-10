# ts-poo

## TS Init
  
```bash
npx tsc --init
```

## TS Node

```bash
npm i -D ts-node
```

## Uso de quicktype

[QuickType](https://app.quicktype.io/)

Product Response:

```json
{
  "id": 1,
  "title": "new title",
  "price": 10001,
  "description": "new description",
  "category": {
    "id": 5,
    "name": "Others",
    "image": "https://api.lorem.space/image?w=640&h=480&r=9682"
    "creationAt": "2021-09-07T00:00:00.000Z",
    "updatedAt": "2021-09-07T00:00:00.000Z"
  },
  "images": [
    ""
  ],
  "creationAt": "2021-09-07T00:00:00.000Z",
  "updatedAt": "2021-09-07T00:00:00.000Z",
}
```

Output de quicktype:

```ts
export interface Product {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    Category;
  images:      string[];
  creationAt:  Date;
  updatedAt:   Date;
}

export interface Category {
  id:    number;
  name:  string;
  image: string;
  creationAt: Date;
  updatedAt: Date;
}
```

## Generics

Por convención, se utiliza el nombre `T` para dar a conocer que es un generics, es muy común ver este tipo de nombre en otros repositorios, documentación y también es usado en otros lenguajes como `java` y `C#`. Otros nombres utilizados en los generics son:

E - Elemento (elementos en una colección)
K - Llave
N - Número
V - Valor
T - Tipo

## Decorators

Para la practica de los decorators, se va a usar la librería `class-validator`.

### Installation

```bash
npm install class-validator --save
```

### Ejemplo de decorators

```ts
export class Post {
  @Length(10, 20)
  title: string;

  @Contains('hello')
  text: string;

  @IsInt()
  @Min(0)
  @Max(10)
  rating: number;

  @IsEmail()
  email: string;

  @IsFQDN()
  site: string;

  @IsDate()
  createDate: Date;
}
```

### ¿Qué son los decorators?

Su sintaxis es similar a las anotaciones de Java, se usa un `@` seguido de un nombre de función.
Los decoradores agregar validaciones o una funcionalidad extra a una clase, método o propiedad.
Por ejemplo, en el siguiente caso:

```ts
@Min(0)
@Max(10)
rating: number;
```

Se está validando que el valor de `rating` sea mayor o igual a 0 y menor o igual a 10.

## Mensajes de error

Este es un ejemplo de error que se lanzo en `./src/app/dts/category.dto.ts`.

```ts
[
  ValidationError {
    target: CreateCategoryDto { name: 'A' },
    value: 'A',
    property: 'name',
    children: [],
    constraints: { isLength: 'name must be longer than or equal to 3 characters' }
  },
  ValidationError {
    target: CreateCategoryDto { name: 'A' },
    value: undefined,
    property: 'image',
    children: [],
    constraints: {
      isNotEmpty: 'image should not be empty',
      isUrl: 'image must be a URL address'
    }
  }
]
```
