import { useEffect, useState } from "react";
import devFlix from "/favicon.png";
import styles from "./MovieDescription.module.css";

const MovieDescription = (props) => {
  const [MovieDesc, setMovieDesc] = useState([]);

  useEffect(() => {
    fetch(`${props.apiUrl}&i=${props.movieID}`)
      .then((response) => response.json())
      .then((data) => setMovieDesc(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(MovieDesc);

  return (
    <div className={styles.modalBackdrop} onClick={props.click}>
      <div className={styles.movieModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.movieInfo}>
          <img
            src={MovieDesc.Poster}
            alt={`Imagem da capa do filme ${MovieDesc.Title}`}
          />
          <button className={styles.btnClose} onClick={props.click}>
            X
          </button>
          <div className={styles.movieType}>
            <div>
              <img src={devFlix} alt="" />
              {MovieDesc.Type}
              <h1>{MovieDesc.Title}</h1>
              <a
                href={`https://google.com/search?q=${encodeURIComponent(
                  MovieDesc.Title
                )}`}
                target="_blank"
              >
                ▶️ Assistir
              </a>
            </div>
          </div>
        </div>
        <div className={styles.containerMisc}>
          <div className={styles.containerFlex}>
            Avaliação: {MovieDesc.imdbRating} | Duração: {MovieDesc.Runtime} |{" "}
            {MovieDesc.Released}
          </div>
          <div className={styles.containerFlex}>
            <p>Elenco: {MovieDesc.Actors}</p>
            <p>Gênero: {MovieDesc.Genre}</p>
          </div>
        </div>
        <div className={styles.desc}>
          <p>Sinopse: {MovieDesc.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
