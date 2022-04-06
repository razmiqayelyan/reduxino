import { nanoid } from '@reduxjs/toolkit'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addTodo, deleteTodo, todoSelectors, editTodo } from './TaskSlice'
import './Todos.css'




const Todos = () => {
    const [value, setValue] = useState('')
    const [email, setEmail] = useState('')
    const [id, setId] = useState('')
    const dispatch = useDispatch()
    const todos = useSelector(todoSelectors.selectEntities)
    const TodoList = [];
    const [data, setData] = useState()
    for (const id in todos){
                TodoList.push(todos[id])
            }
    useEffect(() => {
        console.log(TodoList)
    }, [todos])
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/jira`).then(res => res.data)  .then((data) => setData(data))
        

    }, [])


   
  return (
      
    <div>
  
         
         <input value={value} onChange={e => setValue(e.target.value)} type="text" />
         
         <button className='submit'
            onClick={() => {
                if (TodoList.filter((todo) => todo.text === value).length === 0 && value.length !== 0){
                    setValue('');  
                    return dispatch(addTodo({id: nanoid(), text:value.trim(), complated: false}))}}
                }
               
        >ADD</button>

{TodoList?.map(todo => {
            return <div className='main' key={todo.id}>

          
            <div className='todolist' >
                
               
               
                <span>{todo.text}</span>
                <div className='donedel'>
                <input type="checkbox"
               checked={todo.complated}
                
                onChange={(e) => {
                    dispatch(editTodo({id: todo.id, text:todo.text, complated:e.target.checked}))
                }} />
                <div
                className='delete'
                    onClick={() => {
                        dispatch(deleteTodo(todo.id))
                    }
                        
                    }
                >X</div>
                </div>
              
               
                </div>
                </div> 
                     })}
                     <div className='complated'>
                     Complated: {TodoList.filter((todo) => todo.complated).length} / {TodoList.filter((todo) => todo).length}
                     </div>

                    
                     

    </div>
  )
}

export default Todos



