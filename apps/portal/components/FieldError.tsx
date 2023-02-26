import React, { FC } from 'react';

import { Text } from '@/components/Text';

type FieldErrorProps = {
	children: React.ReactNode;
};

export const FieldError: FC<FieldErrorProps> = ({ children }) => {
	return <Text className="text-red">{children}</Text>;
};
