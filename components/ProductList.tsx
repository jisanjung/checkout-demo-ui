import { products } from '@/mock-data'
import ProductItem from './ProductItem'

const ProductList = () => {
  return (
    <div className='d-flex flex-wrap justify-content-center'>
        {products.map(product => {
            return (
                <ProductItem
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    img_url={product.img_url}
                />
            )
        })}
    </div>
  )
}

export default ProductList