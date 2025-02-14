import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const tweetSlice = createSlice({
 name: 'tweet',
 initialState,
 reducers: {
     addTweet: (state, action) => {
     state.value.push(action.payload);
   },
 },
});

export const { addTweet } = tweetSlice.actions;
export default tweetSlice.reducer;