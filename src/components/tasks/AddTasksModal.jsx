
import { useForm } from 'react-hook-form'
import Model from '../ui/Model'
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/fetures/tasks/tasksSlice';

const AddTasksModal = ({isOpen, setIsOpen}) => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();

  
    const onCancle = () => {
      reset();
      setIsOpen(false);
    }

    const onSubmit = (data) => {
      dispatch(addTask(data));
      onCancle();
    }

  return (
    <Model isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero" >
     <form onSubmit={handleSubmit(onSubmit)}>
    <div className='flex flex-col gap-3 mt-3'>
        <label htmlFor="title">Title</label>
    <input className='w-full rounded-lg' type="text" id='title' {...register("title")} />
    </div>
     <div className='flex flex-col gap-3 mt-3'>
     <label htmlFor="title" className='mt-2'>Description</label>
     <textarea className='w-full rounded-lg' type="text" id='description' {...register("description")} ></textarea>
     </div>
     <div className='flex flex-col gap-3 mt-3'>
     <label htmlFor="title" className='mt-5'>Deadline</label>
     <input className='w-full rounded-lg' type="date" id='date' {...register("date")} ></input>
     </div>
     <div className='flex flex-col gap-3 mt-3'>
     <label htmlFor="title" className='mt-5'>Assign to</label>
     <select 
      className='w-full rounded-lg'
      id='assignTo'
      {...register("assignTo")}
     >
      <option value="Mir Noman"> Mir Noman</option>
      <option value="Tarekul Islam"> Tarekul Islam</option>
      <option value="Mir Rakib"> Mir Rakib</option>
      <option value="Masud Rahman"> Masud Rahman</option>
     </select>
     </div>
     <div className='flex flex-col gap-3 mt-3'> 
     <label htmlFor="title" className='mt-5'>Priority</label>
    <select
    className='w-full rounded-lg'  id='priority' {...register("priority")}
    >
    <option defaultValue value="high">High</option>
    <option  value="mediam">Mediam</option>
    <option  value="low">Low</option>
    </select>
     </div>
     <div className='flex gap-3 mt-4 justify-end'>
     <button onClick={() => onCancle()} type='button' className='btn btn-danger'> Cancle</button>
     <button type='Submit' className='btn btn-primary'> Submit</button>
     </div>
     </form>
  </Model>
  )
}

export default AddTasksModal