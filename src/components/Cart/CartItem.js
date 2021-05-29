import React from 'react';
import { useDispatch } from 'react-redux';
import {removeFromCartList} from '../redux/action/cartAction.js'
const CartItem = (props) => {
    const {image, title, price} = props.data
    const dispatch = useDispatch()
    console.log(props);
    return (
        <div>
            <img width="50px" src={image}/>
            <button onClick={()=>dispatch(removeFromCartList(props))}>Remove</button>
        </div>
    );
};

export default CartItem;