import LoadingContext from 'context/loading/LoadingContext';
import { Modules } from 'context/loading/LoadingModules';
import { useContext } from 'react';

export const useLoading = <Module extends keyof Modules>(module: Module) => {
	const { getLoadingState, isLoading, setLoading, modules } = useContext(LoadingContext);

	const loadingError = (type: string) =>
		console.error(`Loading context is not initialized yet on ${module} - ${type}`);

	const loadingState = getLoadingState ? getLoadingState(module) : loadingError('getter');

	const moduleLoading = !!Object.values(loadingState ?? {}).find((value) => !!value);

	const setLoadingModule = (key: keyof Modules[Module], value?: boolean) =>
		setLoading
			? setLoading(module)(key as any, value)
			: loadingError(`setter (${String(key)} - ${value})`);

	return {
		loading: moduleLoading,
		globalLoading: !!isLoading,
		globalLoadingState: modules,
		setLoading: setLoadingModule,
		loadingState: loadingState as Modules[Module],
	};
};
