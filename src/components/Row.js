import React, { useEffect, useState } from "react";
import instance from "../axios";
import "./css/Row.css";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";

export default function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [{ data }, dispatch] = useStateValue();
  const base_url = "https://image.tmdb.org/t/p/original/";
  let history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request?.data?.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    history.push("/description");
    dispatch({
      name: movie?.name,
      originalName: movie?.original_name,
      date: movie?.first_air_date,
      overview: movie?.overview,
      popularity: movie?.popularity,
      vote: movie?.vote_average,
      voteCount: movie?.vote_count,
      img: movie?.poster_path || movie?.backdrop_path,
      backImg: movie?.backdrop_path,
    });
  };

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie?.id}
            className={`row__poster  ${isLargeRow && "row__posterLarge"}`}
            onClick={() => handleClick(movie)}
            src={`${base_url}${
              isLargeRow ? movie?.poster_path : movie?.backdrop_path
            }`}
            alt={movie?.name}
          />
        ))}
      </div>
    </div>
  );
}
