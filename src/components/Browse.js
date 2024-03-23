import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useNowTrending from "../hooks/useNowTrending";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  useNowTrending();
  usePopularMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {/* <MainContainer />
      <SecondaryContainer /> */}
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/* 
          maincontainer
             - videobackground
             - videoTitle
          
          secondaryContainer
            - moviesList * n
      */}
    </div>
  );
};

export default Browse;
