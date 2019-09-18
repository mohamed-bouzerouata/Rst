import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

 
const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]
const BuildControls = (props) =>  {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.totalPrice.toFixed(2)}£</strong></p>
            {controls.map(item => (
                <BuildControl   key={item.label} 
                                label={item.label}
                                added={() => props.ingredientsAdded(item.type)}
                                removed={() => props.ingredientsRemoved(item.type)}
                                disabled={props.disabled[item.type]} />
            ))},
            <button className={classes.OrderButton}
                    disabled={!props.purchasable}
                    onClick={props.showModal}>ORDER NOW</button>
        </div>
    )
}
export default BuildControls;
