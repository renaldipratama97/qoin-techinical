import Header from "./components/Header";
import Menu from "./components/Menu";
import Dashboard from "./components/Dashboard";
import ListMovie from "./components/ListMovie";
import GenreMovie from "./components/ListGenre";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailMovie from "./components/DetailMovie";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Menu />

        <Routes>
          <>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/movie-list" exact element={<ListMovie />} />
            <Route path="/genre-list" exact element={<GenreMovie />} />
            <Route path="/detail-movie" exact element={<DetailMovie />} />
          </>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
