import axios from "axios";

(async () => {
  function delay() {
    const promise = new Promise<boolean>((resolve) => { // de esta forma se hace tipado de la promesa
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });

    return promise;
  }

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  async function getProductsAsync() {
    const response = await axios.get('https://api.escuelajs.co/api/v1/products');
    return response.data;
  }

  console.log("Wait for 2 seconds...");
  const rta = await delay();
  console.log(rta);

  console.log("Getting products...");
  const products = await getProducts();
  console.log(products.data);

  console.log("Getting products async...");
  const productsAsync = await getProductsAsync();
  console.log(productsAsync);
})();
