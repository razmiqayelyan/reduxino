import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './counterSlice'


const Counter = () => {
  const dispatch = useDispatch()
  const value = useSelector((state) => state.counterReducer.value)
 
  
  
  
  return (
    <div>

     
      <button onClick={() => {
        dispatch(decrement())
      }}>Minus</button>

    <h1 style={{display:'inline-block', margin: '50px'}}>{value}</h1>

      <button onClick={() => {
        dispatch(increment())
      }}>Plus</button>
      <div>
        <button
          onClick={() => dispatch(reset())}
        >reset</button>
      </div>
    </div>
  )
}

export default Counter



























































// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   refresh,
//   selectCount,
// } from './counterSlice';
// import styles from './Counter.module.css';

// export function Counter() {
//   const count = useSelector(selectCount);
//   const dispatch = useDispatch();
//   const [incrementAmount, setIncrementAmount] = useState('2');

//   const incrementValue = Number(incrementAmount) || 0;

//   return (
//     <div>
//       <div className={styles.row}>
//         <button
//           onClick={() => dispatch(refresh())}
//         >
//           Refresh
//         </button>

//         <button
//           className={styles.button}
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           -
//         </button>


//         <span className={styles.value}>{count}</span>



//         <button
//           className={styles.button}
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           +
//         </button>




//       </div>




//       <div className={styles.row}>
//         <input
//           className={styles.textbox}
//           aria-label="Set increment amount"
//           value={incrementAmount}
//           onChange={(e) => setIncrementAmount(e.target.value)}
//         />



//         <button
//           className={styles.button}
//           onClick={() => dispatch(incrementByAmount(incrementValue))}
//         >
//           Add Amount
//         </button>


//       </div>
//     </div>
//   );
// }
