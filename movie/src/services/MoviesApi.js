import axios from "axios";

const API_KEY = "bca63eda6cd25ce4f960ade682a471e4";
const BASE_URL = "https://api.themoviedb.org/3/";

async function fetchInfo(url) {
  const response = await axios.get(url);
  return response.data;
}

export function fetchTrends() {
  return fetchInfo(`${BASE_URL}trending/all/day?api_key=${API_KEY}`).then(
    (data) => data.results
  );
}
export function fetchFilmByQuery(movie) {
  return fetchInfo(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${movie}`
  ).then((data) => data.results);
}
export function fetchFilmInfo(movieId) {
  return fetchInfo(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
}
export function fetchCredits(movieId) {
  return fetchInfo(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
  ).then((data) => data.cast);
}
export function fetchReviews(movieId) {
  return fetchInfo(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  ).then((data) => data.results);
}