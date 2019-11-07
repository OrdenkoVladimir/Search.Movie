import React, {useEffect, useState} from 'react'
import Header from "./Header"
import Movie from "./Movie"
import Search from "./Search"

const POSTER_JSON = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"

const App = (props) => {

const [loading, setLoading] = useState(true)
const [movies, setMovies] = useState([])
const [error, setError] = useState(null)



useEffect(() => {
    fetch(POSTER_JSON)
        .then(response => response.json())
        .then(posters => {
           setMovies(posters.Search)
           setLoading(false) 
        })

}, [])

const search = searchValue => {
    setLoading(true)
    setError(null)
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
        .then(response => response.json())
        .then(posters => {
            if(posters.Response === 'True') {
                setMovies(posters.Search)
                setLoading(false)
            } else {
                setError(posters.Error)
                setLoading(false)
            }
            
        })
}
    


    return (
        <div className="App">
             <Header text="POSTERS" />
             <div className="search">
                <Search  search={search}/>
             </div>
             <div className="movies">
                { 
                 loading && !error ? (
                     
                 <div className="load"></div>
                 ) : error ? (
                 <div className="error">{error}</div>
                 ) :  (
                 movies.map((movie, index) => (
                    <Movie key={index} movie={movie} />
                ))
                )}
             </div>
           
        </div>
       
  
    )
}


export default App;
