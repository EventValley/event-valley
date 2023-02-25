import Cookies from 'js-cookie';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { useUserQuery } from '../../../lib/graphql/graphql';

export type AuthContextType = {
	data: {
		loading: boolean;
		isAuthenticated: boolean;
		user: any;
	};
};

export const AuthContext = createContext<AuthContextType>({
	data: { loading: true, isAuthenticated: false, user: null },
});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
	const [data, setData] = useState<AuthContextType['data']>({
		loading: true,
		isAuthenticated: false,
		user: null,
	});
	const { loading, error, data: userData } = useUserQuery({ skip: !Cookies.get('ev') });

	useEffect(() => {
		if (!loading && !error) {
			setData({
				loading: false,
				isAuthenticated: !!userData?.user,
				user: userData?.user,
			});

			console.log('error', error);
		}
	}, [loading, userData, error]);

	return <AuthContext.Provider value={{ data }}>{children}</AuthContext.Provider>;
};
