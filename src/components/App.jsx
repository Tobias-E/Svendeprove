import React from 'react';
import styled /* , { keyframes }  */ from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { sectionsData } from './Recoil';

// Assets

// Imported Components
import { GlobalStyle } from './utils';
import Header from './organisms/Header';
import Footer from './organisms/Footer';
import Banner from './molecules/Banner';
import About from './organisms/About';
import Volunteer from './organisms/Volunteer';
import Newsletter from './organisms/Newsletter';
import Animals from './organisms/Animals';
import Animal from './organisms/Animal';

// Exported Component
function App() {
	const bannerData = useRecoilValue(sectionsData);
	return (
		<Wrapper className='App'>
			<Router>
				<GlobalStyle />
				<Header />
				<Switch>
					<Route exact path='/'>
						<Animals />
						<Banner
							id={'hjem'}
							img={bannerData[0].asset.url}
							heading={bannerData[0].title}
							paragraph={bannerData[0].content}
						/>
						<About />
						<Volunteer />
						<Banner
							id={'dyrinod'}
							img={bannerData[1].asset.url}
							heading={bannerData[1].title}
							paragraph={bannerData[1].content}
						/>
						<Newsletter />
						<Banner
							id={'adopteretdyr'}
							img={bannerData[2].asset.url}
							heading={bannerData[2].title}
							paragraph={bannerData[2].content}
						/>
					</Route>
					<Route path='/animal/:id' children={<Animal />} />
				</Switch>
				<Footer />
			</Router>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;
`;

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
