import React from 'react';

export default function Container({ children, className }: { children: React.ReactNode; className: string }) {
	return <div className={`max-w-1440 mx-auto ${className ? className : ''}`}>{children}</div>;
}
