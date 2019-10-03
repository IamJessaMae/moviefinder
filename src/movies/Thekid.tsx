import React from "react";
import { Link } from "react-router-dom";
import { Rate } from "antd";
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
            <Link to="/">HOME</Link>
            <Link to="/">MOVIES</Link>
            <Link to="/">TV SHOWS</Link>
            <Link to="/">TRENDING</Link>
            <Link to="/">UPCOMING</Link>
          </div>
        </div>
        <div>
          <img
            className="pic1"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kids-movies-2019-the-kid-who-would-be-king-1543259868.jpg?crop=0.9876543209876543xw:1xh;center,top&resize=480:*"
          />

          <h1 className="overview">
            <h3>The Kid Who Would Be King</h3>
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
            Old school magic meets the modern world in this epic adventure. Alex
            (Louis Ashbourne Serkis) thinks he's just another nobody, until he
            stumbles upon the mythical sword in the stone, Excalibur. Now, he
            must unite his friends and enemies into a band of knights and,
            together with the legendary wizard Merlin (Sir Patrick Stewart),
            take on the wicked enchantress Morgana (Rebecca Ferguson). With the
            future at stake, Alex must become the great leader he never dreamed
            he could be.
            <h4>
              <strong>Director:</strong> Joe Cornish
            </h4>
          </h1>
        </div>
      </div>
    );
  }
}

export default App;
