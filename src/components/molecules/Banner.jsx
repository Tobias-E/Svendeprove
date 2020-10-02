import React from 'react';
import styled from 'styled-components';

// Assets
import { theme } from '../utils';

// Exported Component
const Banner = ({ id, img, heading, paragraph }) => {
	return (
		<Background id={id} style={{ backgroundImage: `url(${img})` }}>
			<Container>
				<H1>{heading}</H1>
				<P>{paragraph}</P>
			</Container>
		</Background>
	);
};

const Background = styled.div`
	height: 250px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	@media screen and (min-width: 1023px) {
		height: 20vw;
	}
`;

const Container = styled.section`
	padding: 2rem 15vw;
	display: flex;
	flex-direction: column;
`;

const H1 = styled.h1`
	color: ${theme.white};
	font-weight: 500;
	margin-bottom: 0.5rem;
`;

const P = styled.p`
	color: ${theme.white};
	max-width: 550px;
`;

export default Banner;
