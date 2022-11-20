import React, { useState } from 'react'
import Button from './Button'
import CalculatorTitle from './CalculatorTitle'
import Output from './Output'
import "../Styles/Calculator.css"

const Calculator = () => {
    const [state, setState] = useState({
        question: '',
        answer: ''
    })
    const handleClick = (e) => {
        console.log("Clicked")
        let value = e.target.value
        switch (value) {
            case '=': {
                if (state.question !== '') {
                    var ans = ''
                    try {
                        ans = eval(state.question)
                    } catch (e) {
                        setState({ ...state, answer: "Math Error" })
                    }
                    if (ans === undefined) {
                        setState({ ...state, answer: "Math Error" })
                    }
                    else setState({ ...state, answer: ans, question: '' })
                }

                break;
            }
            case 'Clear': {
                setState({ ...state, question: '', answer: '' })
                break;
            }
            case 'Delete': {
                var str = state.question;
                str = str.substr(0, str.length - 1)
                setState({ ...state, question: str })
                break;
            }
            default:
                setState({ ...state, question: state.question + value })
                break;
        }
    }
    return (
        <div className="frame">
            <CalculatorTitle value="Jonathan Pilatti's Calculator"></CalculatorTitle>
            <div className="main-calc">
                <Output question={state.question} answer={state.answer} questionHolder={"Your values"} answerHolder={"Result"} />
                <div className="button-row">
                    <Button onClick={handleClick} label={"Clear"} />
                    <Button onClick={handleClick} label={"Delete"} />
                    <Button onClick={handleClick} label={"."} />
                    <Button onClick={handleClick} label={"/"} />
                </div>
                <div className="button-row">
                    <Button onClick={handleClick} label={"7"} />
                    <Button onClick={handleClick} label={"8"} />
                    <Button onClick={handleClick} label={"9"} />
                    <Button onClick={handleClick} label={"*"} />
                </div>
                <div className="button-row">
                    <Button onClick={handleClick} label={"4"} />
                    <Button onClick={handleClick} label={"5"} />
                    <Button onClick={handleClick} label={"6"} />
                    <Button onClick={handleClick} label={"-"} />
                </div>
                <div className="button-row">
                    <Button onClick={handleClick} label={"1"} />
                    <Button onClick={handleClick} label={"2"} />
                    <Button onClick={handleClick} label={"3"} />
                    <Button onClick={handleClick} label={"+"} />
                </div>
                <div className="button-row"  >
                    <Button onClick={handleClick} label={"0"} />
                    <Button onClick={handleClick} label={"="} />
                </div>
            </div>
        </div>
    )
}

export default Calculator