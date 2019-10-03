import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Rate } from "antd";
import "antd/dist/antd.css";
import { menu } from "./Home";
import axios from "axios";
import Search from "antd/lib/input/Search";
import { Card } from "antd";

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
          <span>
            <Rate disabled defaultValue={4} />
          </span>
          <h4>Overview</h4>
          {movie.overview}
        </p>
      </div>
      {/* <br></br>
      <div className="trailer">
        <iframe
          src="https://www.youtube.com/embed/RH2BD49sEZI"
          width="500"
          height="300"
          title="video"
        />
      </div> */}
      {/* <h1 className="cast">Top Billed Cast</h1>
        <section>
          <div className="castpic">
            {movieList.map((movies: movieProps, index: number) => (
              // <Link to={value.link}>
              // <img className="castpics" src={imgURL + movies.poster_path} />

              <Card
                key={index}
                className="castcard"
                hoverable
                style={{ width: 200 }}
              >
                <p className="project-title">
                  <span className="title"></span>
                  {movies.original_title}
                  <span className="title"></span>
                </p>
              </Card>
              // </Link>
            ))}
          </div>
        </section> */}
    </div>
  );
};
export default Info;

{
  /* <Card
className="card"
hoverable
style={{ width: 500, height: 230 }}
cover={
  <p className="upcomingtex">
    <img className="pic2" src={value.src} />
    <strong>
      <p className="title">{value.title}</p>
    </strong>

    <p className="title">{value.date}</p>

    <Rate disabled defaultValue={4} />
    <br></br>
    <p className="title">{value.descr}</p>
    <br></br>
    <p className="title">
      {" "}
      <strong>Director:{value.director}</strong>
    </p>
  </p>
}
></Card> */
}
