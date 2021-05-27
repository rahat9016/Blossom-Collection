import React, { useState } from 'react';
import Product from './Product'
import data from '../../fakedata/data.json'
import './productCompnent.css'
const Products = () => {
    const [{products}] = useState(data)
    console.log(products);
    return (
        <div className="products-container">
            {
                products.map(data => <Product data={data} key={data._id}></Product>)
            }
        </div>
    );
};

export default Products;