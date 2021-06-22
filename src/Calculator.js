import React, { Component } from 'react'

class Calculator extends Component {
    constructor (props) {
        super()
        this.state = {
            operator: "+",
            num1: 0,
            num2: 0,
            sum: 0
        }
    }

    //newer way, same as above
    // state = {
    //     num1:0,
    //     num2:0,
    //     sum: 0
    // }

    setNum = (e, num) => {
        //when you put num in [] it allows it to be changed. 
        this.setState({ [num]: e.target.value})
    }

    // sumTotal = (e) => {
    //     this.setState({ sum: Number(this.state.num1) + Number(this.state.num2) })
    // }

    calculate = (num1, num2) => {
        let int1 = Number(num1)
        let int2 = Number(num2)
        let sum = 0

        switch (this.state.operator){
            case '+':
                sum = int1 + int2
                break
            case '-':
                sum = int1 - int2
                break
            case '*':
                sum = int1 * int2
                break
            case '/':
                sum = int1 / int2
                break

            default:
                break

        }

        this.setState({
            sum: sum
        })
        
    }

    setOp = (e) => {
        this.setState({ operator: e.target.value })
    }

    render() {
        return (
            //className same as class in vanilla html
            <div className="container">
                <h1>Add with React!</h1>
                <div className="add">
                <input 
                    type="number"
                    name="num1"
                    placeholder="Enter your first number"
                    value={this.state.num1}
                    //onChange allows us to change value
                    onChange={ (e) => this.setNum(e, 'num1') }
                />
                
                    <span>{this.state.operator}</span>

                <input 
                    type="number"
                    name="num2"
                    placeholder="Enter your second number"
                    value={this.state.num2}
                    onChange={(e) => this.setNum(e, 'num2')}
                />
                    <button onClick={() => this.calculate(this.state.num1, this.state.num2) }>=</button>
                    {/* <button onClick={(e) => this.sumTotal(e)}>=</button> */}
                    <h3>{this.state.sum}</h3>
                    <button name="plus" value="+" onClick={(e) => this.setOp(e)}>+</button>
                    <button name="sub" value="-" onClick={(e) => this.setOp(e)}>-</button>
                    <button name="mult" value="*" onClick={(e) => this.setOp(e)}>*</button>
                    <button name="div" value="/" onClick={(e) => this.setOp(e)}>/</button>
                </div>
            </div>
        )
    }
}

export default Calculator