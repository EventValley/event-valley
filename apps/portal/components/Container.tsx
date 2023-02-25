import React from 'react';

export const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
	return <div className={`max-w-1158 mx-auto px-24 ${className ? className : ''}`}>{children}</div>;
};
