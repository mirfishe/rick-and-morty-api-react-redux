import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from '../components/characters/charactersSlice';
import episodesReducer from '../components/episodes/episodesSlice';
import locationsReducer from '../components/locations/locationsSlice';

export default configureStore({
  reducer: {
    characters: charactersReducer,
    episodes: episodesReducer,
    locations: locationsReducer
  },
});
