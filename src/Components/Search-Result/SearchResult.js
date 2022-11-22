import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import Cards from "../Card/Card"
import "./SearchResult.css"

const SearchResult = () => {
  const [searchList, setSearchList] = useState([])
  const [searchParams] = useSearchParams()

  const search = searchParams.get("movie")

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    getData()
  }, [search])

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${search}`
    )
      .then((res) => res.json())
      .then((data) => setSearchList(data.results))
  }

  if (search === "" || search === null) {
    return (
      <div className="null_movie">
        <h2>ERROR:</h2>
        <p>You haven't entered any movie to search</p>
      </div>
    )
  }

  return (
    <div className="movie_list">
      <h2 className="list_title">"{search.toUpperCase()}"</h2>
      <div className="list_cards">
        {searchList.map((movie) => (
          <Cards movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default SearchResult
