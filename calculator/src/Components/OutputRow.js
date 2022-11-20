import React from 'react'
import "../Styles/OutputRow.css"

const OutputRow = (props) => {
    console.log(props)
    return (
        <div ><input type="text" readOnly className='row' value={props.value} placeholder={props.placeholder}></input></div>
    )
}

export default OutputRow