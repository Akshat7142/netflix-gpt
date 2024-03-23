import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img alt="logo" src={BG_URL}></img>
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
