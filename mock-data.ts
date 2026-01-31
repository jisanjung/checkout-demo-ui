export type ProductItem = {
    id: number;
    name: string;
    price: number;
    img_url: string;
    cartItemId?: string;
}

export const products = [
    {
        id: 1,
        name: 'iPhone X',
        price: 999,
        img_url: 'https://i.ebayimg.com/images/g/JAUAAOSw9Bdjq8IG/s-l400.jpg'
    },
    {
        id: 2,
        name: 'Galaxy S6 Edge',
        price: 599.99,
        img_url: 'https://images.offerup.com/nU6uQGHncoSFQeQPFVhuL3GrBK0=/250x250/f857/f857131c32f74ee989ee658af44f9527.jpg'
    },
];