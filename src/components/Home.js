import React                             from 'react';
import { useHomeFetch }                  from "../hooks/use-HomeFetch";
import BannerImage                       from "./BannerImage";
import Grid                              from "./Grid";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

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
				<div key={movie.id}>{movie.title}</div>
			))}
			</Grid>
		</>
	)

		;
};

export default Home;
