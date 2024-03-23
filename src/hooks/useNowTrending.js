import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addNowTrending } from "../utils/moviesSlice";

const useNowTrending = () => {
  // Fetch data from TMDB API and update store
  const dispatch = useDispatch();
  const getNowTrending = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowTrending(json.results));
  };
  useEffect(() => {
    getNowTrending();
  }, []);
};
export default useNowTrending;
