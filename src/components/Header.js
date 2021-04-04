import React from 'react'
import PropTypes from 'prop-types'
import Button from "./Button"
const Header = (props) => {
  
    const clickHandler = ()=>{
        console.log("Button clicked");
    }

    return (
        <div>
          <h1> {props.title} </h1> 
          <Button color={`${props.addtask?'red':'green'}`} text={`${props.addtask?'Cancel':'Add'}`} onCLick={props.addToggle} /> 
        </div>
    )
}

Header.defaultProps = {
    title:'Task Tracker'
}

Header.propTypes = {
    title:PropTypes.string.isRequired,
}
export default Header
