import { Theme } from "@react-navigation/native";

export const NAV_THEME = {
  light: {
    background: "hsl(0 0% 100%)", // background
    border: "hsl(220 13% 91%)", // border
    card: "hsl(0 0% 100%)", // card
    notification: "hsl(0 84.2% 60.2%)", // destructive
    primary: "hsl(262.1 83.3% 57.8%)", // primary
    text: "hsl(224 71.4% 4.1%)", // foreground
  },
  dark: {
    background: "hsl(224 71.4% 4.1%)", // background
    border: "hsl(217.2 32.6% 17.5%)", // border
    card: "hsl(224 71.4% 4.1%)", // card
    notification: "hsl(0 62.8% 30.6%)", // destructive
    primary: "hsl(263.4 70% 50.4%)", // primary
    text: "hsl(210 20% 98%)", // foreground
  },
};

const fontStyle = {
  fontFamily: "Arial",
  fontWeight: "normal" as
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900",
};

const fonts = {
  regular: fontStyle,
  medium: fontStyle,
  bold: fontStyle,
  heavy: fontStyle,
};

export const LIGHT_THEME: Theme = {
  dark: false,
  colors: NAV_THEME.light,
  fonts,
};

export const DARK_THEME: Theme = {
  dark: true,
  colors: NAV_THEME.dark,
  fonts,
};
