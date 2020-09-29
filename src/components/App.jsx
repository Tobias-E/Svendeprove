import React from 'react';
import { RecoilRoot } from 'recoil';
// import styled, { keyframes } from 'styled-components';

// Imported Components
import { GlobalStyle } from './utils';
import Header from './organisms/Header';

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<RecoilRoot>
				<Header />
			</RecoilRoot>
		</div>
	);
}

/* const Header = styled.header`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;

const Link = styled.a`
	color: #61dafb;
`;

const Logo = styled.img`
	height: 40vmin;
	pointer-events: none;
`;

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;

const Rotate = styled.div`
	animation: ${rotate} infinite 20s linear;
`; */

export default App;
