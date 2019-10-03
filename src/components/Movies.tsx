import { useState, Component } from "react";
import axios from "axios";
import { Input } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { Link } from "react-router-dom";
import { menu } from "./Home";

const { Search } = Input;

class App extends Component {
  componentWillMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=1d229eb894b9ce78a542d83256829774    "
      )
      .then(response => {
        console.log(response.data);
      });
  }

  render() {
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
      </div>
    );
  }
}

export default App;
