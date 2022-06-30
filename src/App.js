import './App.css';
import Films from "./components/landingpage/Films";
import FilmDetail from "./components/landingpage/FilmDetail";
import TopRated from "./components/landingpage/TopRated";
import Upcoming from "./components/landingpage/Upcoming";
import Navigation from "./components/pages/Navigation";
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Films />} />
        <Route path="film/:id" element={<FilmDetail />} />
        <Route path="top-rated/" element={<TopRated />} />
        <Route path="upcoming/" element={<Upcoming />} />
      </Routes>
    </div>
  );
}

export default App;
