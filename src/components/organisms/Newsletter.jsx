import React from 'react';
import styled from 'styled-components';

// Assets
import { theme } from '../utils';

// Exported Component
const Newsletter = () => {
	return (
		<Container>
			<Heading>Tilmeld vores nyhedsbrev</Heading>
			<ContentContainer>
				<P>
					Få inspiration og nyheder om dyrevelfærd og vores arbejde,
					direkte i din indbakke.
				</P>
				<Form action=''>
					<Input
						type='email'
						name='email'
						id='email'
						placeholder='Email'
					/>
					<Input
						type='text'
						name='name'
						id='name'
						placeholder='Navn'
					/>
					<Button type='submit' id='submit'>
						Tilmeld
					</Button>
				</Form>
			</ContentContainer>
		</Container>
	);
};

const Container = styled.section`
	background-color: ${theme.secondaryColor};
	padding: 2rem 15vw;
	display: flex;
	flex-direction: column;
`;

const Heading = styled.h2`
	margin-top: 0;
	font-weight: 450;
	color: ${theme.headingColor};
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (min-width: 1023px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
	}
`;

const P = styled.p`
	margin-top: 0.2rem;
	font-size: 0.8rem;
	font-weight: 450;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	@media screen and (min-width: 1023px) {
		min-width: 30vw;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 1rem;
		#email {
			grid-column: 1 / 2;
		}
		#name {
			grid-column: 2 / 3;
		}
		#submit {
			grid-column: 2 / 3;
			grid-row: 2 / 3;
		}
	}
`;

/* const InputContainer = styled.div`
	display: flex;
	flex-direction: row;
`; */

const Input = styled.input`
	border-radius: 5px;
	border: 1px solid ${theme.cardBorder};
	height: 35px;
	margin-bottom: 1rem;

	@media screen and (min-width: 1023px) {
		margin-bottom: 0;
	}
	::placeholder {
		padding-left: 1rem;
	}
`;

const Button = styled.button`
	display: flex;
	justify-self: flex-end;
	max-width: 100px;
	padding: 0.5rem 1rem;
	background-color: ${theme.buttonColor};
	color: ${theme.white};
	border-radius: 5px;
	border-style: none;
`;

export default Newsletter;
