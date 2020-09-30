import { atom, selector } from 'recoil';

// Burger menu open/close state
export const openState = atom({
	key: 'openState',
	default: false,
});

// Fetch Sections (Banner)
const sections =
	'https://dyrevelfaerd-tobias.herokuapp.com/api/v1/adoptsections';
export const sectionsData = selector({
	key: 'sectionsData',
	get: async () => {
		const response = await fetch(sections);
		const result = await response.json();
		return result;
	},
});

// Fetch About
const about = 'https://dyrevelfaerd-tobias.herokuapp.com/api/v1/abouts';
export const aboutData = selector({
	key: 'aboutData',
	get: async () => {
		const response = await fetch(about);
		const result = await response.json();
		return result;
	},
});

// Fetch Volunteers
const volunteer = 'https://dyrevelfaerd-tobias.herokuapp.com/api/v1/volunteers';
export const volunteerData = selector({
	key: 'volunteerData',
	get: async () => {
		const response = await fetch(volunteer);
		const result = await response.json();
		return result;
	},
});

// Fetch Animals
const animal = 'https://dyrevelfaerd-tobias.herokuapp.com/api/v1/animals';
export const animalData = selector({
	key: 'animalData',
	get: async () => {
		const response = await fetch(animal);
		const result = await response.json();
		return result;
	},
});
