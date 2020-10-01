import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { animalData } from '../Recoil';

// Assets
import { theme } from '../utils';

// Exported Component
const Animals = () => {
	const data = useRecoilValue(animalData);
	console.log(data);
	return (
		<Container>
			<Heading>Dyr hos os</Heading>
			<SubHeading>{data.length} dyr</SubHeading>
			<ContentContainer>
				{data.map((e) => (
					<Figure to={`/animal/${e.id}`} key={e.id}>
						<Img src={e.asset.url} alt='' />
						<TextContainer>
							<ContentHeading>{e.name}</ContentHeading>
							<P>{e.description}</P>
							<Span>Været på internatet i 32 dage.</Span>
						</TextContainer>
					</Figure>
				))}
			</ContentContainer>
		</Container>
	);
};

const Container = styled.section`
	padding: 2rem 15vw;
	display: flex;
	flex-direction: column;
`;

const Heading = styled.h2`
	margin-bottom: 0;
	color: ${theme.headingColor};
	font-weight: 500;
	font-size: 2rem;
`;

const SubHeading = styled.h3`
	font-weight: 450;
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (min-width: 1023px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
		grid-gap: 2rem 1.5rem;
	}
`;

const Figure = styled(Link)`
	color: ${theme.black};
	text-decoration: none;
	margin: 0 0 1.5rem 0;
	display: flex;
	flex-direction: row;
	border: 1px solid ${theme.cardBorder};
	height: 200px;
	width: 100%;
	border-radius: 5px;
	@media screen and(min-width:1023px) {
		margin: 0;
	}
`;

const Img = styled.img`
	max-height: auto;
	max-width: 35%;
	border-radius: 5px;
	object-fit: cover;
`;

const TextContainer = styled.div`
	margin-left: 1rem;
	display: flex;
	flex-direction: column;
`;

const ContentHeading = styled.h3`
	font-weight: 450;
	margin-bottom: 0.7rem;
`;

const P = styled.p`
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
	margin-top: 0;
`;

const Span = styled.span`
	color: ${theme.linkColor};
	font-size: 0.8rem;
`;

export default Animals;
