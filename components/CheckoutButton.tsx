'use client';

import { createCheckoutSession } from "@/app/api/checkout-sessions-create/utils";
import { makeApiBodyFromCart } from "@/app/utils";
import { useStore } from "@/store"
import { useState } from "react";

const CheckoutButton = () => {

    const cartData = useStore(state => state.cart);
    const [loading, setLoading] = useState(false);

    const handleCheckoutButtonClick = async () => {
        setLoading(true);
        const bodyData = makeApiBodyFromCart(cartData);
        if (!bodyData) {
            return;
        }
        const response = await createCheckoutSession(bodyData);
        const data = await response?.json();

        // Navigate to an Stripe checkout page
        window.location.href = data?.url;
    }

  return (
    <button className="btn btn-warning btn-lg d-flex align-items-center justify-content-center"
        onClick={async () => await handleCheckoutButtonClick()}
        disabled={loading}
    >
        {loading ? (
            <div>
                <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                <span className="visually-hidden" role="status">Loading...</span>
            </div>
        ) : <span className="fw-bold">Checkout</span>}
    </button>
  )
}

export default CheckoutButton