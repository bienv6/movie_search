import React                    from 'react';
import {Wrapper, Content, Text} from "./BannerImage.style";

const BannerImage = ({image, title, text}) => {
	return <Wrapper image={image}>
		<Content>
			<Text>
				<h1>
					<p>{title}</p>
					<p>{text}</p>
				</h1>
			</Text>
		</Content>
	</Wrapper>
};


export default BannerImage;
