import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCartList } from '../redux/action/cartAction';
import { formatCurrency } from '../Util/util';
import './productCompnent.css'
const Product = (props) => {
    // console.log(props);
    const dispatch = useDispatch()
    const {image, title,price,type } =props.data
    return (
        <div className="product-box">
            <img src={image} alt={title} className="product-image"/>
            <p><small>{type}</small></p>
            <p>{title}</p>
            <p>{formatCurrency(Number(price))}</p>
            <button 
            onClick={()=> dispatch(addToCartList(props))}
            >Add to cart</button>
        </div>
    );
};

export default Product;