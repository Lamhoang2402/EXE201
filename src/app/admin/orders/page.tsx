import { mockOrders } from "@/features/admin/data/mockAdminData";
import { formatPrice } from "@/shared/utils/formatPrice";

const statusStyles: Record<(typeof mockOrders)[number]["status"], string> = {
  pending: "bg-amber-500/20 text-amber-300",
  processing: "bg-blue-500/20 text-blue-300",
  shipped: "bg-violet-500/20 text-violet-300",
  delivered: "bg-emerald-500/20 text-emerald-300",
};

export default function AdminOrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-light text-white">Orders</h1>
        <p className="mt-2 text-sm text-neutral-400">Dữ liệu đơn hàng demo — chưa có backend.</p>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#17171f]">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-white/10 bg-white/[0.02] text-xs uppercase tracking-wider text-neutral-500">
            <tr>
              <th className="px-4 py-3">Mã đơn</th>
              <th className="px-4 py-3">Khách hàng</th>
              <th className="px-4 py-3">Ngày</th>
              <th className="px-4 py-3">Tổng</th>
              <th className="px-4 py-3">Trạng thái</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {mockOrders.map((order) => (
              <tr key={order.id} className="hover:bg-white/[0.02]">
                <td className="px-4 py-3 font-medium text-white">{order.id}</td>
                <td className="px-4 py-3 text-neutral-300">{order.customer}</td>
                <td className="px-4 py-3 text-neutral-400">{order.date}</td>
                <td className="px-4 py-3 text-neutral-300">{formatPrice(order.total)}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs capitalize ${statusStyles[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
