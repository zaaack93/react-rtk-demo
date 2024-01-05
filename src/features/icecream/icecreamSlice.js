import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState: {
        numOfIceCream: 10,
    },
    reducers: {
      ordered: (state) => {
        state.numOfIceCream -= 1;
      },
      restocked: (state,action) => {
        state.numOfIceCream += action.payload;
      },
    },
    extraReducers:(builder)=>{
      builder.addCase(cakeOrdered,(state)=>{
        state.numOfIceCream -= 1;
      })
    }
  });
  
  //slice egnere slice and actions and affected state directly using immer
export default iceCreamSlice
export const {ordered,restocked} = iceCreamSlice.actions