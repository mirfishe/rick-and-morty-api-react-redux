import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from '../components/characters/charactersSlice';
// import speciesReducer from '../components/characters/speciesSlice';
// import characterTypesReducer from '../components/characters/characterTypesSlice';
import episodesReducer from '../components/episodes/episodesSlice';
import locationsReducer from '../components/locations/locationsSlice';

export default configureStore({
  reducer: {
    characters: charactersReducer,
    // species: speciesReducer,
    // characterTypes: characterTypesReducer,
    episodes: episodesReducer,
    locations: locationsReducer
  },
});
