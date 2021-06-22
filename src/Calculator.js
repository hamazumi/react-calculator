import React, { Component } from 'react'

class Calculator extends Component {
    constructor (props) {
        super()
        this.state = {
            num1: 0,
            num2: 0,
            sum: 0
        }
    }

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value})
    }

    sumTotal = (e) => {
        this.setState({ sum: parseFloat(this.state.num1) + parseFloat(this.state.num2) })
    }

    render() {
        return (
            <div className="container">
                <h1>Add with React!</h1>
                <div className="add">
                <input type="number"
                    name="num1"
                    placeholder="Enter your first number"
                    value={this.state.num1}
                    onChange={ (e) => this.setNum(e, 'num1') }
                />
                
                    <span>+</span>

                <input type="number"
                    name="num2"
                    placeholder="Enter your second number"
                    value={this.state.num2}
                    onChange={(e) => this.setNum(e, 'num2')}
                />
                    <button onClick={(e) => this.sumTotal(e)}>=</button>
                    <h3>Addition results go here!</h3>
                    <span>{this.state.sum}</span>
                </div>
            </div>
        )
    }
}

export default Calculator