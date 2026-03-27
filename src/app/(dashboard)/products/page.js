import { getAllProducts } from "@/services/productService";
import ProductsGrid from "./ProductsGrid";

export const metadata = {
  title: "Products — HRD Shop Admin",
};

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-slate-900">List of All Product</h1>
      <ProductsGrid products={products} />
    </div>
  );
}
