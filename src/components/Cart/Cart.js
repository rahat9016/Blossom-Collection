import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
    const cart = useSelector((state)=>{
        return state.cartReducer.cartList
    })
    return (
        <div className="cart-wrapper">
            <h1>Cart Item</h1>
            {cart?.map(data => <CartItem data={data.data} key={data.data._id}></CartItem>)}
            
        </div>
    );
};

export default Cart;