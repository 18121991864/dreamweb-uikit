import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { useMatchBreakpoints } from "../../hooks";
import { BaseButtonProps, PolymorphicComponent, variants } from "../Button/types";
import { ButtonMenuItemProps } from "./types";



interface InactiveButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps["as"];
  isMobile: boolean;
}
const InactiveButton: PolymorphicComponent<InactiveButtonProps, "button"> = styled(Button) <InactiveButtonProps>`
  background-color: transparent;
  color: ${({ theme, variant }) => (variant === variants.TAB_BUTTON ? theme.colors.contrast : theme.colors.textSubtle)};
  box-shadow: none;
  a{
    height: ${({isMobile}) => isMobile ?  '42px' : '32px' };
    text-align: center;
  }
 
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
`;

const ButtonMenuItem: PolymorphicComponent<ButtonMenuItemProps, "button"> = ({
  isActive = false,
  variant = variants.TAB_BUTTON,
  as,
  ...props
}: ButtonMenuItemProps) => {
  const { isSm, isXs, isLg, isMd,isXl } = useMatchBreakpoints();
  const isMobile = isXs || isSm || isLg || isMd ;
  if (!isActive) {
    return <InactiveButton isMobile={isMobile}  forwardedAs={as} variant={variant} {...props} />;
  }

  return <Button as={as} variant={variant} {...props} />;
};

export default ButtonMenuItem;
