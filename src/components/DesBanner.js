import React from "react";
import { useStateValue } from "./StateProvider";
import "./css/Banner.css";

export default function Banner() {
  const [{ data }, dispatch] = useStateValue();

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.backImg})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {data?.title || data?.name || data?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h2 className="banner__description">{data?.overview}</h2>
      </div>
      <div className="banner--fade-Bottom"></div>
    </header>
  );
}
