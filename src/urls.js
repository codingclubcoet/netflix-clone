import { API_KEY } from "./constants/constants";
export const originals = `discover/tv?api_key=${API_KEY}&with_networks=213`;
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`;
export const comedy = `discover/movie?api_key=${API_KEY}&with_genres=35`;
export const popular = `movie/popular?api_key=${API_KEY}&language=en-US&page=1`