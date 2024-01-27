/* eslint-disable react/prop-types */
import Card from "../card/Card";
import "./MovieList.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MovieList = ({ data, title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  return (
    <div className="movie_list">
      <h2 className="list_title">{title}</h2>
      <div className="list_cards">
        <Slider {...settings}>
          {data?.map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MovieList;
