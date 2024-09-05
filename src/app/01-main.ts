import axios from "axios";
import { Product } from "./models/product.model";

(async () => {
  async function getProducts(): Promise<Product[]> { // Promise<any> de forma inferida -> si se tipa hacia afuera (la respuesta) y se quiere hacer alguna logica de negocio dentro, no se va a poder usar el tipado
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products'); // tipado interno de la respuesta -> es la mas recomendada
    data.map(product => { });
    // para forzar el tipado en caso de que alguna libreria no lo soporte se puede hacer de la siguiente forma
    // const data = rta.data as Product[];
    return data;
  }

  console.log("Getting products async...");
  const products = await getProducts(); // any -> al procesar la promesa se convierte en any
  console.log(products.map(product => `Product: ${product.title} - ${product.price}`));
})();
