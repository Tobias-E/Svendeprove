import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { modalIsOpen } from '../Recoil';

// Assets
import { theme } from '../utils';

// Imported Components
import Modal from '../molecules/ModalS';

// Post newsletter
const url = 'https://dyrevelfaerd-tobias.herokuapp.com/api/v1/subscribers';
async function postData(data) {
	const result = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ name: data.name, email: data.email }),
	});
	return result;
}

// Exported Component
const Newsletter = () => {
	const { register, handleSubmit, errors } = useForm();
	const [, setIsOpen] = useRecoilState(modalIsOpen);
	const onSubmit = (data) => postData(data) & setIsOpen(true);
	// eslint-ignore-next-line

	return (
		<Container>
			<Heading>Tilmeld vores nyhedsbrev</Heading>
			<ContentContainer>
				<P>
					Få inspiration og nyheder om dyrevelfærd og vores arbejde,
					direkte i din indbakke.
				</P>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Input
						type='email'
						name='email'
						id='email'
						placeholder='Email'
						ref={register({
							required: 'Email required',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Please enter an email address',
							},
						})}
					/>
					{errors.email && errors.email.message}
					<Input
						type='text'
						name='name'
						id='name'
						placeholder='Navn'
						aria-invalid={errors.name ? 'true' : 'false'}
						ref={register({
							required: 'Name required',
							maxLength: 30,
							pattern: {
								message: 'Please enter your name',
							},
						})}
					/>
					{errors.name && errors.name.message}
					<Button
						type='submit'
						id='submit'
						/* onClick={() => {
							errors ? setIsOpen(false) : setIsOpen(true);
						}} */
					>
						Tilmeld
					</Button>
				</Form>
				<Modal />
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
			grid-row: 1 / 2;
		}
		#name {
			grid-column: 2 / 3;
			grid-row: 1 / 2;
		}
		#submit {
			grid-column: 2 / 3;
			grid-row: 2 / 3;
		}
	}
`;

const Input = styled.input`
	border-radius: 5px;
	border: 1px solid ${theme.cardBorder};
	height: 35px;
	margin: 1rem 0 0.5rem 0;
	@media screen and (min-width: 1023px) {
		margin: 0;
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
	margin-top: 1rem;
	@media screen and (min-width: 1023px) {
		margin-top: 0;
	}
`;

export default Newsletter;
