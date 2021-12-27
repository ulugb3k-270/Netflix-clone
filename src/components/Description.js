import React, { useState } from "react";
import "./css/Description.css";
import { useStateValue } from "./StateProvider";
import Navbar from "./Navbar";
import DesBanner from "./DesBanner";

import movieTrailer from "movie-trailer";

import YouTube from "react-youtube";

export default function Description() {
  const [{ data }] = useStateValue();

  const [trailerUrl, setTrailerUrl] = useState("");
  console.log(data);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  if (trailerUrl) {
    setTrailerUrl("");
  } else {
    movieTrailer(data?.name || "")
      .then((url) => {
        if (url) {
          const urlParams = new URLSearchParams(new URL(url).search).get("v");
          setTrailerUrl(urlParams);
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="description">
      <Navbar />
      <DesBanner />
      <div className="desctiption__bottom">
        <div className="desctiption__bottomLeft">
          <img
            src={`https://image.tmdb.org/t/p/original/${data?.img}`}
            alt=""
          />
          <div className="des__bottomLeftText">
            <h2>{data?.name}</h2>
            <br />
            <p className="original__name des__bottomDetails">
              Original Name:{" "}
              <span>
                {" "}
                {data?.originalName ? data?.originalName : "Unavailable "}
              </span>
            </p>

            <p className="realise__data des__bottomDetails">
              Realise data:{" "}
              <span> {data?.date ? data?.date : "Unavailable "}</span>{" "}
            </p>

            <p className="popularity des__bottomDetails">
              Popularity:{" "}
              <span> {data?.popularity ? data?.popularity : "Unavailable"}</span>{" "}
            </p>

            <p className="voted des__bottomDetails">
              Voted: <span> {data?.voteCount ? data?.voteCount : "Unavailable"}</span>{" "}
            </p>

            <p className="rating des__bottomDetails">
              Rating: <span> {data?.vote ? data?.vote : "Unavailable"}/10</span>{" "}
            </p>
          </div>
        </div>
        <div className="desctiption__bottomRight">
          <h2>Description: </h2>
          <br />
          <p>{data?.overview}</p>
        </div>
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
