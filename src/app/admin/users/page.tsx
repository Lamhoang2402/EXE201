import { mockUsers } from "@/features/admin/data/mockAdminData";

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-light text-white">Users</h1>
        
      </div>

      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#17171f]">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-white/10 bg-white/[0.02] text-xs uppercase tracking-wider text-neutral-500">
            <tr>
              <th className="px-4 py-3">Tên</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Vai trò</th>
              <th className="px-4 py-3">Tham gia</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {mockUsers.map((entry) => (
              <tr key={entry.id} className="hover:bg-white/[0.02]">
                <td className="px-4 py-3 font-medium text-white">{entry.name}</td>
                <td className="px-4 py-3 text-neutral-300">{entry.email}</td>
                <td className="px-4 py-3">
                  <span
                    className={
                      entry.role === "admin"
                        ? "rounded-full bg-violet-500/20 px-2 py-0.5 text-xs text-violet-300"
                        : "rounded-full bg-white/10 px-2 py-0.5 text-xs text-neutral-300"
                    }
                  >
                    {entry.role}
                  </span>
                </td>
                <td className="px-4 py-3 text-neutral-400">{entry.joinedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
