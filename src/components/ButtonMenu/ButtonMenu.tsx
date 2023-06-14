import React, {cloneElement, Children, ReactElement} from "react";
import StyledButtonMenu from "./StyledButtonMenu";
import {scales, variants} from "../Button/types";
import {ButtonMenuProps} from "./types";
import { useMatchBreakpoints } from "../../hooks";

const ButtonMenu: React.FC<ButtonMenuProps> = ({
        activeIndex = 0,
        scale = scales.MD,
        variant = variants.PRIMARY,
        onItemClick,
        children,
        style
    }) => {
    const { isSm, isXs, isLg, isMd,isXl } = useMatchBreakpoints();
    const isMobile = isXs || isSm || isLg || isMd ;
    return (
        <StyledButtonMenu variant={variant}  isMobile={isMobile} style={style}>
            {Children.map(children, (child: ReactElement, index) => {
                return cloneElement(child, {
                    isActive: activeIndex === index,
                    onClick: onItemClick ? () => onItemClick(index) : undefined,
                    scale,
                    variant,
                });
            })}
        </StyledButtonMenu>
    );
};

export default ButtonMenu;
