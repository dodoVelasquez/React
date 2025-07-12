//npm install redux react-redux

import { createStore } from "redux";
import { useState } from "react";
// Definir el reducer
const Counter = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(Counter);

const Contador = () => {

    const [counter, setCount] = useState(store.getState());

    //Definir las acciones
    const increment = () => {
        store.dispatch({ type: "INCREMENT" });
    }
    const decrement = () => {
        store.dispatch({ type: "DECREMENT" });
    }

    store.subscribe(() => {
        setCount(store.getState());
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Contador</h1>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={decrement}>-</button>
                        <button type="button" className="btn btn-primary">{counter}</button>
                        <button type="button" className="btn btn-primary" onClick={increment}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contador;