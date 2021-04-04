import PropTypes from 'prop-types'
import React from 'react'

const Button = (props) => {
    return (
        
            
        <button className='btn' style={{backgroundColor:props.color}} onClick = {props.onCLick}>{props.text}</button>
    )
}

Button.defaultProps = {
    props:{
        color:"red",
        text:"Button"
    }
}


export default Button;