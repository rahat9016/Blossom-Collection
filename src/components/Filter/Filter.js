import React from 'react';

const Filter = ({products}) => {
    
    return (
        <div>
            <div className="filter-result">
                <h3>{products.length} Products</h3>
            </div>
            <div className="filter-sort">
                <h3>Order</h3>
                <select>
                    <option>Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div className="filter-size">
                <h3>Size</h3>
                <select>
                    <option value="ALL">ALL</option>
                    <option value="M">M</option>
                    <option value="X">X</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;