import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheSearch: (state, action) => {
      //action.payload will be like {"ip": ["iphone", "iph"]}
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheSearch } = searchSlice.actions;
export default searchSlice.reducer;
