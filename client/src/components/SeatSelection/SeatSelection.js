import { useEffect, useState } from "react";
import classes from "./SeatSelection.module.css";
import Seat from "../Seat/Seat";
import MovieInfo from "../MovieInfo/MovieInfo";

function SeatSelection(props) {
  const movie_name = props.movie_name;
  const movie_theater = props.movie_theater;
  const movie_date = props.movie_date;
  const movie_time = props.movie_time;
  const movie_image = props.movie_image;
  const [seatLayout, setSeatLayout] = useState({});
  const [selectedSeats, setSelectedSeats] = useState(new Set());

  const seatSelected = (seat_number) => {
    setSelectedSeats((prev_state) => {
      var new_state = new Set([...prev_state]);
      if (new_state.has(seat_number)) {
        new_state.delete(seat_number);
      } else {
        new_state.add(seat_number);
      }
      return new_state;
    });
  };

  useEffect(() => {
    // Initialising a dummy seat layout
    const seat_layout = {};
    for (var row = 0; row < 15; row++) {
      const next_row = [];
      for (var col = 0; col < 20; col++) {
        next_row.push({
          row_number: String.fromCharCode(row + 65),
          seat_number: col + 1,
          booked: col === 0,
          hidden: row === col,
        });
      }
      seat_layout[String.fromCharCode(row + 65)] = next_row;
    }
    setSeatLayout(seat_layout);
  }, []);

  const Seats = [];
  Object.entries(seatLayout).forEach(([row_number, seats]) => {
    Seats.push(
      <div key={row_number} className={classes.row}>
        {seats.map((seat) => {
          const seat_number = `${row_number}${seat.seat_number}`;
          return (
            <Seat
              key={seat_number}
              seat_number={seat_number}
              booked={seat.booked}
              hidden={seat.hidden}
              selected={selectedSeats.has(seat_number)}
              clicked={seatSelected}
            />
          );
        })}
      </div>
    );
  });

  return (
    <div className={classes.seat_selection}>
      <MovieInfo
        movie_name={movie_name}
        movie_theater={movie_theater}
        movie_date={movie_date}
        movie_time={movie_time}
        movie_image={movie_image}
        number_of_tickets={selectedSeats.size}
      />
      <div className={classes.seats}>{Seats}</div>
    </div>
  );
}

export default SeatSelection;
