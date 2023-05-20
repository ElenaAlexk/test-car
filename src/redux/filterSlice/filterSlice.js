import { createSlice } from '@reduxjs/toolkit';

const initialStateFilter = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStateFilter,
  reducers: {
    setFilter: {
      reducer(state, action) {
        state.filter = action.payload; //значення фільтра//
      },
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReduser = filterSlice.reducer;
