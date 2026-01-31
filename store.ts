import { create } from 'zustand';
import { ProductItem } from './mock-data';

type State = {
    cart: ProductItem[]
};

type Action = {
    addToCart: (product: ProductItem) => void;
    removeFromCart: (product: string) => void;
};

export const useStore = create<State & Action>((set) => ({
    cart: [],
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product ] })),
    removeFromCart: (cartItemId) => set((state) => {
        // if (state.cart.some(item => item.cartItemId === cartItemId)) {
        //     const cartAfterItemRemoved = state.cart.filter(item => item.cartItemId !== cartItemId);
        //     return { cart: cartAfterItemRemoved }
        // }
        // return { cart: state.cart };
        const cartAfterItemRemoved = state.cart.filter(item => item.cartItemId !== cartItemId);
        return { cart: cartAfterItemRemoved }
    }),
}));
