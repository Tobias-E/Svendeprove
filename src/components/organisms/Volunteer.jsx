import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { volunteerData } from '../Recoil';

// Assets
import { theme } from '../utils';

// Exported Component
const Volunteer = () => {
	const data = useRecoilValue(volunteerData);
	return (
		<Wrapper id='blivfrivillig'>
			<Heading>Bliv Frivillig</Heading>
			<Container>
				{data.map((e) => (
					<ContentContainer key={e.id}>
						<ContentHeading>{e.title}</ContentHeading>
						<Content>
							{e.asset && (
								<Image src={e.asset.url} alt={e.title} />
							)}
							<P>{e.content}</P>
						</Content>
						<Extra>{e.extra}</Extra>
					</ContentContainer>
				))}
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	padding: 2rem 15vw;
	display: flex;
	flex-direction: column;
	background-color: ${theme.secondaryColor};
`;

const Heading = styled.h2`
	margin-top: 0;
	font-weight: 400;
	color: ${theme.headingColor};
`;

const Container = styled.section`
	display: flex;
	flex-direction: column;
	@media screen and (min-width: 1023px) {
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
	}
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;
	@media screen and (min-width: 1023px) {
		max-width: 22vw;
		min-height: 700px;
		margin-bottom: 1rem;
	}
`;

const ContentHeading = styled.h3`
	margin: 0;
	padding: 1rem 2vw;
	font-weight: 350;
	text-transform: uppercase;
	background-color: ${theme.cardHeadingBackground};
	border: 1px solid ${theme.cardBorder};
	@media screen and (min-width: 1023px) {
		padding: 1rem 1vw;
	}
`;

const Content = styled.div`
	background-color: ${theme.white};
	padding: 2vw;
	border: 1px solid ${theme.cardBorder};
	border-top: 0;

	@media screen and (min-width: 1023px) {
		padding: 1vw;
		height: 100%;
	}
`;

const Image = styled.img`
	max-width: 100%;
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	border-radius: 3px 3px 0 0;
`;

const P = styled.p`
	max-width: 100%;
`;

const Extra = styled.h4`
	min-height: 2rem;
	padding: 1rem 1rem 2rem 1rem;
	margin: 0;
	color: ${theme.linkColor};
	background-color: ${theme.cardHeadingBackground};
	border: 1px solid ${theme.cardBorder};
	border-top: 0;
	font-weight: 400;
	font-style: italic;
`;

export default Volunteer;
