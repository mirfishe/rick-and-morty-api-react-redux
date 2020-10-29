import {createSlice} from "@reduxjs/toolkit";

const initialState = [

];

const speciesSlice = createSlice({
  name: "species",
  initialState,
  reducers: {
    addSpecies: {
        reducer(state, action) {
          state.push(action.payload);
        }
      }
  }
});

export const {addSpecies} = speciesSlice.actions;

export default speciesSlice.reducer;