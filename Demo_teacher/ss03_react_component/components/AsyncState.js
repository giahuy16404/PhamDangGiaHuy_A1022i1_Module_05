import {Component} from "react";

class AsyncState extends Component {
    constructor() {
        super();
        this.state = {
            numberValue: 0
        }
    }

    addNumber() {
        this.setState((prev) => (
            {
                numberValue: ++prev.numberValue
            }
        ))
        this.setState((prev) => (
            {
                numberValue: ++prev.numberValue
            }
        ))
        this.setState((prev) => (
            {
                numberValue: ++prev.numberValue
            }
        ))
        console.log(this.state.numberValue)
    }

    render() {
        return (
            <>
                <h4>{this.state.numberValue}</h4>
                <button onClick={() => this.addNumber()}>
                    Increment
                </button>
            </>
        )
    }
}

export default AsyncState;
