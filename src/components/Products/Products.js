import React from 'react';
import Filter from '../Filter/Filter';
import Product from './Product';
import './productCompnent.css'
const Products = (props) => {
    const{products} = props.products
    return (
        <div>
            <Filter products={props} />
            <div className="products-wrapper">
                {
                    products?.map(data => <Product data={data} addToCart={props.addToCart} key={data._id}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;