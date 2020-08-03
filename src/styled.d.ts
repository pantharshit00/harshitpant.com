// import original module declarations
import 'styled-components';

export interface IColorChart {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string;
    monoFontFamily: string;
    colors: {
      gray: IColorChart;
      green: IColorChart;
      yellow: IColorChart;
      blue: IColorChart;
    };
  }
}
