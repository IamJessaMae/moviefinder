import React from "react";
import { Link } from "react-router-dom";
import { Rate } from "antd";
import { menu } from "../components/Home";
import { Card } from "antd";

import "antd/dist/antd.css";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];
class App extends React.Component {
  state = {
    value: 3
  };

  handleChange = (value: any) => {
    this.setState({ value });
  };
  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <div className="top-nav-bar">
          <div className="search-box">
            <input
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
        <div>
          <img
            className="pic1"
            src="https://amc-theatres-res.cloudinary.com/v1562680032/amc-cdn/production/2/movies/56400/56408/PosterDynamic/83473.jpg"
          />

          <h1 className="overview">
            <h3>DORA AND THE LOST CITY OF GOLD</h3>
            <span>
              <Rate
                tooltips={desc}
                onChange={this.handleChange}
                value={value}
              />
              {value ? (
                <span className="ant-rate-text">{desc[value - 1]}</span>
              ) : (
                ""
              )}
            </span>
            <h4>Overview</h4>
            Having spent most of her life exploring the jungle, nothing could
            prepare Dora for her most dangerous adventure yet -- high school.
            Accompanied by a ragtag group of teens and Boots the monkey, Dora
            embarks on a quest to save her parents while trying to solve the
            seemingly impossible mystery behind a lost Incan civilization.
            <h4>
              <strong>Director:</strong> James Bobin
            </h4>
          </h1>
          <h1 className="cast">Top Billed Cast</h1>
          <section>
            <div className="castpic"></div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
