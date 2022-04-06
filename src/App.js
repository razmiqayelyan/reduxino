import React from 'react';
import  Counter  from './features/counter/Counter';
import './App.css';
import Todos from './features/counter/Todos';

function App() {
  return (
    <div className="App">
        <Todos/>
        <hr />
        <Counter />
       
    </div>
  );
}

export default App;
