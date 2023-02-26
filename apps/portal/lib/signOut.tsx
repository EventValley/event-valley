import Cookies from 'js-cookie';

export const signOut = () => {
	Cookies.remove('ev');
	window.location.href = '/sign-in';
};
