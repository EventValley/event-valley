export type UserVerification = {
	email: string;
	verificationUrl: string;
};

export const userVerification = async ({ email, verificationUrl }: UserVerification) => {
	try {
		console.log('email, verificationUrl', email, verificationUrl);
		return;
	} catch (error) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		throw new Error('Error happened while sending email', error);
	}
};
