import { atom } from 'recoil';

// Burger menu open/close state
export const openState = atom({
	key: 'openState',
	default: false,
});
