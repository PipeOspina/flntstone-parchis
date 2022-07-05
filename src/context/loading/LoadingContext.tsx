import { BaseProviderProps } from 'context/props';
import { createContext, FC, useCallback, useMemo, useState } from 'react';

import { initialModules, Modules } from './LoadingModules';

export interface LoadingContextState {
	isLoading?: boolean;
	getLoadingState?: <Module extends keyof Modules>(module: Module) => Modules[Module];
	setLoading?: <Module extends keyof Modules>(
		module: Module,
	) => (key: keyof Modules[Module], value?: boolean) => void;
	modules?: Modules;
}

const LoadingContext = createContext<LoadingContextState>({});

export const LoadingProvider: FC<BaseProviderProps> = ({ children }) => {
	const [modules, setModules] = useState<Modules>(initialModules);

	const isLoading = useMemo(
		() =>
			!!Object.values(modules).find(
				(module) => !!Object.values(module).find((key) => !!key),
			),
		[modules],
	);

	const getLoadingState = useCallback(
		(module: keyof Modules) => modules[module],
		[modules],
	);

	const setLoading =
		<Module extends keyof Modules>(module: Module) =>
		(key: keyof Modules[Module], value?: boolean) => {
			setModules((modules) => ({
				...modules,
				[module]: { ...modules[module], [key]: value ?? true },
			}));
		};

	const dataValue = {
		isLoading,
		getLoadingState: getLoadingState as any,
		setLoading,
		modules,
	};

	return <LoadingContext.Provider value={dataValue}>{children}</LoadingContext.Provider>;
};

export default LoadingContext;
