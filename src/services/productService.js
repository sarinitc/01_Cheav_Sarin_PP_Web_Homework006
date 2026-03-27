const BASE_URL = "https://homework-api.noevchanmakara.site/api/v1";
const OPTS = { next: { revalidate: 60 } };

export async function getAllProducts() {
  const res = await fetch(`${BASE_URL}/products`, OPTS);
  if (!res.ok) return [];
  const data = await res.json();
  return data.payload ?? [];
}

export async function getLastProduct() {
  const products = await getAllProducts();
  return products[products.length - 1] ?? null;
}

export async function getFirstProduct() {
  const products = await getAllProducts();
  return products[0] ?? null;
}

export async function getProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`, OPTS);
  if (!res.ok) return null;
  const data = await res.json();
  return data.payload ?? null;
}
