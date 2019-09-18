import React from 'react';
import './OrderSummary.css';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const orderSummary = Object.keys(props.ingredients)
    .map( item => {
        return(
                <li key={item}>
                   <span style={{textTransform: 'capitalize'}}>{item}</span> 
                    : {props.ingredients[item]}
                </li>);
    });
    return (
        <div>
            <h3>Your Order</h3>     
            <p>A delicious burger with the following ingredients: </p>
            <ul >
                {orderSummary}
            </ul>
            <p>You Total Price is : <strong>{props.totalPrice.toFixed(2)}£</strong></p>
            <p>Continue to checkout</p>
            <Button btnType='Danger' clicked={props.modalClosedHandler}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinue} >CONTINUE</Button>
        </div>
    )
}

export default OrderSummary