import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading:false,
        users:[],
        error:''
    },
    extraReducers:(builder)=>{
      builder.addCase(fetchUsers.pending,(state)=>{
        console.log('pending')
        state.loading=true
      })
      builder.addCase(fetchUsers.fulfilled,(state,action)=>{
        console.log('fulfilled')
        state.loading=false
        state.error=""
        state.users=action.payload
      })
      builder.addCase(fetchUsers.rejected,(state,action)=>{
        console.log('rejected')
        state.users=[]
        state.loading=false
        state.error=action.error.message
      })
    }
  });
  
//generated pending,fulfilled,rejected action types
export const fetchUsers=createAsyncThunk('user/fetchUsers',async ()=>{
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  return res.data
}) 

//slice egnere slice and actions and affected state directly using immer
export default userSlice.reducer