export const getInitials = (fullName: string) => {
	const allNames = fullName.trim().split(' ');
	return allNames.reduce((acc, curr, index) => {
		if (index === 0 || index === allNames.length - 1) {
			acc = `${acc}${curr.charAt(0).toUpperCase()}`;
		}
		return acc;
	}, '');
}
