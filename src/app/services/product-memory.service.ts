// migracion de proyecto: de funciones a clases
// project: https://github.com/yesiddn/ts-app/tree/main/src/app/products

import { faker } from "@faker-js/faker";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { Product } from "../models/product.model";

export class ProductMemoryService {
  private products: Product[] = [];

  create (data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      // id: faker.string.uuid(),
      id: faker.number.int(),
      category: {
        // id: faker.string.uuid(),
        id: faker.number.int(),
        name: faker.commerce.department(),
        image: faker.image.url(),
      }
    };

    return this.add(newProduct);
  }

  add(product: Product) {
    this.products.push(product);
    return product;
  }

  update (id: Product['id'], changes: UpdateProductDto): Product {
    const index = this.products.findIndex(item => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes
    };

    return this.products[index];
  }

  findOne(id: Product['id']) {
    return this.products.find(item => item.id === id);
  }
}
