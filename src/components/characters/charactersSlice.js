import {createSlice} from '@reduxjs/toolkit';

const arraySearchSpecies = [];
const arraySearchCharacterTypes = [];

const initialState = [
    arraySearchSpecies,
    arraySearchCharacterTypes
];

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    loadArraySearchSpecies: {
        reducer(state, action) {
          state.push(action.payload);
        }
      },
    loadArraySearchCharacterTypes: {
        reducer(state, action) {
          state.push(action.payload);
        }
      }
  }
});

export const {loadArraySearchSpecies, loadArraySearchCharacterTypes} = charactersSlice.actions;

export default charactersSlice.reducer;