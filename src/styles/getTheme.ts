import { PaletteMode } from '@mui/material';
import { deepPurple, green } from '@mui/material/colors';
import { createTheme, PaletteOptions } from '@mui/material/styles';

const palette: PaletteOptions = {
	primary: {
		main: green[800],
	},
	secondary: {
		main: deepPurple[400],
	},
	parchisVariant1: {
		main: '#ec1c24',
	},
	parchisVariant2: {
		main: '#ef5a2a',
	},
	parchisVariant3: {
		main: '#f7941d',
	},
	parchisVariant4: {
		main: '#f8b31f',
	},
	parchisVariant5: {
		main: '#fcef0a',
	},
	parchisVariant6: {
		main: '#8cc63c',
	},
	parchisVariant7: {
		main: '#3ab549',
	},
	parchisVariant8: {
		main: '#29a89f',
	},
	parchisVariant9: {
		main: '#3cadf1',
	},
	parchisVariant10: {
		main: '#2c74be',
	},
	parchisVariant11: {
		main: '#662c90',
	},
	parchisVariant12: {
		main: '#922590',
	},
};

const basicTheme = createTheme();

// Create a theme instance.
const getTheme = (mode: PaletteMode) =>
	createTheme({
		palette: {
			...basicTheme.palette,
			...palette,
			mode,
		},
		typography: {
			fontFamily: ['Quicksand', 'Barlow'].join(', '),
		},
		components: {
			MuiButton: {
				styleOverrides: {
					root: {
						borderRadius: 100,
						textTransform: 'none',
					},
				},
			},
		},
	});

export default getTheme;
