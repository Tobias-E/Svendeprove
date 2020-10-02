import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { useRecoilState } from 'recoil';
import { modalIsOpen } from '../Recoil';

// Assets
import { theme } from '../utils';

// Exported Component
Modal.setAppElement('#root');
const ModalS = () => {
	const [isOpen, setIsOpen] = useRecoilState(modalIsOpen);
	return (
		<Modal
			isOpen={isOpen}
			style={customStyles}
			contentLabel='Example Modal'
		>
			<Button
				onClick={() => {
					setIsOpen(false);
				}}
			>
				X
			</Button>
			<h2>Du er nu tilmeldt nyhedsbrevet!</h2>
		</Modal>
	);
};

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

const Button = styled.button`
	padding: 0.5rem 0.8rem;
	background-color: ${theme.buttonColor};
	color: ${theme.white};
	border: none;
	border-radius: 5px;
`;

export default ModalS;
