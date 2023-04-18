const Task = ({task, deleteTask, completeTask}) =>{
    return (
        <div>
          <p style={{color: task.completed ? "green" : null}}>{task.taskName}</p>
          <button onClick={() => completeTask(task.id)}>Complete</button>
          <button onClick={() => deleteTask(task.id)}>X</button>
        </div>
      )
}
export default Task