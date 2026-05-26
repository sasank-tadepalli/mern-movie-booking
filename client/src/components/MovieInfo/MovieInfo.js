import classes from "./MovieInfo.module.css";

function MovieInfo(props) {
  return (
    <div className={classes.movie_info}>
      <span>
        <button>Go Back</button>
      </span>
      <span>
        <img
          src={props.movie_image}
          alt={props.movie_name}
          className={classes.movie_image}
        />
      </span>
      <span>
        <h1>{props.movie_name}</h1>
        <p>
          {props.movie_theater} | {props.movie_date} {props.movie_time}
        </p>
      </span>
      <span className={classes.last_span}>
        <p>
          {props.number_of_tickets} Ticket
          {props.number_of_tickets !== 1 ? "s" : ""}
        </p>
        <button
          disabled={props.number_of_tickets === 0}
          className={
            props.number_of_tickets === 0 ? classes.button_disabled : null
          }
          onClick={() => alert("Hi")}
        >
          Pay Now
        </button>
      </span>
    </div>
  );
}

export default MovieInfo;
