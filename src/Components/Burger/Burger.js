import React from 'react'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.css';

const Burger = (props) => {
    let dynamiqIngredients = Object.keys(props.ingredients)
    .map((item) => {
        return [...Array(props.ingredients[item])].map((_, i) => {

            return <BurgerIngredients key={item + i} type={item} />
        });
    })
    .reduce( (arr, el ) => {
        return arr.concat(el)
    }, []);
    if (dynamiqIngredients.length === 0) {
        dynamiqIngredients = <p>please adding some ingredinets</p>
    }
        return (
        <div className={classes.burger}>
            <BurgerIngredients type='bread-top' />
            {dynamiqIngredients }
            <BurgerIngredients type='bread-bottom' />
        </div>
    )
}

export default Burger; 