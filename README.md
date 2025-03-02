# Кінопошук

### Створи базову маршрутизацію для застосунку пошуку і зберігання фільмів. Прев'ю робочого застосунку [дивись за посиланням](https://drive.google.com/file/d/1vR0hi3n1236Q5Bg4-se-8JVKD9UKSfId/view?usp=sharing).

## themoviedb.org API

Для бекенду використовуй [themoviedb.org API](https://www.themoviedb.org/). Необхідно зареєструватися (можна ввести довільні дані) та отримати API-ключ. У цій роботі будуть використовуватися наступні ендпоінти.

- /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.

(get https://api.themoviedb.org/3/trending/movie/{time_window} - Get the trending movies on TMDB.)

- /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.

(get https://api.themoviedb.org/3/search/movie - Search for movies by their original, translated and alternative titles.)

- /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.

(get https://api.themoviedb.org/3/movie/{movie_id} - Get the top level details of a movie by ID. )

- /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.

(get https://api.themoviedb.org/3/movie/{movie_id}/credits)

- /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

(get https://api.themoviedb.org/3/movie/{movie_id}/reviews - Get the user reviews for a movie.)

[Посилання на документацію](https://developers.themoviedb.org/3/getting-started/introduction)

## Маршрути

У застосунку повинні бути такі маршрути. Якщо користувач зайшов за неіснуючим маршрутом, його необхідно перенаправляти на домашню сторінку.

- '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
- '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
- '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
- /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
- /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.

## Code Splitting (поділ коду)

Додай асинхронне завантаження JS-коду для маршрутів застосунку, використовуючи `React.lazy()` і `Suspense`.
