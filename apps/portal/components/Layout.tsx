import React from 'react';

import Container from '@/components/Container';
import Header from '@/components/Header';

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<Container className="grid grid-cols-main">
			<div className="h-screen sticky top-0 px-24 py-48">
				<Header />
			</div>
			<main className="px-24 py-48">{children}</main>
		</Container>
	);
}
