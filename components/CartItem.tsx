'use client';

import { ProductItem } from '@/mock-data';
import { useStore } from '@/store';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type CartItemInput = {
    product: ProductItem;
};

const CartItem = ({ product }: CartItemInput) => {

    const addToCart = useStore(state => state.addToCart);
    const removeFromCart = useStore(state => state.removeFromCart);
    const cart = useStore(state => state.cart);
    const quantity = cart.filter((item => item.id === product.id)).length;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className='d-flex align-items-center justify-content-between'>
            <img src={product.img_url} width={50} height={50} className='rounded'/>
            <div className='ms-2'>
                <p className='mb-1 fw-bold'>{product.name}</p>
                <p className='mb-0'>{product.price}</p>
            </div>
        </div>
        <div>
            <button className='btn btn-primary btn-small' style={{ width: '35px' }}
                onClick={() => {
                    addToCart({ ...product, cartItemId: uuidv4() });
                }}
            >+</button>
            <span className='d-block text-center'>{quantity}</span>
            <button className='btn btn-primary btn-small' style={{ width: '35px' }}
                onClick={() => {
                    removeFromCart(product?.cartItemId || '');
                }}
            >-</button>
        </div>
    </li>
  )
}

export default CartItem