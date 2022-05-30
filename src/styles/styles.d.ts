import type {
	Palette as MUIPalette,
	PaletteOptions as MUIPaletteOptions,
} from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		parchisVariant1: MUIPalette['primary'];
		parchisVariant2: MUIPalette['primary'];
		parchisVariant3: MUIPalette['primary'];
		parchisVariant4: MUIPalette['primary'];
		parchisVariant5: MUIPalette['primary'];
		parchisVariant6: MUIPalette['primary'];
		parchisVariant7: MUIPalette['primary'];
		parchisVariant8: MUIPalette['primary'];
		parchisVariant9: MUIPalette['primary'];
		parchisVariant10: MUIPalette['primary'];
		parchisVariant11: MUIPalette['primary'];
		parchisVariant12: MUIPalette['primary'];
	}

	interface PaletteOptions {
		parchisVariant1?: MUIPaletteOptions['primary'];
		parchisVariant2?: MUIPaletteOptions['primary'];
		parchisVariant3?: MUIPaletteOptions['primary'];
		parchisVariant4?: MUIPaletteOptions['primary'];
		parchisVariant5?: MUIPaletteOptions['primary'];
		parchisVariant6?: MUIPaletteOptions['primary'];
		parchisVariant7?: MUIPaletteOptions['primary'];
		parchisVariant8?: MUIPaletteOptions['primary'];
		parchisVariant9?: MUIPaletteOptions['primary'];
		parchisVariant10?: MUIPaletteOptions['primary'];
		parchisVariant11?: MUIPaletteOptions['primary'];
		parchisVariant12?: MUIPaletteOptions['primary'];
	}
}

declare module '@mui/material/Button' {
	interface ButtonPropsColorOverrides {
		parchisVariant1?: true;
		parchisVariant2?: true;
		parchisVariant3?: true;
		parchisVariant4?: true;
		parchisVariant5?: true;
		parchisVariant6?: true;
		parchisVariant7?: true;
		parchisVariant8?: true;
		parchisVariant9?: true;
		parchisVariant10?: true;
		parchisVariant11?: true;
		parchisVariant12?: true;
	}
}

declare module '@mui/material/Chip' {
	interface ChipPropsColorOverrides {
		parchisVariant1?: true;
		parchisVariant2?: true;
		parchisVariant3?: true;
		parchisVariant4?: true;
		parchisVariant5?: true;
		parchisVariant6?: true;
		parchisVariant7?: true;
		parchisVariant8?: true;
		parchisVariant9?: true;
		parchisVariant10?: true;
		parchisVariant11?: true;
		parchisVariant12?: true;
	}
}

declare module '@mui/material/Typography' {
	interface TypographyProps {
		color?:
			| 'parchisVariant1'
			| 'parchisVariant2'
			| 'parchisVariant3'
			| 'parchisVariant4'
			| 'parchisVariant5'
			| 'parchisVariant6'
			| 'parchisVariant7'
			| 'parchisVariant8'
			| 'parchisVariant9'
			| 'parchisVariant10'
			| 'parchisVariant11'
			| 'parchisVariant12';
	}
}
