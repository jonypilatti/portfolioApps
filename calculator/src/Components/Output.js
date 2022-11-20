import React from 'react'
import OutputRow from './OutputRow'
import "../Styles/Output.css"

const Output = (props) => {
    return (
        <div className="screen">
            <OutputRow value={props.question} placeholder={props.questionHolder} />
            <OutputRow value={props.answer} placeholder={props.answerHolder} />
        </div>
    )
}

export default Output