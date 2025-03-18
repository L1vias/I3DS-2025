import { useState } from "react";

import styles from "./movieCard.module.css";
import MovieDescription from "../movieDescription/movieDescription";

const MovieCard = (props) => {
  const [IsModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!IsModalOpen);
  };
  return (
    <>
      <div className={styles.movie} onClick={toggleModal}>
        <div>
          <p>{props.Year}</p>
        </div>

        <div>
          <img src={props.Poster} alt="" />
        </div>

        <div>
          <span>{props.Type}</span>
          <h3>{props.Title}</h3>
        </div>
      </div>
      {IsModalOpen && (
        <MovieDescription
          click={toggleModal}
          apiUrl={props.apiUrl}
          movieID={props.imdbID}
        />
      )}
    </>
  );
};

export default MovieCard;
