import React from 'react';
import './filter.css'
const Filter = (props) => {
    // console.log(props);
    const {products, sortProducts,sizeProducts} = props.products
    
    return (
        <div className="filter-container">
            <div className="filter-result">
                <h3>{products.products.length} Products</h3>
            </div>
            <div className="filter-sort">
                <h3>Order</h3>
                <select className="select-box" value={products.sort}onChange={sortProducts}>
                    <option value="latest">Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div className="filter-size">
                <h3>Size</h3>
                <select className="select-box"  value={products.size} onChange={sizeProducts}>
                    <option>ALL</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="X">X</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;