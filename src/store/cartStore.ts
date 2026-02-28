import { create } from "zustand";
import { persist } from "zustand/middleware";

/* ─── TYPES ─── */
export interface CartItem {
  /** Benzersiz satır kimliği: `${productId}-${size}` */
  id: string;
  productId: number;
  name: string;
  price: number;
  image: string;
  size: string;
  qty: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, "id" | "qty">) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

/* ─── STORE ─── */
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (item) => {
        const lineId = `${item.productId}-${item.size}`;
        const existing = get().items.find((i) => i.id === lineId);

        if (existing) {
          set({
            items: get().items.map((i) =>
              i.id === lineId ? { ...i, qty: i.qty + 1 } : i
            ),
            isOpen: true,
          });
        } else {
          set({
            items: [...get().items, { ...item, id: lineId, qty: 1 }],
            isOpen: true,
          });
        }
      },

      removeItem: (id) => {
        set({ items: get().items.filter((i) => i.id !== id) });
      },

      updateQty: (id, qty) => {
        if (qty <= 0) {
          set({ items: get().items.filter((i) => i.id !== id) });
        } else {
          set({
            items: get().items.map((i) =>
              i.id === id ? { ...i, qty } : i
            ),
          });
        }
      },

      clearCart: () => set({ items: [], isOpen: false }),

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
    }),
    {
      name: "feron-cart",
      partialize: (state) => ({ items: state.items }), // isOpen'ı localStorage'a kaydetme
    }
  )
);
