import React, { useState } from "react"
import "./Header.css"
import { Link, useNavigate } from "react-router-dom"
import icon from "./app-icon.png"

const Header = () => {
  const [value, setValue] = useState("")
  const navigate = useNavigate()

  const search = () => {
    navigate(`/search-movies?movie=${value}`)
  }

  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img className="app_icon" src={icon} alt="app-icon"></img>
        </Link>
        <Link to="/movies/popular" className="header_styles">
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" className="header_styles">
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" className="header_styles">
          <span>Upcoming</span>
        </Link>
        <div className="search_box">
          <input
            type="text"
            value={value}
            placeholder="Type to search movie"
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" onClick={search}>
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
