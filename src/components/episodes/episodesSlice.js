import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    episodesURL: "https://rickandmortyapi.com/api/episode/",
    paginationURL: "?page=",
    arrayEpisodes: []
};

const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    loadArrayEpisodes: {
      reducer(state, action) {
        // console.log("episodesSlice.js loadArrayEpisodes action.payload", action.payload);
        // console.log("episodesSlice.js loadArrayEpisodes action.payload.length", action.payload.length);

        for (let i = 0; i < action.payload.length; i++) {
          // console.log("episodesSlice.js loadArrayEpisodes action.payload[i]", action.payload[i]);
          state.arrayEpisodes.push(action.payload[i]);
        };
      }
    }
  }
});

export const {loadArrayEpisodes} = episodesSlice.actions;

export default episodesSlice.reducer;