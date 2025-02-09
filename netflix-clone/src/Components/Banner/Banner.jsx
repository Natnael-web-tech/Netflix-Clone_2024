import React, { useEffect, useState } from "react";
import axios from "../../Utils/axios"; 
import requests from "../../Utils/requests"; 

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.fetchNetflixOriginals);
      const results = response.data.results;
      setMovie(results[Math.floor(Math.random() * results.length)]); // Pick a random movie
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.name || movie?.title}</h1>
        <p className="banner_description">{movie?.overview}</p>
      </div>
    </header>
  );
};

export default Banner;
