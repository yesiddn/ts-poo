import axios from "axios";
import { ProductService } from "../models/product-service.model";
import { Product } from "../models/product.model";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";

export class ProductHttpService implements ProductService {
  private url = 'https://api.escuelajs.co/api/v1/products';

  async getAll(): Promise<Product[]> {
    const { data } = await axios.get<Product[]>(this.url);
    return data;
  }

  async create(product: CreateProductDto) { // se recomienda inferir los datos en estos casos
    const { data } = await axios.post<Product>(this.url, product);
    return data;
  }

  async update(id: Product["id"], changes: UpdateProductDto) {
    const { data } = await axios.put<Product>(`${this.url}/${id}`, changes);
    return data;
  }

  async findOne(id: Product["id"]) {
    const { data } = await axios.get(`${this.url}/${id}`);
    return data;
  }

}
