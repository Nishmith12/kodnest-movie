import React, { useState, useEffect } from 'react';
import axios from '../axios';
import requests from '../requests';

const Banner = () => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            if (request.data.results.length > 0) {
                setMovie(
                    request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                    ]
                );
            }
            return request;
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="object-contain h-[448px] text-white"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }}
        >
            <div className="ml-8 pt-36 h-48">
                <h1 className="text-5xl font-extrabold pb-1.5">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="pt-4">
                    <button className="cursor-pointer text-white outline-none border-none font-bold rounded px-8 py-2 mr-4 bg-[rgba(51,51,51,0.5)] hover:bg-[#e6e6e6] hover:text-black transition duration-200">
                        Play
                    </button>
                    <button className="cursor-pointer text-white outline-none border-none font-bold rounded px-8 py-2 mr-4 bg-[rgba(51,51,51,0.5)] hover:bg-[#e6e6e6] hover:text-black transition duration-200">
                        My List
                    </button>
                </div>
                <h1 className="w-[45rem] leading-[1.3] pt-4 text-sm max-w-[360px] h-[80px]">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            <div className="h-[7.4rem] bg-gradient-to-t from-[#111] via-[rgba(37,37,37,0.61)] to-transparent bottom-0 absolute w-full" />
        </header>
    )
}

export default Banner;
