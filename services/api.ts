export const TMBD_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export const fetchMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${TMBD_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMBD_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;
  const respone = await fetch(endpoint, {
    method: "GET",
    headers: TMBD_CONFIG.headers,
  });
  if (!respone.ok) {
    //@ts-ignore
    throw new Error("Failed to fethc movies", respone.statusText);
  }
  const data = await respone.json();
  return data.results;
};

export default fetchMovies;
