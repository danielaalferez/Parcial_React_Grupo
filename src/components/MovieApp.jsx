/* eslint-disable react/prop-types */
import React from "react";

export const MovieApp=({movie})=>{
    return(
        <>
        <div className="text-center m-3">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img" />
            <h6 className=" font-lato text-white fw-bold mt-4">{movie.title}</h6>
            <h5 className="font-roboto text-white fw-bold ">{movie.release_date}</h5>
        </div>
        
        </>
    )
} 