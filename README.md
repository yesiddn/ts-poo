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
