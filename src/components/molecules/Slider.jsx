import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { animalData } from '../Recoil';
import Flickity from 'react-flickity-component';
// import { theme } from '../utils';

const flickityOptions = {
	initialindex: 3,
};

const Slider = () => {
	const data = useRecoilValue(animalData);
	return (
		<FlickityS
			className={'carousel'}
			elementType={'div'}
			options={flickityOptions}
			disableImagesLoaded={false}
			reloadOnUpdate
			static
		>
			{data.map((e) => (
				<div key={e.id}>
					<img src={e.asset.url} alt='animals' />
				</div>
			))}
		</FlickityS>
	);
};

const FlickityS = styled(Flickity)`
	@media screen and (min-width: 1023px) {
		margin: 0 15vw;
		width: 70vw;
	}
	overflow: hidden;
	position: relative;
	:focus {
		outline: none;
	}

	.flickity-enabled {
		position: relative;
	}

	.flickity-enabled:focus {
		outline: none;
	}

	.flickity-viewport {
		overflow: hidden;
		position: relative;
		height: 100vw;
	}

	.flickity-slider {
		position: absolute;
		z-index: -100;
		width: 100%;
		height: 100%;
	}

	/* draggable */

	.flickity-enabled.is-draggable {
		-webkit-tap-highlight-color: transparent;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.flickity-enabled.is-draggable .flickity-viewport {
		cursor: move;
		cursor: -webkit-grab;
		cursor: grab;
	}

	.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
		cursor: -webkit-grabbing;
		cursor: grabbing;
	}

	/* ---- flickity-button ---- */

	.flickity-button {
		position: absolute;
		background: hsla(0, 0%, 100%, 0.75);
		border: none;
		color: #333;
	}

	.flickity-button:hover {
		background: white;
		cursor: pointer;
	}

	.flickity-button:focus {
		outline: none;
		box-shadow: 0 0 0 5px #19f;
	}

	.flickity-button:active {
		opacity: 0.6;
	}

	.flickity-button:disabled {
		opacity: 0.3;
		cursor: auto;
		/* prevent disabled button from capturing pointer up event. #716 */
		pointer-events: none;
	}

	.flickity-button-icon {
		fill: #333;
	}

	/* ---- previous/next buttons ---- */

	.flickity-prev-next-button {
		top: 35%;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		/* vertically center */
		transform: translateY(130%);
	}

	.flickity-prev-next-button.previous {
		left: 10px;
	}
	.flickity-prev-next-button.next {
		right: 10px;
	}
	/* right to left */
	.flickity-rtl .flickity-prev-next-button.previous {
		left: auto;
		right: 10px;
	}
	.flickity-rtl .flickity-prev-next-button.next {
		right: auto;
		left: 10px;
	}

	.flickity-prev-next-button .flickity-button-icon {
		position: absolute;
		left: 20%;
		top: 20%;
		width: 60%;
		height: 60%;
	}

	/* ---- page dots ---- */

	.flickity-page-dots {
		position: absolute;
		width: 100%;
		bottom: -125px;
		padding: 0;
		margin: 0;
		list-style: none;
		text-align: center;
		line-height: 1;
	}

	.flickity-rtl .flickity-page-dots {
		direction: rtl;
	}

	.flickity-page-dots .dot {
		display: inline-block;
		width: 10px;
		height: 10px;
		margin: 0 8px;
		background: #333;
		border-radius: 50%;
		opacity: 0.25;
		cursor: pointer;
	}

	.flickity-page-dots .dot.is-selected {
		opacity: 1;
	}
`;

/* const Heading = styled.h2`
	color: ${theme.black};
	text-align: center;
	margin: 0;
`; */

export default Slider;
