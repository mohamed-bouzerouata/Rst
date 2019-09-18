import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const  Modal = (props) => {
    return (
        <div>
            <Backdrop   showModal={props.showModal} 
                        clicked={props.closedBackdrop}/>
            
            <div className={classes.Modal}
                style={{
                    transform: props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.showModal ? '1' : '0'
                }}>
                {props.children}
            </div>
        </div>
            
    )
}
export default Modal
