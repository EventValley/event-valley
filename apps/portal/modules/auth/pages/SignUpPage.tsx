import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { FieldError } from '@/components/FieldError';
import { FormRow } from '@/components/FormRow';
import { FormSection } from '@/components/FormSection';
import { Heading } from '@/components/Heading';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import { Link } from '@/components/Link';
import { Stack } from '@/components/Stack';
import { Text } from '@/components/Text';

const SignInSchema = z.object({
	email: z.string().email(),
});

type FormValues = {
	email: string;
};

export const SignUpPage = () => {
	const [submitted, setSubmitted] = useState(false);
	const [hasError, setError] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: zodResolver(SignInSchema.passthrough()),
		defaultValues: {
			email: '',
		},
	});

	const onSubmit = async (data: any) => {
		try {
			await axios.post('/api/auth/sign-up', {
				email: data.email,
			});
			setSubmitted(true);
		} catch (e) {
			setError(true);
		}
	};

	return (
		<Container className="flex items-center justify-center min-h-680">
			<Stack className="flex flex-col gap-32 max-w-360 w-full">
				<Stack className="flex flex-col gap-16">
					<Heading size="md">
						Welcome to Event Valley, <br /> Create an account to continue.
					</Heading>

					<Stack>
						<Text>Already have an account?</Text>
						<Text>
							<Link href="/sign-in">Sign in.</Link>
						</Text>
					</Stack>
				</Stack>
				{hasError && <Stack>Something went wrong!</Stack>}

				{submitted ? (
					<Stack>
						<Text>We have sent you an email with the login instructions.</Text>
					</Stack>
				) : (
					<Stack>
						<form onSubmit={handleSubmit(onSubmit)} noValidate>
							<FormSection>
								<FormRow>
									<Label className={errors && errors.email ? 'text-red' : ''}>Email</Label>
									<Input
										className={errors && errors.email ? 'border-red text-red' : ''}
										type="email"
										{...register('email')}
									/>
									{errors && errors.email && <FieldError>{errors.email.message}</FieldError>}
								</FormRow>
								<Stack className="flex flex-col">
									<Button align="center">Sign Up</Button>
								</Stack>
							</FormSection>
						</form>
					</Stack>
				)}
			</Stack>
		</Container>
	);
};
