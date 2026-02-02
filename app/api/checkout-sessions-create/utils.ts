
export type ApiBodyItem = {
    price_data: {
        currency: string;
        product_data: {
            name: string;
        },
        unit_amount: number;
    },
    quantity: number;
}

export const createCheckoutSession = async (body: ApiBodyItem[]) => {
    try {
        const response = await fetch(`/api/checkout-sessions-create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        
        return response.ok ? response : null;
    } catch (error) {
        console.error('ERROR_FETCH_CREATE_CHECKOUT_SESSION_HELPER_FUNCTION: ', error);
        return null;
    }
}