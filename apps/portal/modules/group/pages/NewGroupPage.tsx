import { useForm } from 'react-hook-form';

import { FormRow } from '@/components/FormRow';
import { FormSection } from '@/components/FormSection';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import { Textarea } from '@/components/Textarea';

export const NewGroupPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<section className="max-w-722 mx-auto">
			<h1 className="text-32 leading-40 font-700 mb-24">Create new group</h1>

			<form className="flex flex-col gap-48" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
				<FormSection>
					<fieldset className="flex flex-col gap-24">
						<FormRow>
							<Label htmlFor="name">Name</Label>
							<Input id="name" {...register('name')} />
						</FormRow>

						<FormRow>
							<Label htmlFor="description">Description</Label>
							<Textarea id="description" {...register('description')} />
						</FormRow>

						{/*

						<FormRow>
							<Label htmlFor="">Logo</Label>
							<InputItem type="text" />
						</FormRow>

						<FormRow>
							<Label htmlFor="">Banner</Label>
							<InputItem type="text" />
						</FormRow>*/}
					</fieldset>
				</FormSection>

				<FormSection>
					<FormRow>
						<Label htmlFor="">Postal Code</Label>
						<Input {...register('postalCode')} />
					</FormRow>
					<FormRow direction="row">
						<FormRow>
							<Label htmlFor="">Country</Label>
							<Input {...register('country')} />
						</FormRow>
						<FormRow>
							<Label htmlFor="">Region</Label>
							<Input {...register('region')} />
						</FormRow>
					</FormRow>
					<FormRow>
						<Label htmlFor="">City</Label>
						<Input {...register('city')} />
					</FormRow>
					<FormRow direction="row">
						<FormRow>
							<Label htmlFor="">Street Address 1</Label>
							<Input {...register('streetAddress1')} />
						</FormRow>
						<FormRow>
							<Label htmlFor="">Street Address 2</Label>
							<Input {...register('streetAddress2')} />
						</FormRow>
					</FormRow>
				</FormSection>

				<div className="flex items-center gap-24">
					<button className="btn btn-primary">Save</button>
					<button className="btn btn-primary">Cancel</button>
				</div>
			</form>
		</section>
	);
};
