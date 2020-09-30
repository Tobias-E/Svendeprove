import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { openState } from '../Recoil';

// Assets
import logo from '../../assets/logo.png';
import { theme } from '../utils';

// Imported Components
import Burger from '../atoms/Burger';

// Exported Component
const Header = () => {
	const [open, setOpen] = useRecoilState(openState);
	return (
		<Container>
			<LogoContainer>
				<Logo src={logo} alt='logo' />
				<Heading>Foreningen for Dyrevelfærd</Heading>
			</LogoContainer>
			<Nav open={open}>
				<Link href='#hjem' onClick={() => setOpen(false)}>
					Hjem
				</Link>
				<Link href='#omos' onClick={() => setOpen(false)}>
					Om os
				</Link>
				<Link href='#blivfrivillig' onClick={() => setOpen(false)}>
					Bliv Frivillig
				</Link>
				<Link href='#dyrinod' onClick={() => setOpen(false)}>
					Dyr i nød?
				</Link>
				<Link href='#adopteretdyr' onClick={() => setOpen(false)}>
					Adopter et dyr
				</Link>
			</Nav>
			<Burger />
		</Container>
	);
};

// Styling
const Container = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 1rem;
	align-items: center;
	position: sticky;
	top: 0px;
	background-color: ${theme.white};
	@media screen and (min-width: 1023px) {
		padding: 1rem 15vw;
	}
`;

const LogoContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Logo = styled.img`
	max-width: 50px;
	@media screen and (min-width: 1023px) {
		max-width: 70px;
	}
`;

const Heading = styled.h2`
	padding-left: 1rem;
	font-size: 1.4rem;
	font-weight: 500;
	@media screen and (min-width: 1023px) {
		font-size: 1.7rem;
	}
`;

const Nav = styled.nav`
	display: ${({ open }) => (open ? 'flex' : 'none')};
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-around;
	background-color: ${theme.secondaryColor};
	transition: all 0.2s linear;
	position: absolute;
	z-index: 100;
	top: 100px;
	right: 0;
	opacity: ${({ open }) => (open ? '1' : '0')};

	@media screen and (max-width: 1022px) {
		height: 300px;
		border-radius: 10px 0 0 10px;
	}

	@media screen and (min-width: 1023px) {
		width: 25rem;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		position: static;
		background-color: transparent;
		opacity: 1;
	}
`;

const Link = styled.a`
	text-decoration: none;
	color: ${theme.linkColor};

	:hover {
		color: ${theme.black};
		cursor: pointer;
	}
	:focus {
		color: ${theme.black};
	}

	@media screen and (max-width: 1022px) {
		padding: 0 3rem;
	}
`;

export default Header;
