import { createSlice } from "@reduxjs/toolkit";

const cakeSlice = createSlice({
    name: 'cake',
    initialState: {
      numOfCakes: 10,
    },
    reducers: {
      ordered: (state) => {
        state.numOfCakes -= 1;
      },
      restocked: (state,action) => {
        state.numOfCakes += action.payload;
      },
    },
  });
  
  //slice egnere slice and actions and affected state directly using immer
export default cakeSlice.reducer
export const {ordered,restocked} = cakeSlice.actions