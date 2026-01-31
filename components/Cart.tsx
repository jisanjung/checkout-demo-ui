'use client';

import { useStore } from '@/store';
import { Dispatch, SetStateAction, useEffect } from 'react';
import CartItem from './CartItem';
import { ProductItem } from '@/mock-data';

type CartInput = {
    className: string;
    setShowCart: Dispatch<SetStateAction<boolean>>;
};

const Cart = ({ className, setShowCart }: CartInput) => {

    const cartItems = useStore(state => state.cart);
    const uniqueItems = cartItems.reduce<ProductItem[]>((accumulator, previous) =>
        accumulator.concat(accumulator.find(item => item.id === previous.id) ? [] : [previous]), []);
    const sortedItems = uniqueItems.sort((a, b) => a.id - b.id);

  return (
    <div className={`${className} position-absolute top-0 end-0 bottom-0 bg-white shadow p-2`} style={{ width: '300px' }}>
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
    </div>
  )
}

export default Cart