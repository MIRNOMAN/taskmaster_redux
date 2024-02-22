import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from './fetures/tasks/tasksSlice';
import userSlice from './fetures/user/userSlice';
export const store = configureStore({
  reducer: {
    tasksSlice: tasksSlice,
    userSlice: userSlice,
  },
})


export default store;