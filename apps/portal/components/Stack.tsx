import React, { FC } from 'react';

export interface StackProps {
	as?: 'div' | 'section' | 'header' | 'main' | 'aside' | 'span' | 'nav' | 'ul' | 'ol' | 'li';
	className?: string;
	children: React.ReactNode;
}

export const Stack: FC<StackProps> = ({ as = 'div', className, children }) => {
	const Component = as;

	return <Component className={`${className ? className : ''}`}>{children}</Component>;
};
