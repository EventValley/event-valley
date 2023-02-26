import { type NextRequest, NextResponse } from 'next/server';

export const middleware = async (req: NextRequest) => {
	const res = NextResponse.next();
	const token = req.cookies.get('ev')?.value;

	if (!token) {
		return NextResponse.redirect(new URL('/sign-in', req.url)); // redirect to /unauthorized page
	}

	return res;
};

export const config = {
	matcher: [
		'/',
		'/group',
		'/group/:path*',
		'/explore',
		'/my-groups',
		'/my-events',
		'/my-profile',
		'/my-venues',
		'/my-venues/[venueId]',
	],
};
