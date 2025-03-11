import styles from "./movieCard.module.css";

const MovieCard = (props) => {
  return (
    <div className={styles.movie}>
      <div>
        <p>{props.Year}</p>
      </div>

      <img src={props.Poster} alt="" />
      <h3>{props.Type}</h3>
      <h4>{props.Title}</h4>
    </div>
  );
};

export default MovieCard;
