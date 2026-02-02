import { createCheckoutSession } from "@/app/api/checkout-sessions-create/utils";
import { makeApiBodyFromCart } from "@/app/utils";
import { useStore } from "@/store"

const CheckoutButton = () => {

    const cartData = useStore(state => state.cart);

    const handleCheckoutButtonClick = async () => {
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
    <button className="btn btn-warning btn-lg fw-bold"
        onClick={async () => await handleCheckoutButtonClick()}
    >
        Checkout
    </button>
  )
}

export default CheckoutButton