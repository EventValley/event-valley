import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

export const EventFooter = () => {
	return (
		<div className="fixed bottom-0 left-0 w-full py-16">
			<div className="bg-translucent-white-1000 backdrop-blur absolute top-0 left-0 h-full w-full"></div>
			<Container className="flex items-center gap-24 justify-between relative">
				<div></div>
				<div>
					<Button variant="primary">Attend</Button>
				</div>
			</Container>
		</div>
	);
};
