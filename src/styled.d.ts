// import original module declarations
import 'styled-components';

export interface ColorChart {
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

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string;
    monoFontFamily: string;
    colors: {
      gray: ColorChart;
      green: ColorChart;
      yellow: ColorChart;
    };
  }
}
