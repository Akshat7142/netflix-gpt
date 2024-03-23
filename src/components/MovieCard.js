import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ PosterPath }) => {
  if (!PosterPath) return null;
  return (
    <div className="w-48">
      <img alt="Now Playing" src={IMG_CDN_URL + PosterPath}></img>
    </div>
  );
};

export default MovieCard;
