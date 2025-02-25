import React, { useEffect, useState } from "react";
import axios from "../../Utils/axios";
import requests from "../../Utils/requests";
import styles from "./Banner.module.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
      
    async function fetchData() {
      try {
      const response = await axios.get(requests.fetchNetflixOriginals);
      const results = response.data.results;
      setMovie(results[Math.floor(Math.random() * results.length)]); 
    } catch (error) {console.log(error)}
  
  } fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: 1 },
  };

  return (
    <>
      <div
        className={styles.banner}
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.banner_contents}>
          <h1 className={styles.banner_title}>
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className={styles.banner_buttons}>
            <button
              className={`${styles.banner_button} ${styles.play}`}
              onClick={() => handleClick(movie)}
            >
              Play
            </button>
            <button className={styles.banner_button}>My List</button>
          </div>
          <h1 className={styles.banner_description}>
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
        <div className={styles.banner_fadeBottom}></div>
      </div>

      {trailerUrl && (
        <div className={styles.video_container}>
          <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </>
  );
};

export default Banner;
