import React, { useState, useEffect } from 'react';
import axios from '../axios';

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="ml-5 text-white">
            <h2 className="text-2xl font-bold">{title}</h2>



            <div className="flex overflow-y-hidden overflow-x-scroll p-5 scrollbar-hide">
                {movies.map(movie => (
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                        <img
                            key={movie.id}
                            className={`w-full object-contain transition-transform duration-450 hover:scale-105 ${isLargeRow ? "max-h-60" : "max-h-28"} mr-2.5 rounded`}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                        />
                    )
                ))}
            </div>
        </div>
    )
}

export default Row;
