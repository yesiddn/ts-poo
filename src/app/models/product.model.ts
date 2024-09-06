import { Category } from "./category.model";

// ver README.md para ver detalles de una herramienta (quicktype) que agrega tipos a una respues
export interface Product {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    Category;
  images:      string[];
}
