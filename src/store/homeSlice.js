import { createSlice } from "@reduxjs/toolkit";
// Creating a slice of the Redux store for the 'home' feature
export const homeSlice = createSlice({
	name: 'home', // Name of the slice
	// Initial state of the 'home' slice
	initialState: {
		url: {},     // Initial state for URL data
		genres: {}   // Initial state for genres data
	},
	// Reducers are functions that define how the state changes in response to actions
	reducers: {
		// Reducer to handle updating the 'url' state based on the action payload
		getApiConfiguration: (state, action) => {
			state.url = action.payload;
		},
		// Reducer to handle updating the 'genres' state based on the action payload
		getGenres: (state, action) => {
			state.genres = action.payload;
		}
	}
});

// Extracting action creators from the 'homeSlice.reducer' object
export const { getApiConfiguration, getGenres } = homeSlice.actions;

// Exporting the reducer function to be used in the Redux store
export default homeSlice.reducer;
