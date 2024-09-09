import { ProductMemoryService } from "./services/product-memory.service";

const productService = new ProductMemoryService();

productService.create({
  title: 'Product 1',
  price: 100,
  description: 'Description of product 1',
  categoryId: 1,
  images: ['https://via.placeholder.com/150'],
});

const products = productService.getAll();
const productId = products[0].id;

productService.update(productId, {
  title: 'Product 1 Updated',
  price: 150,
});

const response = productService.findOne(productId);
console.log(response);
