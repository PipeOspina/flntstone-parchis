import {
	CssBaseline,
	PaletteMode,
	ThemeProvider as MUIThemeProvider,
	useMediaQuery,
} from '@mui/material';
import { Theme } from '@mui/system';
import { BaseProviderProps } from 'context/props';
import { createContext, FC, useCallback, useMemo, useState } from 'react';
import getTheme from 'styles/getTheme';

export interface ThemeContextState {
	theme?: Theme;
	changeThemeMode?: (mode: AppThemeMode) => void;
	appThemeMode?: AppThemeMode;
	mode?: PaletteMode;
}

const ThemeContext = createContext<ThemeContextState>({});

export type AppThemeMode = PaletteMode | 'system';

export const ThemeProvider: FC<BaseProviderProps> = ({ children }) => {
	const [mode, setMode] = useState<AppThemeMode>('system');

	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
	const systemMode: PaletteMode = prefersDarkMode ? 'dark' : 'light';

	const userMode = useMemo(
		() => (mode === 'system' ? systemMode : mode),
		[mode, systemMode],
	);

	const theme = useMemo(() => getTheme(userMode), [prefersDarkMode]);

	const changeThemeMode = useCallback((newMode: AppThemeMode) => {
		setMode(newMode);
	}, []);

	const data: ThemeContextState = {
		theme,
		changeThemeMode,
		appThemeMode: mode,
		mode: userMode,
	};

	return (
		<ThemeContext.Provider value={data}>
			<MUIThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</MUIThemeProvider>
		</ThemeContext.Provider>
	);
};

export default ThemeContext;
