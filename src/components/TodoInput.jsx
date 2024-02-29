import { useState } from "react"

export default function TodoInput(props){
    const {handleAddTodos, todoValue, setTodosValue} = props

    
    return(
        <header>
            <input value={todoValue} onChange={(e)=> {
                setTodosValue(e.target.value)
            } } placeholder="Enter Todo Item"/>
            <button onClick={()=> {
                handleAddTodos(todoValue)
                setTodosValue('')
            }}>add</button>
        </header>
    )
}