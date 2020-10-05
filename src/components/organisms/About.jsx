import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { aboutData } from '../Recoil';

// Assets
import { theme } from '../utils';

// Exported Component
const About = () => {
	const data = useRecoilValue(aboutData);
	return (
		<Container id='omos'>
			{data.map((e) => (
				<Content key={e.id}>
					<Heading key={e.title}>{e.title}</Heading>
					<p key={e.id}> {e.content}</p>
				</Content>
			))}
		</Container>
	);
};

const Container = styled.section`
	padding: 2rem 15vw;
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 1023px) {
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (min-width: 1023px) {
		max-width: 22vw;
	}
`;

const Heading = styled.h2`
	margin-bottom: 0;
	color: ${theme.headingColor};
	font-weight: 400;
`;

export default About;
