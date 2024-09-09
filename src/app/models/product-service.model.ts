import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { Product } from "./product.model";

export interface ProductService {
  getAll(): Product[] | Promise<Product[]>; // de esta forma creamos una interfaz flexible para poder trabajar con servicios sincronos y asincronos
  create(product: CreateProductDto): Product | Promise<Product>;
  update(id: Product['id'], changes: UpdateProductDto): Product | Promise<Product>;
  findOne(id: Product['id']): Product | Promise<Product | undefined> | undefined;
}
