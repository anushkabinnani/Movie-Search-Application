import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/Header/Header"
import Home from "./Pages/Home/Home"
import MovieList from "./Components/Movie-List/MovieList"
import MovieDetail from "./Pages/Movie-Detail/MovieDetail"
import SearchResult from "./Components/Search-Result/SearchResult"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route exact path="movie/:id" element={<MovieDetail />}></Route>
          <Route exact path="movies/:type" element={<MovieList />}></Route>
          <Route exact path="search-movies" element={<SearchResult />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
