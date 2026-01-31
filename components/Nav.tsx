'use client'

import { useStore } from '@/store';
import { FiShoppingCart } from "react-icons/fi";
import Cart from './Cart';

const Nav = () => {

    const cartItems = useStore(state => state.cart);
    const showCart = useStore(state => state.showCart);
    const setShowCart = useStore(state => state.setShowCart);

  return (
    <nav className='bg-primary'>
        <div className='container d-flex justify-content-between align-items-center'>
            <h1 className="display-6 py-4 text-white">📱 Cell Store</h1>
            <button className='bg-transparent border border-0 d-flex align-items-center'
                onClick={() => setShowCart(!showCart)}
            >
                <FiShoppingCart className='fs-3 text-white d-block mx-1'/>
                <span className='text-white fs-4'>({cartItems.length})</span>
            </button>
        </div>
        <Cart className={`${showCart ? 'd-block' : 'd-none'}`}/>
    </nav>
  )
}

export default Nav