import React, {Component} from "react";

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            item: ''
        }
    }

    handleBtnInput = (event) => {
        const {value} = event.target;
        this.setState({
            item: value
        })
    }
    addTodo = () => {
        const item = this.state.item
        console.log(item)
        this.setState({
            list: [...this.state.list, item],
            item: ''
        })
    }

    render() {
        return (
            <>
                <input value={this.state.item} onChange={this.handleBtnInput}/>
                <button onClick={this.addTodo}>Add</button>
                <ul>
                    {
                        this.state.list.map((value, index) => (
                                <li key={index}>{value}</li>
                            )
                        )
                    }
                </ul>
            </>
        )
    }
}
export default TodoList;