import React from 'react'
import '../Css/TodoLoading.css'

const TodosLoading = () => {
    return (
        <div className="LoadingTodo-container">
            <span className="Loading-completeIcon"></span>
            <p className="Loading-text">Estamos cargando, no desesperes...</p>
            <span className="Loading-deleteIcon"></span>
        </div>
    )
}

export { TodosLoading }