import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css'

export const DetailsPage = () => {
    const [movie, setMovie] = useState(null);
    let { id, title } = useParams();

    const [MovieId, setMovieId] = useState(id)

    const fetchMovieDetails = async () => {
        try {                               // el fetch actualiza y muestra los dtos de json

            const response = await fetch(`https://api.themoviedb.org/3/movie/${MovieId}?page=1&api_key=492d218f089fd8c20e9c3a945b482a9f`);
            if (response.ok) {
                const data = await response.json();
                setMovie(data);
            } else {
                console.error('No se pudieron recuperar los detalles de la película');
            }
        } catch (error) {
            console.error('Error al recuperar los detalles de la película', error);
        }
    };


    useEffect(() => {
        console.log(MovieId)
        fetchMovieDetails();
    }, [id]);


    return (
        <div>
            {movie ? (
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-10 col-md-10 mb-4">
                            <h1>
                                <strong> {movie.title} </strong>
                            </h1>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-evenly">
                        <div className="col-sm-6 mb-1">
                            <div className="card-image">
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img" />
                                <div className="author">
                                    Fecha: <span className="name"> Release Date: {movie.release_date}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <h3 className='text-center' style={{ color: 'violet' }}>Descripcion o Sinopsis</h3>
                            <p>{movie.overview}</p>

                            <div className="row d-flex justify-content-center">
                                <div className="col-sm-9 col-md-8">
                                    <h3 className="Funciones text-center" >Generos</h3>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-evenly flex-wrap">
                                <div className="d-flex tarjeta">
                                    {movie.genres.map(genre =>
                                        <div key={genre.id}>
                                            <div className="card col-sm-4 me-4 mb-4">
                                                <p className="time-text"><span>{genre.name}</span></p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}
