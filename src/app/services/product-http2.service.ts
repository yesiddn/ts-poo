import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";

// se extiende la clase BaseHttpService cuando se necesita un metodo adicional y se queda corta la clase en general
export class ProductHttpService extends BaseHttpService<Product> {
  anotherRequest() {
    this.url; // tratamiento de la url
    // code ...
  }
}
