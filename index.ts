import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const themeName = 'Generated';
const colors = {
  black: '#011627',
  white: '#BDC1C6',
  blue: '#82AAFF',
  red: '#FC514E',
  green: '#A1CD5E',
  yellow: '#E3D18A'
}

const colorSet: IColorSet = {
  base: {
    background: colors.black,
    foreground: colors.white,
    color1: colors.red,
    color2: colors.green,
    color3: colors.yellow,
    color4: colors.blue
  }
};

generateTheme(themeName, colorSet, path.join(__dirname, 'theme.json'));
