import { validate } from "class-validator";
import { UpdateProductDto } from "../dtos/product.dto";
import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";
import { ProductHttpService } from "./product-http2.service";

export class ProductCRUDService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  // private http = new BaseHttpService<Product>(this.url); // una vez extendido la clase BaseHttpService ya no es necesario enviar el tipado
  private http = new ProductHttpService(this.url); // se puede hacer uso de los metodos de la clase BaseHttpService y de los metodos de la clase ProductHttpService -> tampoco es necesario enviarle el tipado Product

  update(id: Product['id'], changes: UpdateProductDto) {
    this.http.anotherRequest();

    // validate(changes) // verifica nuestro dto
    return this.http.update(id, changes); // de esta forma no es necesario enviar el tipado ya que de eso se encargan los parametros del metodo de la clase
  }
}
