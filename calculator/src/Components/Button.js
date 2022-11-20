import React from 'react'
import "../Styles/Button.css"

const Button = (props) => {

    return (
        <input type="button" onClick={props.onClick} className="button" value={props.label} />
    )
}
export default Button