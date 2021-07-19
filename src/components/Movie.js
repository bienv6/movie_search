import React         from 'react';
import Spinner       from "./Spinner";
import BreadCrumb    from "./BreadCrumb";
import useMovieFetch from "../hooks/useMovieFetch";
import { useParams } from 'react-router-dom';


const Movie = () => {
	const {movieId} = useParams();
	const {state: movie, loading, error} = useMovieFetch(movieId)

	if (loading) return <Spinner/>;

	if (error) return <div>Something went wrong!...</div>

	return (
		<>
			< BreadCrumb movieTitle={movie.original_title}/>
		</>
	);
};

export default Movie;