import React from 'react';
import styled from 'styled-components';

// Assets
import { theme } from '../utils';
import kittens from '../../assets/header/kittens.jpg';

// Exported Component
const Home = () => {
	return (
		<Background id='hjem'>
			<Container>
				<H1>Foreningen for Dyrevelfærd</H1>
				<P>Vi specialisere os i dyrevelfærd</P>
			</Container>
		</Background>
	);
};

const Background = styled.div`
	height: 250px;
	background-image: url(${kittens});
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
`;

export default Home;
