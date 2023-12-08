// Import the axios library for making HTTP requests
import axios from "axios";
// Define the base URL for The Movie Database (TMDB) API
const BASE_URL = "https://api.themoviedb.org/3";
// Retrieve the TMDB API token from environment variables using Vite
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
// Define the headers with the Authorization token for making authenticated requests
const headers = {
	Authorization: "bearer " + TMDB_TOKEN,
};
// Function to fetch data from the TMDB API
export const fetchDataFromApi = async (url, params) => {
	try {
		// Make a GET request to the specified URL with headers and optional parameters
		const { data } = await axios.get(BASE_URL + url, {
			headers,
			params
		});
		// Return the retrieved data
		return data;
	} catch (err) {
		// Handle any errors that occur during the request
		console.error("Error fetching data from TMDB API:", err);
		// Return the error object for further handling, if needed
		return err;
	}
};
