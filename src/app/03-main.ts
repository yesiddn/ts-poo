import { ProductHttpService } from "./services/product-http.service";

(async () => {
  try {
    const productService = new ProductHttpService();
    console.log('---'.repeat(10));

    const products = await productService.getAll();
    console.log(products);

    console.log('---'.repeat(10));
    const productId = products[0].id;
    await productService.update(productId, { price: 1000 });

    const updatedProduct = await productService.findOne(productId);
    console.log(updatedProduct);
  } catch (error) {
    console.error(error);
  }
})();
