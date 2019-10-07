import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { menu } from "./Home";
import axios from "axios";
import Search from "antd/lib/input/Search";

const apiKey = "9db315782d11e8413f7adeb2af8d626d";
const imgURL = " http://image.tmdb.org/t/p/original";

type moreProps = {
  id: number;
  match: any;
};

interface movieProps {
  id: number;
  original_title: string;
  poster_path: string;
  overview: string;
  release_date: string;
}
const movieInfoProps = {
  id: 0,
  original_title: "",
  poster_path: "",
  overview: "",
  release_date: ""
};

let movie: movieProps = movieInfoProps;
export const Info: React.FC<moreProps> = ({ match }) => {
  const [movie, setMovie] = useState();
  let movieId = match.params.id;
  const handleGetMovies = async () => {
    let response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
    );
    setMovie(response.data);
  };
  handleGetMovies();

  if (!movie) {
    return <div className="App"></div>;
  }

  return (
    <div className="App">
      <div className="top-nav-bar">
        <div className="search-box">
          <Search
            type="text"
            className="form-control"
            placeholder="Search for TV,Movies,Trending and more"
          />
          <div className="topnav">
            <Link to="/">Login </Link>
            <Link to="/">Sign Up</Link>
          </div>
        </div>
      </div>
      <div className="top-nav-bar2">
        <div className="topnav2">
          {menu.map((value, index) => (
            <Link to={value.link}>{value.title}</Link>
          ))}
        </div>
      </div>
      <div className="poster">
        <img className="pic1" src={imgURL + movie.poster_path} />

        <p className="overview">
          <h3>{movie.original_title}</h3>
          {movie.release_date}
          <br></br>

          <h4>Overview</h4>
          {movie.overview}
        </p>
      </div>
    </div>
  );
};
export default Info;
