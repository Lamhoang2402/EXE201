export function slugifyProductName(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function formatFlowPrice(amount: number) {
  return `${amount.toLocaleString("vi-VN")} ₫`;
}
