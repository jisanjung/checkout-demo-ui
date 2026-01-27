import React from 'react';

interface ProductItemInput {
    name: string;
    price: number;
    img_url: string;
};

const convertNumberToCurrency = (number: number) => {
    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return USDollar.format(number);
}; 

const ProductItem: React.FC<ProductItemInput> = ({ name, price, img_url, }) => {
  return (
    <div className='bg-white p-3 m-3 shadow rounded-4'>
        <img src={img_url} alt={name} width={250} height={250} className='object-fit-cover rounded-3 mb-3'/>
        <p className='fw-bold mb-0 text-center'>{name}</p>
        <p className='fw-light mb-3 text-center'>{convertNumberToCurrency(price)}</p>
        <div className='d-flex justify-content-center'>
            <button className='btn btn-primary'>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductItem