import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: true,
  isError: null,
  data: [],
};
const slice = createSlice({
  name: "product",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    setProductData(state, action) {
      state.data = action.payload;
      state.isLoading = false;
    },
    setError(state, action) {
      state.data = action.payload;
      state.isLoading = false;
    },
  },
});

export default slice.reducer;

export const getApiData = () => {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .catch((error) => console.log(error, "error"));
      dispatch(slice.actions.setProductData(response?.products));
    } catch (error) {
      dispatch(slice.actions.setError());
      console.log(error, "error");
    }
  };
};
