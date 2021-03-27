import axios from "axios";
import * as actions from "../api";

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBeganForPost.type) {
    return next(action);
  }
  const { url, data, onSuccess, method } = action.payload;
  next(action);
  try {
    const response = await axios.request({
      baseURL: "https://jsonplaceholder.typicode.com",
      url,
      method,
      data,
    });
    // console.log("REdux Response", response.data);
    if (onSuccess) return dispatch({ type: onSuccess, payload: response.data });
    dispatch(actions.apiCallSuccesfulForPost(response.data));
  } catch (error) {
    console.log(error);
  }
};

export default api;
