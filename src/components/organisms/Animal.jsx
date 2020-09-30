import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { animalData } from '../Recoil';

// Assets
import { theme } from '../utils';

// Exported Component
const Animal = () => {
	const data = useRecoilValue(animalData);
	console.log(data);
	return (
		<Container>
			<Heading>Dyr hos os</Heading>
			<SubHeading>{data.length} dyr</SubHeading>
			<ContentContainer>
				<Figure>
					<Img src={data[0].asset.url} alt='' />
					<TextContainer>
						<h4>{data[0].name}</h4>
						<P>{data[0].description}</P>
					</TextContainer>
				</Figure>
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
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;
`;

const Figure = styled.figure`
	margin: 0;
	display: flex;
	flex-direction: row;
	border: 1px solid ${theme.cardBorder};
	height: 200px;
	width: 100%;
`;

const Img = styled.img`
	max-height: auto;
	max-width: 50%;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const P = styled.p`
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

export default Animal;
