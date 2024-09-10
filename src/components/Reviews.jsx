import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import fetchMovies from "services/fetchMovies";
import imagesConfigurations from "services/imagesConfigurations";
import noUser from "imgs/noUser.jpg";

function Reviews() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // https://api.themoviedb.org/3/movie/{movie_id}/reviews
    async function getRequest() {
      const currentRequestUrl = `movie/${movieId}/reviews`;
      const result = await fetchMovies(currentRequestUrl);
      console.log("getRequest >> result:::", result.data.results);
      setReviews(result.data.results);
    }
    getRequest();
  }, [movieId]);

  const { images } = imagesConfigurations;

  return (
    <>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(
          ({
            id,
            author,
            content,
            created_at,
            author_details: { avatar_path, rating },
          }) => (
            <li key={id}>
              <div>
                <p>
                  <b>{author}</b> (rating: {rating})
                </p>
              </div>
              <img
                src={
                  avatar_path
                    ? `${images.secure_base_url}w185/${avatar_path}`
                    : noUser
                }
                alt="author"
                width={185}
              />
              <p>{content}</p>
              <span>
                {new Date(created_at).toLocaleString("uk-UA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  // hour: "2-digit",
                  // minute: "2-digit",
                  // second: "2-digit",
                })}
              </span>
            </li>
          ),
        )}
      </ul>
    </>
  );
}

export default Reviews;
