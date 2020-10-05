import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { sectionsData } from './Recoil';

// Imported Components
import { GlobalStyle } from './utils';
import Header from './organisms/Header';
import Footer from './organisms/Footer';
import Banner from './molecules/Banner';
import About from './organisms/About';
import Slider from './molecules/Slider';
import Volunteer from './organisms/Volunteer';
import Newsletter from './organisms/Newsletter';
import Animals from './organisms/Animals';
import Animal from './templates/Animal';

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
						<Banner
							id={'hjem'}
							img={bannerData[0].asset.url}
							heading={bannerData[0].title}
							paragraph={bannerData[0].content}
						/>
						<About />
						<Slider />
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
						<Animals />
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

export default App;
