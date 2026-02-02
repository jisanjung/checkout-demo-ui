import { createCheckoutSession } from "@/app/api/checkout-sessions-create/utils";
import { makeApiBodyFromCart } from "@/app/utils";
import { useStore } from "@/store"

const CheckoutButton = () => {

    const cartData = useStore(state => state.cart);

  return (
    <button className="btn btn-warning btn-lg fw-bold">
        Checkout
    </button>
  )
}

export default CheckoutButton