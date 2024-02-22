import { useSelector } from "react-redux"
import Model from "../ui/Model"


const TaskDetailsModal = ({isOpen, setIsOpen, id}) => {
  const {tasks} = useSelector((state) => state.tasksSlice)

  const task = tasks.find((item) => item.id === id) 
  return (
    
        <Model isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}>
            {task?.description}
        </Model>

  )
}

export default TaskDetailsModal