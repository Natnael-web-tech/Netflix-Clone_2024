import React, { useEffect, useState } from 'react'
import styles from "./Row.module.css";
import axios from "../../../Utils/axios";
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const Row = ({ title, fetchUrl, isLargeRow}) => {
const [movies, setMovies] = useState([]);
const [trailerUrl, setTrailerUrl] = useState("");

const base_url = "https://image.tmdb.org/t/p/original";

useEffect(() => {
(async () => {
try {
console.log(fetchUrl)
const response = await axios.get(fetchUrl);
const results = response.data.results
console.log(results)
setMovies(results);
} catch (error) {
console.log("error", error);
}
}) ()

}, [fetchUrl]);


const handleClick = (movie) => {
if (trailerUrl) {
setTrailerUrl('')
} else {
movieTrailer(movie ?.title || movie?.name || movie?.original_name) 
.then ((url) => {
console.log(url)
const urlParams = new URLSearchParams(new URL(url).search)
console.log(urlParams)
console.log(urlParams.get('v'))
setTrailerUrl(urlParams.get('v'));
})

} 
}

const opts = {
    height: '390' ,
    width: '100%',
    playerVars: {autoplay: 1,},
}

  return (
    <div className={styles.row}>
      <h1>{title}</h1>

      <div className={styles.row_posters}> 
        {movies?.map((movie,index)=> (
            <img 
            onClick={() => handleClick(movie)}
            key = {index} src = {`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
             alt={movie.name} className={`${styles.row_poster} ${isLargeRow && styles.row_posterLarge}`} />
        ))}
      </div>
      <div style = {{padding: '40px'}}>  
        {trailerUrl && <YouTube videoId = {trailerUrl} opts = {opts} />}
      </div>
    </div>
  )
} 

export default Row
