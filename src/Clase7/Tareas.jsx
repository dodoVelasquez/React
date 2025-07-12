import { useState } from "react";
import { createStore } from "redux";

const tareas = [
    { id: 1, nombre: "Levantarse", completed: true },
    { id: 2, nombre: "Ducharse", completed: true },
    { id: 3, nombre: "Desayunar", completed: false },
    { id: 4, nombre: "Estudiar", completed: false },
]

const taskReducer = (state = { tareas, filtradas: tareas }, action) => {
    switch (action.type) {
        case "SHOW_ALL":
            return { ...state, filtradas: tareas };
        case "SHOW_COMPLETED":
            return { ...state, filtradas: tareas.filter(item => item.completed) };
        case "SHOW_NOT_COMPLETED":
            return { ...state, filtradas: tareas.filter(item => !item.completed) };
        default:
            return state;
    }
}

const store = createStore(taskReducer);

const Tareas = () => {
    const [items, setItems] = useState(store.getState().filtradas);

    const mostrarTodas = () => {
        store.dispatch({ type: "SHOW_ALL" });
    }
    const mostrarCompletadas = () => {
        store.dispatch({ type: "SHOW_COMPLETED" });
    }
    const mostrarNoCompletadas = () => { 
        store.dispatch({ type: "SHOW_NOT_COMPLETED" });
    }

    store.subscribe(() => {
        setItems(store.getState().filtradas);
    })

    return (
        <div className="container">
            <div className="row-md-4">
                <div className="col">
                    <h1>Tareas</h1>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={mostrarTodas}>Todas</button>
                        <button type="button" className="btn btn-primary" onClick={mostrarCompletadas}>Completadas</button>
                        <button type="button" className="btn btn-primary" onClick={mostrarNoCompletadas}>No Completadas</button>
                    </div>
                    <ul>
                        {items.map((item) => (
                            <li key={item.id}>{item.nombre}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Tareas;