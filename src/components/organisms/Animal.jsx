import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { animalData } from '../Recoil';

// Exported Component
const Animal = () => {
	const data = useRecoilValue(animalData);
	let { id } = useParams();
	return (
		<Container>
			<h1>{data[id - 1].name}</h1>
			<img src={data[id - 1].asset.url} alt='' />
			<p>{data[id - 1].description}</p>
		</Container>
	);
};

const Container = styled.section`
	padding: 2rem 15vw;
	display: flex;
	flex-direction: column;
`;

export default Animal;
