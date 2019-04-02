import React from 'react';
import './Input.css';
const inputField = (props) =>{
    return(
        <div > 
            <input 
            name = {props.name}
            type ={props.type}
            value = {props.value}
            onChange = {props.Change}
            className = {props.cName}
            />
        </div>
    );
}
export default inputField;