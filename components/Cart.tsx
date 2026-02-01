'use client';

import { useStore } from '@/store';
import CartItem from './CartItem';
import { CartItemData } from '@/mock-data';
import CheckoutButton from './CheckoutButton';

type CartInput = {
    className: string;
};

const Cart = ({ className }: CartInput) => {

    const setShowCart = useStore(state => state.setShowCart);

    const cartItems = useStore(state => state.cart);
    const uniqueItems = cartItems.reduce<CartItemData[]>((accumulator, previous) =>
        accumulator.concat(accumulator.find(item => item.id === previous.id) ? [] : [previous]), []);
    const sortedItems = uniqueItems.sort((a, b) => a.id - b.id);

  return (
    <div id='cartContainer' className={`${className} position-fixed top-0 end-0 bottom-0 bg-white shadow p-2`}>
        <button type="button" className="btn-close" aria-label="Close"
            onClick={() => setShowCart(false)}
        ></button>
        <ul className="list-group my-4">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Cart - {cartItems.length} items
            </li>
            {sortedItems.map((product, index) => {
                return (
                    <CartItem key={index} product={product}/>
                )
            })}
        </ul>
        <div className={cartItems?.length > 0 ? 'd-grid gap-2 mx-auto' : 'd-none'}>
            <CheckoutButton/>
            <span className='text-center'>or</span>
        </div>
        <div className='d-flex justify-content-center '>
            <button className="btn btn-link"
                onClick={() => setShowCart(false)}
            >Continue shopping</button>
        </div>
    </div>
  )
}

export default Cart