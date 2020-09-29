import React from 'react';
import styled from 'styled-components';

// Imported components
import { theme } from '../utils';

const Footer = () => {
	return (
		<FooterS>
			<Container>
				<div>
					<Heading>Kontakt</Heading>
					<Address>
						Tornebuskvej 22, 1. <br />
						1131 København K
					</Address>
					<P>CVR: 22446187</P>
					<P>
						Husk at du kan få fradrag for donationer på op til
						16.600kr
					</P>
				</div>
				<PartnerContainer>
					<Heading>Partnere</Heading>
					<A href='https://anima.dk/'>Anima</A>
					<A href='/'>World Animal Protection</A>
					<A href='/'>Fødevarestyrelsen</A>
					<A href='/'>Faktalink</A>
				</PartnerContainer>
			</Container>
			<CopyRight> &copy; 2020 - Foreningen for Dyrevelfærd</CopyRight>
		</FooterS>
	);
};

const FooterS = styled.footer`
	background-color: ${theme.secondaryColor};
	padding: 0.5rem 20vw 0.5rem 15vw;
	display: flex;
	flex-direction: column;
`;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const PartnerContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const Heading = styled.h3`
	font-weight: 450;
	text-transform: uppercase;
`;

const Address = styled.address`
	font-style: normal;
`;

const P = styled.p`
	margin: 0.05rem 0;
`;

const A = styled.a`
	text-decoration: none;
	color: ${theme.buttonColor};
	:hover {
		color: ${theme.headingColor};
	}
`;

const CopyRight = styled.h5`
	align-self: center;
`;

export default Footer;
