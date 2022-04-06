import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

export const todoAdapter = createEntityAdapter();
export const todoSelectors = todoAdapter.getSelectors((state) => state.todos)
// const initialState = {
//     todos: [
//       {
//         id: Math.random(),
//         text: 'Learn React'
//       },
//       {
//         id: Math.random(),
//         text: 'Learn CSS'
//       },
//       {
//         id: Math.random(),
//         text: 'Learn HTML'
//       }
      
//     ]
//   }


  
const todoSlice = createSlice({
    name:"todos",
    initialState: todoAdapter.getInitialState(),
    reducers:{
      addTodo: todoAdapter.addOne,
      deleteTodo: todoAdapter.removeOne,
      editTodo: todoAdapter.setOne
      // add: (state, action) => {
      //   state.todos.push(
      //     {
      //       id:Math.random(),
      //       text:action.payload 
      //     })
        
      
  
  
       }
  })

export const {addTodo, deleteTodo, editTodo} = todoSlice.actions

export default todoSlice.reducer