import { getAllCustomers } from "@/services/customerService";
import CustomersTable from "./CustomersTable";

export const metadata = {
  title: "Customers — HRD Shop Admin",
};

export default async function CustomersPage() {
  const customers = await getAllCustomers();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-slate-900">List of All Customer</h1>
      <CustomersTable customers={customers} />
    </div>
  );
}
