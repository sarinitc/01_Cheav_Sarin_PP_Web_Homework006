const BASE_URL = "https://homework-api.noevchanmakara.site/api/v1";
const OPTS = { next: { revalidate: 60 } };

export async function getAllCustomers() {
  const res = await fetch(`${BASE_URL}/customers`, OPTS);
  if (!res.ok) return [];
  const data = await res.json();
  return data.payload ?? [];
}

export async function getFirstCustomer() {
  const customers = await getAllCustomers();
  return customers[0] ?? null;
}

export async function getCustomerCount() {
  const customers = await getAllCustomers();
  return customers.length;
}
