import { useState } from 'react';
export type UseLoadingState<Keys extends string> = { [Key in Keys]: boolean };

export const useLoading = <Keys extends string>(initialState: UseLoadingState<Keys>) => {
	const [loadingState, setLoadingState] = useState<UseLoadingState<Keys>>(initialState);

	const loading = Object.values<boolean>(loadingState).find((value) => value);

	const setLoading = (key: Keys, value?: boolean) => {
		setLoadingState((currentLoading) => ({ ...currentLoading, [key]: value }));
	};

	return {
		loading,
		setLoading,
		loadingState,
	};
};
