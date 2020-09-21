import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from './store/action'
import A from './context/A'
import B from './context/B'
import List from './List'
export default function App (){
  const [ num, setNum ] = useState(1)
  const dispatch = useDispatch()
  console.log("log----")
  return (
    <div>
      number:{num}
      <div onClick={() => setNum(num + 1)}>+</div>
      <div onClick={() => setNum(num - 1)}>-</div>
      <List/>
      <div onClick={() => dispatch(addTodo('llllll'))}>
        change数值
      </div>
      <div style={{color:'red'}}>
      </div>
    </div>
  );
}