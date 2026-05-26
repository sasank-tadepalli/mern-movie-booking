import "./App.css";
import SeatSelection from "./components/SeatSelection/SeatSelection";

function App() {
  return (
    <div className="App">
      <SeatSelection
        movie_name="Harry Potter And The Philosopher's Stone"
        movie_theater="AMC NewPark 12"
        movie_date="Wednesday, 26 Jan, 2024"
        movie_time="10:00 AM"
        movie_image="https://i.ebayimg.com/images/g/Bo8AAOSwrLZjJjso/s-l1600.jpg"
      />
    </div>
  );
}

export default App;
