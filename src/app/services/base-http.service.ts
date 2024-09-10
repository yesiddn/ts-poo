import axios from "axios";
import { Product } from "../models/product.model";
import { Category } from "../models/category.model";

export class BaseHttpService<T> {
  // private data: T[] = [];
  constructor(private url: string) { }

  async getAll() {
    const { data } = await axios.get<T[]>(this.url);
    return data;
  }
}

// const service1 = new BaseHttpService<number>();
// service1.getAll();

// const service2 = new BaseHttpService<string>();
// service2.getAll();

(async () => {

  const productService = new BaseHttpService<Product>('https://api.escuelajs.co/api/v1/products');
  const productsResponse = await productService.getAll(); // array de productos
  console.log('products: ', productsResponse.length);

  const categoryService = new BaseHttpService<Category>('https://api.escuelajs.co/api/v1/categories');
  const categoriesResponse = await categoryService.getAll(); // array de categorias
  console.log('categories: ', categoriesResponse.length);

})();
