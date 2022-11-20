import React from 'react'
import "../Styles/CalculatorTitle.css"

const CalculatorTitle = (props) => {
    return (
        <h2 className="title">{props.value}</h2>
    )
}

export default CalculatorTitle