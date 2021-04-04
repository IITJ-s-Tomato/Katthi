import PropTypes from 'prop-types'
import React from 'react'
import Task from './Task'


const Tasks = ({tasks,onDelete,onTogle}) => {
    
    return (
        <>
            {tasks.map((task)=>{
               return (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onTogle}/>)
            })}
        </>
    )
}

export default Tasks