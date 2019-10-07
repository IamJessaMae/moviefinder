import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col } from "antd";
import { Card } from "antd";
import axios from "axios";
import React from "react";

import { Input } from "antd";
import "antd/dist/antd.css";

const { Search } = Input;

const apiKey = "9db315782d11e8413f7adeb2af8d626d";
const apiURL = "https://api.themoviedb.org/3";
const imgURL = " http://image.tmdb.org/t/p/original";

interface movieProps {
  id: 0;
  link: "";
  original_title: "";
  poster_path: "";
  release_date: "";
}

export const menu = [
  {
    id: 1,
    title: "HOME",
    link: "/"
  },
  {
    id: 2,
    title: "MOVIES",
    link: "/movies"
  },

  {
    id: 3,
    title: "TRENDING",
    link: "/trending"
  },
  {
    id: 4,
    title: "UPCOMING",
    link: "/upcoming"
  }
];
export const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [upcomingList, setComingList] = useState([]);
  const handleSearch = (query: any) => {
    handleGetMovies(query);
    handleGetUpcomingMovies(query);
  };

  const handleGetMovies = async (query?: string) => {
    let response;
    // checks if {query} is not empty
    let url = query
      ? `${apiURL}/search/movie?api_key=${apiKey}&query=${query}` // not empty
      : `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`; // empty
    response = await axios.get(url); // pass the url based on the query condition
    setMovieList(response.data.results); // setState of MovieList
  };
  const handleGetUpcomingMovies = async (query?: string) => {
    let response;

    let url = query
      ? `${apiURL}/search/movie?api_key=${apiKey}&query=${query}` // not empty
      : `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
    // empty
    response = await axios.get(url); // pass the url based on the query condition
    setComingList(response.data.results);
  };
  // pareho ng componentDidMount, componentWillMount, componentDidUpdate (React life cycle)
  useEffect(() => {
    handleGetMovies();
    handleGetUpcomingMovies();
  }, []);
  useEffect(() => {
    handleGetUpcomingMovies();
  }, []);

  return (
    <div className="App">
      <div className="top-nav-bar">
        <div className="search-box">
          <Search
            type="text"
            className="form-control"
            placeholder="Search for TV,Movies,Trending and more"
            onSearch={handleSearch}
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
      <br></br>
      <br></br>
      <h2>
        <strong>Popular Movies</strong>
      </h2>
      <div className="container">
        {movieList.map((movies: movieProps, index: number) => (
          <Link to={`/info/${movies.id}`}>
            <Col span={4}>
              <img className="myprojects" src={imgURL + movies.poster_path} />
              <Card
                key={index}
                className="cardM"
                hoverable
                style={{ width: 193, height: 90 }}
              >
                <strong>
                  <p className="project-title">{movies.original_title}</p>
                </strong>
                <p className="project-date">{movies.release_date}</p>
              </Card>
            </Col>
          </Link>
        ))}
      </div>
      <div className="container2">
        <div>
          <h2>
            <strong>_</strong>
          </h2>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <h2>
          <strong>Upcoming Movies</strong>
        </h2>
        {upcomingList.map((movies: movieProps, index: number) => (
          <Link to={`/info/${movies.id}`}>
            <Col span={4}>
              <img className="myprojects" src={imgURL + movies.poster_path} />
              <Card
                key={index}
                className="cardM"
                hoverable
                style={{ width: 200, height: 90 }}
              >
                <strong>
                  <p className="project-title">{movies.original_title}</p>
                </strong>

                <p className="project-date">{movies.release_date}</p>
              </Card>
            </Col>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
