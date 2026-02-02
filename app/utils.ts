import { CartItemData } from "@/mock-data";
import { ApiBodyItem } from "./api/checkout-sessions-create/utils";

const toStripeUnitAmount = (amount: number) => Math.round(amount * 100);

export const makeApiBodyFromCart = (cart: CartItemData[]): ApiBodyItem[] | undefined => {
    if (!cart || cart.length === 0) {
        return;
    }
    const uniqueItems = cart.reduce<CartItemData[]>((accumulator, previous) =>
        accumulator.concat(accumulator.find(item => item.id === previous.id) ? [] : [previous]), []);

    return uniqueItems.map((item) => ({
        price_data: {
            currency: 'usd',
            product_data: {
                name: item.name,
            },
            unit_amount: toStripeUnitAmount(item.price),
        },
        quantity: cart.filter((quantityItem) => quantityItem.id === item.id).length
    }));
};