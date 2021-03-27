import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./api";

const PostSlice = createSlice({
  name: "Post",
  initialState: { list: [] },
  reducers: {
    postRecieved: (state, action) => {
      state.list = action.payload.slice(0, 30);
    },
  },
});

export default PostSlice.reducer;
export const { postRecieved } = PostSlice.actions;

const url = "/posts";
export const loadPost = () => (dispatch, getState) => {
  dispatch(
    actions.apiCallBeganForPost({
      url: `${url}`,
      onSuccess: postRecieved.type,
    })
  );
};
