import type { Palette, PaletteOptions } from '@mui/material/styles';
import type { ButtonProps } from '@mui/material/Button'

declare module '@mui/material/styles' {
  interface Palette {
    parchisVariant1: Palette['primary'];
    parchisVariant2: Palette['primary'];
    parchisVariant3: Palette['primary'];
    parchisVariant4: Palette['primary'];
    parchisVariant5: Palette['primary'];
    parchisVariant6: Palette['primary'];
    parchisVariant7: Palette['primary'];
    parchisVariant8: Palette['primary'];
    parchisVariant9: Palette['primary'];
    parchisVariant10: Palette['primary'];
    parchisVariant11: Palette['primary'];
    parchisVariant12: Palette['primary'];
  }

  interface PaletteOptions {
    parchisVariant1?: PaletteOptions['primary'];
    parchisVariant2?: PaletteOptions['primary'];
    parchisVariant3?: PaletteOptions['primary'];
    parchisVariant4?: PaletteOptions['primary'];
    parchisVariant5?: PaletteOptions['primary'];
    parchisVariant6?: PaletteOptions['primary'];
    parchisVariant7?: PaletteOptions['primary'];
    parchisVariant8?: PaletteOptions['primary'];
    parchisVariant9?: PaletteOptions['primary'];
    parchisVariant10?: PaletteOptions['primary'];
    parchisVariant11?: PaletteOptions['primary'];
    parchisVariant12?: PaletteOptions['primary'];
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
    'parchisVariant1' |
    'parchisVariant2' |
    'parchisVariant3' |
    'parchisVariant4' |
    'parchisVariant5' |
    'parchisVariant6' |
    'parchisVariant7' |
    'parchisVariant8' |
    'parchisVariant9' |
    'parchisVariant10' |
    'parchisVariant11' |
    'parchisVariant12'
  }
}
