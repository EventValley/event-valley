import React from 'react';

import Header from '@/components/Header';
import { Stack } from '@/components/Stack';
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
		<Stack className="relative">
			<Header />
			<Stack as="main" className="py-48">
				{children}
			</Stack>
		</Stack>
	);
}
