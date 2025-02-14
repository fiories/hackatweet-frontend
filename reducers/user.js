import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const usersSlice = createSlice({
 name: 'users',

  initialState,
 reducers: {
   adduserToStore: (state, action) => {
     state.value.push(action.payload);
   },
 },
});

export const { adduserToStore } = usersSlice.actions;
export default usersSlice.reducer;