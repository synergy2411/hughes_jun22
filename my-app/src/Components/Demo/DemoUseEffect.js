import React, { useEffect, useState } from 'react';

const DemoUseEffect = () => {

    const [counter, setCounter] = useState(0);
    const [toggle, setToggle] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [todos, setTodos] = useState([])

    // console.log("Outside UseEffect")

    // useEffect(() => {
    //     // runs side effect code here
    //     console.log("Use effects works")
    // })

    // useEffect(() => {
    //     console.log("Use Effect works")
    // }, [])


    // useEffect(() => {
    //     console.log("Use Effect works")
    //     return () => {
    //         console.log("Clean-up")
    //     }
    // }, [toggle])

    // typeahead suggestion
    useEffect(() => {
        let notifier = setTimeout(()=>{
            // fetch(`https://api.github.com/users/${searchTerm}/repos`)
            fetch(`https://jsonplaceholder.typicode.com/${searchTerm}`)
                .then(res => res.json())
                .then(data => setTodos(data))
                .catch(console.log)    
        }, 1000)
        return () => {
            clearInterval(notifier)
        }
    },[searchTerm])         // s -1s, y- 1s  -> synergy2411

    return (
        <div>
            <input type="text" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
            <p>Term : {searchTerm }</p>
            <ul>
                {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
            </ul>
            {toggle && <h3>Use effect demo</h3>}
            <h4>Counter : {counter} </h4>
            <button onClick={() => setCounter(counter + 1)} className="btn btn-primary">Increase</button>
            <button onClick={() => setToggle(!toggle)} className="btn btn-dark">Toggle</button>
        </div>
    );
}

export default DemoUseEffect;
