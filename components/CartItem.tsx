import { ProductItem } from '@/mock-data';

type CartItemInput = {
    product: ProductItem;
};

const CartItem = ({ product }: CartItemInput) => {
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
            <input type='number' className='d-block' style={{ width: '35px' }} defaultValue="1" min="0"
                onChange={() => console.log(product)}
            />
        </div>
    </li>
  )
}

export default CartItem