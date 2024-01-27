/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Card.css";
import { fallbackMoviePoster, image185 } from "../../../api/moviedb";
import { FaPlayCircle, FaPlusCircle } from "react-icons/fa";

const Card = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="card">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <a href={"/"} style={{ textDecoration: "none", color: "white" }}>
          <div className="card">
            <img
              className="card_img"
              src={image185(movie?.poster_path) || fallbackMoviePoster}
              alt="poster"
            />
            <div className="card_overlay">
              <h2 className="card_title">{movie?.original_title || ""}</h2>
              <div className="card_options">
                <FaPlayCircle/>
                <FaPlusCircle/>
              </div>
              <div className="card_description">
                {movie ? `${movie?.overview.slice(0, 118)}...` : ""}
              </div>
            </div>
          </div>
        </a>
      )}
    </>
  );
};

export default Card;
