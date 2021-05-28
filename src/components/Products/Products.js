import React from 'react';
import Product from './Product';
import './productCompnent.css'
const Products = ({products}) => {
    return (
        <div className="products-container">
            {
                products.map(data => <Product data={data} key={data._id}></Product>)
            }
        </div>
    );
};

export default Products;