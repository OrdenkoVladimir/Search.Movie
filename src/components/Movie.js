import React from 'react'

const DEFAULT_MOVIE_POSTER = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ( {movie} ) => {
const poster = 
    movie.Poster === "N/A" ? DEFAULT_MOVIE_POSTER : movie.Poster
    return (
        <div className="movie">
            <h3>{movie.Title}</h3>
            <img  src={poster}  />
            <p>{movie.Year}</p>
        </div>
    )
}

export default Movie