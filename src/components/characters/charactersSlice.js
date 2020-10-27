import {createSlice} from '@reduxjs/toolkit';

// const arraySearchSpecies = [];
// const arraySearchCharacterTypes = [];
// const arraySearchGender = [
//   {female: "Female"},
//   {male: "Male"},
//   {genderless: "Genderless"},
//   {unknown: "Unknown"}
//   ];
// const arraySearchCharacterStatus = [
//   {alive: "Alive"},
//   {dead: "Dead"},
//   {unknown: "Unknown"}
// ];

const initialState = {
  charactersURL: "https://rickandmortyapi.com/api/character/",
  paginationURL: "?page=",
  arrayCharacters: [],
  arraySearchSpecies: [],
  arraySearchCharacterTypes: [],
  arraySearchGender: [ // "female", "male", "genderless", "unknown"
    // {female: "Female"},
    // {male: "Male"},
    // {genderless: "Genderless"},
    // {unknown: "Unknown"}
    {label: "Female", value: "female"},
    {label: "Male", value: "male"},
    {label: "Genderless", value: "genderless"},
    {label: "Unknown", value: "unknown"}
  ],
  arraySearchCharacterStatus: [ // "alive", "dead", "unknown"
    // {alive: "Alive"},
    // {dead: "Dead"},
    // {unknown: "Unknown"}
    {label: "Alive", value: "alive"},
    {label: "Dead", value: "dead"},
    {label: "Unknown", value: "unknown"}
  ]
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    loadArrayCharacters: {
      reducer(state, action) {
        // console.log("charactersSlice.js loadArrayCharacters action.payload", action.payload);
        // console.log("charactersSlice.js loadArrayCharacters action.payload.length", action.payload.length);

        for (let i = 0; i < action.payload.length; i++) {
          // console.log("charactersSlice.js loadArrayCharacters action.payload[i]", action.payload[i]);
          state.arrayCharacters.push(action.payload[i]);
        };
      }
    },
    loadArraySearchSpecies: {
        reducer(state, action) {
          // console.log("charactersSlice.js loadArraySearchSpecies action.payload", action.payload);
          // console.log("charactersSlice.js loadArraySearchSpecies action.payload.length", action.payload.length);

          for (let i = 0; i < action.payload.length; i++) {
            // console.log("charactersSlice.js loadArraySearchSpecies action.payload[i]", action.payload[i]);
            state.arraySearchSpecies.push(action.payload[i]);
          };
        }
      },
    loadArraySearchCharacterTypes: {
        reducer(state, action) {
          // console.log("charactersSlice.js loadArraySearchCharacterTypes action.payload", action.payload);
          // console.log("charactersSlice.js loadArraySearchCharacterTypes action.payload.length", action.payload.length);

          for (let i = 0; i < action.payload.length; i++) {
            // console.log("charactersSlice.js loadArraySearchCharacterTypes action.payload[i]", action.payload[i]);
            state.arraySearchCharacterTypes.push(action.payload[i]);
          };
        }
      }
  }
});

export const {loadArrayCharacters, loadArraySearchSpecies, loadArraySearchCharacterTypes} = charactersSlice.actions;

export default charactersSlice.reducer;