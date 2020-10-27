import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    locationsURL: "https://rickandmortyapi.com/api/location/",
    paginationURL: "?page=",
    arrayLocations: [],
    arrayLocationsLoaded: false,
    arraySearchLocationTypes: [],
    arraySearchLocationTypesLoaded: false,
    arraySearchDimensions: [],
    arraySearchDimensionsLoaded: false
};

const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    loadArrayLocations: {
      reducer(state, action) {
        // console.log("locationsSlice.js loadArrayLocations action.payload", action.payload);
        // console.log("locationsSlice.js loadArrayLocations action.payload.length", action.payload.length);

        for (let i = 0; i < action.payload.length; i++) {
          // console.log("locationsSlice.js loadArrayLocations action.payload[i]", action.payload[i]);
          state.arrayLocations.push(action.payload[i]);
        };

        state.arrayLocationsLoaded = true;

      }
    },
    loadArraySearchLocationTypes: {
        reducer(state, action) {
          // console.log("locationsSlice.js loadArraySearchLocationTypes action.payload", action.payload);
          // console.log("locationsSlice.js loadArraySearchLocationTypes action.payload.length", action.payload.length);

          for (let i = 0; i < action.payload.length; i++) {
            // console.log("locationsSlice.js loadArraySearchLocationTypes action.payload[i]", action.payload[i]);
            state.arraySearchLocationTypes.push(action.payload[i]);
          };

          state.arraySearchLocationTypesLoaded = true;

        }
      },
    loadArraySearchDimensions: {
        reducer(state, action) {
          // console.log("locationsSlice.js loadArraySearchDimensions action.payload", action.payload);
          // console.log("locationsSlice.js loadArraySearchDimensions action.payload.length", action.payload.length);

          for (let i = 0; i < action.payload.length; i++) {
            // console.log("locationsSlice.js loadArraySearchDimensions action.payload[i]", action.payload[i]);
            state.arraySearchDimensions.push(action.payload[i]);
          };

          state.arraySearchDimensionsLoaded = true;

        }
      }
  }
});

export const {loadArrayLocations, loadArraySearchLocationTypes, loadArraySearchDimensions} = locationsSlice.actions;

export default locationsSlice.reducer;