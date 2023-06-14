import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import { HamburgerIcon, HamburgerCloseIcon, LogoIcon as LogoWithText } from "../icons";
import MenuButton from "./MenuButton";

interface Props {
    isPushed: boolean;
    isDark: boolean;
    togglePush: () => void;
    href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 156px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: flex;
    }
  }
`;

const StyledLogoBox = styled.div`
  align-items: center;
`;

const StyledLogo = styled.img`
  width: 220px;
`;

const StyledSpan = styled.span`
  font-size: 16px;
  color: #E8E8E8;
`;

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href }) => {
    const isAbsoluteUrl = href.startsWith("http");
    const isLand = window.location.href.indexOf("/land") !== -1;
    const innerLogo = (
        <>
            {/* <LogoIcon className="mobile-icon" /> */}
            <StyledLogoBox className="desktop-icon">
                <StyledLogo src={isLand ? "/images/land-logo.png" : "/images/logo.png"}/>
                {/* <StyledSpan>Amateras</StyledSpan> */}
            </StyledLogoBox>
        </>
    );

    return (
        <Flex>
            <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
                {isPushed ? (
                    <HamburgerCloseIcon width="40px" color="#fff" />
                ) : (
                    <HamburgerIcon width="40px" color="#fff" />
                )}
            </MenuButton>
            {isAbsoluteUrl ? (
                <StyledLink as="a" href={href} aria-label="AMT home page">
                    {innerLogo}
                </StyledLink>
            ) : (
                <StyledLink to={href} aria-label="AMT home page">
                    {innerLogo}
                </StyledLink>
            )}
        </Flex>
    );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);
