import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0
}

export const counterSlice = createSlice({
  name:"counter",
  initialState: initialState,
  reducers:{
    increment: (state) => {state.value += 1},
    decrement: (state) => {state.value -= 1},
    reset: (state) => {state.value = 0},


  }
})


export const {increment, decrement, reset} = counterSlice.actions


export default counterSlice.reducer










































// // import { createSlice } from '@reduxjs/toolkit';

// import { createSlice } from "@reduxjs/toolkit";

// // const initialState = {
// //   value: 0
// // };




// // export const counterSlice = createSlice({
// //   name: 'counter',
// //   initialState: initialState,
// //   reducers: {
// //     increment: (state) => {state.value += 1},
// //     decrement: (state) => {state.value -= 1},
// //     refresh: (state) => {state.value = 0},
// //     incrementByAmount: (state, action) => {state.value += action.payload}
// //   }
// // })

// // export const { increment, decrement, incrementByAmount, refresh } = counterSlice.actions


// // export const selectCount = (state) => state.counter.value;



// // export default counterSlice.reducer;







// export const initialState = {
//   count: 0
// }

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     decrement: (state) => {state.count -= 1},
//     increment: (state) => {state.count += 1},
//     refresh: (state) => {state.count = 0},
//     incrementByAmount: (state, action) => {state.count += action.payload},
//   }

// })

// export const {decrement, increment, incrementByAmount, refresh} = counterSlice.actions

// export const selectCount = (state) => state.counter.count;



// export default counterSlice.reducer;





























// import { createSlice } from '@reduxjs/toolkit';


// const initialState = {
//   value: 0,
//   status: 'idle',
// };


// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
 
//   reducers: {
//     increment: (state) => {

//       state.value += 1;
//     },


//     decrement: (state) => {
//       state.value -= 1;
//     },

//     refresh: (state) => {
//       state.value = 0
//     },


//     incrementByAmount: (state, action) => {
//       state.value += action.payload;
//     },
//   },

// });

// export const { increment, decrement, incrementByAmount, refresh } = counterSlice.actions;


// export const selectCount = (state) => state.counter.value;



// export default counterSlice.reducer;
