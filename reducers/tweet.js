import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const tweetsSlice = createSlice({
 name: 'tweets',

  initialState,
 reducers: {
   addtweetToStore: (state, action) => {
     state.value.push(action.payload);
   },
 },
});

export const { addtweetToStore } = tweetsSlice.actions;
export default tweetsSlice.reducer;