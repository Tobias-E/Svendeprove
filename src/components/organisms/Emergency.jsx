import React from 'react';
import styled from 'styled-components';

// Assets
import Banner from '../molecules/Banner';

// Exported Component
const Emergency = ({ h, p, img }) => {
	return (
		<Background
			id='hjem'
			img={img}
			style={{ backgroundImage: `url(${img})` }}
		>
			<Banner
				h={h}
				p={p}
				/* h={'Står du med et dyr i nød?'}
				p={
					'Ring til Dyrenes Vagtcentral på 1812 og få råd til hjælp og håndtering af dyr'
				} */
			/>
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

export default Emergency;
