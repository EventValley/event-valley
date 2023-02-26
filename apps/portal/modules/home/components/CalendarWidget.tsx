import { useState } from 'react';
import Calendar from 'react-calendar';

export const CalendarWidget = () => {
	const [value, onChange] = useState(new Date());
	return (
		<div className="bg-white rounded-16 flex items-center justify-center p-24 overflow-hidden">
			<Calendar onChange={onChange} value={value} />
		</div>
	);
};
