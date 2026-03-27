import CustomerHomepageCardComponent from "@/app/component/CustomerHomepageCardComponent";
import ProductHomepageCardComponent from "@/app/component/ProductHomepageCardComponent";
import { getLastProduct } from "@/services/productService";
import { getFirstCustomer } from "@/services/customerService";

export default async function Home() {
  const [product, customer] = await Promise.all([
    getLastProduct(),
    getFirstCustomer(),
  ]);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {product && <ProductHomepageCardComponent product={product} />}
      {customer && <CustomerHomepageCardComponent customer={customer} />}
    </div>
  );
}
