import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { openState } from '../Recoil';

// Assets
import { theme } from '../utils';

const Burger = () => {
	const [open, setOpen] = useRecoilState(openState);
	return (
		<>
			<Wrapper open={open} onClick={() => setOpen(!open)}>
				<div />
				<div />
				<div />
			</Wrapper>
		</>
	);
};

const Wrapper = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 40px;
	height: 40px;
	padding: 0;
	background: transparent;
	border: none;
	cursor: pointer;

	&:focus {
		outline: none;
	}

	@media screen and (min-width: 1023px) {
		display: none;
	}

	div {
		width: 40px;
		height: 5px;
		position: relative;
		transform-origin: 1px;
		background: ${theme.black};
		border-radius: 5px;
		transition: all 0.2s linear;

		:first-child {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
		}

		:nth-child(2) {
			transform: ${({ open }) =>
				open ? 'translateX(-60px)' : 'translateX(0)'};
			opacity: ${({ open }) => (open ? '0' : '1')};
		}

		:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}
`;

export default Burger;
