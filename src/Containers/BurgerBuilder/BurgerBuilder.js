import React, { Component } from 'react'
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import axios from 'axios';

const INGREDIENT_PRICES = {
    salad: 0.6,
    cheese: 0.3, 
    meat: 1.4,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            ingredients : {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0,
            },
            totalPrice: 0,
            purchasable: false,
            showModal: false,
            loading: false
        }
    }
    
    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
        .map( item => {
            return ingredients[item]
        })
        .reduce((sum, el) => {
            return sum + el
        }, 0);
        this.setState({
            purchasable: sum > 0
        })

    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        //Add Price
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice : newPrice, 
            ingredients : updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        //Add Price
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice : newPrice, 
            ingredients : updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    }
    showModalHandler = () => {
        this.setState({
            showModal: true
        })
    }
    BackdropClosedHqndler = () => {
        this.setState({
            showModal : false
        })
    }
    purchasingContinue = () => {
            alert('Continue');
    }
    purchaseContinueHandler = () => {
        this.setState({loading: true})
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: "BouzBa",
                adress: {
                    street: 'teststreet',
                    zipCode: "45002",
                    country: "algeria"
                },
                email: "mi@gmail.com"
            },
            deliveryMethod: "fastest"
        }
        axios.post('/orders.json', order)
        .then(response => {
           this.setState({loading: false})
        })
        .catch(err => {
            this.setState({loading: false}) 
        })
    }

    render() {
        const { ingredients } = this.state;
        const { totalPrice } = this.state;
        
        const disableInfo = {
            ...this.state.ingredients
        }
        for(let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }

        let orderSummary = <OrderSummary    ingredients={ingredients}
                                            totalPrice={totalPrice} 
                                            modalClosedHandler={this.BackdropClosedHqndler}
                                            purchaseContinue={this.purchasingContinue}
                                            />
        if(this.state.loading) {
            orderSummary = <OrderSummary />
        }
        return (
            <div>
                <Modal showModal={this.state.showModal} closedBackdrop={this.BackdropClosedHqndler}>
                    {orderSummary}
                </Modal>
                <Burger  ingredients={ingredients}/>
                <BuildControls 
                    ingredientsAdded={this.addIngredientHandler}
                    ingredientsRemoved={this.removeIngredientHandler}
                    totalPrice={totalPrice}
                    disabled={disableInfo}
                    showModal={this.showModalHandler}
                    purchasable={this.state.purchasable}/>
            </div>
        )
    }
}

export default BurgerBuilder
