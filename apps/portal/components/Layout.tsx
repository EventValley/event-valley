import React from 'react';

import Header from '@/components/Header';

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div className="grid grid-cols-main container mx-auto py-48">
			<div className="px-24">
				<Header />
			</div>
			<main className="px-24">{children}</main>
			<div className="px-24"></div>
		</div>
	);
}
