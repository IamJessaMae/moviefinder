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
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bset-kids-movies-2019-aladdin-1555082928.jpg"
          />

          <h1 className="overview">
            <h3>ALADDIN</h3>
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
            Aladdin is a poor street urchin who spends his time stealing food
            from the marketplace in the city of Agrabah. His adventures begin
            when he meets a young girl who happens to be Princess Jasmine, who
            is forced to be married by her wacky yet estranged father. Aladdin's
            luck suddenly changes when he retrieves a magical lamp from the Cave
            of Wonders. What he unwittingly gets is a fun-loving genie who only
            wishes to have his freedom. Little do they know is that the Sultan's
            sinister advisor Jafar has his own plans for both Aladdin and the
            lamp.
            <h4>
              <strong>Director:</strong> Ron Clements, John Musker
            </h4>
          </h1>
        </div>
      </div>
    );
  }
}

export default App;
