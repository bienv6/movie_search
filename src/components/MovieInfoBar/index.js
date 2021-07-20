import React                      from 'react';
import { Content, Wrapper }       from "./MovieinfoBar.styles"
//helpers.js file
import { calcTime, convertMoney } from "../../helpers";

const MovieInfoBar = ({time, budget, revenue}) =>
	(
		<Wrapper>
			<Content>
				<div className='column'>
					<p>Running Time: {calcTime(time)}</p>
				</div>
				<div className='column'>
					<p>Budget: {convertMoney(budget)}</p>
				</div>
				<div className='column'>
					<p>Revenue: {convertMoney(revenue)}</p>
				</div>
			</Content>

		</Wrapper>
	);


export default MovieInfoBar;
