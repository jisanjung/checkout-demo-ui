import { create } from 'zustand';
import { ProductItem } from './mock-data';

type State = {
    cart: ProductItem[]
};

type Action = {
    showCart: boolean;
    addToCart: (product: ProductItem) => void;
    removeFromCart: (product: string) => void;
    setShowCart: (decision: boolean) => void;
};

export const useStore = create<State & Action>((set) => ({
    showCart: false,
    cart: [],
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product ] })),
    removeFromCart: (cartItemId) => set((state) => {
        const cartAfterItemRemoved = state.cart.filter(item => item.cartItemId !== cartItemId);
        return { cart: cartAfterItemRemoved }
    }),
    setShowCart: (decision) => set(() => ({ showCart: decision })),
}));
