import React from "react";
import { ToDoForm } from '../../ui/ToDoForm'
import { useToDos } from "../useToDos";

function NewToDoPage() {
    const { stateUpdaters } = useToDos()
    const { addToDo } = stateUpdaters
    
    return (
        <ToDoForm  
             formLabel="Escribe tu nuevo To DO"
             formButtonText="Añadir"
             submitEvent={(text) => addToDo(text)}
      />
    )
}

export { NewToDoPage }