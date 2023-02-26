export const Label = ({ children, className, ...props }: any) => {
	return (
		<div>
			<label className={`text-14 text-gray-1000 font-700 ${className ? className : ''}`} {...props}>
				{children}
			</label>
		</div>
	);
};
