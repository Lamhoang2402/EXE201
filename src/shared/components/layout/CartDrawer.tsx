"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/shared/components/ui";
import { useApp } from "@/shared/context/AppProvider";
import { formatPrice } from "@/shared/utils/formatPrice";

export function CartDrawer() {
  const {
    cart,
    cartCount,
    cartTotal,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
  } = useApp();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            onClick={closeCart}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 320 }}
            className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col border-l border-neutral-800 bg-neutral-950 shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-neutral-800 px-6 py-5">
              <div>
                <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-white">
                  Giỏ hàng
                </h2>
                <p className="mt-1 text-xs text-neutral-500">{cartCount} sản phẩm</p>
              </div>
              <button
                type="button"
                aria-label="Đóng giỏ hàng"
                onClick={closeCart}
                className="text-neutral-400 transition-colors hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <p className="text-sm text-neutral-400">Giỏ hàng trống</p>
                  <p className="mt-2 text-xs text-neutral-600">
                    Thêm sản phẩm để bắt đầu mua sắm
                  </p>
                  <Link href="/cua-hang" onClick={closeCart} className="mt-6">
                    <Button variant="secondary">Khám phá shop</Button>
                  </Link>
                </div>
              ) : (
                <ul className="space-y-6">
                  {cart.map((item) => (
                    <li key={item.key} className="flex gap-4 border-b border-neutral-800 pb-6">
                      <Link
                        href={`/san-pham/${item.product.slug}`}
                        onClick={closeCart}
                        className="relative h-28 w-20 shrink-0 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900"
                      >
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </Link>
                      <div className="min-w-0 flex-1">
                        <Link
                          href={`/san-pham/${item.product.slug}`}
                          onClick={closeCart}
                          className="block truncate text-sm text-white hover:underline"
                        >
                          {item.product.name}
                        </Link>
                        <p className="mt-1 text-xs text-neutral-500">
                          {item.product.color} · Size {item.size}
                        </p>
                        <p className="mt-2 text-sm text-white">
                          {formatPrice(item.product.price)}
                        </p>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center overflow-hidden rounded-full border border-neutral-800">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.key, item.quantity - 1)}
                              className="px-2.5 py-1 text-sm text-neutral-400 hover:text-white disabled:opacity-40"
                              disabled={item.quantity <= 1}
                            >
                              −
                            </button>
                            <span className="min-w-[2rem] px-2 text-center text-xs text-white">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.key, item.quantity + 1)}
                              className="px-2.5 py-1 text-sm text-neutral-400 hover:text-white"
                            >
                              +
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.key)}
                            className="text-xs text-neutral-500 hover:text-white"
                          >
                            Xóa
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-neutral-800 px-6 py-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-neutral-500">
                    Tạm tính
                  </span>
                  <span className="text-lg text-white">{formatPrice(cartTotal)}</span>
                </div>
                <Button size="lg" fullWidth onClick={closeCart}>
                  Thanh toán (UI demo)
                </Button>
                <p className="mt-3 text-center text-[10px] text-neutral-600">
                  Chưa kết nối backend — chỉ demo giao diện
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
