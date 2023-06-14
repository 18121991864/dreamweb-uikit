import styled, { DefaultTheme } from "styled-components";
import { Variant, variants } from "../Button/types";

type StyledButtonMenuProps = {
  variant: Variant;
  theme: DefaultTheme;
  isMobile: boolean;
};

const getBackgroundColor = ({ theme, variant }: StyledButtonMenuProps) => {
  return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};

const StyledButtonMenu = styled.div<{ variant: Variant , isMobile: boolean}>`
  background-color: ${getBackgroundColor};
  border-radius: ${({isMobile}) => isMobile ?  '24px' : '16px' };
  display: inline-flex;

  a{
    height: ${({isMobile}) => isMobile ?  '42px' : '32px' };
    text-align: center;
    // margin-left: 2px; // To avoid focus shadow overlap
  }
`;

export default StyledButtonMenu;
