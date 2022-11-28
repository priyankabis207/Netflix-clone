import React, {useEffect, useState} from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData()
        {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[Math.floor(Math.random()*request.data.results.length)]
            );
            return request;
        }
        fetchData();
    },[])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }
    
  return (
    <header className="banners"
        style={{
            backgroundSize: "cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
            height: "448px",
            color: "white",
            paddingTop: "25px"
        }}>
        <div className="banner-content">
            <h1 className='banner-title'>{movie?.title || movie?.name || movie?.original_name}</h1>

            <div className="banner-button">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>

            <h3 className="overview">
                {truncate(movie?.overview, 150)}
            </h3>

        </div>
      
        <div className="banner-fadeBottom" />

    </header>


  )
}

export default Banner
