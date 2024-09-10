import axios from "axios";
import { Product } from "../models/product.model";
import { Category } from "../models/category.model";
import { UpdateProductDto } from "../dtos/product.dto";

export class BaseHttpService<T> {
  // private data: T[] = [];
  constructor(protected url: string) { }

  async getAll() {
    const { data } = await axios.get<T[]>(this.url);
    return data;
  }

  // <T> no va a generar ningun error, pero al igual que las variables, va a tener un scope y <T> no es el mismo tipo que se pasa a la clase -> hay que tener cuidado en el naming
  // En un punto se vuelve molesto estar enviando siempre el tipado por lo que en product-crud.service se plantea otra forma de hacerlo
  async update<Id, Dto>(id: Id, changes: Dto) { // tipado del metodo
    const array: T[] = []; // tipado de la clase
    const { data } = await axios.put<Product>(`${this.url}/${id}`, changes);
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
  productService.update<Product['id'], UpdateProductDto>(productsResponse[0].id, { title: 'new name' }); // se envia el tipado dinamico

  const categoryService = new BaseHttpService<Category>('https://api.escuelajs.co/api/v1/categories');
  const categoriesResponse = await categoryService.getAll(); // array de categorias
  console.log('categories: ', categoriesResponse.length);
  // categoryService.update<Category['id'], Category>(categoriesResponse[0].id, { title: 'new name' });

})();
