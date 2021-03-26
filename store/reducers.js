import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./api";

const PostSlice = createSlice({
  name: "Post",
  initialState: { list: [] },
  reducers: {
    postRecieved: (state, action) => {
      // console.log("POSTS REDUX -->>>", action.payload);
      state.list = action.payload;
    },
  },
});

export default PostSlice.reducer;
export const { postRecieved } = PostSlice.actions;

export const getPosts = (data) => (dispatch, getState) => {
  dispatch(postRecieved(data));
};
