import React                                           from 'react';
import { useHomeFetch }                                from "../hooks/use-HomeFetch";
import BannerImage                                     from "./BannerImage";
import Grid                                            from "./Grid";
import Thumb                                           from "./Thumb";
import NoImage                                         from '../images/no_image.jpg'
import Spinner                                         from "./Spinner";
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE, } from "../config";

//config
//Components
//Hook
//image

const Home = () => {
	const {state, loading, error} = useHomeFetch();
	console.log(state);
	return (
		<>
			{state.results[0] ?
				<BannerImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
				             title={state.results[0].original_title}
				             text={state.results[0].overview}/>
				: null}
			<Grid header='Popular Movies'>
				{state.results.map(movie => (
					<Thumb
						key={movie.id}
						clickable
				        image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage
			                    }
					       movieId={movie.id}
					/>

				))}
			</Grid>
			<Spinner/>
		</>
	)

		;
};

export default Home;
