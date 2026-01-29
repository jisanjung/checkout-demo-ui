'use client'

import { useStore } from '@/store';
import { FiShoppingCart } from "react-icons/fi";

const Nav = () => {

    const cartItems = useStore(state => state.cart);

  return (
    <nav className='bg-primary'>
        <div className='container d-flex justify-content-between align-items-center'>
            <h1 className="display-6 py-4 text-white">📱 Cell Store</h1>
            <button className='bg-transparent border border-0 d-flex align-items-center'>
                <FiShoppingCart className='fs-3 text-white d-block mx-1'/>
                <span className='text-white fs-4'>({cartItems.length})</span>
            </button>
        </div>
    </nav>
  )
}

export default Nav