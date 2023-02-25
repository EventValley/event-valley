export const FormSection = ({ children, className, ...props }: any) => {
	return (
		<div className={`flex flex-col gap-24 ${className ? className : ''}`} {...props}>
			{children}
		</div>
	);
};
