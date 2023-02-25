import axios from 'axios';
import { useForm } from 'react-hook-form';

import { Input } from '@/components/Input';
import { Label } from '@/components/Label';

export const SignInPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data: any) => {
		const response = await axios.post('/api/auth/sign-in', {
			email: data.email,
		});

		console.log('response', response);
	};

	return (
		<div>
			<h1>Sign In</h1>

			<div>
				<form onSubmit={handleSubmit(onSubmit)} noValidate>
					<Label>Email</Label>
					<Input type="email" {...register('email')} />
					<button>Log In</button>
				</form>
			</div>
		</div>
	);
};
