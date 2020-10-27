import {createSlice} from '@reduxjs/toolkit';

const initialState = [

];

const characterTypesSlice = createSlice({
  name: 'characterTypes',
  initialState,
  reducers: {
    addCharacterTypes: {
        reducer(state, action) {
          state.push(action.payload);
        }
      }
  }
});

export const {addCharacterTypes} = characterTypesSlice.actions;

export default characterTypesSlice.reducer;