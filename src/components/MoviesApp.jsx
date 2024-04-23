/* eslint-disable react/prop-types */
import { MovieApp } from './MovieApp';
import { Link, useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const MoviesApp = ({ movies }) => {
    // let { id } = useParams();

    return (
        <div className='row d-flex justify-content-center'>
            {
                movies.map(movie =>
                    <div key={movie.id} className='col-sm-12 col-md-6 col-lg-4'>
                        <Link key={movie.id} to={`/Details/${movie.id}/${movie.title}`}>
                            <MovieApp movie={movie} />
                        </Link>
                    </div>
                )}

        </div>
    )
}
