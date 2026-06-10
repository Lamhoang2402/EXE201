import Link from "next/link";
import { collectionDetails } from "@/features/collections/data/collections";
import { mockOrders } from "@/features/admin/data/mockAdminData";
import { allProducts } from "@/features/products/data/products";
import { formatPrice } from "@/shared/utils/formatPrice";

const stats = [
  {
    label: "Tổng sản phẩm",
    value: allProducts.length,
    href: "/admin/products",
  },
  {
    label: "Bộ sưu tập",
    value: Object.keys(collectionDetails).length,
    href: "/admin/collections",
  },
  {
    label: "Đơn hàng (demo)",
    value: mockOrders.length,
    href: "/admin/orders",
  },
  {
    label: "Doanh thu demo",
    value: formatPrice(mockOrders.reduce((sum, order) => sum + order.total, 0)),
    href: "/admin/orders",
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-light text-white md:text-3xl">Dashboard</h1>
        <p className="mt-2 text-sm text-neutral-400">
          Tổng quan dữ liệu cửa hàng — đọc từ mock data, chưa kết nối database.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="rounded-xl border border-white/10 bg-[#17171f] p-5 transition-colors hover:border-violet-500/40"
          >
            <p className="text-xs uppercase tracking-[0.15em] text-neutral-500">{stat.label}</p>
            <p className="mt-3 text-2xl font-medium text-white">{stat.value}</p>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-white/10 bg-[#17171f]">
          <div className="border-b border-white/10 px-5 py-4">
            <h2 className="text-sm font-medium text-white">Sản phẩm mới nhất</h2>
          </div>
          <ul className="divide-y divide-white/5">
            {allProducts.slice(0, 5).map((product) => (
              <li key={product.id} className="flex items-center gap-3 px-5 py-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-10 w-10 rounded-md object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm text-white">{product.name}</p>
                  <p className="text-xs text-neutral-500">{product.color}</p>
                </div>
                <p className="text-sm text-neutral-300">{formatPrice(product.price)}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-white/10 bg-[#17171f]">
          <div className="border-b border-white/10 px-5 py-4">
            <h2 className="text-sm font-medium text-white">Đơn hàng gần đây</h2>
          </div>
          <ul className="divide-y divide-white/5">
            {mockOrders.slice(0, 5).map((order) => (
              <li key={order.id} className="flex items-center justify-between px-5 py-3">
                <div>
                  <p className="text-sm text-white">{order.id}</p>
                  <p className="text-xs text-neutral-500">{order.customer}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-neutral-300">{formatPrice(order.total)}</p>
                  <p className="text-xs capitalize text-violet-400">{order.status}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
