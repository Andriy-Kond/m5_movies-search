import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";

Notify.init({
  width: "300px",
  position: "right-bottom",
  // timeout: 2000,
  clickToClose: false,
  cssAnimationStyle: "from-right",
});

const MAIN_POINT = "https://api.themoviedb.org/3";
const API_KEY = "4bbdf91bf3cd1196a212f990d3c9214f";

async function fetchMovies(currentRequestUrl, searchParams = "") {
  const params = {
    api_key: API_KEY,
    language: "en-US",
    ...searchParams,
  };

  const stringParams = new URLSearchParams(params).toString(); // перетворення params у рядок з відповідними символами & і =

  // http запит
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmJkZjkxYmYzY2QxMTk2YTIxMmY5OTBkM2M5MjE0ZiIsIm5iZiI6MTcyNTUzNDM4Mi41ODIyMjQsInN1YiI6IjY0MjUzOTUyOTYwY2RlMDA3NzExYWJmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7FvFAlAMJ1N-rqiBwKrtNZfTcOAUsU-k3s61vxQmHGw",
    },
  };

  const URL = `${MAIN_POINT}/${currentRequestUrl}?${stringParams}`;
  try {
    const receivedMovies = await axios.get(URL, options);

    return receivedMovies;
  } catch (error) {
    Notify.failure(error.message);
  }
}

export default fetchMovies;
