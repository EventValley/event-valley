import React from 'react';

import { Container } from '@/components/Container';
import Header from '@/components/Header';
import { useAuth } from '@/modules/auth/store';

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	const {
		data: { loading },
	} = useAuth();

	if (loading) {
		return <div>Loading</div>;
	}

	return (
		<div className="relative">
			<Header />
			<Container>
				<main className="py-48">{children}</main>
			</Container>
		</div>
	);
}
