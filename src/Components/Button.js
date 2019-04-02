import React from 'react';
import './Input.css'

const button = (props)=>{    
    render(
        <div>
        <button
            className = {props.cName}
            onClick = {props.click} 
        />

    </div>
    );
}
export default button;