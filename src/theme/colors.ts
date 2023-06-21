import { Colors } from "./types";

export const baseColors = {
  failure: "#FFFFFF",
  primary: "#FFFFFF",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  cardBorder: "#E7E3EB",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#FEF0F7",
  inputSecondary: "#d7caec",
  tertiary: "#FEF0F7",
  text: "#210216",
  textDisabled: "#BDC2C4",
  textSubtle: "#FFFFFF",
  borderColor: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
  },

  meta: '#BAA2B1',
  head: '#7E1D5E',
  buttonActive: '#FFC2E3',
  yellow: '#ECA947',
  cardHeading: '#520237'
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#100C18",
  backgroundDisabled: "#C2C2C2",
  backgroundAlt: "#213A6C",
  cardBorder: "#383241",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#344e85",
  text: "#E8E8E8",
  textDisabled: "#fff",
  textSubtle: "#FFFFFF",
  borderColor: "#6d727c",
  card: "#213A6C",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "#213A6C",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
  },

  meta: '#BAA2B1',
  head: '#FFFFFF',
  buttonActive: '#FFFFFF',
  yellow: '#ECA947',
  cardHeading: '#E8E8E8',
  tabButton: '#4E82D2'
};
