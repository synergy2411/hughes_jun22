import { Component } from 'react';

class ClassBasedComp extends Component{

    constructor(props){
        super(props);
        this.state = {
            counter : 0,
            todoList : []
        }
        console.log("Constructor");
    }

    componentDidMount(){
        console.log("ComponentDidMount");
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(todos => {
                this.setState({todoList : todos.slice(0, 10)})
                console.log(todos)
            })
            .catch(console.log);
    }

    componentDidUpdate(){
        console.log("ComponentDidUpdate");
    }

    componentWillUnmount(){
        console.log("ComponentWillUnmount");
    }

    shouldComponentUpdate(){
        console.log("ShouldComponentUpdate")
        return true;
    }

    render(){
        console.log("Render")
        let list = this.state.todoList.map(todo => <li className='list-group-item'>{todo.title}</li>)
        return (
            <div>
                <h5>Class based component loaded...</h5>
                <h5>Counter : {this.state.counter} </h5>
                <button className='btn btn-dark' 
                    onClick={() => this.setState({counter: this.state.counter + 1})}>
                        Increment</button>
                        <hr/>

                        <h4>Todo List</h4>
                        <ul className='list-group'>
                            {list}
                        </ul>
                {this.props.children}
            </div>
        )
    }

}

export default ClassBasedComp;