import { useState } from "react";
import { Link } from "react-router-dom";
import { Rate } from "antd";
import { Col } from "antd";
import { Card } from "antd";
import React from "react";
import { Input } from "antd";
import "antd/dist/antd.css";

const { Search } = Input;

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
    link: "/coming"
  }
];
const movies = [
  {
    id: 1,
    text: "Inferno",
    link: "/inferno",
    src:
      "https://m.media-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_.jpg"
  },
  {
    id: 2,
    link: "/dora",
    text: "Dora And The Lost City of Gold",
    src:
      "https://amc-theatres-res.cloudinary.com/v1562680032/amc-cdn/production/2/movies/56400/56408/PosterDynamic/83473.jpg"
  },
  {
    id: 3,
    link: "/aladdin",
    text: "Aladdin",
    src:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bset-kids-movies-2019-aladdin-1555082928.jpg"
  },
  {
    id: 4,
    link: "/thekid",
    text: "The Kid Who Would Be King",
    src:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kids-movies-2019-the-kid-who-would-be-king-1543259868.jpg?crop=0.9876543209876543xw:1xh;center,top&resize=480:*"
  },

  {
    id: 5,
    link: "/",
    text: "The Big Bang Theory",
    src:
      "https://starzplay-img-prod-ssl.akamaized.net/474w/WarnerBrothers/THEBIGBANGTHEORYY2007S01E001/THEBIGBANGTHEORYY2007S01E001-474x677-PST.jpg"
  },
  {
    id: 6,
    link: "/",
    text: "Strong Woman Do Bong Soon",
    src:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/StrongWomanDoBong-soon_%28Main_poster%29.jpg/250px-StrongWomanDoBong-soon_%28Main_poster%29.jpg"
  },
  {
    id: 7,
    link: "/",
    text: "Descendant of the sun",
    src:
      "https://i.pinimg.com/originals/28/58/67/285867e673bcd79dff2270e721759482.jpg"
  },
  {
    id: 8,
    link: "/",
    text: "The New Game",
    src:
      "https://img1.ak.crunchyroll.com/i/spire1/68af8ecae409291f8d6278a82cbf9b491499909337_main.jpg"
  },

  {
    id: 9,
    link: "/",
    text: "The Kid Who Would Be King",
    src:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg"
  },
  {
    id: 10,
    link: "/",
    text: "The Kid Who Would Be King",
    src:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yPisjyLweCl1tbgwgtzBCNCBle.jpg"
  },
  {
    id: 11,
    link: "/",
    text: "The Kid Who Would Be King",
    src:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xq1Ugd62d23K2knRUx6xxuALTZB.jpg"
  },
  {
    id: 12,
    link: "/",
    text: "The Kid Who Would Be King",
    src:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg"
  }
];
const trending = [
  {
    id: 1,
    link: "/",
    text: "The Kid Who Would Be King",
    src:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg"
  },
  {
    id: 2,
    link: "/",
    text: "The Kid Who Would Be King",
    src:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yPisjyLweCl1tbgwgtzBCNCBle.jpg"
  },
  {
    id: 3,
    link: "/",
    text: "The Kid Who Would Be King",
    src:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xq1Ugd62d23K2knRUx6xxuALTZB.jpg"
  },
  {
    id: 4,
    link: "/",
    text: "The Kid Who Would Be King",
    src:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg"
  }
];

export const Home = () => {
  const [movieList, setMovieList] = useState(movies);

  const handleSearch = (value: any) => {
    const newMovies = [...movies];

    setMovieList(
      newMovies.filter(movie =>
        movie.text.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

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
      <h2>
        <strong>Trending</strong>
      </h2>
      <div className="container">
        {movieList.map((value, index) => (
          <Link to={value.link}>
            <Col span={4}>
              <img className="myprojects" src={value.src} />
              <Card
                className="cardM"
                hoverable
                style={{ width: 200, height: 90 }}
              >
                <p className="project-title">{value.text}</p>
                <Rate disabled defaultValue={4} />
              </Card>
            </Col>
          </Link>
        ))}
      </div>
      <h2>
        <strong>Popular Movies</strong>
      </h2>
    </div>
  );
};

export default Home;
