import { create } from 'zustand';
import { ProductItem } from './mock-data';

type State = {
    cart: ProductItem[]
};

type Action = {
    addToCart: (product: ProductItem) => void;
};

export const useStore = create<State & Action>((set) => ({
    cart: [],
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product ] })),
}));
