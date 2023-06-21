import React, { isValidElement, cloneElement, Children, useState, useEffect, useCallback, useRef, useMemo, useReducer, createContext, useContext } from 'react';
import styled, { keyframes, css, useTheme, ThemeProvider, createGlobalStyle } from 'styled-components';
import { space, typography, layout, variant as variant$1, background, border, position, flexbox, color } from 'styled-system';
import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import debounce from 'lodash/debounce';
import { usePopper } from 'react-popper';
import noop from 'lodash/noop';
import throttle from 'lodash/throttle';
import { Link as Link$1, NavLink, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get(theme, path, fallback);
}; };

var rotate$1 = keyframes(templateObject_1$W || (templateObject_1$W = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = css(templateObject_2$o || (templateObject_2$o = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate$1);
var Svg = styled.svg(templateObject_3$c || (templateObject_3$c = __makeTemplateObject(["\n  align-self: center; // Safari fix\n  fill: ", ";\n  flex-shrink: 0;\n  ", "\n  ", "\n"], ["\n  align-self: center; // Safari fix\n  fill: ", ";\n  flex-shrink: 0;\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors.".concat(color), color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1$W, templateObject_2$o, templateObject_3$c;

var Icon$1D = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1C = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$1B = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$1A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors.".concat(color), color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled.div(templateObject_1$V || (templateObject_1$V = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: ".concat(textTransform, ";");
}, space, typography, layout);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$V;

var TooltipText = styled(Text)(templateObject_1$U || (templateObject_1$U = __makeTemplateObject(["\n  text-decoration: ", ";\n  text-underline-offset: 0.1em;\n"], ["\n  text-decoration: ", ";\n  text-underline-offset: 0.1em;\n"])), function (_a) {
    var theme = _a.theme;
    return "underline dotted ".concat(theme.colors.textSubtle);
});
var templateObject_1$U;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var scales$8 = {
    MD: "md",
    SM: "sm",
    XS: "xs",
};
var variants$3 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
    BUTTON_ACTIVE: "buttonActive",
    TAB_BUTTON: "tabButton"
};

var _a$4, _b$2;
var scaleVariants$1 = (_a$4 = {},
    _a$4[scales$8.MD] = {
        height: "48px",
        padding: "0 24px",
    },
    _a$4[scales$8.SM] = {
        height: "32px",
        padding: "0 16px",
    },
    _a$4[scales$8.XS] = {
        height: "20px",
        fontSize: "12px",
        padding: "0 8px",
    },
    _a$4);
var styleVariants$2 = (_b$2 = {},
    _b$2[variants$3.PRIMARY] = {
        backgroundColor: "primary",
        color: "white",
    },
    _b$2[variants$3.SECONDARY] = {
        backgroundColor: "transparent",
        border: "2px solid",
        borderColor: "primary",
        boxShadow: "none",
        color: "primary",
        ":disabled": {
            backgroundColor: "transparent",
        },
    },
    _b$2[variants$3.TERTIARY] = {
        backgroundColor: "tertiary",
        boxShadow: "none",
        color: "primary",
    },
    _b$2[variants$3.SUBTLE] = {
        backgroundColor: "textSubtle",
        color: "white",
    },
    _b$2[variants$3.DANGER] = {
        backgroundColor: "failure",
        color: "white",
    },
    _b$2[variants$3.SUCCESS] = {
        backgroundColor: "success",
        color: "white",
    },
    _b$2[variants$3.TEXT] = {
        backgroundColor: "transparent",
        color: "primary",
        boxShadow: "none",
    },
    _b$2[variants$3.BUTTON_ACTIVE] = {
        backgroundColor: "buttonActive",
        color: "text",
        boxShadow: "none",
    },
    _b$2[variants$3.TAB_BUTTON] = {
        backgroundColor: "tabButton",
        color: "white",
        boxShadow: "none",
    },
    _b$2);

var getDisabledStyles = function (_a) {
    var $isLoading = _a.$isLoading, theme = _a.theme;
    if ($isLoading === true) {
        return "\n      &:disabled,\n      &.pancake-button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.pancake-button--disabled {\n      background-color: ".concat(theme.colors.backgroundDisabled, ";\n      border-color: ").concat(theme.colors.backgroundDisabled, ";\n      box-shadow: none;\n      // color: ").concat(theme.colors.textDisabled, ";\n      color: #878787;\n      cursor: not-allowed;\n    }\n  ");
};
/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */
var getOpacity = function (_a) {
    var _b = _a.$isLoading, $isLoading = _b === void 0 ? false : _b;
    return $isLoading ? ".5" : "1";
};
var StyledButton = styled.button(templateObject_1$T || (templateObject_1$T = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  border-radius: 20px;\n  // box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 14px;\n  // font-size: 16px;\n  // font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n    box-shadow: none;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  border: 0;\n  border-radius: 20px;\n  // box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 14px;\n  // font-size: 16px;\n  // font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n    box-shadow: none;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), getOpacity, getDisabledStyles, variant$1({
    prop: "scale",
    variants: scaleVariants$1,
}), variant$1({
    variants: styleVariants$2,
}), layout, space);
var templateObject_1$T;

var Button = function (props) {
    var startIcon = props.startIcon, endIcon = props.endIcon, external = props.external, className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    var classNames = className ? [className] : [];
    if (isLoading) {
        classNames.push("pancake-button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("pancake-button--disabled");
    }
    return (React.createElement(StyledButton, __assign({ "$isLoading": isLoading, className: classNames.join(" "), disabled: isDisabled }, internalProps, rest),
        React.createElement(React.Fragment, null,
            isValidElement(startIcon) &&
                cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            children,
            isValidElement(endIcon) &&
                cloneElement(endIcon, {
                    ml: "0.5rem",
                }))));
};
Button.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants$3.PRIMARY,
    scale: scales$8.MD,
    disabled: false,
};

var IconButton = styled(Button)(templateObject_1$S || (templateObject_1$S = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return (scale === "sm" ? "32px" : "48px");
});
var templateObject_1$S;

var Icon$1z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$1y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$1x = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$1w = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$1v = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$1u = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" })));
};

var Icon$1t = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z" })));
};

var Icon$1s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$1r = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React.createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$1q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("path", { d: "M58.6666 34.1665C58.6666 48.8523 46.7275 59.6665 31.9999 59.6665C17.2723 59.6665 5.33325 48.8523 5.33325 34.1665C5.33325 19.4808 17.2723 8.6665 31.9999 8.6665C46.7275 8.6665 58.6666 19.4808 58.6666 34.1665Z", fill: "#EB8C00" }),
        React.createElement("path", { d: "M58.6666 29.8335C58.6666 44.5192 46.7275 55.3335 31.9999 55.3335C17.2723 55.3335 5.33325 44.5192 5.33325 29.8335C5.33325 15.1477 17.2723 4.3335 31.9999 4.3335C46.7275 4.3335 58.6666 15.1477 58.6666 29.8335Z", fill: "#FFD800" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M50.4313 11.0848C48.0923 9.01961 45.3538 7.36511 42.3351 6.21094L7.60376 40.5648C8.9535 43.3887 10.8247 45.9001 13.0998 48.0105L50.4313 11.0848ZM24.6139 54.2485C22.7419 53.762 20.9537 53.0928 19.2734 52.259L55.1875 16.7354C56.1366 18.2849 56.918 19.9495 57.5084 21.7116L24.6139 54.2485Z", fill: "#FFE971" }),
        React.createElement("path", { d: "M53.6667 29.5002C53.6667 41.2698 44.0409 49.6668 32.1667 49.6668C20.2926 49.6668 10.6667 41.2698 10.6667 29.5002C10.6667 17.7305 20.2926 9.3335 32.1667 9.3335C44.0409 9.3335 53.6667 17.7305 53.6667 29.5002Z", fill: "#FFC700" }),
        React.createElement("path", { d: "M51.6667 20.6615C45.1982 12.2514 33.2898 9.7153 23.8129 15.1469C14.5027 20.483 10.7276 31.6814 14.4875 41.3335C12.0783 38.0902 10.6667 34.0691 10.6667 29.5527C10.6667 17.7524 20.303 9.3335 32.19 9.3335C40.7965 9.33349 48.2231 13.7468 51.6667 20.6615Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M23.4077 30.5L19.8827 34.0117L16.3333 30.5L19.8827 26.9883L23.4077 30.5ZM31.9999 21.9992L38.0708 28.0055L41.6202 24.4938L35.5494 18.5117L31.9999 15L28.4504 18.5117L22.4041 24.4938L25.9536 28.0055L31.9999 21.9992ZM44.1171 26.9883L40.5921 30.5L44.1416 34.0117L47.6666 30.5L44.1171 26.9883ZM31.9999 39.0008L25.9291 32.9945L22.4041 36.5063L28.4749 42.5125L31.9999 46L35.5494 42.4883L41.6202 36.482L38.0708 32.9945L31.9999 39.0008ZM31.9999 34.0117L35.5494 30.5L31.9999 26.9883L28.4504 30.5L31.9999 34.0117Z", fill: "#191326" })));
};

var Icon$1p = function (props) {
    var id = uniqueId("svg");
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("g", { clipPath: "url(#".concat(id, ")") },
            React.createElement("rect", { width: "32", height: "40", rx: "5.33333", transform: "matrix(-0.866025 -0.5 -0.5 0.866025 65.6667 24.29)", fill: "#7645D9" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M47.988 26.8647C48.913 25.2625 50.9618 24.7135 52.5641 25.6386C54.3798 26.6868 54.7973 29.1264 53.4335 30.7188L49.9995 34.7284C51.4808 37.0281 52.089 39.7267 50.7938 41.97C49.6296 43.9866 47.3505 44.856 44.9724 44.9153C42.5675 44.9753 39.8188 44.2341 37.2483 42.7501C34.6778 41.266 32.6615 39.2561 31.5111 37.1434C30.3734 35.0542 29.9868 32.6458 31.1511 30.6292C32.4387 28.3989 35.0576 27.5731 37.7711 27.694L39.534 22.694C40.2312 20.7167 42.5527 19.8585 44.3684 20.9068C45.9706 21.8318 46.5196 23.8807 45.5945 25.4829L43.4518 29.1943C43.8691 29.3931 44.2848 29.6114 44.6966 29.8492C45.0944 30.0788 45.4782 30.3206 45.847 30.573L47.988 26.8647ZM39.6099 34.0874C39.0216 35.1064 37.9767 35.6046 37.2761 35.2001C36.5755 34.7956 36.4845 33.6416 37.0728 32.6226C37.6612 31.6035 38.7061 31.1053 39.4067 31.5098C40.1073 31.9143 40.1982 33.0683 39.6099 34.0874ZM43.9649 39.0619C44.6655 39.4663 45.7104 38.9681 46.2987 37.9491C46.8871 36.93 46.7961 35.776 46.0955 35.3715C45.3949 34.9671 44.35 35.4653 43.7616 36.4843C43.1733 37.5034 43.2643 38.6574 43.9649 39.0619Z", fill: "#523193" }),
            React.createElement("path", { opacity: "0.7", d: "M49.6666 15.0524L42.5726 10.9566C40.0217 9.48387 36.7599 10.3579 35.2871 12.9088L20.6205 38.3122C19.1477 40.8631 20.0217 44.1249 22.5726 45.5976L26.7339 48.0002L44.3333 48.0002C47.2788 48.0002 49.6666 45.6124 49.6666 42.6668L49.6666 15.0524Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M33.7371 52.0434L43.094 46.6412C45.6449 45.1684 46.5189 41.9066 45.0461 39.3557L32.532 17.6807L20.6205 38.3121C19.1477 40.863 20.0217 44.1249 22.5726 45.5976L33.7371 52.0434Z", fill: "#452A7A" }),
            React.createElement("rect", { x: "16", y: "6.3335", width: "32", height: "40", rx: "5.33333", fill: "#9A6AFF" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.3938 16.122C33.3938 14.113 35.0224 12.4844 37.0314 12.4844C39.3079 12.4844 41.0251 14.5519 40.6071 16.7897L39.5548 22.4247C42.1963 23.783 44.2335 25.9905 44.2335 28.8033C44.2335 31.3318 42.5623 33.3867 40.3582 34.7336C38.1293 36.0958 35.142 36.8911 31.919 36.8911C28.696 36.8911 25.7087 36.0958 23.4798 34.7336C21.2757 33.3867 19.6045 31.3318 19.6045 28.8033C19.6045 26.0068 21.6189 23.8083 24.2362 22.4489L23.1794 16.7898C22.7615 14.5519 24.4786 12.4844 26.7552 12.4844C28.7642 12.4844 30.3928 14.113 30.3928 16.122L30.3928 20.7755C30.8932 20.7359 31.4026 20.7155 31.919 20.7155C32.4177 20.7155 32.9099 20.7345 33.3938 20.7715V16.122ZM29.4367 27.4631C29.4367 28.7408 28.7246 29.7766 27.8461 29.7766C26.9677 29.7766 26.2556 28.7408 26.2556 27.4631C26.2556 26.1854 26.9677 25.1496 27.8461 25.1496C28.7246 25.1496 29.4367 26.1854 29.4367 27.4631ZM36.233 29.7763C37.1115 29.7763 37.8236 28.7405 37.8236 27.4627C37.8236 26.185 37.1115 25.1492 36.233 25.1492C35.3546 25.1492 34.6425 26.185 34.6425 27.4627C34.6425 28.7405 35.3546 29.7763 36.233 29.7763Z", fill: "#7645D9" }),
            React.createElement("path", { opacity: "0.7", d: "M21.3333 46.3334C18.3878 46.3334 16 43.9456 16 41.0001L16 15.2882L23.4272 11.0001C25.9781 9.52733 29.24 10.4013 30.7127 12.9522L45.3794 38.3556C46.8521 40.9065 45.9781 44.1684 43.4273 45.6411L42.2282 46.3334H21.3333Z", fill: "#7645D9" }),
            React.createElement("rect", { x: "-1.66675", y: "24.29", width: "32", height: "40", rx: "5.33333", transform: "rotate(-30 -1.66675 24.29)", fill: "#CAB3F8" }),
            React.createElement("path", { opacity: "0.7", fillRule: "evenodd", clipRule: "evenodd", d: "M19.5708 25.8631C18.6224 24.2205 19.1853 22.12 20.828 21.1715C22.6894 20.0968 25.0695 20.9767 25.7842 23.0038L27.584 28.1082C30.3851 27.9718 33.0929 28.8151 34.4208 31.1151C35.6144 33.1825 35.218 35.6517 34.0517 37.7935C32.8722 39.9595 30.805 42.0202 28.1697 43.5417C25.5344 45.0632 22.7162 45.8231 20.2507 45.7615C17.8126 45.7007 15.476 44.8094 14.2824 42.7419C12.9623 40.4553 13.5715 37.7068 15.0698 35.3595L11.5341 31.2312C10.136 29.5986 10.564 27.0975 12.4255 26.0228C14.0681 25.0743 16.1686 25.6372 17.1171 27.2799L19.3139 31.0849C19.7043 30.8162 20.1112 30.5591 20.5335 30.3153C20.9413 30.0799 21.3527 29.8631 21.7658 29.6649L19.5708 25.8631ZM21.6892 37.0043C22.2924 38.049 22.1991 39.2322 21.4809 39.6469C20.7626 40.0615 19.6913 39.5508 19.0881 38.506C18.485 37.4613 18.5782 36.2781 19.2965 35.8634C20.0148 35.4487 21.086 35.9595 21.6892 37.0043ZM28.3382 35.6877C29.0564 35.273 29.1497 34.0898 28.5465 33.0451C27.9433 32.0003 26.8721 31.4896 26.1538 31.9043C25.4355 32.3189 25.3422 33.5021 25.9454 34.5468C26.5486 35.5916 27.6199 36.1024 28.3382 35.6877Z", fill: "#9A6AFF" }),
            React.createElement("g", { opacity: "0.1" },
                React.createElement("path", { d: "M13.0716 49.8608L8.23887 41.4903L26.0423 10.6538C27.1289 11.0794 28.0839 11.8629 28.7127 12.952L31.5468 17.8608L13.0716 49.8608Z", fill: "white" }),
                React.createElement("path", { d: "M30.936 51.698L26.3172 54.3647L39.4698 31.5838L41.0094 34.2505L30.936 51.698Z", fill: "white" }),
                React.createElement("path", { d: "M24.0449 10.2847L7.1336 39.5759L5.59399 36.9092L20.1155 11.7572L21.4272 10.9999C22.2535 10.5229 23.1544 10.292 24.0449 10.2847Z", fill: "white" }))),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: id },
                React.createElement("rect", { width: "64", height: "64", fill: "white" })))));
};

var Icon$1o = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React.createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React.createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React.createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React.createElement("g", { mask: "url(#mask0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React.createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React.createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$1n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.0967 17.8521L7.87565 20.2891C6.91907 20.8414 5.69589 20.5136 5.1436 19.557L0.999729 12.3796C0.447444 11.4231 0.775193 10.1999 1.73178 9.64759L6.31754 7C6.53486 6.87453 6.76593 6.79448 6.99977 6.75691V6C6.99977 4.89543 7.8952 4 8.99977 4H14.9998C16.1043 4 16.9998 4.89543 16.9998 6V6.73545C17.299 6.75379 17.5986 6.83993 17.8759 7L22.4616 9.64759C23.4182 10.1999 23.746 11.4231 23.1937 12.3796L19.0498 19.557C18.4975 20.5136 17.2743 20.8414 16.3178 20.2891L12.0967 17.8521ZM8.99977 6L14.9998 6L14.9998 7.98154L11.2363 14.5H8.99977L8.99977 6ZM6.99977 14.5L6.99977 8.91551L2.73178 11.3796L6.87565 18.557L10.4386 16.5H8.99977C7.8952 16.5 6.99977 15.6046 6.99977 14.5ZM16.8759 8.73205L21.4616 11.3796L17.3178 18.557L12.732 15.9094L16.8759 8.73205Z" })));
};

var Icon$1m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4Z", fill: "#E4C9DB" }),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M1.75 2.84931C1.75 2.27723 2.27723 1.75 2.84931 1.75H8.15068C8.72277 1.75 9.25 2.27723 9.25 2.84931V8.15068C9.25 8.72277 8.72277 9.25 8.15068 9.25H2.84931C2.27723 9.25 1.75 8.72277 1.75 8.15068V2.84931ZM2.84931 0.25C1.4488 0.25 0.25 1.4488 0.25 2.84931V8.15068C0.25 9.5512 1.4488 10.75 2.84931 10.75H8.15068C9.5512 10.75 10.75 9.5512 10.75 8.15068V2.84931C10.75 1.4488 9.5512 0.25 8.15068 0.25H2.84931ZM14.75 2.84931C14.75 2.27723 15.2772 1.75 15.8493 1.75H21.1507C21.7228 1.75 22.25 2.27723 22.25 2.84931V8.15068C22.25 8.72277 21.7228 9.25 21.1507 9.25H15.8493C15.2772 9.25 14.75 8.72277 14.75 8.15068V2.84931ZM15.8493 0.25C14.4488 0.25 13.25 1.4488 13.25 2.84931V8.15068C13.25 9.5512 14.4488 10.75 15.8493 10.75H21.1507C22.5512 10.75 23.75 9.5512 23.75 8.15068V2.84931C23.75 1.4488 22.5512 0.25 21.1507 0.25H15.8493ZM2.84931 14.75C2.27723 14.75 1.75 15.2772 1.75 15.8493V21.1507C1.75 21.7228 2.27723 22.25 2.84931 22.25H8.15068C8.72277 22.25 9.25 21.7228 9.25 21.1507V15.8493C9.25 15.2772 8.72277 14.75 8.15068 14.75H2.84931ZM0.25 15.8493C0.25 14.4488 1.4488 13.25 2.84931 13.25H8.15068C9.5512 13.25 10.75 14.4488 10.75 15.8493V21.1507C10.75 22.5512 9.5512 23.75 8.15068 23.75H2.84931C1.4488 23.75 0.25 22.5512 0.25 21.1507V15.8493ZM14.75 15.8493C14.75 15.2772 15.2772 14.75 15.8493 14.75H21.1507C21.7228 14.75 22.25 15.2772 22.25 15.8493V21.1507C22.25 21.7228 21.7228 22.25 21.1507 22.25H15.8493C15.2772 22.25 14.75 21.7228 14.75 21.1507V15.8493ZM15.8493 13.25C14.4488 13.25 13.25 14.4488 13.25 15.8493V21.1507C13.25 22.5512 14.4488 23.75 15.8493 23.75H21.1507C22.5512 23.75 23.75 22.5512 23.75 21.1507V15.8493C23.75 14.4488 22.5512 13.25 21.1507 13.25H15.8493Z", fill: "#A77E99" })));
};

var Icon$1l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4Z", fill: "#A77E99" }),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M1.75 2.84931C1.75 2.27723 2.27723 1.75 2.84931 1.75H8.15068C8.72277 1.75 9.25 2.27723 9.25 2.84931V8.15068C9.25 8.72277 8.72277 9.25 8.15068 9.25H2.84931C2.27723 9.25 1.75 8.72277 1.75 8.15068V2.84931ZM2.84931 0.25C1.4488 0.25 0.25 1.4488 0.25 2.84931V8.15068C0.25 9.5512 1.4488 10.75 2.84931 10.75H8.15068C9.5512 10.75 10.75 9.5512 10.75 8.15068V2.84931C10.75 1.4488 9.5512 0.25 8.15068 0.25H2.84931ZM14.75 2.84931C14.75 2.27723 15.2772 1.75 15.8493 1.75H21.1507C21.7228 1.75 22.25 2.27723 22.25 2.84931V8.15068C22.25 8.72277 21.7228 9.25 21.1507 9.25H15.8493C15.2772 9.25 14.75 8.72277 14.75 8.15068V2.84931ZM15.8493 0.25C14.4488 0.25 13.25 1.4488 13.25 2.84931V8.15068C13.25 9.5512 14.4488 10.75 15.8493 10.75H21.1507C22.5512 10.75 23.75 9.5512 23.75 8.15068V2.84931C23.75 1.4488 22.5512 0.25 21.1507 0.25H15.8493ZM2.84931 14.75C2.27723 14.75 1.75 15.2772 1.75 15.8493V21.1507C1.75 21.7228 2.27723 22.25 2.84931 22.25H8.15068C8.72277 22.25 9.25 21.7228 9.25 21.1507V15.8493C9.25 15.2772 8.72277 14.75 8.15068 14.75H2.84931ZM0.25 15.8493C0.25 14.4488 1.4488 13.25 2.84931 13.25H8.15068C9.5512 13.25 10.75 14.4488 10.75 15.8493V21.1507C10.75 22.5512 9.5512 23.75 8.15068 23.75H2.84931C1.4488 23.75 0.25 22.5512 0.25 21.1507V15.8493ZM14.75 15.8493C14.75 15.2772 15.2772 14.75 15.8493 14.75H21.1507C21.7228 14.75 22.25 15.2772 22.25 15.8493V21.1507C22.25 21.7228 21.7228 22.25 21.1507 22.25H15.8493C15.2772 22.25 14.75 21.7228 14.75 21.1507V15.8493ZM15.8493 13.25C14.4488 13.25 13.25 14.4488 13.25 15.8493V21.1507C13.25 22.5512 14.4488 23.75 15.8493 23.75H21.1507C22.5512 23.75 23.75 22.5512 23.75 21.1507V15.8493C23.75 14.4488 22.5512 13.25 21.1507 13.25H15.8493Z", fill: "#520237" })));
};

var Icon$1k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M3 4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V14C15 14.5523 14.5523 15 14 15H4C3.44772 15 3 14.5523 3 14V4Z", fill: "#E0DCDE" }),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M17 2C17 1.5 16.6 1 16 1H9.5V17H16C16.5 17 17 16.6 17 16V2ZM8.5 17V9.5H1V16C1 16.5 1.4 17 2 17H8.5ZM1 8.5V2C1 1.4 1.5 1 2 1H8.5V8.5H1ZM2 0H16C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0ZM1.5 4.6001C1.5 4.32396 1.72386 4.1001 2 4.1001H4.09998V2.1001C4.09998 1.82396 4.32383 1.6001 4.59998 1.6001C4.87612 1.6001 5.09998 1.82396 5.09998 2.1001V4.1001H7.1C7.37614 4.1001 7.6 4.32396 7.6 4.6001C7.6 4.87624 7.37614 5.1001 7.1 5.1001H5.09998V7.1001C5.09998 7.37624 4.87612 7.6001 4.59998 7.6001C4.32383 7.6001 4.09998 7.37624 4.09998 7.1001V5.1001H2C1.72386 5.1001 1.5 4.87624 1.5 4.6001ZM2 12.8999C1.72386 12.8999 1.5 13.1238 1.5 13.3999C1.5 13.676 1.72386 13.8999 2 13.8999H7.1C7.37614 13.8999 7.6 13.676 7.6 13.3999C7.6 13.1238 7.37614 12.8999 7.1 12.8999H2ZM10.3 10.3C10.3 10.0239 10.5238 9.80005 10.8 9.80005H15.6C15.8761 9.80005 16.1 10.0239 16.1 10.3C16.1 10.5762 15.8761 10.8 15.6 10.8H10.8C10.5238 10.8 10.3 10.5762 10.3 10.3ZM10.8 7.19995C10.5238 7.19995 10.3 7.42381 10.3 7.69995C10.3 7.97609 10.5238 8.19995 10.8 8.19995H15.6C15.8761 8.19995 16.1 7.97609 16.1 7.69995C16.1 7.42381 15.8761 7.19995 15.6 7.19995H10.8Z", fill: "#A77E99" })));
};

var Icon$1j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$1i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$1h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.00012 16.2L5.50012 12.7C5.11012 12.31 4.49012 12.31 4.10012 12.7C3.71012 13.09 3.71012 13.71 4.10012 14.1L8.29012 18.29C8.68012 18.68 9.31012 18.68 9.70012 18.29L20.3001 7.70001C20.6901 7.31001 20.6901 6.69001 20.3001 6.30001C19.9101 5.91001 19.2901 5.91001 18.9001 6.30001L9.00012 16.2Z" })));
};

var Icon$1g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$1f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$1e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$1d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$1c = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$1b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$1a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$19 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$18 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M15.6772 2.8668C15.9878 1.97095 15.2658 1.05469 14.2495 1.05469C13.4213 1.05469 12.75 1.67612 12.75 2.4427L12.75 5.07933C12.75 5.61801 13.2217 6.05469 13.8037 6.05469C14.2615 6.05469 14.667 5.78094 14.8069 5.37734L15.6772 2.8668Z", fill: "#FFC700" }),
        React.createElement("path", { d: "M9.32279 2.8668C9.01225 1.97095 9.73416 1.05469 10.7505 1.05469C11.5787 1.05469 12.25 1.67612 12.25 2.4427L12.25 5.07934C12.25 5.61801 11.7783 6.05469 11.1963 6.05469C10.7385 6.05469 10.333 5.78094 10.1931 5.37734L9.32279 2.8668Z", fill: "#FFC700" }),
        React.createElement("path", { d: "M10.825 1.26941C11.1413 1.50339 10.6373 1.71436 10.293 2.17982C9.94869 2.64527 9.89449 3.18896 9.57817 2.95498C9.26185 2.72101 9.32403 2.18322 9.66832 1.71776C10.0126 1.2523 10.5086 1.03544 10.825 1.26941Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M14.6507 1.39423C14.8957 1.70211 14.3543 1.77544 13.9012 2.13593C13.4482 2.49642 13.2551 3.00755 13.0102 2.69968C12.7652 2.3918 12.9644 1.88843 13.4174 1.52794C13.8705 1.16746 14.4057 1.08636 14.6507 1.39423Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M10.3026 1.54788C10.4525 1.65871 10.1853 1.79706 9.98717 2.06492C9.78903 2.33278 9.73495 2.62873 9.58511 2.51789C9.43528 2.40706 9.49314 2.11391 9.69127 1.84605C9.88941 1.57819 10.1528 1.43705 10.3026 1.54788Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M14.0738 1.5278C14.1899 1.67363 13.896 1.73812 13.6353 1.94557C13.3746 2.15302 13.2458 2.42489 13.1297 2.27905C13.0137 2.13322 13.1454 1.86503 13.4061 1.65758C13.6668 1.45012 13.9578 1.38196 14.0738 1.5278Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M13.406 5.80534C13.1769 5.64322 13.6402 5.49916 14.0299 5.10944C14.4196 4.71971 14.4298 4.07338 14.6827 4.32626C14.9356 4.57915 14.7916 5.0668 14.4019 5.45652C14.0122 5.84624 13.6351 5.96747 13.406 5.80534Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M10.6248 5.80534C10.3957 5.64322 10.8589 5.49916 11.2486 5.10944C11.6383 4.71971 11.6486 4.07338 11.9015 4.32626C12.1543 4.57915 12.0103 5.0668 11.6206 5.45652C11.2309 5.84624 10.8538 5.96747 10.6248 5.80534Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M13.9914 10.3006C12.9839 8.40915 12.4375 6.30469 12.4375 6.30469C12.4375 6.30469 11.9087 8.34165 10.9321 10.2086C10.6414 11.6927 9.56271 12.9024 8.10162 13.3682C6.2379 13.9624 4.40451 13.1384 3.73966 11.239C3.00517 10.5247 2.41808 9.75079 2.125 9.15553V10.3668C2.125 14.1503 3.02673 17.8564 4.72554 21.0547H20.1495C21.8483 17.8564 22.75 14.1503 22.75 10.3668V9.15553C22.4628 9.73876 21.8934 10.4935 21.1797 11.1956C20.5277 13.1259 18.6807 13.967 16.8028 13.3682C15.372 12.912 14.3079 11.7426 13.9914 10.3006Z", fill: "#FFC700" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.7881 7.51367C13.0461 8.29103 13.4582 9.39262 14.0101 10.4296C14.2401 11.4788 14.8691 12.3823 15.7478 12.9675L14.8711 21.0453L12.4716 21.026L6.31499 21.0756C5.03757 17.5852 4.57523 15.3977 4.04834 11.8082C4.82141 13.3685 6.48748 14.0096 8.17878 13.4698C9.62537 13.0081 10.6933 11.8093 10.9812 10.3385C11.509 9.3285 11.9046 8.26831 12.1552 7.51367H12.7881Z", fill: "#FFD800" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.335 21.0354L10.6112 11.4121C10.1532 12.3105 9.37201 13.0219 8.40008 13.3927C8.66771 15.748 9.05381 17.902 9.86757 21.0472L11.335 21.0354ZM8.91436 21.0549C8.26697 18.1715 7.86567 16.0604 7.58788 13.6114C6.85387 13.7286 6.14425 13.6244 5.53223 13.3211C5.85194 15.8033 6.40755 18.9391 7.32573 21.0677L8.91436 21.0549Z", fill: "#FFE971" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.1731 9.68799C11.1115 9.81472 11.0477 9.94136 10.982 10.0672C10.6941 11.538 9.62616 12.7368 8.17957 13.1985C6.33435 13.7874 4.51917 12.9708 3.86091 11.0883C3.82538 11.0537 3.79019 11.019 3.75537 10.9842C3.76298 11.1884 3.78916 11.3929 3.8348 11.5958C4.24757 13.4306 6.09537 14.4351 8.21827 13.7576C10.1825 13.1307 11.3382 11.3971 11.1731 9.68799Z", fill: "#FFE971" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8289 9.68799C13.8905 9.81475 13.9542 9.94142 14.02 10.0673C14.3079 11.5381 15.3758 12.7369 16.8224 13.1986C18.6677 13.7875 20.4828 12.9709 21.1411 11.0884C21.1766 11.0538 21.2118 11.0191 21.2466 10.9843C21.239 11.1885 21.2128 11.393 21.1672 11.5959C20.7544 13.4308 18.9066 14.4353 16.7837 13.7578C14.8194 13.1309 13.6636 11.3971 13.8289 9.68799Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M16.25 7.99219C16.25 9.80885 14.5431 11.0547 12.4375 11.0547C10.3319 11.0547 8.625 9.80885 8.625 7.99219C8.625 6.17553 10.3319 4.92969 12.4375 4.92969C14.5431 4.92969 16.25 6.17553 16.25 7.99219Z", fill: "#FFC700" }),
        React.createElement("path", { d: "M14.5349 6.09354C14.807 7.1091 13.4021 6.71163 11.9077 7.11205C10.4134 7.51246 9.39541 8.55914 9.12329 7.54357C8.85117 6.52801 9.87598 5.50694 11.3704 5.10652C12.8647 4.70611 14.2628 5.07797 14.5349 6.09354Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M11.0893 10.2853C10.7875 9.70556 11.9478 9.89409 13.237 9.49295C14.5262 9.09181 15.3014 7.75528 15.5484 8.54928C15.7955 9.34329 14.9187 10.2079 13.6295 10.609C12.3403 11.0102 11.3911 10.865 11.0893 10.2853Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M12.979 5.80657C13.1079 6.28763 12.3191 6.1324 11.4591 6.36283C10.5992 6.59326 9.99366 7.1221 9.86476 6.64104C9.73586 6.15998 10.3446 5.64328 11.2046 5.41284C12.0646 5.18241 12.8501 5.32552 12.979 5.80657Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M11.7222 8.09327C11.7222 8.76484 11.4227 9.01955 11.0533 9.01955C10.6838 9.01955 10.3843 8.76484 10.3843 8.09327C10.3843 7.4217 10.6838 7.16699 11.0533 7.16699C11.4227 7.16699 11.7222 7.4217 11.7222 8.09327Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M11.7222 7.94581C11.7222 8.61738 11.4227 8.87209 11.0533 8.87209C10.6838 8.87209 10.3843 8.61738 10.3843 7.94581C10.3843 7.27424 10.6838 7.01953 11.0533 7.01953C11.4227 7.01953 11.7222 7.27424 11.7222 7.94581Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M11.4119 7.41061C11.4587 7.67736 11.217 7.57296 10.9599 7.67813C10.7028 7.78331 10.5276 8.05822 10.4808 7.79148C10.434 7.52473 10.6103 7.25654 10.8674 7.15136C11.1245 7.04619 11.3651 7.14386 11.4119 7.41061Z", fill: "#FA7048" }),
        React.createElement("path", { d: "M10.796 8.61486C10.7456 8.421 10.9921 8.50242 11.2088 8.3668C11.4256 8.23119 11.5783 7.83458 11.6194 8.10027C11.6605 8.36596 11.4909 8.60461 11.2742 8.74023C11.0575 8.87584 10.8465 8.80873 10.796 8.61486Z", fill: "#9F0400" }),
        React.createElement("path", { d: "M14.1924 8.09327C14.1924 8.76484 13.8929 9.01955 13.5235 9.01955C13.154 9.01955 12.8545 8.76484 12.8545 8.09327C12.8545 7.4217 13.154 7.16699 13.5235 7.16699C13.8929 7.16699 14.1924 7.4217 14.1924 8.09327Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M14.1924 7.94581C14.1924 8.61738 13.8929 8.87209 13.5235 8.87209C13.154 8.87209 12.8545 8.61738 12.8545 7.94581C12.8545 7.27424 13.154 7.01953 13.5235 7.01953C13.8929 7.01953 14.1924 7.27424 14.1924 7.94581Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M13.8821 7.41061C13.9289 7.67736 13.6872 7.57296 13.4301 7.67813C13.173 7.78331 12.9978 8.05822 12.951 7.79148C12.9042 7.52473 13.0805 7.25654 13.3376 7.15136C13.5947 7.04619 13.8353 7.14386 13.8821 7.41061Z", fill: "#FA7048" }),
        React.createElement("path", { d: "M13.2663 8.61486C13.2158 8.421 13.4623 8.50242 13.6791 8.3668C13.8958 8.23119 14.0485 7.83458 14.0896 8.10027C14.1307 8.36596 13.9612 8.60461 13.7444 8.74023C13.5277 8.87584 13.3167 8.80873 13.2663 8.61486Z", fill: "#9F0400" }),
        React.createElement("path", { d: "M24.3751 9.78352C24.3751 10.8765 23.4126 11.6261 22.2254 11.6261C21.0381 11.6261 20.0757 10.8765 20.0757 9.78352C20.0757 8.6905 21.0381 7.94092 22.2254 7.94092C23.4126 7.94092 24.3751 8.6905 24.3751 9.78352Z", fill: "#FFC700" }),
        React.createElement("path", { d: "M23.4327 8.66844C23.5873 9.24565 22.7888 9.01974 21.9395 9.24732C21.0902 9.47491 20.5116 10.0698 20.3569 9.49259C20.2023 8.91538 20.7847 8.33504 21.6341 8.10746C22.4834 7.87987 23.278 8.09123 23.4327 8.66844Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M21.468 11.1604C21.2965 10.8309 21.956 10.938 22.6887 10.7101C23.4214 10.4821 23.862 9.72242 24.0024 10.1737C24.1429 10.625 23.6445 11.1164 22.9118 11.3444C22.179 11.5724 21.6396 11.4899 21.468 11.1604Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M22.5483 8.5052C22.6216 8.77861 22.1733 8.69038 21.6845 8.82135C21.1957 8.95232 20.8516 9.2529 20.7783 8.97948C20.705 8.70606 21.051 8.41238 21.5398 8.28141C22.0286 8.15044 22.4751 8.23178 22.5483 8.5052Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M4.92439 9.78352C4.92439 10.8765 3.96194 11.6261 2.7747 11.6261C1.58745 11.6261 0.625 10.8765 0.625 9.78352C0.625 8.6905 1.58745 7.94092 2.7747 7.94092C3.96194 7.94092 4.92439 8.6905 4.92439 9.78352Z", fill: "#FFC700" }),
        React.createElement("path", { d: "M3.982 8.66844C4.13667 9.24565 3.33817 9.01974 2.48882 9.24732C1.63947 9.47491 1.0609 10.0698 0.906238 9.49259C0.751574 8.91538 1.33404 8.33504 2.18339 8.10746C3.03274 7.87987 3.82734 8.09123 3.982 8.66844Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M2.01735 11.1604C1.8458 10.8309 2.5053 10.938 3.23802 10.7101C3.97074 10.4821 4.41134 9.72242 4.55176 10.1737C4.69218 10.625 4.19381 11.1164 3.46109 11.3444C2.72837 11.5724 2.1889 11.4899 2.01735 11.1604Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M3.09716 8.5052C3.17042 8.77861 2.72209 8.69038 2.23331 8.82135C1.74453 8.95232 1.40038 9.2529 1.32712 8.97948C1.25386 8.70606 1.59985 8.41238 2.08863 8.28141C2.57742 8.15044 3.0239 8.23178 3.09716 8.5052Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M21 21.4833C21 22.5878 20.7489 23.0547 12.4375 23.0547C4.12611 23.0547 3.875 22.5878 3.875 21.4833C3.875 20.3787 4.12611 20.3047 12.4375 20.3047C20.7489 20.3047 21 20.3787 21 21.4833Z", fill: "#D8D8D8" }),
        React.createElement("path", { d: "M14.6123 21.583C14.5965 22.6393 13.9077 22.7662 9.15269 22.6767C5.64021 22.6106 4.71703 22.5202 4.72814 21.7777C4.73925 21.0352 5.09021 20.7512 9.18036 20.8281C13.9354 20.9176 14.6234 20.8405 14.6123 21.583Z", fill: "#EFF3F5" }),
        React.createElement("path", { d: "M5.36878 22.06C5.19105 21.8607 5.32313 21.5819 5.55794 21.3186C5.79275 21.0553 6.04136 20.9072 6.21909 21.1065C6.39682 21.3058 6.26473 21.5845 6.02992 21.8478C5.79512 22.1111 5.54651 22.2593 5.36878 22.06Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M5.33188 22.0183C5.18225 21.8505 5.32355 21.5821 5.55836 21.3188C5.79317 21.0555 6.03256 20.897 6.18219 21.0648C6.33181 21.2326 6.19051 21.501 5.9557 21.7644C5.7209 22.0277 5.4815 22.1861 5.33188 22.0183Z", fill: "#373333" }),
        React.createElement("path", { d: "M19.1715 22.06C18.9938 21.8607 19.1259 21.5819 19.3607 21.3186C19.5955 21.0553 19.8441 20.9072 20.0218 21.1065C20.1995 21.3058 20.0675 21.5845 19.8327 21.8478C19.5978 22.1111 19.3492 22.2593 19.1715 22.06Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M19.1374 22.0217C18.9855 21.8514 19.1261 21.5821 19.3609 21.3188C19.5957 21.0555 19.8358 20.8979 19.9877 21.0682C20.1397 21.2386 19.9991 21.5079 19.7643 21.7712C19.5295 22.0345 19.2893 22.1921 19.1374 22.0217Z", fill: "#373333" }),
        React.createElement("path", { d: "M8.71657 22.2374C8.50579 22.001 8.66243 21.6704 8.94091 21.3581C9.21938 21.0459 9.51422 20.8702 9.725 21.1066C9.93579 21.3429 9.77914 21.6736 9.50066 21.9858C9.22219 22.2981 8.92735 22.4738 8.71657 22.2374Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M8.65967 22.1742C8.49136 21.9854 8.66193 21.6704 8.9404 21.3581C9.21887 21.0459 9.4998 20.8546 9.66811 21.0433C9.83643 21.2321 9.66585 21.5471 9.38738 21.8594C9.10891 22.1716 8.82799 22.3629 8.65967 22.1742Z", fill: "#373333" }),
        React.createElement("path", { d: "M15.8196 22.2374C15.6088 22.001 15.7655 21.6704 16.0439 21.3581C16.3224 21.0459 16.6172 20.8702 16.828 21.1066C17.0388 21.3429 16.8822 21.6736 16.6037 21.9858C16.3252 22.2981 16.0304 22.4738 15.8196 22.2374Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M15.7716 22.1835C15.597 21.9878 15.7656 21.6705 16.0441 21.3582C16.3225 21.0459 16.6055 20.857 16.78 21.0527C16.9545 21.2483 16.786 21.5656 16.5075 21.8779C16.229 22.1902 15.9461 22.3792 15.7716 22.1835Z", fill: "#373333" }),
        React.createElement("path", { d: "M12.1406 22.3976C11.8957 22.1229 12.0777 21.7387 12.4013 21.3759C12.7249 21.013 13.0675 20.8089 13.3125 21.0835C13.5574 21.3582 13.3754 21.7424 13.0518 22.1053C12.7282 22.4681 12.3856 22.6723 12.1406 22.3976Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M12.0921 22.3438C11.8835 22.1098 12.0775 21.7389 12.401 21.3761C12.7246 21.0132 13.0554 20.7957 13.264 21.0297C13.4726 21.2636 13.2787 21.6345 12.9551 21.9974C12.6315 22.3602 12.3008 22.5777 12.0921 22.3438Z", fill: "#373333" }),
        React.createElement("path", { d: "M12.0489 13.7369C12.2981 13.494 12.7019 13.494 12.9511 13.7369L14.8132 15.5524C15.0623 15.7953 15.0623 16.1891 14.8132 16.432L12.9511 18.2475C12.7019 18.4904 12.2981 18.4904 12.0489 18.2475L10.1868 16.432C9.93772 16.1891 9.93772 15.7953 10.1868 15.5524L12.0489 13.7369Z", fill: "#FFE971" }),
        React.createElement("path", { d: "M12.4726 13.2256V15.5732H10.125C10.125 15.4162 10.1849 15.2593 10.3046 15.1396L12.039 13.4052C12.1587 13.2855 12.3157 13.2256 12.4726 13.2256Z", fill: "#FA7048" }),
        React.createElement("path", { d: "M12.4726 17.9209V15.5733H10.125C10.125 15.7302 10.1849 15.8872 10.3046 16.0069L12.039 17.7413C12.1587 17.861 12.3157 17.9209 12.4726 17.9209Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M12.4727 13.2256V15.5732H14.8203C14.8203 15.4162 14.7604 15.2593 14.6407 15.1396L12.9063 13.4052C12.7866 13.2855 12.6296 13.2256 12.4727 13.2256Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M12.4727 17.9209V15.5733H14.8203C14.8203 15.7302 14.7604 15.8872 14.6407 16.0069L12.9063 17.7413C12.7866 17.861 12.6296 17.9209 12.4727 17.9209Z", fill: "#9F0400" }),
        React.createElement("path", { d: "M18.6595 15.807C18.7972 15.6548 19.0203 15.6548 19.158 15.807L20.1869 16.9442C20.3246 17.0964 20.3246 17.343 20.1869 17.4952L19.158 18.6324C19.0203 18.7846 18.7972 18.7846 18.6595 18.6324L17.6306 17.4952C17.4929 17.343 17.4929 17.0964 17.6306 16.9442L18.6595 15.807Z", fill: "#FFE971" }),
        React.createElement("path", { d: "M18.9132 15.5596V16.9244H17.5483C17.5483 16.8332 17.5831 16.742 17.6528 16.6724L18.6611 15.664C18.7307 15.5944 18.822 15.5596 18.9132 15.5596Z", fill: "#FA7048" }),
        React.createElement("path", { d: "M18.9132 18.2896V16.9247H17.5483C17.5483 17.0159 17.5831 17.1072 17.6528 17.1768L18.6611 18.1851C18.7307 18.2547 18.822 18.2896 18.9132 18.2896Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M18.9134 15.5596V16.9245H20.2783C20.2783 16.8332 20.2435 16.742 20.1739 16.6724L19.1655 15.664C19.0959 15.5944 19.0047 15.5596 18.9134 15.5596Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M18.9134 18.2896V16.9247H20.2783C20.2783 17.0159 20.2435 17.1072 20.1739 17.1768L19.1655 18.1851C19.0959 18.2547 19.0047 18.2896 18.9134 18.2896Z", fill: "#9F0400" }),
        React.createElement("path", { d: "M5.64194 15.807C5.77959 15.6548 6.00277 15.6548 6.14042 15.807L7.16936 16.9442C7.30701 17.0964 7.30701 17.343 7.16936 17.4952L6.14042 18.6324C6.00277 18.7846 5.77959 18.7846 5.64194 18.6324L4.613 17.4952C4.47535 17.343 4.47535 17.0964 4.613 16.9442L5.64194 15.807Z", fill: "#FFE971" }),
        React.createElement("path", { d: "M5.90931 15.5596V16.9245H4.54443C4.54443 16.8332 4.57924 16.742 4.64885 16.6724L5.65722 15.664C5.72683 15.5944 5.81807 15.5596 5.90931 15.5596Z", fill: "#FA7048" }),
        React.createElement("path", { d: "M5.90931 18.2896V16.9247H4.54443C4.54443 17.0159 4.57924 17.1072 4.64885 17.1768L5.65722 18.1851C5.72683 18.2547 5.81807 18.2896 5.90931 18.2896Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M5.90905 15.5596V16.9245H7.27393C7.27393 16.8332 7.23912 16.742 7.16951 16.6724L6.16114 15.664C6.09153 15.5944 6.00029 15.5596 5.90905 15.5596Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M5.90905 18.2896V16.9247H7.27393C7.27393 17.0159 7.23912 17.1072 7.16951 17.1768L6.16114 18.1851C6.09153 18.2547 6.00029 18.2896 5.90905 18.2896Z", fill: "#9F0400" })));
};

var Icon$17 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 18" }, props),
        React.createElement("path", { d: "M15 9C15 12.3137 12.3137 15 9 15C5.68629 15 3 12.3137 3 9C3 5.68629 5.68629 3 9 3C12.3137 3 15 5.68629 15 9Z", fill: "#E0DCDE" }),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M9 1C13.4 1 17 4.6 17 9C17 13.4 13.4 17 9 17C4.6 17 1 13.4 1 9C1 4.6 4.6 1 9 1ZM9 0C4 0 0 4 0 9C0 14 4 18 9 18C14 18 18 14 18 9C18 4 14 0 9 0ZM9.41413 4.19256C7.91616 3.94515 6.59998 5.11435 6.59998 6.49997C6.59998 6.77611 6.37612 6.99997 6.09998 6.99997C5.82383 6.99997 5.59998 6.77611 5.59998 6.49997C5.59998 4.48671 7.48165 2.85668 9.58218 3.20677L9.58943 3.20798L9.58942 3.20803C10.8784 3.4424 12.0555 4.49171 12.2932 5.91777C12.5261 7.3152 11.9383 8.49621 11 9.19997L10.9867 9.20958C10.0884 9.83838 9.49998 10.7986 9.49998 11.8V12.2C9.49998 12.4761 9.27612 12.7 8.99998 12.7C8.72383 12.7 8.49998 12.4761 8.49998 12.2V11.8C8.49998 10.4044 9.308 9.16695 10.406 8.3954C11.0642 7.8987 11.4734 7.08166 11.3068 6.08217C11.1447 5.1095 10.3237 4.35951 9.41413 4.19256ZM9.49998 14.2C9.49998 13.9238 9.27612 13.7 8.99998 13.7C8.72383 13.7 8.49998 13.9238 8.49998 14.2V14.3C8.49998 14.5761 8.72383 14.8 8.99998 14.8C9.27612 14.8 9.49998 14.5761 9.49998 14.3V14.2Z", fill: "#A77E99" })));
};

var Icon$16 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z" })));
};

var Icon$15 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M4.68179 7.04592C5.06573 7.78505 5.47899 8.47752 5.91436 9.12605C4.76866 8.20293 3.15483 7.94918 1.72791 8.60664L0.865295 9.00408L0.949991 9.1879C1.87444 11.1943 4.25037 12.0714 6.25678 11.147L7.1194 10.7495C7.7588 11.5306 8.42708 12.2337 9.10661 12.8671C7.54917 12.0868 5.60297 12.3946 4.36752 13.7424L4.07604 14.0604L5.17158 15.0646C6.8001 16.5573 9.33037 16.4472 10.8231 14.8187L11.0984 14.5183C11.8534 15.0744 12.6001 15.5528 13.3138 15.9628C13.5418 16.0939 13.7667 16.218 13.9874 16.3354C12.2933 15.9571 10.485 16.7202 9.6092 18.3189L9.47337 18.5669L10.514 19.137C12.4515 20.1983 14.8825 19.4881 15.9439 17.5507L16.0715 17.3177C16.4836 17.4877 16.862 17.6297 17.1977 17.747C17.6961 17.9213 18.1016 18.0417 18.3855 18.1191L18.8453 18.2339C19.2507 18.3192 19.6484 18.0598 19.7338 17.6545C19.819 17.2494 19.56 16.8519 19.1551 16.7662L19.1524 16.7657C19.1551 16.7662 19.0729 16.7518 18.7802 16.6719C18.527 16.6029 18.1551 16.4928 17.6927 16.3311C17.1224 16.1317 16.416 15.8546 15.6253 15.4802L15.9997 14.8317C17.1043 12.9186 16.4488 10.4722 14.5356 9.36762L13.8989 9.00001L13.4324 9.80801C12.4895 11.4411 12.8291 13.4627 14.1387 14.7066C14.1128 14.6919 14.0869 14.6771 14.0609 14.6622C12.797 13.9361 11.4285 12.9847 10.1078 11.7498L10.5391 11.324C12.1111 9.77192 12.1274 7.23931 10.5753 5.66723L9.93826 5.02195L9.41242 5.5411C8.11055 6.82638 7.87565 8.78411 8.71479 10.3119C7.73795 9.1976 6.82187 7.90232 6.03634 6.39938C7.08943 4.4961 6.42732 2.09216 4.53566 1.00001L3.4039 0.346588L2.82248 1.35364C1.71791 3.26682 2.37341 5.71318 4.28658 6.81775L4.68179 7.04592Z" })));
};

var Icon$14 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M15.3182 7.04592C14.9343 7.78505 14.521 8.47752 14.0856 9.12605C15.2313 8.20293 16.8452 7.94918 18.2721 8.60664L19.1347 9.00408L19.05 9.1879C18.1256 11.1943 15.7496 12.0714 13.7432 11.147L12.8806 10.7495C12.2412 11.5306 11.5729 12.2337 10.8934 12.8671C12.4508 12.0868 14.397 12.3946 15.6325 13.7424L15.924 14.0604L14.8284 15.0646C13.1999 16.5573 10.6696 16.4472 9.17692 14.8187L8.90162 14.5183C8.1466 15.0744 7.39992 15.5528 6.68625 15.9628C6.45816 16.0939 6.23335 16.218 6.01259 16.3354C7.70668 15.9571 9.51501 16.7202 10.3908 18.3189L10.5266 18.5669L9.486 19.137C7.54854 20.1983 5.11749 19.4881 4.05611 17.5507L3.92849 17.3177C3.51637 17.4877 3.13804 17.6297 2.80235 17.747C2.30389 17.9213 1.89839 18.0417 1.61448 18.1191L1.15466 18.2339C0.749332 18.3192 0.351572 18.0598 0.26624 17.6545C0.180958 17.2494 0.440012 16.8519 0.844932 16.7662L0.847556 16.7657C0.844932 16.7662 0.927067 16.7518 1.21981 16.6719C1.47301 16.6029 1.84485 16.4928 2.30733 16.3311C2.87756 16.1317 3.58397 15.8546 4.3747 15.4802L4.0003 14.8317C2.89573 12.9186 3.55123 10.4722 5.4644 9.36762L6.10112 9.00001L6.56763 9.80801C7.51049 11.4411 7.1709 13.4627 5.86133 14.7066C5.88719 14.6919 5.9131 14.6771 5.93906 14.6622C7.20296 13.9361 8.57146 12.9847 9.89223 11.7498L9.46094 11.324C7.88886 9.77192 7.87263 7.23931 9.42468 5.66723L10.0617 5.02195L10.5876 5.5411C11.8895 6.82638 12.1243 8.78411 11.2852 10.3119C12.2621 9.1976 13.1781 7.90232 13.9637 6.39938C12.9106 4.4961 13.5727 2.09216 15.4643 1.00001L16.5961 0.346588L17.1775 1.35364C18.2821 3.26682 17.6266 5.71318 15.7134 6.81775L15.3182 7.04592Z" })));
};

var Icon$13 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 26 26" }, props),
        React.createElement("path", { d: "M4 6C4 4.89543 4.89543 4 6 4H20C21.1046 4 22 4.89543 22 6V20C22 21.1046 21.1046 22 20 22H6C4.89543 22 4 21.1046 4 20V6Z", fill: "#E4C9DB" }),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2.4165 3.6816C2.4165 3.01924 3.01798 2.42043 3.6665 2.42043H5.6665C6.41596 2.42043 6.9165 2.98589 6.9165 3.6816V5.42462C6.9165 6.12032 6.41596 6.68579 5.6665 6.68579H3.6665C3.01798 6.68579 2.4165 6.08697 2.4165 5.42462V3.6816ZM3.6665 0.920425C2.18169 0.920425 0.916504 2.1987 0.916504 3.6816V5.42462C0.916504 6.90751 2.18169 8.18579 3.6665 8.18579H5.6665C7.31705 8.18579 8.4165 6.87416 8.4165 5.42462V3.6816C8.4165 2.23205 7.31705 0.920425 5.6665 0.920425H3.6665ZM2.4165 12.1284C2.4165 11.466 3.01798 10.8672 3.6665 10.8672H5.6665C6.41596 10.8672 6.9165 11.4327 6.9165 12.1284V13.8714C6.9165 14.5671 6.41596 15.1326 5.6665 15.1326H3.6665C3.01798 15.1326 2.4165 14.5337 2.4165 13.8714V12.1284ZM3.6665 9.3672C2.18169 9.3672 0.916504 10.6455 0.916504 12.1284V13.8714C0.916504 15.3543 2.18169 16.6326 3.6665 16.6326H5.6665C7.31705 16.6326 8.4165 15.3209 8.4165 13.8714V12.1284C8.4165 10.6788 7.31705 9.3672 5.6665 9.3672H3.6665ZM3.6665 19.3142C3.01798 19.3142 2.4165 19.913 2.4165 20.5754V22.3184C2.4165 22.9808 3.01798 23.5796 3.6665 23.5796H5.6665C6.41596 23.5796 6.9165 23.0141 6.9165 22.3184V20.5754C6.9165 19.913 6.31502 19.3142 5.6665 19.3142H3.6665ZM0.916504 20.5754C0.916504 19.0925 2.18169 17.8142 3.6665 17.8142H5.6665C7.15132 17.8142 8.4165 19.0925 8.4165 20.5754V22.3184C8.4165 23.768 7.31705 25.0796 5.6665 25.0796H3.6665C2.18169 25.0796 0.916504 23.8013 0.916504 22.3184V20.5754ZM11.0835 3.6816C11.0835 3.01924 11.685 2.42043 12.3335 2.42043H22.3335C22.982 2.42043 23.5835 3.01924 23.5835 3.6816V5.42462C23.5835 6.08697 22.982 6.68579 22.3335 6.68579H12.3335C11.685 6.68579 11.0835 6.08697 11.0835 5.42462V3.6816ZM12.3335 0.920425C10.8487 0.920425 9.5835 2.1987 9.5835 3.6816V5.42462C9.5835 6.90751 10.8487 8.18579 12.3335 8.18579H22.3335C23.8183 8.18579 25.0835 6.90751 25.0835 5.42462V3.6816C25.0835 2.1987 23.8183 0.920425 22.3335 0.920425H12.3335ZM12.3335 10.8672C11.685 10.8672 11.0835 11.466 11.0835 12.1284V13.8714C11.0835 14.5337 11.685 15.1326 12.3335 15.1326H22.3335C22.982 15.1326 23.5835 14.5337 23.5835 13.8714V12.1284C23.5835 11.466 22.982 10.8672 22.3335 10.8672H12.3335ZM9.5835 12.1284C9.5835 10.6455 10.8487 9.3672 12.3335 9.3672H22.3335C23.8183 9.3672 25.0835 10.6455 25.0835 12.1284V13.8714C25.0835 15.3543 23.8183 16.6326 22.3335 16.6326H12.3335C10.8487 16.6326 9.5835 15.3543 9.5835 13.8714V12.1284ZM11.0835 20.5754C11.0835 19.913 11.685 19.3142 12.3335 19.3142H22.3335C22.982 19.3142 23.5835 19.913 23.5835 20.5754V22.3184C23.5835 22.9808 22.982 23.5796 22.3335 23.5796H12.3335C11.685 23.5796 11.0835 22.9808 11.0835 22.3184V20.5754ZM12.3335 17.8142C10.8487 17.8142 9.5835 19.0925 9.5835 20.5754V22.3184C9.5835 23.8013 10.8487 25.0796 12.3335 25.0796H22.3335C23.8183 25.0796 25.0835 23.8013 25.0835 22.3184V20.5754C25.0835 19.0925 23.8183 17.8142 22.3335 17.8142H12.3335Z", fill: "#A77E99" })));
};

var Icon$12 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z", fill: "#A77E99" }),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M1.4165 2.68158C1.4165 2.01923 2.01798 1.42041 2.6665 1.42041H4.6665C5.41596 1.42041 5.9165 1.98588 5.9165 2.68158V4.4246C5.9165 5.1203 5.41596 5.68577 4.6665 5.68577H2.6665C2.01798 5.68577 1.4165 5.08696 1.4165 4.4246V2.68158ZM2.6665 -0.0795898C1.18169 -0.0795898 -0.0834961 1.19869 -0.0834961 2.68158V4.4246C-0.0834961 5.90749 1.18169 7.18577 2.6665 7.18577H4.6665C6.31705 7.18577 7.4165 5.87415 7.4165 4.4246V2.68158C7.4165 1.23204 6.31705 -0.0795898 4.6665 -0.0795898H2.6665ZM1.4165 11.1284C1.4165 10.466 2.01798 9.86719 2.6665 9.86719H4.6665C5.41596 9.86719 5.9165 10.4327 5.9165 11.1284V12.8714C5.9165 13.5671 5.41596 14.1326 4.6665 14.1326H2.6665C2.01798 14.1326 1.4165 13.5337 1.4165 12.8714V11.1284ZM2.6665 8.36719C1.18169 8.36719 -0.0834961 9.64547 -0.0834961 11.1284V12.8714C-0.0834961 14.3543 1.18169 15.6326 2.6665 15.6326H4.6665C6.31705 15.6326 7.4165 14.3209 7.4165 12.8714V11.1284C7.4165 9.67881 6.31705 8.36719 4.6665 8.36719H2.6665ZM2.6665 18.3142C2.01798 18.3142 1.4165 18.913 1.4165 19.5754V21.3184C1.4165 21.9808 2.01798 22.5796 2.6665 22.5796H4.6665C5.41596 22.5796 5.9165 22.0141 5.9165 21.3184V19.5754C5.9165 18.913 5.31502 18.3142 4.6665 18.3142H2.6665ZM-0.0834961 19.5754C-0.0834961 18.0925 1.18169 16.8142 2.6665 16.8142H4.6665C6.15132 16.8142 7.4165 18.0925 7.4165 19.5754V21.3184C7.4165 22.7679 6.31705 24.0796 4.6665 24.0796H2.6665C1.18169 24.0796 -0.0834961 22.8013 -0.0834961 21.3184V19.5754ZM10.0835 2.68158C10.0835 2.01923 10.685 1.42041 11.3335 1.42041H21.3335C21.982 1.42041 22.5835 2.01923 22.5835 2.68158V4.4246C22.5835 5.08696 21.982 5.68577 21.3335 5.68577H11.3335C10.685 5.68577 10.0835 5.08696 10.0835 4.4246V2.68158ZM11.3335 -0.0795898C9.84868 -0.0795898 8.5835 1.19869 8.5835 2.68158V4.4246C8.5835 5.90749 9.84868 7.18577 11.3335 7.18577H21.3335C22.8183 7.18577 24.0835 5.90749 24.0835 4.4246V2.68158C24.0835 1.19869 22.8183 -0.0795898 21.3335 -0.0795898H11.3335ZM11.3335 9.86719C10.685 9.86719 10.0835 10.466 10.0835 11.1284V12.8714C10.0835 13.5337 10.685 14.1326 11.3335 14.1326H21.3335C21.982 14.1326 22.5835 13.5337 22.5835 12.8714V11.1284C22.5835 10.466 21.982 9.86719 21.3335 9.86719H11.3335ZM8.5835 11.1284C8.5835 9.64547 9.84868 8.36719 11.3335 8.36719H21.3335C22.8183 8.36719 24.0835 9.64547 24.0835 11.1284V12.8714C24.0835 14.3543 22.8183 15.6326 21.3335 15.6326H11.3335C9.84868 15.6326 8.5835 14.3543 8.5835 12.8714V11.1284ZM10.0835 19.5754C10.0835 18.913 10.685 18.3142 11.3335 18.3142H21.3335C21.982 18.3142 22.5835 18.913 22.5835 19.5754V21.3184C22.5835 21.9808 21.982 22.5796 21.3335 22.5796H11.3335C10.685 22.5796 10.0835 21.9808 10.0835 21.3184V19.5754ZM11.3335 16.8142C9.84868 16.8142 8.5835 18.0925 8.5835 19.5754V21.3184C8.5835 22.8013 9.84868 24.0796 11.3335 24.0796H21.3335C22.8183 24.0796 24.0835 22.8013 24.0835 21.3184V19.5754C24.0835 18.0925 22.8183 16.8142 21.3335 16.8142H11.3335Z", fill: "#520237" })));
};

var Icon$11 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 70 70" }, props),
        React.createElement("path", { d: "M70 35C70 54.33 54.33 70 35 70C15.67 70 0 54.33 0 35C0 15.67 15.67 0 35 0C54.33 0 70 15.67 70 35Z", fill: "#FEF0F7" }),
        React.createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "70", height: "70" },
            React.createElement("path", { d: "M70 35C70 54.33 54.33 70 35 70C15.67 70 0 54.33 0 35C0 15.67 15.67 0 35 0C54.33 0 70 15.67 70 35Z", fill: "#E8E8E8" })),
        React.createElement("g", { mask: "url(#mask0)" },
            React.createElement("g", { "clip-path": "url(#clip0)" },
                React.createElement("path", { d: "M31.9356 58.1012C44.6026 58.1012 54.8713 56.277 54.8713 54.0267C54.8713 51.7764 44.6026 49.9521 31.9356 49.9521C19.2686 49.9521 9 51.7764 9 54.0267C9 56.277 19.2686 58.1012 31.9356 58.1012Z", fill: "#520235" }),
                React.createElement("path", { d: "M39.7449 57.6315L38.0276 57.611L36.3265 57.6315V57.5904H36.2851V57.5699C29.7311 57.3326 24.9288 56.1668 21.5655 51.9554C18.3288 47.9037 16.9012 42.7934 17.069 35.8739C17.1931 30.7728 18.9403 25.0214 19.6828 22.7948C17.5724 19.9909 17.5035 16.5278 19.5334 13.1399C20.3127 11.8395 21.7403 11.0274 23.2575 11.0251C25.8575 11.0205 32.0414 11.0068 38.0115 11H38.0414C44.0207 11.0068 50.1977 11.0205 52.7977 11.0251C54.315 11.0297 55.7426 11.8395 56.5219 13.1399C58.5518 16.5255 58.4828 19.9887 56.3724 22.7948C57.115 25.0214 58.8621 30.7705 58.9862 35.8739C59.1541 42.7934 57.7265 47.9037 54.4897 51.9554C51.1288 56.1646 46.3334 57.3303 39.7862 57.5676V57.5881H39.7426L39.7449 57.6315ZM38.0322 14.4221C32.0506 14.4289 25.8644 14.4426 23.2621 14.4472C22.9472 14.4472 22.6598 14.6137 22.492 14.8898C21.0414 17.308 21.1724 19.4548 22.8828 21.2685L23.6046 22.0351L23.2437 23.0229C23.2184 23.0936 20.6529 30.1705 20.5127 35.9538C20.3655 42.0291 21.5564 46.4367 24.2644 49.8269C26.7173 52.8976 30.446 54.0794 38.0253 54.1843C45.6046 54.0794 49.3357 52.8953 51.7862 49.8269C54.4943 46.4367 55.6851 42.0291 55.538 35.9538C55.3977 30.1705 52.8322 23.0913 52.8069 23.0206L52.446 22.0351L53.1679 21.2685C54.8782 19.4548 55.0092 17.308 53.5587 14.8898C53.3931 14.6137 53.1058 14.4472 52.7885 14.4472C50.1862 14.4426 44 14.4289 38.0322 14.4221Z", fill: "#F556AB" }),
                React.createElement("path", { d: "M41.0299 28.3456C41.0299 28.3456 41.485 24.1068 44.2988 23.7555C47.1126 23.4042 50.0988 25.7403 51.6781 27.9031C53.2575 30.0658 55.3011 34.6126 54.9264 36.497C54.5517 38.3815 51.7908 40.4073 49.2299 40.9754C46.669 41.5435 43.908 42.3693 41.9057 40.4872C39.9034 38.605 40.5402 30.5997 41.0299 28.3456Z", fill: "#F556AB" }),
                React.createElement("path", { d: "M52.3196 36.855C52.8249 36.855 53.2345 36.4485 53.2345 35.9471C53.2345 35.4456 52.8249 35.0391 52.3196 35.0391C51.8143 35.0391 51.4047 35.4456 51.4047 35.9471C51.4047 36.4485 51.8143 36.855 52.3196 36.855Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M52.3196 36.9689C51.7517 36.9689 51.2897 36.5104 51.2897 35.9469C51.2897 35.3834 51.7517 34.9248 52.3196 34.9248C52.8874 34.9248 53.3494 35.3834 53.3494 35.9469C53.3494 36.5104 52.8874 36.9689 52.3196 36.9689ZM52.3196 35.1507C51.8782 35.1507 51.5196 35.5066 51.5196 35.9446C51.5196 36.3826 51.8782 36.7385 52.3196 36.7385C52.7609 36.7385 53.1196 36.3826 53.1196 35.9446C53.1196 35.5066 52.7609 35.1507 52.3196 35.1507Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M50.2966 32.121C50.7752 32.121 51.1633 31.736 51.1633 31.261C51.1633 30.7859 50.7752 30.4009 50.2966 30.4009C49.818 30.4009 49.4299 30.7859 49.4299 31.261C49.4299 31.736 49.818 32.121 50.2966 32.121Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M50.2965 32.2349C49.754 32.2349 49.3149 31.7969 49.3149 31.2608C49.3149 30.7224 49.7563 30.2866 50.2965 30.2866C50.8368 30.2866 51.2782 30.7246 51.2782 31.2608C51.2782 31.7969 50.8368 32.2349 50.2965 32.2349ZM50.2965 30.5125C49.8828 30.5125 49.5448 30.8478 49.5448 31.2585C49.5448 31.6691 49.8828 32.0045 50.2965 32.0045C50.7103 32.0045 51.0483 31.6691 51.0483 31.2585C51.0483 30.8478 50.7103 30.5125 50.2965 30.5125Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M46.1035 28.1996C46.6354 28.1996 47.0667 27.7717 47.0667 27.2437C47.0667 26.7158 46.6354 26.2878 46.1035 26.2878C45.5715 26.2878 45.1403 26.7158 45.1403 27.2437C45.1403 27.7717 45.5715 28.1996 46.1035 28.1996Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M46.1034 28.3135C45.508 28.3135 45.0253 27.8321 45.0253 27.2436C45.0253 26.655 45.508 26.1736 46.1034 26.1736C46.6988 26.1736 47.1816 26.6527 47.1816 27.2436C47.1816 27.8344 46.6988 28.3135 46.1034 28.3135ZM46.1034 26.4017C45.6345 26.4017 45.2552 26.7804 45.2552 27.2436C45.2552 27.709 45.6368 28.0854 46.1034 28.0854C46.5724 28.0854 46.9517 27.7067 46.9517 27.2436C46.9517 26.7781 46.5724 26.4017 46.1034 26.4017Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M45.7174 33.173C46.2493 33.173 46.6806 32.7451 46.6806 32.2171C46.6806 31.6892 46.2493 31.2612 45.7174 31.2612C45.1854 31.2612 44.7542 31.6892 44.7542 32.2171C44.7542 32.7451 45.1854 33.173 45.7174 33.173Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M45.7173 33.2869C45.1219 33.2869 44.6392 32.8055 44.6392 32.2169C44.6392 31.6283 45.1219 31.147 45.7173 31.147C46.3127 31.147 46.7955 31.6283 46.7955 32.2169C46.7955 32.8055 46.3127 33.2869 45.7173 33.2869ZM45.7173 31.3751C45.2484 31.3751 44.869 31.7538 44.869 32.2169C44.869 32.6801 45.2507 33.0588 45.7173 33.0588C46.1863 33.0588 46.5656 32.6801 46.5656 32.2169C46.5656 31.7538 46.1863 31.3751 45.7173 31.3751Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M32.6827 43.4209C38.8036 43.4209 43.7655 38.4967 43.7655 32.4224C43.7655 26.348 38.8036 21.4238 32.6827 21.4238C26.5619 21.4238 21.6 26.348 21.6 32.4224C21.6 38.4967 26.5619 43.4209 32.6827 43.4209Z", fill: "#FCA547" }),
                React.createElement("path", { d: "M32.6827 43.5348C26.508 43.5348 21.485 38.55 21.485 32.4222C21.485 26.2944 26.508 21.3096 32.6827 21.3096C38.8574 21.3096 43.8804 26.2944 43.8804 32.4222C43.8804 38.55 38.8574 43.5348 32.6827 43.5348ZM32.6827 21.5377C26.6344 21.5377 21.7149 26.4199 21.7149 32.4222C21.7149 38.4245 26.6344 43.3067 32.6827 43.3067C38.731 43.3067 43.6505 38.4245 43.6505 32.4222C43.6505 26.4199 38.731 21.5377 32.6827 21.5377Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M32.0989 33.6772C32.0759 36.4263 30.8115 39.1457 28.6943 41.0028C28.5885 41.094 28.4736 41.1898 28.3333 41.2081C28.0828 41.24 27.8667 41.0073 27.8299 40.7701C27.7954 40.5305 27.892 40.2955 27.9885 40.072C29.0644 37.6218 30.4552 35.3039 32.0989 33.6772Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M31.5128 32.9561C29.538 34.8838 26.7059 35.9196 23.8875 35.7462C23.7472 35.7371 23.5978 35.7234 23.4852 35.6367C23.2852 35.4838 23.2967 35.1667 23.4415 34.9751C23.5863 34.7812 23.8231 34.6831 24.0507 34.5941C26.5564 33.6177 29.1932 32.9538 31.5128 32.9561Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M31.6116 32.0345C28.8415 32.0117 26.1013 30.757 24.23 28.6581C24.1381 28.5532 24.0415 28.4391 24.0231 28.2999C23.9909 28.0512 24.2254 27.8368 24.4645 27.8003C24.7059 27.7661 24.9427 27.8619 25.1679 27.9577C27.6346 29.0231 29.9725 30.4034 31.6116 32.0345Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M32.3381 31.4527C30.3956 29.4907 29.3519 26.6824 29.5266 23.8854C29.5358 23.7462 29.5496 23.5979 29.6369 23.4884C29.791 23.2899 30.1105 23.3013 30.3036 23.4451C30.499 23.5888 30.5979 23.8238 30.6875 24.0496C31.6714 26.5341 32.3404 29.1508 32.3381 31.4527Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M33.2668 31.5509C33.2898 28.8018 34.5542 26.0824 36.6691 24.2254C36.7749 24.1341 36.8898 24.0383 37.0301 24.02C37.2806 23.9881 37.4967 24.2208 37.5335 24.4581C37.568 24.6976 37.4714 24.9326 37.3749 25.1562C36.299 27.6041 34.9082 29.9243 33.2668 31.5509Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M33.853 32.2718C35.8277 30.344 38.6599 29.3083 41.4783 29.4817C41.6186 29.4908 41.768 29.5045 41.8783 29.5912C42.0783 29.744 42.0668 30.0611 41.922 30.2528C41.7772 30.4467 41.5404 30.5448 41.3128 30.6338C38.8094 31.6102 36.1726 32.2741 33.853 32.2718Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M33.7542 33.1936C36.5243 33.2164 39.2645 34.4712 41.1358 36.5701C41.2277 36.675 41.3243 36.7891 41.3427 36.9282C41.3748 37.1746 41.1404 37.3914 40.9013 37.4256C40.6599 37.4598 40.4231 37.364 40.1978 37.2682C37.7289 36.2028 35.3932 34.8225 33.7542 33.1936Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M33.0277 33.7751C34.9703 35.7371 36.0139 38.5455 35.8392 41.3425C35.83 41.4817 35.8162 41.63 35.7289 41.7395C35.5749 41.9379 35.2553 41.9265 35.0622 41.7828C34.8668 41.6391 34.768 41.4041 34.6783 41.1782C33.6944 38.6938 33.0231 36.0771 33.0277 33.7751Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M39.9034 37.7652C39.9034 37.7652 43.6252 34.9158 45.7195 34.9705C47.8137 35.0253 48.7884 36.0382 49.4298 36.9234C50.0712 37.8085 51.4137 40.0238 51.0298 43.5713C50.6459 47.1189 48.7333 51.9577 46.731 52.6238C44.7287 53.29 41.5333 52.9387 38.5517 51.0679C35.5701 49.1972 33.6321 48.182 33.5471 45.6154C33.462 43.0466 36.9195 39.8139 39.9034 37.7652Z", fill: "#F556AB" }),
                React.createElement("path", { d: "M44.6068 53.0548C42.662 53.0548 40.4436 52.3909 38.4873 51.1635C38.2781 51.0335 38.0758 50.9057 37.8781 50.7825C35.2482 49.1468 33.5126 48.0654 33.4298 45.6175C33.3448 43.0601 36.6827 39.8365 39.8321 37.6737C40.016 37.5345 43.5471 34.8562 45.6551 34.8562C45.6758 34.8562 45.6988 34.8562 45.7195 34.8562C47.8459 34.9132 48.8666 35.9535 49.5195 36.8547C50.4505 38.1414 51.4896 40.3543 51.1402 43.5825C50.9471 45.3757 50.3678 47.4837 49.5884 49.2221C48.7172 51.1658 47.7149 52.4114 46.7632 52.7286C46.1126 52.9476 45.3815 53.0548 44.6068 53.0548ZM45.6574 35.0843C43.6183 35.0843 40.0114 37.8288 39.9746 37.8562L39.97 37.8608C36.8666 39.9893 33.5815 43.1445 33.6643 45.6106C33.7402 47.9376 35.3448 48.9346 38.0045 50.5909C38.2022 50.7141 38.4068 50.8419 38.616 50.9719C41.8712 53.0137 45.0045 53.0799 46.6965 52.5164C48.5976 51.8844 50.5264 47.1825 50.9172 43.5597C51.2574 40.4045 50.2459 38.2463 49.3379 36.9893C48.6781 36.0767 47.731 35.1368 45.7172 35.0843C45.6965 35.0843 45.6758 35.0843 45.6574 35.0843Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M41.9012 40.6214C42.3531 40.6214 42.7195 40.2578 42.7195 39.8092C42.7195 39.3607 42.3531 38.9971 41.9012 38.9971C41.4492 38.9971 41.0828 39.3607 41.0828 39.8092C41.0828 40.2578 41.4492 40.6214 41.9012 40.6214Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M41.9011 40.7377C41.3862 40.7377 40.9678 40.3225 40.9678 39.8115C40.9678 39.3005 41.3862 38.8853 41.9011 38.8853C42.416 38.8853 42.8344 39.3005 42.8344 39.8115C42.8344 40.3225 42.416 40.7377 41.9011 40.7377ZM41.9011 39.1111C41.5126 39.1111 41.1977 39.4237 41.1977 39.8092C41.1977 40.1948 41.5126 40.5073 41.9011 40.5073C42.2896 40.5073 42.6045 40.1948 42.6045 39.8092C42.6068 39.4237 42.2896 39.1111 41.9011 39.1111Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M47.115 43.357C47.6203 43.357 48.03 42.9505 48.03 42.449C48.03 41.9475 47.6203 41.541 47.115 41.541C46.6097 41.541 46.2001 41.9475 46.2001 42.449C46.2001 42.9505 46.6097 43.357 47.115 43.357Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M47.115 43.4709C46.5472 43.4709 46.0851 43.0123 46.0851 42.4488C46.0851 41.8853 46.5472 41.4268 47.115 41.4268C47.6828 41.4268 48.1449 41.8853 48.1449 42.4488C48.1449 43.0123 47.6828 43.4709 47.115 43.4709ZM47.115 41.6549C46.6736 41.6549 46.315 42.0108 46.315 42.4488C46.315 42.8868 46.6736 43.2427 47.115 43.2427C47.5563 43.2427 47.915 42.8868 47.915 42.4488C47.915 42.0108 47.5563 41.6549 47.115 41.6549Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M42.2967 44.6003C42.7754 44.6003 43.1634 44.2152 43.1634 43.7402C43.1634 43.2652 42.7754 42.8801 42.2967 42.8801C41.8181 42.8801 41.4301 43.2652 41.4301 43.7402C41.4301 44.2152 41.8181 44.6003 42.2967 44.6003Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M42.2967 44.7142C41.7541 44.7142 41.3151 44.2761 41.3151 43.74C41.3151 43.2016 41.7564 42.7659 42.2967 42.7659C42.8392 42.7659 43.2783 43.2039 43.2783 43.74C43.2783 44.2784 42.8392 44.7142 42.2967 44.7142ZM42.2967 42.994C41.8829 42.994 41.5449 43.3294 41.5449 43.74C41.5449 44.1507 41.8829 44.486 42.2967 44.486C42.7105 44.486 43.0484 44.1507 43.0484 43.74C43.0484 43.3294 42.7128 42.994 42.2967 42.994Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M46.5379 38.8627C47.0166 38.8627 47.4046 38.4777 47.4046 38.0027C47.4046 37.5277 47.0166 37.1426 46.5379 37.1426C46.0593 37.1426 45.6713 37.5277 45.6713 38.0027C45.6713 38.4777 46.0593 38.8627 46.5379 38.8627Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M46.5379 38.9766C45.9954 38.9766 45.5563 38.5386 45.5563 38.0025C45.5563 37.4663 45.9977 37.0283 46.5379 37.0283C47.0781 37.0283 47.5195 37.4663 47.5195 38.0025C47.5195 38.5386 47.0781 38.9766 46.5379 38.9766ZM46.5379 37.2565C46.1241 37.2565 45.7862 37.5918 45.7862 38.0025C45.7862 38.4131 46.1241 38.7485 46.5379 38.7485C46.9517 38.7485 47.2896 38.4131 47.2896 38.0025C47.2896 37.5918 46.9517 37.2565 46.5379 37.2565Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M44.8507 49.8611C45.4627 49.8611 45.9588 49.3688 45.9588 48.7615C45.9588 48.1542 45.4627 47.6619 44.8507 47.6619C44.2388 47.6619 43.7427 48.1542 43.7427 48.7615C43.7427 49.3688 44.2388 49.8611 44.8507 49.8611Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M44.8507 49.975C44.1771 49.975 43.6277 49.4297 43.6277 48.7613C43.6277 48.0929 44.1771 47.5476 44.8507 47.5476C45.5242 47.5476 46.0737 48.0929 46.0737 48.7613C46.0737 49.4297 45.5242 49.975 44.8507 49.975ZM44.8507 47.7757C44.3035 47.7757 43.8576 48.2183 43.8576 48.7613C43.8576 49.3043 44.3035 49.7469 44.8507 49.7469C45.3978 49.7469 45.8438 49.3043 45.8438 48.7613C45.8438 48.2183 45.3978 47.7757 44.8507 47.7757Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M37.2851 44.8879C37.7105 44.8879 38.0553 44.5457 38.0553 44.1236C38.0553 43.7015 37.7105 43.3594 37.2851 43.3594C36.8598 43.3594 36.515 43.7015 36.515 44.1236C36.515 44.5457 36.8598 44.8879 37.2851 44.8879Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M37.2851 45.0018C36.7977 45.0018 36.4 44.6071 36.4 44.1235C36.4 43.6398 36.7977 43.2451 37.2851 43.2451C37.7724 43.2451 38.1701 43.6398 38.1701 44.1235C38.1701 44.6071 37.7747 45.0018 37.2851 45.0018ZM37.2851 43.471C36.9242 43.471 36.6299 43.763 36.6299 44.1212C36.6299 44.4793 36.9242 44.7714 37.2851 44.7714C37.646 44.7714 37.9402 44.4793 37.9402 44.1212C37.9402 43.763 37.6483 43.471 37.2851 43.471Z", fill: "#FEF0F7" }))),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "70", height: "70", fill: "white", transform: "translate(9 11)" })))));
};

var Icon$10 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear_logoround)" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M149.813 139.861C144.738 112.406 165.591 87.0417 193.238 87.0417C217.636 87.0417 237.414 107.022 237.414 131.669V186.687C243.517 186.252 249.718 186.028 255.998 186.028C262.032 186.028 267.992 186.234 273.862 186.636V131.669C273.862 107.022 293.641 87.0417 318.039 87.0417C345.686 87.0417 366.539 112.406 361.464 139.861L349.509 204.532C390.538 222.627 421.562 254.056 421.562 293.548V317.442C421.562 349.919 400.293 377.11 370.56 395.466C340.595 413.965 300.058 424.962 255.998 424.962C211.939 424.962 171.401 413.965 141.436 395.466C111.703 377.11 90.4342 349.919 90.4342 317.442V293.548C90.4342 254.265 121.139 222.957 161.822 204.825L149.813 139.861ZM334.189 213.028L348.178 137.354C351.701 118.299 337.227 100.695 318.039 100.695C301.105 100.695 287.378 114.562 287.378 131.669V201.683C282.941 201.108 278.433 200.653 273.862 200.323C268.003 199.899 262.042 199.682 255.998 199.682C249.707 199.682 243.505 199.918 237.414 200.376C232.844 200.72 228.335 201.189 223.899 201.777V131.669C223.899 114.562 210.172 100.695 193.238 100.695C174.05 100.695 159.576 118.299 163.099 137.354L177.134 213.279C133.257 229.744 103.95 259.533 103.95 293.548V317.442C103.95 369.283 172.024 411.308 255.998 411.308C339.972 411.308 408.047 369.283 408.047 317.442V293.548C408.047 259.36 378.439 229.44 334.189 213.028Z", fill: "#633001" }),
        React.createElement("path", { d: "M408.047 317.442C408.047 369.283 339.972 411.308 255.998 411.308C172.024 411.308 103.95 369.283 103.95 317.442V293.548H408.047V317.442Z", fill: "#FEDC90" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M163.099 137.354C159.576 118.299 174.05 100.695 193.238 100.695C210.172 100.695 223.899 114.562 223.899 131.669V201.777C234.247 200.404 244.986 199.682 255.998 199.682C266.755 199.682 277.252 200.371 287.378 201.683V131.669C287.378 114.562 301.105 100.695 318.039 100.695C337.227 100.695 351.701 118.299 348.178 137.354L334.189 213.028C378.439 229.44 408.047 259.36 408.047 293.548C408.047 345.389 339.972 387.415 255.998 387.415C172.024 387.415 103.95 345.389 103.95 293.548C103.95 259.533 133.257 229.744 177.134 213.279L163.099 137.354Z", fill: "#D1884F" }),
        React.createElement("path", { d: "M213.762 286.722C213.762 300.86 206.199 312.322 196.868 312.322C187.538 312.322 179.974 300.86 179.974 286.722C179.974 272.583 187.538 261.122 196.868 261.122C206.199 261.122 213.762 272.583 213.762 286.722Z", fill: "#633001" }),
        React.createElement("path", { d: "M330.333 286.722C330.333 300.86 322.769 312.322 313.439 312.322C304.108 312.322 296.544 300.86 296.544 286.722C296.544 272.583 304.108 261.122 313.439 261.122C322.769 261.122 330.333 272.583 330.333 286.722Z", fill: "#633001" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear_logoround", x1: "256", y1: "0", x2: "256", y2: "512", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#54DADE" }),
                React.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$$ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#F6AF5B" }),
        React.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#F6AF5B" }),
        React.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#AE5714" }),
        React.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#AE5714" }),
        React.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#E17A2F" }),
        React.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#F6AF5B" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#F7D29B" }),
        React.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#E7974D" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#E17A2F" }),
        React.createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#AE5714" }),
        React.createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#AE5714" })));
};

var Icon$_ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#FFAF00" }),
        React.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#EB8C00" }),
        React.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#FFD800" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#FEED8D" }),
        React.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#FFC700" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#EB8C00" }),
        React.createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#EB8C00" })));
};

var Icon$Z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#9A6AFF" }),
        React.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#9A6AFF" }),
        React.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#A880FD" }),
        React.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#A880FD" }),
        React.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#7645D9" }),
        React.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#9A6AFF" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#CAB3F8" }),
        React.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#8F5BFD" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#7645D9" }),
        React.createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#452A7A" }),
        React.createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#452A7A" })));
};

var Icon$Y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#C0C4C6" }),
        React.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#C0C4C6" }),
        React.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#7D7D7D" }),
        React.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#969696" }),
        React.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#C0C4C6" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#D8D8D8" }),
        React.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#B2B2B2" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#969696" }),
        React.createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#7D7D7D" })));
};

var Icon$X = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#eb6930" }),
        React.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#eb6930" }),
        React.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#0098A1" }),
        React.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#53DEE9" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0022L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#84F0F9" }),
        React.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#eb6930" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#0098A1" }),
        React.createElement("path", { d: "M9.95096 14.0798C9.03126 14.1218 8.69439 13.361 8.65076 12.4055C8.60713 11.4501 8.87326 10.6617 9.79296 10.6197C10.7127 10.5777 11.0495 11.3385 11.0932 12.294C11.1368 13.2495 10.8707 14.0378 9.95096 14.0798Z", fill: "#017178" }),
        React.createElement("path", { d: "M15.1199 14.0803C14.2002 14.1223 13.8633 13.3615 13.8197 12.406C13.7761 11.4505 14.0422 10.6622 14.9619 10.6202C15.8816 10.5782 16.2185 11.339 16.2621 12.2945C16.3057 13.25 16.0396 14.0383 15.1199 14.0803Z", fill: "#017178" })));
};

var Icon$W = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 35 33" }, props),
        React.createElement("path", { d: "m32.9582 1-13.1341 9.7183 2.4424-5.72731z", fill: "#e17726", stroke: "#e17726" }),
        React.createElement("g", { fill: "#e27625", stroke: "#e27625" },
            React.createElement("path", { d: "m2.66296 1 13.01714 9.809-2.3254-5.81802z" }),
            React.createElement("path", { d: "m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z" }),
            React.createElement("path", { d: "m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z" }),
            React.createElement("path", { d: "m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z" }),
            React.createElement("path", { d: "m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z" }),
            React.createElement("path", { d: "m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z" }),
            React.createElement("path", { d: "m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z" })),
        React.createElement("path", { d: "m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React.createElement("path", { d: "m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React.createElement("path", { d: "m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z", fill: "#233447", stroke: "#233447" }),
        React.createElement("path", { d: "m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z", fill: "#233447", stroke: "#233447" }),
        React.createElement("path", { d: "m10.8733 28.8721.6495-5.3386-4.13117.1167z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m24.0982 23.5335.6366 5.3386 3.4946-5.2219z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m8.392 17.6507 3.1049 6.0513-.1039-3.0062z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z", fill: "#c0ac9d", stroke: "#c0ac9d" }),
        React.createElement("path", { d: "m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z", fill: "#161616", stroke: "#161616" }),
        React.createElement("path", { d: "m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z", fill: "#763e1a", stroke: "#763e1a" }),
        React.createElement("path", { d: "m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z", fill: "#763e1a", stroke: "#763e1a" }),
        React.createElement("path", { d: "m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z", fill: "#f5841f", stroke: "#f5841f" })));
};

var Icon$V = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$U = function (props) {
    useTheme();
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z", fill: "#BAA2B1" }),
        React.createElement("path", { d: "M11.422 18.9999C14.9687 18.9999 17.844 18.4964 17.844 17.8753C17.844 17.2542 14.9687 16.7507 11.422 16.7507C7.87522 16.7507 5 17.2542 5 17.8753C5 18.4964 7.87522 18.9999 11.422 18.9999Z", fill: "#6E4560" }),
        React.createElement("path", { d: "M13.6086 18.8703L13.1277 18.8646L12.6514 18.8703V18.859H12.6398V18.8533C10.8047 18.7878 9.46005 18.466 8.51835 17.3037C7.61205 16.1854 7.21233 14.775 7.25931 12.8652C7.29407 11.4573 7.78327 9.8699 7.99118 9.25535C7.40028 8.4815 7.38097 7.52567 7.94934 6.59062C8.16754 6.23172 8.56727 6.00756 8.9921 6.00693C9.7201 6.00567 11.4516 6.00189 13.1232 6H13.1316C14.8058 6.00189 16.5354 6.00567 17.2634 6.00693C17.6882 6.00819 18.0879 6.23172 18.3061 6.59062C18.8745 7.52504 18.8552 8.48087 18.2643 9.25535C18.4722 9.8699 18.9614 11.4567 18.9961 12.8652C19.0431 14.775 18.6434 16.1854 17.7371 17.3037C16.796 18.4654 15.4533 18.7872 13.6201 18.8527V18.8583H13.6079L13.6086 18.8703ZM13.129 6.94449C11.4542 6.94638 9.72203 6.95016 8.99338 6.95142C8.9052 6.95142 8.82474 6.99738 8.77775 7.07357C8.37159 7.74102 8.40828 8.33353 8.88718 8.83411L9.08929 9.04567L8.98823 9.31832C8.98115 9.33784 8.26281 11.291 8.22354 12.8872C8.18235 14.564 8.51577 15.7805 9.27403 16.7162C9.96083 17.5637 11.0049 17.8899 13.1271 17.9189C15.2493 17.8899 16.294 17.5631 16.9801 16.7162C17.7384 15.7805 18.0718 14.564 18.0306 12.8872C17.9914 11.291 17.273 9.33721 17.2659 9.31769L17.1649 9.04567L17.367 8.83411C17.8459 8.33353 17.8826 7.74102 17.4764 7.07357C17.4301 6.99738 17.3496 6.95142 17.2608 6.95142C16.5321 6.95016 14.8 6.94638 13.129 6.94449Z", fill: "#EFD7E7" }),
        React.createElement("path", { d: "M13.9684 10.7874C13.9684 10.7874 14.0958 9.61745 14.8837 9.52048C15.6716 9.42351 16.5077 10.0683 16.9499 10.6652C17.3921 11.2621 17.9643 12.517 17.8594 13.0371C17.7545 13.5572 16.9814 14.1164 16.2644 14.2732C15.5473 14.43 14.7743 14.6579 14.2136 14.1384C13.653 13.619 13.8313 11.4095 13.9684 10.7874Z", fill: "#A77E99" }),
        React.createElement("path", { d: "M17.1295 13.136C17.271 13.136 17.3857 13.0238 17.3857 12.8854C17.3857 12.747 17.271 12.6348 17.1295 12.6348C16.988 12.6348 16.8733 12.747 16.8733 12.8854C16.8733 13.0238 16.988 13.136 17.1295 13.136Z", fill: "white" }),
        React.createElement("path", { d: "M17.1295 13.1674C16.9705 13.1674 16.8411 13.0409 16.8411 12.8854C16.8411 12.7298 16.9705 12.6033 17.1295 12.6033C17.2885 12.6033 17.4179 12.7298 17.4179 12.8854C17.4179 13.0409 17.2885 13.1674 17.1295 13.1674ZM17.1295 12.6656C17.0059 12.6656 16.9055 12.7638 16.9055 12.8847C16.9055 13.0056 17.0059 13.1039 17.1295 13.1039C17.2531 13.1039 17.3535 13.0056 17.3535 12.8847C17.3535 12.7638 17.2531 12.6656 17.1295 12.6656Z", fill: "white" }),
        React.createElement("path", { d: "M16.563 11.8295C16.697 11.8295 16.8056 11.7232 16.8056 11.5921C16.8056 11.461 16.697 11.3547 16.563 11.3547C16.429 11.3547 16.3203 11.461 16.3203 11.5921C16.3203 11.7232 16.429 11.8295 16.563 11.8295Z", fill: "white" }),
        React.createElement("path", { d: "M16.563 11.861C16.4111 11.861 16.2881 11.7401 16.2881 11.5921C16.2881 11.4435 16.4117 11.3232 16.563 11.3232C16.7143 11.3232 16.8378 11.4441 16.8378 11.5921C16.8378 11.7401 16.7143 11.861 16.563 11.861ZM16.563 11.3856C16.4471 11.3856 16.3525 11.4781 16.3525 11.5915C16.3525 11.7048 16.4471 11.7974 16.563 11.7974C16.6789 11.7974 16.7735 11.7048 16.7735 11.5915C16.7735 11.4781 16.6789 11.3856 16.563 11.3856Z", fill: "white" }),
        React.createElement("path", { d: "M15.389 10.7471C15.5379 10.7471 15.6587 10.629 15.6587 10.4833C15.6587 10.3376 15.5379 10.2195 15.389 10.2195C15.24 10.2195 15.1193 10.3376 15.1193 10.4833C15.1193 10.629 15.24 10.7471 15.389 10.7471Z", fill: "white" }),
        React.createElement("path", { d: "M15.389 10.7786C15.2223 10.7786 15.0871 10.6458 15.0871 10.4833C15.0871 10.3208 15.2223 10.188 15.389 10.188C15.5557 10.188 15.6909 10.3202 15.6909 10.4833C15.6909 10.6464 15.5557 10.7786 15.389 10.7786ZM15.389 10.251C15.2577 10.251 15.1515 10.3555 15.1515 10.4833C15.1515 10.6118 15.2583 10.7156 15.389 10.7156C15.5203 10.7156 15.6265 10.6111 15.6265 10.4833C15.6265 10.3548 15.5203 10.251 15.389 10.251Z", fill: "white" }),
        React.createElement("path", { d: "M15.2809 12.1197C15.4298 12.1197 15.5506 12.0016 15.5506 11.8559C15.5506 11.7102 15.4298 11.592 15.2809 11.592C15.1319 11.592 15.0112 11.7102 15.0112 11.8559C15.0112 12.0016 15.1319 12.1197 15.2809 12.1197Z", fill: "white" }),
        React.createElement("path", { d: "M15.2809 12.1512C15.1142 12.1512 14.979 12.0183 14.979 11.8559C14.979 11.6934 15.1142 11.5605 15.2809 11.5605C15.4476 11.5605 15.5828 11.6934 15.5828 11.8559C15.5828 12.0183 15.4476 12.1512 15.2809 12.1512ZM15.2809 11.6235C15.1496 11.6235 15.0434 11.728 15.0434 11.8559C15.0434 11.9837 15.1502 12.0882 15.2809 12.0882C15.4122 12.0882 15.5184 11.9837 15.5184 11.8559C15.5184 11.728 15.4122 11.6235 15.2809 11.6235Z", fill: "white" }),
        React.createElement("path", { d: "M11.6311 14.9482C13.345 14.9482 14.7343 13.5891 14.7343 11.9126C14.7343 10.236 13.345 8.87695 11.6311 8.87695C9.91729 8.87695 8.52795 10.236 8.52795 11.9126C8.52795 13.5891 9.91729 14.9482 11.6311 14.9482Z", fill: "#EFD7E7" }),
        React.createElement("path", { d: "M11.6311 14.9796C9.90223 14.9796 8.49579 13.6038 8.49579 11.9125C8.49579 10.2213 9.90223 8.84546 11.6311 8.84546C13.3601 8.84546 14.7665 10.2213 14.7665 11.9125C14.7665 13.6038 13.3601 14.9796 11.6311 14.9796ZM11.6311 8.90843C9.93763 8.90843 8.56016 10.2559 8.56016 11.9125C8.56016 13.5692 9.93763 14.9167 11.6311 14.9167C13.3247 14.9167 14.7021 13.5692 14.7021 11.9125C14.7021 10.2559 13.3247 8.90843 11.6311 8.90843Z", fill: "white" }),
        React.createElement("path", { d: "M11.4677 12.259C11.4613 13.0178 11.1072 13.7683 10.5144 14.2809C10.4848 14.3061 10.4526 14.3325 10.4133 14.3375C10.3432 14.3464 10.2827 14.2821 10.2724 14.2167C10.2627 14.1505 10.2898 14.0857 10.3168 14.024C10.618 13.3477 11.0075 12.708 11.4677 12.259Z", fill: "white" }),
        React.createElement("path", { d: "M11.3036 12.0598C10.7506 12.5919 9.95762 12.8777 9.16847 12.8299C9.12921 12.8274 9.08737 12.8236 9.05583 12.7997C8.99983 12.7575 9.00305 12.67 9.0436 12.6171C9.08415 12.5635 9.15045 12.5365 9.21417 12.5119C9.91578 12.2424 10.6541 12.0592 11.3036 12.0598Z", fill: "white" }),
        React.createElement("path", { d: "M11.3312 11.8056C10.5556 11.7993 9.78835 11.453 9.26439 10.8737C9.23864 10.8448 9.21161 10.8133 9.20646 10.7749C9.19745 10.7062 9.2631 10.647 9.33005 10.637C9.39763 10.6275 9.46393 10.654 9.52701 10.6804C10.2177 10.9745 10.8723 11.3554 11.3312 11.8056Z", fill: "white" }),
        React.createElement("path", { d: "M11.5346 11.6449C10.9907 11.1034 10.6985 10.3283 10.7474 9.55631C10.75 9.5179 10.7539 9.47697 10.7783 9.44675C10.8214 9.39197 10.9109 9.39512 10.965 9.43479C11.0197 9.47446 11.0474 9.53931 11.0725 9.60165C11.348 10.2874 11.5353 11.0096 11.5346 11.6449Z", fill: "white" }),
        React.createElement("path", { d: "M11.7947 11.6721C11.8011 10.9134 12.1551 10.1628 12.7473 9.65026C12.7769 9.62507 12.8091 9.59863 12.8484 9.59359C12.9185 9.58477 12.979 9.649 12.9893 9.71448C12.999 9.7806 12.972 9.84545 12.9449 9.90716C12.6437 10.5828 12.2543 11.2232 11.7947 11.6721Z", fill: "white" }),
        React.createElement("path", { d: "M11.9588 11.8707C12.5117 11.3387 13.3047 11.0528 14.0939 11.1006C14.1331 11.1032 14.175 11.1069 14.2059 11.1309C14.2619 11.173 14.2587 11.2606 14.2181 11.3135C14.1776 11.367 14.1113 11.3941 14.0475 11.4186C13.3466 11.6881 12.6083 11.8713 11.9588 11.8707Z", fill: "white" }),
        React.createElement("path", { d: "M11.9312 12.1252C12.7068 12.1315 13.474 12.4779 13.998 13.0571C14.0238 13.0861 14.0508 13.1176 14.0559 13.156C14.0649 13.224 13.9993 13.2838 13.9323 13.2933C13.8648 13.3027 13.7985 13.2763 13.7354 13.2498C13.0441 12.9558 12.3901 12.5748 11.9312 12.1252Z", fill: "white" }),
        React.createElement("path", { d: "M11.7278 12.2859C12.2717 12.8274 12.5639 13.6025 12.515 14.3745C12.5124 14.4129 12.5086 14.4538 12.4841 14.484C12.441 14.5388 12.3515 14.5357 12.2974 14.496C12.2427 14.4563 12.2151 14.3915 12.19 14.3291C11.9145 13.6434 11.7265 12.9212 11.7278 12.2859Z", fill: "white" }),
        React.createElement("path", { d: "M13.6529 13.387C13.6529 13.387 14.6951 12.6006 15.2814 12.6157C15.8678 12.6308 16.1408 12.9104 16.3203 13.1547C16.4999 13.399 16.8758 14.0104 16.7683 14.9895C16.6609 15.9686 16.1253 17.3042 15.5647 17.488C15.004 17.6719 14.1093 17.5749 13.2745 17.0586C12.4396 16.5423 11.897 16.2621 11.8732 15.5537C11.8494 14.8447 12.8174 13.9525 13.6529 13.387Z", fill: "#A77E99" }),
        React.createElement("path", { d: "M14.9699 17.607C14.4254 17.607 13.8042 17.4238 13.2564 17.0851C13.1979 17.0492 13.1412 17.0139 13.0859 16.9799C12.3495 16.5284 11.8635 16.23 11.8404 15.5543C11.8165 14.8485 12.7512 13.9588 13.633 13.3619C13.6845 13.3235 14.6732 12.5842 15.2634 12.5842C15.2692 12.5842 15.2757 12.5842 15.2815 12.5842C15.8769 12.6 16.1627 12.8871 16.3455 13.1358C16.6061 13.4909 16.8971 14.1017 16.7992 14.9927C16.7452 15.4876 16.583 16.0694 16.3648 16.5492C16.1208 17.0857 15.8402 17.4295 15.5737 17.517C15.3915 17.5774 15.1868 17.607 14.9699 17.607ZM15.2641 12.6472C14.6931 12.6472 13.6832 13.4047 13.6729 13.4122L13.6716 13.4135C12.8026 14.001 11.8828 14.8718 11.906 15.5525C11.9272 16.1947 12.3765 16.4699 13.1213 16.927C13.1766 16.961 13.2339 16.9963 13.2925 17.0322C14.2039 17.5957 15.0813 17.614 15.555 17.4584C16.0873 17.284 16.6274 15.9863 16.7368 14.9864C16.8321 14.1156 16.5489 13.5199 16.2946 13.173C16.1099 12.9211 15.8447 12.6617 15.2808 12.6472C15.275 12.6472 15.2692 12.6472 15.2641 12.6472Z", fill: "white" }),
        React.createElement("path", { d: "M14.2123 14.1756C14.3389 14.1756 14.4415 14.0753 14.4415 13.9515C14.4415 13.8277 14.3389 13.7273 14.2123 13.7273C14.0857 13.7273 13.9832 13.8277 13.9832 13.9515C13.9832 14.0753 14.0857 14.1756 14.2123 14.1756Z", fill: "white" }),
        React.createElement("path", { d: "M14.2123 14.2076C14.0681 14.2076 13.951 14.093 13.951 13.9519C13.951 13.8109 14.0681 13.6963 14.2123 13.6963C14.3565 13.6963 14.4737 13.8109 14.4737 13.9519C14.4737 14.093 14.3565 14.2076 14.2123 14.2076ZM14.2123 13.7586C14.1035 13.7586 14.0154 13.8449 14.0154 13.9513C14.0154 14.0577 14.1035 14.144 14.2123 14.144C14.3211 14.144 14.4093 14.0577 14.4093 13.9513C14.4099 13.8449 14.3211 13.7586 14.2123 13.7586Z", fill: "white" }),
        React.createElement("path", { d: "M15.6722 14.9307C15.8137 14.9307 15.9284 14.8185 15.9284 14.68C15.9284 14.5416 15.8137 14.4294 15.6722 14.4294C15.5307 14.4294 15.416 14.5416 15.416 14.68C15.416 14.8185 15.5307 14.9307 15.6722 14.9307Z", fill: "white" }),
        React.createElement("path", { d: "M15.6722 14.9621C15.5132 14.9621 15.3839 14.8356 15.3839 14.68C15.3839 14.5245 15.5132 14.3979 15.6722 14.3979C15.8312 14.3979 15.9606 14.5245 15.9606 14.68C15.9606 14.8356 15.8312 14.9621 15.6722 14.9621ZM15.6722 14.4609C15.5486 14.4609 15.4482 14.5591 15.4482 14.68C15.4482 14.8009 15.5486 14.8992 15.6722 14.8992C15.7958 14.8992 15.8962 14.8009 15.8962 14.68C15.8962 14.5591 15.7958 14.4609 15.6722 14.4609Z", fill: "white" }),
        React.createElement("path", { d: "M14.323 15.2738C14.457 15.2738 14.5657 15.1676 14.5657 15.0365C14.5657 14.9054 14.457 14.7991 14.323 14.7991C14.189 14.7991 14.0803 14.9054 14.0803 15.0365C14.0803 15.1676 14.189 15.2738 14.323 15.2738Z", fill: "white" }),
        React.createElement("path", { d: "M14.323 15.3053C14.1711 15.3053 14.0482 15.1844 14.0482 15.0364C14.0482 14.8878 14.1717 14.7676 14.323 14.7676C14.4749 14.7676 14.5979 14.8885 14.5979 15.0364C14.5979 15.185 14.4749 15.3053 14.323 15.3053ZM14.323 14.8305C14.2071 14.8305 14.1125 14.9231 14.1125 15.0364C14.1125 15.1498 14.2071 15.2423 14.323 15.2423C14.4389 15.2423 14.5335 15.1498 14.5335 15.0364C14.5335 14.9231 14.4395 14.8305 14.323 14.8305Z", fill: "white" }),
        React.createElement("path", { d: "M15.5106 13.6899C15.6446 13.6899 15.7533 13.5836 15.7533 13.4525C15.7533 13.3214 15.6446 13.2151 15.5106 13.2151C15.3766 13.2151 15.2679 13.3214 15.2679 13.4525C15.2679 13.5836 15.3766 13.6899 15.5106 13.6899Z", fill: "white" }),
        React.createElement("path", { d: "M15.5106 13.7213C15.3587 13.7213 15.2358 13.6004 15.2358 13.4525C15.2358 13.3045 15.3594 13.1836 15.5106 13.1836C15.6619 13.1836 15.7855 13.3045 15.7855 13.4525C15.7855 13.6004 15.6619 13.7213 15.5106 13.7213ZM15.5106 13.2466C15.3948 13.2466 15.3001 13.3391 15.3001 13.4525C15.3001 13.5658 15.3948 13.6584 15.5106 13.6584C15.6265 13.6584 15.7211 13.5658 15.7211 13.4525C15.7211 13.3391 15.6265 13.2466 15.5106 13.2466Z", fill: "white" }),
        React.createElement("path", { d: "M15.0382 16.7256C15.2095 16.7256 15.3484 16.5898 15.3484 16.4221C15.3484 16.2545 15.2095 16.1187 15.0382 16.1187C14.8668 16.1187 14.7279 16.2545 14.7279 16.4221C14.7279 16.5898 14.8668 16.7256 15.0382 16.7256Z", fill: "white" }),
        React.createElement("path", { d: "M15.0382 16.7571C14.8496 16.7571 14.6957 16.6066 14.6957 16.4221C14.6957 16.2376 14.8496 16.0872 15.0382 16.0872C15.2268 16.0872 15.3806 16.2376 15.3806 16.4221C15.3806 16.6066 15.2268 16.7571 15.0382 16.7571ZM15.0382 16.1501C14.885 16.1501 14.7601 16.2723 14.7601 16.4221C14.7601 16.572 14.885 16.6942 15.0382 16.6942C15.1914 16.6942 15.3162 16.572 15.3162 16.4221C15.3162 16.2723 15.1914 16.1501 15.0382 16.1501Z", fill: "white" }),
        React.createElement("path", { d: "M12.9198 15.3533C13.0389 15.3533 13.1354 15.2588 13.1354 15.1423C13.1354 15.0258 13.0389 14.9314 12.9198 14.9314C12.8007 14.9314 12.7042 15.0258 12.7042 15.1423C12.7042 15.2588 12.8007 15.3533 12.9198 15.3533Z", fill: "white" }),
        React.createElement("path", { d: "M12.9198 15.3847C12.7834 15.3847 12.672 15.2758 12.672 15.1423C12.672 15.0088 12.7834 14.8999 12.9198 14.8999C13.0563 14.8999 13.1676 15.0088 13.1676 15.1423C13.1676 15.2758 13.0569 15.3847 12.9198 15.3847ZM12.9198 14.9622C12.8188 14.9622 12.7364 15.0428 12.7364 15.1417C12.7364 15.2405 12.8188 15.3211 12.9198 15.3211C13.0209 15.3211 13.1033 15.2405 13.1033 15.1417C13.1033 15.0428 13.0215 14.9622 12.9198 14.9622Z", fill: "white" })));
};

var Icon$T = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$S = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React.createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React.createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#FAF9FA" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React.createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React.createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React.createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear_pancakes)" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React.createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React.createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React.createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear_pancakes", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#9F4A08" }),
                React.createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React.createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$R = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 70 70" }, props),
        React.createElement("circle", { cx: "35", cy: "35", r: "35", fill: "#FEF0F7" }),
        React.createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "70", height: "70" },
            React.createElement("circle", { cx: "35", cy: "35", r: "35", fill: "#E8E8E8" })),
        React.createElement("g", { mask: "url(#mask0)" },
            React.createElement("g", { "clip-path": "url(#clip0)" },
                React.createElement("path", { d: "M31.9356 58.1012C44.6026 58.1012 54.8713 56.277 54.8713 54.0267C54.8713 51.7764 44.6026 49.9521 31.9356 49.9521C19.2686 49.9521 9 51.7764 9 54.0267C9 56.277 19.2686 58.1012 31.9356 58.1012Z", fill: "#520235" }),
                React.createElement("path", { d: "M39.7449 57.6315L38.0276 57.611L36.3265 57.6315V57.5904H36.2851V57.5699C29.7311 57.3326 24.9288 56.1668 21.5655 51.9554C18.3288 47.9037 16.9012 42.7934 17.069 35.8739C17.1931 30.7728 18.9403 25.0214 19.6828 22.7948C17.5724 19.9909 17.5035 16.5278 19.5334 13.1399C20.3127 11.8395 21.7403 11.0274 23.2575 11.0251C25.8575 11.0205 32.0414 11.0068 38.0115 11H38.0414C44.0207 11.0068 50.1977 11.0205 52.7977 11.0251C54.315 11.0297 55.7426 11.8395 56.5219 13.1399C58.5518 16.5255 58.4828 19.9887 56.3724 22.7948C57.115 25.0214 58.8621 30.7705 58.9862 35.8739C59.1541 42.7934 57.7265 47.9037 54.4897 51.9554C51.1288 56.1646 46.3334 57.3303 39.7862 57.5676V57.5881H39.7426L39.7449 57.6315ZM38.0322 14.4221C32.0506 14.4289 25.8644 14.4426 23.2621 14.4472C22.9472 14.4472 22.6598 14.6137 22.492 14.8898C21.0414 17.308 21.1724 19.4548 22.8828 21.2685L23.6046 22.0351L23.2437 23.0229C23.2184 23.0936 20.6529 30.1705 20.5127 35.9538C20.3655 42.0291 21.5564 46.4367 24.2644 49.8269C26.7173 52.8976 30.446 54.0794 38.0253 54.1843C45.6046 54.0794 49.3357 52.8953 51.7862 49.8269C54.4943 46.4367 55.6851 42.0291 55.538 35.9538C55.3977 30.1705 52.8322 23.0913 52.8069 23.0206L52.446 22.0351L53.1679 21.2685C54.8782 19.4548 55.0092 17.308 53.5587 14.8898C53.3931 14.6137 53.1058 14.4472 52.7885 14.4472C50.1862 14.4426 44 14.4289 38.0322 14.4221Z", fill: "#F556AB" }),
                React.createElement("path", { d: "M41.0298 28.3456C41.0298 28.3456 41.485 24.1068 44.2988 23.7554C47.1126 23.4041 50.0988 25.7402 51.6781 27.903C53.2574 30.0658 55.3011 34.6125 54.9264 36.497C54.5517 38.3814 51.7907 40.4073 49.2298 40.9753C46.6689 41.5434 43.908 42.3693 41.9057 40.4871C39.9034 38.605 40.5402 30.5996 41.0298 28.3456Z", fill: "#F556AB" }),
                React.createElement("path", { d: "M52.3195 36.8549C52.8248 36.8549 53.2345 36.4483 53.2345 35.9469C53.2345 35.4454 52.8248 35.0389 52.3195 35.0389C51.8142 35.0389 51.4046 35.4454 51.4046 35.9469C51.4046 36.4483 51.8142 36.8549 52.3195 36.8549Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M52.3196 36.9688C51.7517 36.9688 51.2897 36.5102 51.2897 35.9467C51.2897 35.3832 51.7517 34.9247 52.3196 34.9247C52.8874 34.9247 53.3494 35.3832 53.3494 35.9467C53.3494 36.5102 52.8874 36.9688 52.3196 36.9688ZM52.3196 35.1505C51.8782 35.1505 51.5196 35.5064 51.5196 35.9445C51.5196 36.3825 51.8782 36.7384 52.3196 36.7384C52.7609 36.7384 53.1196 36.3825 53.1196 35.9445C53.1196 35.5064 52.7609 35.1505 52.3196 35.1505Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M50.2965 32.121C50.7751 32.121 51.1631 31.736 51.1631 31.261C51.1631 30.7859 50.7751 30.4009 50.2965 30.4009C49.8178 30.4009 49.4298 30.7859 49.4298 31.261C49.4298 31.736 49.8178 32.121 50.2965 32.121Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M50.2965 32.235C49.754 32.235 49.3149 31.797 49.3149 31.2608C49.3149 30.7224 49.7563 30.2867 50.2965 30.2867C50.8367 30.2867 51.2781 30.7247 51.2781 31.2608C51.2781 31.797 50.8367 32.235 50.2965 32.235ZM50.2965 30.5125C49.8827 30.5125 49.5448 30.8479 49.5448 31.2586C49.5448 31.6692 49.8827 32.0046 50.2965 32.0046C50.7103 32.0046 51.0482 31.6692 51.0482 31.2586C51.0482 30.8479 50.7103 30.5125 50.2965 30.5125Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M46.1034 28.1996C46.6354 28.1996 47.0666 27.7717 47.0666 27.2437C47.0666 26.7158 46.6354 26.2878 46.1034 26.2878C45.5714 26.2878 45.1402 26.7158 45.1402 27.2437C45.1402 27.7717 45.5714 28.1996 46.1034 28.1996Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M46.1034 28.3136C45.508 28.3136 45.0253 27.8322 45.0253 27.2436C45.0253 26.655 45.508 26.1736 46.1034 26.1736C46.6988 26.1736 47.1816 26.6527 47.1816 27.2436C47.1816 27.8345 46.6988 28.3136 46.1034 28.3136ZM46.1034 26.4018C45.6345 26.4018 45.2552 26.7805 45.2552 27.2436C45.2552 27.709 45.6368 28.0854 46.1034 28.0854C46.5724 28.0854 46.9517 27.7067 46.9517 27.2436C46.9517 26.7782 46.5724 26.4018 46.1034 26.4018Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M45.7173 33.1731C46.2493 33.1731 46.6805 32.7451 46.6805 32.2172C46.6805 31.6893 46.2493 31.2613 45.7173 31.2613C45.1853 31.2613 44.7541 31.6893 44.7541 32.2172C44.7541 32.7451 45.1853 33.1731 45.7173 33.1731Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M45.7173 33.287C45.1219 33.287 44.6392 32.8057 44.6392 32.2171C44.6392 31.6285 45.1219 31.1471 45.7173 31.1471C46.3127 31.1471 46.7955 31.6285 46.7955 32.2171C46.7955 32.8057 46.3127 33.287 45.7173 33.287ZM45.7173 31.3752C45.2484 31.3752 44.869 31.7539 44.869 32.2171C44.869 32.6802 45.2507 33.0589 45.7173 33.0589C46.1863 33.0589 46.5656 32.6802 46.5656 32.2171C46.5656 31.7539 46.1863 31.3752 45.7173 31.3752Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M32.6827 43.4207C38.8036 43.4207 43.7655 38.4965 43.7655 32.4222C43.7655 26.3479 38.8036 21.4236 32.6827 21.4236C26.5619 21.4236 21.6 26.3479 21.6 32.4222C21.6 38.4965 26.5619 43.4207 32.6827 43.4207Z", fill: "#FCA547" }),
                React.createElement("path", { d: "M32.6827 43.5347C26.508 43.5347 21.485 38.5499 21.485 32.4221C21.485 26.2943 26.508 21.3094 32.6827 21.3094C38.8575 21.3094 43.8805 26.2943 43.8805 32.4221C43.8805 38.5499 38.8575 43.5347 32.6827 43.5347ZM32.6827 21.5376C26.6345 21.5376 21.7149 26.4197 21.7149 32.4221C21.7149 38.4244 26.6345 43.3065 32.6827 43.3065C38.731 43.3065 43.6506 38.4244 43.6506 32.4221C43.6506 26.4197 38.731 21.5376 32.6827 21.5376Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M32.0989 33.6771C32.0759 36.4262 30.8115 39.1456 28.6943 41.0026C28.5885 41.0939 28.4736 41.1897 28.3333 41.208C28.0828 41.2399 27.8667 41.0072 27.8299 40.7699C27.7954 40.5304 27.892 40.2954 27.9885 40.0718C29.0644 37.6216 30.4552 35.3038 32.0989 33.6771Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M31.5127 32.9559C29.538 34.8837 26.7058 35.9195 23.8874 35.7461C23.7472 35.7369 23.5978 35.7233 23.4851 35.6366C23.2851 35.4837 23.2966 35.1666 23.4414 34.975C23.5863 34.781 23.823 34.6829 24.0506 34.594C26.5564 33.6175 29.1932 32.9537 31.5127 32.9559Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M31.6116 32.0345C28.8414 32.0117 26.1012 30.7569 24.23 28.658C24.138 28.5531 24.0414 28.439 24.0231 28.2999C23.9909 28.0512 24.2254 27.8367 24.4644 27.8002C24.7058 27.766 24.9426 27.8618 25.1679 27.9577C27.6346 29.0231 29.9725 30.4033 31.6116 32.0345Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M32.338 31.4527C30.3955 29.4907 29.3518 26.6823 29.5265 23.8853C29.5357 23.7462 29.5495 23.5979 29.6369 23.4884C29.7909 23.2899 30.1104 23.3013 30.3035 23.445C30.499 23.5887 30.5978 23.8237 30.6875 24.0496C31.6714 26.534 32.3403 29.1507 32.338 31.4527Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M33.2668 31.5509C33.2898 28.8019 34.5541 26.0825 36.6691 24.2254C36.7748 24.1342 36.8898 24.0384 37.03 24.0201C37.2806 23.9882 37.4967 24.2209 37.5335 24.4581C37.5679 24.6977 37.4714 24.9327 37.3748 25.1562C36.299 27.6042 34.9082 29.9243 33.2668 31.5509Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M33.8529 32.2716C35.8276 30.3438 38.6598 29.3081 41.4782 29.4815C41.6184 29.4906 41.7679 29.5043 41.8782 29.591C42.0782 29.7438 42.0667 30.0609 41.9219 30.2526C41.7771 30.4465 41.5403 30.5446 41.3127 30.6336C38.8092 31.61 36.1724 32.2739 33.8529 32.2716Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M33.7541 33.1935C36.5242 33.2164 39.2644 34.4711 41.1357 36.57C41.2276 36.6749 41.3242 36.789 41.3426 36.9282C41.3748 37.1746 41.1403 37.3913 40.9012 37.4255C40.6598 37.4597 40.4231 37.3639 40.1978 37.2681C37.7288 36.2027 35.3932 34.8225 33.7541 33.1935Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M33.0277 33.775C34.9702 35.737 36.0139 38.5453 35.8392 41.3423C35.83 41.4815 35.8162 41.6298 35.7288 41.7393C35.5748 41.9378 35.2553 41.9263 35.0622 41.7826C34.8668 41.6389 34.7679 41.4039 34.6782 41.1781C33.6943 38.6936 33.0231 36.0769 33.0277 33.775Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M39.9035 37.7651C39.9035 37.7651 43.6253 34.9156 45.7195 34.9704C47.8138 35.0251 48.7885 36.0381 49.4299 36.9232C50.0713 37.8084 51.4138 40.0236 51.0299 43.5712C50.646 47.1188 48.7333 51.9576 46.731 52.6237C44.7287 53.2899 41.5333 52.9386 38.5517 51.0678C35.5701 49.1971 33.6322 48.1819 33.5471 45.6153C33.4621 43.0465 36.9195 39.8138 39.9035 37.7651Z", fill: "#F556AB" }),
                React.createElement("path", { d: "M44.6069 53.0547C42.6621 53.0547 40.4437 52.3908 38.4873 51.1635C38.2782 51.0334 38.0759 50.9057 37.8782 50.7825C35.2483 49.1467 33.5126 48.0653 33.4299 45.6174C33.3448 43.06 36.6827 39.8364 39.8322 37.6736C40.0161 37.5345 43.5471 34.8561 45.6552 34.8561C45.6759 34.8561 45.6988 34.8561 45.7195 34.8561C47.846 34.9132 48.8667 35.9535 49.5195 36.8546C50.4506 38.1413 51.4897 40.3543 51.1402 43.5824C50.9471 45.3756 50.3678 47.4836 49.5885 49.222C48.7172 51.1657 47.7149 52.4114 46.7632 52.7285C46.1126 52.9475 45.3816 53.0547 44.6069 53.0547ZM45.6575 35.0843C43.6184 35.0843 40.0115 37.8288 39.9747 37.8562L39.9701 37.8607C36.8667 39.9893 33.5816 43.1444 33.6644 45.6106C33.7402 47.9376 35.3448 48.9346 38.0046 50.5908C38.2023 50.714 38.4069 50.8418 38.6161 50.9718C41.8713 53.0137 45.0046 53.0798 46.6965 52.5163C48.5977 51.8844 50.5264 47.1825 50.9172 43.5596C51.2575 40.4045 50.246 38.2463 49.3379 36.9892C48.6782 36.0767 47.731 35.1368 45.7172 35.0843C45.6965 35.0843 45.6759 35.0843 45.6575 35.0843Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M41.9011 40.6213C42.3531 40.6213 42.7195 40.2577 42.7195 39.8091C42.7195 39.3606 42.3531 38.9969 41.9011 38.9969C41.4491 38.9969 41.0827 39.3606 41.0827 39.8091C41.0827 40.2577 41.4491 40.6213 41.9011 40.6213Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M41.9011 40.7377C41.3862 40.7377 40.9678 40.3225 40.9678 39.8114C40.9678 39.3004 41.3862 38.8852 41.9011 38.8852C42.416 38.8852 42.8344 39.3004 42.8344 39.8114C42.8344 40.3225 42.416 40.7377 41.9011 40.7377ZM41.9011 39.111C41.5126 39.111 41.1977 39.4236 41.1977 39.8092C41.1977 40.1947 41.5126 40.5073 41.9011 40.5073C42.2896 40.5073 42.6045 40.1947 42.6045 39.8092C42.6068 39.4236 42.2896 39.111 41.9011 39.111Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M47.115 43.3569C47.6203 43.3569 48.03 42.9504 48.03 42.4489C48.03 41.9475 47.6203 41.541 47.115 41.541C46.6097 41.541 46.2001 41.9475 46.2001 42.4489C46.2001 42.9504 46.6097 43.3569 47.115 43.3569Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M47.115 43.4709C46.5472 43.4709 46.0851 43.0123 46.0851 42.4488C46.0851 41.8853 46.5472 41.4268 47.115 41.4268C47.6828 41.4268 48.1449 41.8853 48.1449 42.4488C48.1449 43.0123 47.6828 43.4709 47.115 43.4709ZM47.115 41.6549C46.6736 41.6549 46.315 42.0108 46.315 42.4488C46.315 42.8868 46.6736 43.2427 47.115 43.2427C47.5564 43.2427 47.915 42.8868 47.915 42.4488C47.915 42.0108 47.5564 41.6549 47.115 41.6549Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M42.2966 44.6003C42.7752 44.6003 43.1633 44.2152 43.1633 43.7402C43.1633 43.2652 42.7752 42.8801 42.2966 42.8801C41.8179 42.8801 41.4299 43.2652 41.4299 43.7402C41.4299 44.2152 41.8179 44.6003 42.2966 44.6003Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M42.2966 44.7142C41.7541 44.7142 41.315 44.2762 41.315 43.7401C41.315 43.2017 41.7564 42.7659 42.2966 42.7659C42.8391 42.7659 43.2782 43.204 43.2782 43.7401C43.2782 44.2785 42.8391 44.7142 42.2966 44.7142ZM42.2966 42.9941C41.8828 42.9941 41.5449 43.3294 41.5449 43.7401C41.5449 44.1507 41.8828 44.4861 42.2966 44.4861C42.7104 44.4861 43.0483 44.1507 43.0483 43.7401C43.0483 43.3294 42.7127 42.9941 42.2966 42.9941Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M46.5379 38.8627C47.0166 38.8627 47.4046 38.4777 47.4046 38.0027C47.4046 37.5277 47.0166 37.1426 46.5379 37.1426C46.0593 37.1426 45.6713 37.5277 45.6713 38.0027C45.6713 38.4777 46.0593 38.8627 46.5379 38.8627Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M46.5379 38.9767C45.9954 38.9767 45.5563 38.5387 45.5563 38.0025C45.5563 37.4664 45.9977 37.0284 46.5379 37.0284C47.0782 37.0284 47.5196 37.4664 47.5196 38.0025C47.5196 38.5387 47.0782 38.9767 46.5379 38.9767ZM46.5379 37.2565C46.1242 37.2565 45.7862 37.5919 45.7862 38.0025C45.7862 38.4132 46.1242 38.7485 46.5379 38.7485C46.9517 38.7485 47.2897 38.4132 47.2897 38.0025C47.2897 37.5919 46.9517 37.2565 46.5379 37.2565Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M44.8506 49.8611C45.4626 49.8611 45.9586 49.3687 45.9586 48.7614C45.9586 48.1541 45.4626 47.6618 44.8506 47.6618C44.2386 47.6618 43.7426 48.1541 43.7426 48.7614C43.7426 49.3687 44.2386 49.8611 44.8506 49.8611Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M44.8506 49.975C44.177 49.975 43.6276 49.4297 43.6276 48.7613C43.6276 48.0929 44.177 47.5476 44.8506 47.5476C45.5242 47.5476 46.0736 48.0929 46.0736 48.7613C46.0736 49.4297 45.5242 49.975 44.8506 49.975ZM44.8506 47.7757C44.3035 47.7757 43.8575 48.2183 43.8575 48.7613C43.8575 49.3043 44.3035 49.7469 44.8506 49.7469C45.3977 49.7469 45.8437 49.3043 45.8437 48.7613C45.8437 48.2183 45.3977 47.7757 44.8506 47.7757Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M37.2851 44.8878C37.7104 44.8878 38.0552 44.5456 38.0552 44.1235C38.0552 43.7014 37.7104 43.3593 37.2851 43.3593C36.8597 43.3593 36.515 43.7014 36.515 44.1235C36.515 44.5456 36.8597 44.8878 37.2851 44.8878Z", fill: "#FEF0F7" }),
                React.createElement("path", { d: "M37.2851 45.0017C36.7977 45.0017 36.4 44.607 36.4 44.1234C36.4 43.6397 36.7977 43.2451 37.2851 43.2451C37.7724 43.2451 38.1701 43.6397 38.1701 44.1234C38.1701 44.607 37.7747 45.0017 37.2851 45.0017ZM37.2851 43.4709C36.9242 43.4709 36.6299 43.7629 36.6299 44.1211C36.6299 44.4793 36.9242 44.7713 37.2851 44.7713C37.646 44.7713 37.9402 44.4793 37.9402 44.1211C37.9402 43.7629 37.6483 43.4709 37.2851 43.4709Z", fill: "#FEF0F7" }))),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "50", height: "47.1014", fill: "white", transform: "translate(9 11)" })))));
};

var Icon$Q = function (props) {
    var id = uniqueId("svg");
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("g", { clipPath: "url(#".concat(id, ")") },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.4825 9.78846C44.9985 10.9575 44.934 12.0841 44.3506 13.0946C43.7672 14.105 42.8238 14.7242 41.5534 14.8619C40.2449 15.0037 38.5223 14.6345 36.5148 13.4755C34.5072 12.3164 33.3262 11.0092 32.7948 9.80511C32.2788 8.63603 32.3433 7.50943 32.9267 6.49898C33.5101 5.48854 34.4535 4.86941 35.7239 4.73171C37.0324 4.5899 38.755 4.95904 40.7625 6.1181C42.7701 7.27716 43.9511 8.58438 44.4825 9.78846ZM46.7339 8.79481C45.9315 6.97669 44.3045 5.3214 41.993 3.98688C39.6815 2.65235 37.4345 2.07098 35.4588 2.28512C33.445 2.50338 31.7896 3.54667 30.7955 5.26852C29.8014 6.99038 29.7255 8.94565 30.5434 10.7988C31.3458 12.6169 32.9728 14.2722 35.2843 15.6067C37.5958 16.9412 39.8428 17.5226 41.8185 17.3085C43.8323 17.0902 45.4877 16.0469 46.4818 14.325C47.4759 12.6032 47.5518 10.6479 46.7339 8.79481Z", fill: "#FFAF00" }),
            React.createElement("path", { d: "M39.2061 12.466C39.4779 11.9952 39.3166 11.3932 38.8458 11.1213L37.3879 10.2796C36.9171 10.0078 36.315 10.1691 36.0432 10.6399L33.7667 14.5829C33.4949 15.0537 33.6562 15.6558 34.127 15.9276L35.5849 16.7693C36.0557 17.0411 36.6577 16.8798 36.9296 16.409L39.2061 12.466Z", fill: "#EB8C00" }),
            React.createElement("path", { d: "M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L36.9885 6.30023C36.5177 6.02841 35.9156 6.18972 35.6438 6.66054L34.4249 8.77169C34.1531 9.2425 34.3144 9.84453 34.7852 10.1164L40.2885 13.2937C40.7593 13.5655 41.3614 13.4042 41.6332 12.9334L42.8521 10.8222Z", fill: "#FFAF00" }),
            React.createElement("path", { d: "M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L38.2605 7.03465C37.7897 6.76282 37.1877 6.92413 36.9159 7.39495L35.9418 9.08208C35.67 9.5529 35.8313 10.1549 36.3021 10.4268L40.5333 12.8697C41.0041 13.1415 41.6062 12.9802 41.878 12.5093L42.8521 10.8222Z", fill: "#FFD800" }),
            React.createElement("path", { d: "M42.2502 9.90623C42.3862 9.67082 42.3055 9.3698 42.0701 9.23389L41.2265 8.74685C40.9911 8.61094 40.6901 8.6916 40.5542 8.92701L39.0879 11.4666C38.952 11.702 39.0327 12.0031 39.2681 12.139L40.1117 12.626C40.3471 12.7619 40.6481 12.6813 40.784 12.4458L42.2502 9.90623Z", fill: "#FFE971" }),
            React.createElement("path", { d: "M14.4276 37.9808C19.0474 45.9826 29.0239 48.079 37.1341 43.3966C45.2442 38.7142 48.4169 29.0261 43.7971 21.0244C39.1773 13.0227 29.2008 10.9262 21.0907 15.6086C12.9805 20.291 9.80785 29.9791 14.4276 37.9808Z", fill: "#EB8C00" }),
            React.createElement("path", { d: "M12.9928 35.4957C17.6126 43.4975 27.5891 45.5939 35.6993 40.9115C43.8094 36.2291 46.9821 26.541 42.3623 18.5393C37.7425 10.5375 27.766 8.4411 19.6558 13.1235C11.5457 17.8059 8.37303 27.494 12.9928 35.4957Z", fill: "#FFD800" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.7043 22.6394C12.3316 20.7707 13.3072 19.0005 14.5942 17.4155L44.4474 25.2401C44.6009 27.2114 44.3704 29.1765 43.7923 31.0497L11.7043 22.6394ZM39.463 38.0997C40.3335 37.2422 41.1005 36.3113 41.7564 35.3244L10.887 27.2335C10.8573 28.381 10.9556 29.5386 11.1892 30.6891L39.463 38.0997Z", fill: "#FFE971" }),
            React.createElement("path", { d: "M15.0259 34.3218C19.0448 41.2826 27.6684 43.1382 34.6556 39.1041C41.6428 35.07 44.3477 26.674 40.3288 19.7131C36.31 12.7523 27.6863 10.8967 20.6991 14.9308C13.7119 18.9649 11.0071 27.3609 15.0259 34.3218Z", fill: "#FFC700" }),
            React.createElement("path", { d: "M16.5423 33.2959C20.044 39.3611 27.4985 40.8267 33.6123 37.2969C39.7261 33.7671 42.1841 26.5785 38.6824 20.5134C35.1806 14.4482 27.7262 12.9826 21.6123 16.5124C15.4985 20.0422 13.0406 27.2308 16.5423 33.2959Z", fill: "white" }),
            React.createElement("path", { d: "M19.6485 19.4094C18.7716 20.2171 20.1105 20.7851 21.1076 20.1316C22.9645 18.9145 25.1882 18.2126 27.5811 18.2248C31.0292 18.2423 34.1409 19.7388 36.319 22.1137C37.0584 22.9199 38.4114 22.545 37.8645 21.5976C34.5623 15.878 27.6235 14.4433 21.9702 17.7072C21.1156 18.2006 20.3393 18.7732 19.6485 19.4094Z", fill: "#E7E8E8" }),
            React.createElement("path", { d: "M34.6395 35.043C35.5545 34.2788 34.2368 33.6843 33.2067 34.2845C31.5603 35.2437 29.6432 35.7884 27.5946 35.7783C24.3428 35.7623 21.4084 34.3516 19.3546 32.1127C18.6572 31.3525 17.381 31.706 17.8968 32.5993C21.0104 37.9921 27.5541 39.344 32.8862 36.2656C33.5169 35.9014 34.1025 35.4916 34.6395 35.043Z", fill: "#E7E8E8" }),
            React.createElement("path", { d: "M32.5972 20.6118C32.801 20.2587 32.6801 19.8071 32.3269 19.6033L32.0205 19.4263C31.6673 19.2225 31.2158 19.3434 31.0119 19.6966L28.0893 24.7587C27.8854 25.1118 28.0064 25.5633 28.3595 25.7672L28.666 25.9442C29.0191 26.148 29.4707 26.027 29.6745 25.6739L32.5972 20.6118Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M21.2036 27.5233C20.8098 27.6288 20.576 28.0336 20.6816 28.4275L20.7784 28.789C20.884 29.1828 21.2888 29.4166 21.6826 29.311L26.2569 28.0854C26.6507 27.9798 26.8844 27.575 26.7789 27.1812L26.682 26.8197C26.5765 26.4258 26.1717 26.1921 25.7778 26.2976L21.2036 27.5233Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M25.4809 25.6151C26.244 24.2934 27.8023 23.9359 29.053 24.658C30.3037 25.3801 30.7732 26.9084 30.0101 28.23C29.247 29.5517 27.6887 29.9093 26.438 29.1872C25.1873 28.4651 24.7178 26.9368 25.4809 25.6151Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M17.0126 14.6084C16.4241 14.2686 15.5801 14.6286 15.1275 15.4126L10.989 22.5807C10.5364 23.3647 10.6466 24.2756 11.2351 24.6154L11.8085 24.9464C12.397 25.2862 13.241 24.9262 13.6936 24.1422L17.8321 16.9741C18.2847 16.1901 18.1745 15.2792 17.586 14.9394L17.0126 14.6084Z", fill: "#EB8C00" }),
            React.createElement("path", { d: "M1.87053 28.4667C-1.14632 26.725 -0.193534 19.9443 3.7222 13.162C7.63794 6.37974 13.0338 2.16425 16.0507 3.90603C19.0675 5.64781 18.1147 12.4285 14.199 19.2108C10.2833 25.993 4.88739 30.2085 1.87053 28.4667Z", fill: "#FFC700" }),
            React.createElement("path", { d: "M3.24974 28.6111C0.902471 27.273 2.13775 21.219 5.79373 14.9665C9.44971 8.71396 14.1419 4.63067 16.4892 5.96878C18.8365 7.30688 17.6012 13.3609 13.9452 19.6134C10.2892 25.8659 5.59701 29.9492 3.24974 28.6111Z", fill: "#FFD800" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.32523 23.3938C2.57644 22.2148 2.99217 20.9038 3.55715 19.5196L17.6473 7.92463C17.7625 8.75342 17.6984 9.77478 17.4703 10.9308L2.32523 23.3938ZM15.6081 16.3772C15.9949 15.5396 16.3319 14.7209 16.6159 13.9331L2.04567 25.923C2.0571 26.4661 2.12846 26.9487 2.26274 27.3591L15.6081 16.3772Z", fill: "#FFE971" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: id },
                React.createElement("rect", { width: "48", height: "48", fill: "white", transform: "matrix(-1 0 0 1 48 0)" })))));
};

var Icon$P = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9 14.7902C9 15.555 9.82366 16.0367 10.4903 15.6617L15.4505 12.8716C16.1302 12.4893 16.1302 11.5107 15.4505 11.1284L10.4903 8.33827C9.82366 7.96331 9 8.44502 9 9.20985V14.7902ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$O = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$N = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$M = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$L = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React.createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React.createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React.createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$K = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7.75C12.5 7.33579 12.1642 7 11.75 7C11.3358 7 11 7.33579 11 7.75V13L15.5537 15.8022C15.9106 16.0219 16.3781 15.9106 16.5978 15.5537C16.8192 15.1938 16.7041 14.7225 16.3419 14.5051L12.5 12.2V7.75Z" })));
};

var Icon$J = function (props) {
    var id = uniqueId("svg");
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("g", { clipPath: "url(#".concat(id, ")") },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M43.1934 10.6907C44.0412 9.92381 45.4 10.3246 45.6959 11.4288C45.9144 12.2444 45.4304 13.0827 44.6148 13.3012L38.4955 14.9409L43.1934 10.6907ZM49.112 10.5134C48.1317 6.85481 43.6295 5.52698 40.8207 8.06806L31.0187 16.9358C29.5584 18.2569 30.8604 20.6481 32.7625 20.1385L45.5302 16.7174C48.2324 15.9933 49.8361 13.2157 49.112 10.5134Z", fill: "#7645D9" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.1886 8.0841C29.8078 6.90274 28.3125 6.54189 27.4349 7.41956C26.7866 8.06782 26.7866 9.11885 27.4349 9.7671L32.2987 14.6309L30.1886 8.0841ZM24.7196 4.70427C27.6276 1.79628 32.5818 2.99187 33.8434 6.90609L38.2461 20.5658C38.902 22.6007 36.3796 24.1424 34.8677 22.6306L24.7196 12.4824C22.5717 10.3345 22.5717 6.85214 24.7196 4.70427Z", fill: "#7645D9" }),
            React.createElement("path", { opacity: "0.6", d: "M7.27624 34.0431C7.01094 35.0539 5.57594 35.054 5.31064 34.0431L4.51492 31.0112C4.42182 30.6565 4.14478 30.3794 3.79005 30.2863L0.758148 29.4906C-0.252715 29.2253 -0.252717 27.7903 0.758146 27.525L3.79005 26.7293C4.14478 26.6362 4.42182 26.3591 4.51492 26.0044L5.31064 22.9725C5.57594 21.9616 7.01094 21.9616 7.27624 22.9725L8.07196 26.0044C8.16506 26.3591 8.44209 26.6362 8.79682 26.7293L11.8287 27.525C12.8396 27.7903 12.8396 29.2253 11.8287 29.4906L8.79683 30.2863C8.44209 30.3794 8.16506 30.6565 8.07196 31.0112L7.27624 34.0431Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M9.62029 11.6637C9.62344 12.2763 8.81089 12.494 8.5073 11.9619L7.59673 10.3659C7.4902 10.1791 7.2913 10.0643 7.07631 10.0654L5.23882 10.0748C4.62619 10.078 4.40847 9.26545 4.9406 8.96185L6.53663 8.05128C6.72337 7.94475 6.8382 7.74585 6.8371 7.53087L6.82766 5.69337C6.82451 5.08074 7.63705 4.86302 7.94064 5.39515L8.85121 6.99119C8.95775 7.17792 9.15664 7.29275 9.37163 7.29165L11.2091 7.28221C11.8218 7.27906 12.0395 8.0916 11.5073 8.39519L9.91131 9.30576C9.72458 9.4123 9.60974 9.6112 9.61085 9.82618L9.62029 11.6637Z", fill: "#53DEE9" }),
            React.createElement("path", { opacity: "0.8", d: "M53.8712 15.7857C53.2964 15.6348 53.2964 14.8189 53.8712 14.6681L56.9643 13.8563C57.166 13.8033 57.3235 13.6458 57.3764 13.4441L58.1882 10.351C58.3391 9.77623 59.155 9.77623 59.3058 10.351L60.1176 13.4441C60.1706 13.6458 60.3281 13.8033 60.5298 13.8563L63.6229 14.6681C64.1977 14.8189 64.1977 15.6348 63.6229 15.7857L60.5298 16.5975C60.3281 16.6504 60.1706 16.8079 60.1176 17.0096L59.3058 20.1027C59.155 20.6775 58.3391 20.6775 58.1882 20.1027L57.3764 17.0096C57.3235 16.8079 57.166 16.6504 56.9643 16.5975L53.8712 15.7857Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M51.0823 29.9055C50.3505 27.1742 47.543 25.5533 44.8116 26.2851L17.6112 33.5735C14.8798 34.3053 13.2589 37.1128 13.9908 39.8441L18.546 56.8444C19.2778 59.5758 22.0853 61.1967 24.8167 60.4648L52.0171 53.1765C54.7485 52.4446 56.3694 49.6371 55.6375 46.9058L51.0823 29.9055Z", fill: "url(#paint0_linear_won)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.2737 36.0462L45.4742 28.7579C46.8399 28.392 48.2436 29.2024 48.6095 30.5681L53.1648 47.5684C53.5307 48.934 52.7202 50.3378 51.3546 50.7037L24.1541 57.9921C22.7884 58.358 21.3847 57.5475 21.0187 56.1819L16.4635 39.1816C16.0976 37.8159 16.9081 36.4122 18.2737 36.0462ZM44.8116 26.2851C47.543 25.5533 50.3505 27.1742 51.0823 29.9055L55.6375 46.9058C56.3694 49.6371 54.7485 52.4446 52.0171 53.1765L24.8167 60.4648C22.0853 61.1967 19.2778 59.5758 18.546 56.8444L13.9908 39.8441C13.2589 37.1128 14.8798 34.3053 17.6112 33.5735L44.8116 26.2851Z", fill: "#7645D9" }),
            React.createElement("path", { d: "M35.2297 28.8525L27.1932 31.0059L34.3987 57.8973L42.4352 55.7439L35.2297 28.8525Z", fill: "#7645D9" }),
            React.createElement("path", { d: "M54.5173 42.4023L52.3639 34.3658L15.1113 44.3476L17.2647 52.3841L54.5173 42.4023Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9264 46.3239L31.8613 48.485L32.1926 49.7213L40.2577 47.5603L39.9264 46.3239ZM29.7019 40.4262L37.767 38.2651L37.4358 37.0287L29.3707 39.1898L29.7019 40.4262Z", fill: "#7645D9" })),
            React.createElement("path", { d: "M54.8306 24.9448C55.3795 22.8962 54.1638 20.7906 52.1153 20.2417L17.4965 10.9657C15.448 10.4168 13.3424 11.6324 12.7935 13.681L11.8824 17.081C11.3335 19.1295 12.5492 21.2351 14.5977 21.784L49.2165 31.0601C51.265 31.609 53.3706 30.3933 53.9195 28.3448L54.8306 24.9448Z", fill: "url(#paint1_linear_won)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8339 13.4384L51.4527 22.7145C52.1355 22.8975 52.5408 23.5993 52.3578 24.2822L51.4468 27.6822C51.2638 28.3651 50.5619 28.7703 49.8791 28.5873L15.2603 19.3113C14.5775 19.1283 14.1722 18.4264 14.3552 17.7436L15.2662 14.3435C15.4492 13.6607 16.1511 13.2555 16.8339 13.4384ZM52.1153 20.2417C54.1638 20.7906 55.3795 22.8962 54.8306 24.9448L53.9195 28.3448C53.3706 30.3933 51.265 31.609 49.2165 31.0601L14.5977 21.784C12.5492 21.2351 11.3335 19.1295 11.8824 17.081L12.7935 13.681C13.3424 11.6324 15.448 10.4168 17.4965 10.9657L52.1153 20.2417Z", fill: "#7645D9" }),
            React.createElement("path", { d: "M38.8242 16.6804L30.7877 14.527L27.8889 25.3454L35.9254 27.4988L38.8242 16.6804Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M38.4257 18.0799L30.4256 15.8399L30.7455 14.3999L38.8813 16.6573L38.4257 18.0799Z", fill: "#7645D9" }))),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear_won", x1: "31.2114", y1: "29.9293", x2: "38.4169", y2: "56.8207", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#eb6930" })),
            React.createElement("linearGradient", { id: "paint1_linear_won", x1: "34.8059", y1: "15.6037", x2: "31.9071", y2: "26.4221", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#eb6930" })),
            React.createElement("clipPath", { id: id },
                React.createElement("rect", { width: "64", height: "64", fill: "white" })))));
};

var Icon$I = function (props) {
    var id = uniqueId("svg");
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("g", { clipPath: "url(#".concat(id, ")") },
            React.createElement("path", { d: "M15.9617 4.03476C16.5597 2.82143 15.6818 1.40061 14.2254 1.22477C13.0389 1.08149 11.9708 1.84428 11.8399 2.9285L11.3896 6.65764C11.2976 7.41951 11.899 8.11875 12.7328 8.21943C13.3889 8.29864 14.0166 7.98162 14.286 7.435L15.9617 4.03476Z", fill: "#eb6930" }),
            React.createElement("path", { d: "M6.27612 5.16903C5.36287 4.17118 5.80868 2.56162 7.15782 1.98574C8.25706 1.51653 9.49573 1.95041 9.92446 2.95482L11.3991 6.40949C11.7004 7.11529 11.3184 7.95473 10.546 8.28444C9.93817 8.54388 9.24684 8.41494 8.83541 7.9654L6.27612 5.16903Z", fill: "#eb6930" }),
            React.createElement("path", { d: "M17.0349 9.11691C17.3916 11.6186 15.2219 13.6784 12.2437 14.1031C9.26546 14.5278 6.60649 13.1564 6.24978 10.6548C5.89307 8.15311 8.06278 6.09324 11.041 5.66857C14.0192 5.24391 16.6782 6.61525 17.0349 9.11691Z", fill: "#eb6930" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.53552 12.9725C8.66378 13.937 10.392 14.3672 12.2437 14.1032C14.913 13.7225 16.9328 12.0284 17.0663 9.87986C16.4991 11.4567 14.8084 12.7917 12.6007 13.3832C10.6865 13.8961 8.82955 13.7307 7.53552 12.9725Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M11.1696 9.94964C11.3325 10.6295 11.0911 10.9601 10.717 11.0497C10.343 11.1393 9.97795 10.9541 9.81504 10.2742C9.65212 9.5943 9.89356 9.26377 10.2676 9.17414C10.6417 9.08451 11.0067 9.26973 11.1696 9.94964Z", fill: "#017178" }),
            React.createElement("path", { d: "M14.4407 9.58045C14.4649 10.2792 14.1625 10.555 13.7781 10.5684C13.3937 10.5817 13.0729 10.3275 13.0486 9.62879C13.0243 8.93005 13.3268 8.65422 13.7112 8.64087C14.0956 8.62753 14.4164 8.88172 14.4407 9.58045Z", fill: "#017178" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.3337 10.8946C12.1996 10.9121 12.1051 11.0349 12.1226 11.169C12.1855 11.6513 12.654 11.9486 13.1254 11.8872C13.3584 11.8568 13.563 11.7451 13.7062 11.5832C13.7958 11.4819 13.7863 11.3272 13.685 11.2376C13.5838 11.148 13.429 11.1575 13.3395 11.2588C13.2753 11.3313 13.1788 11.3864 13.0621 11.4016C12.8142 11.4339 12.6305 11.2773 12.6082 11.1057C12.5907 10.9716 12.4678 10.8771 12.3337 10.8946Z", fill: "#017178" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.3339 10.8945C12.1998 10.9119 12.1053 11.0348 12.1228 11.1689C12.1452 11.3405 12.0078 11.539 11.76 11.5713C11.6411 11.5868 11.5319 11.557 11.4508 11.5014C11.3393 11.425 11.1869 11.4535 11.1104 11.565C11.034 11.6765 11.0625 11.8289 11.174 11.9054C11.3555 12.0297 11.586 12.0878 11.8233 12.0569C12.2947 11.9954 12.6712 11.5878 12.6083 11.1056C12.5908 10.9715 12.468 10.877 12.3339 10.8945Z", fill: "#017178" }),
            React.createElement("path", { d: "M9.50991 12.781C9.67816 11.447 8.51926 10.3246 7.21792 10.5612C6.15761 10.7539 5.45717 11.7854 5.65344 12.8651L6.32848 16.5785C6.4664 17.3372 7.1822 17.8424 7.92727 17.7069C8.51353 17.6004 8.9626 17.1204 9.0384 16.5195L9.50991 12.781Z", fill: "#9A6AFF" }),
            React.createElement("path", { d: "M4.93123 13.9946C4.62613 12.6768 3.04713 12.1326 1.80838 12.9183C0.799086 13.5584 0.455077 14.825 1.04002 15.7472L3.05191 18.9192C3.46294 19.5673 4.37109 19.7279 5.08032 19.2781C5.63839 18.9241 5.92368 18.2814 5.78623 17.6877L4.93123 13.9946Z", fill: "#9A6AFF" }),
            React.createElement("path", { d: "M12.3621 17.3922C13.4422 19.6768 11.9781 22.2858 9.25833 23.5716C6.53859 24.8574 3.59314 24.333 2.5131 22.0485C1.43306 19.764 2.89716 17.1549 5.6169 15.8691C8.33664 14.5833 11.2821 15.1077 12.3621 17.3922Z", fill: "#9A6AFF" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.5245 20.1686C11.9455 21.2367 10.9163 22.1811 9.58715 22.8094C6.86742 24.0952 3.92196 23.5709 2.84192 21.2863C2.41234 20.3777 2.38525 19.4177 2.67957 18.51C2.0738 19.6275 1.96092 20.8804 2.51314 22.0485C3.59318 24.333 6.53864 24.8574 9.25837 23.5716C10.8963 22.7972 12.0789 21.5429 12.5245 20.1686Z", fill: "#7645D9" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.75939 18.7345C8.86973 18.6564 9.02253 18.6825 9.10068 18.7928C9.45793 19.2972 9.2815 19.9886 8.77528 20.3471C8.66494 20.4253 8.51213 20.3992 8.43398 20.2889C8.35583 20.1785 8.38193 20.0257 8.49227 19.9476C8.8145 19.7193 8.87726 19.3246 8.7011 19.0758C8.62294 18.9655 8.64904 18.8127 8.75939 18.7345Z", fill: "#452A7A" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.75936 18.7345C8.86971 18.6563 9.02251 18.6824 9.10066 18.7928C9.27683 19.0415 9.67007 19.1133 9.9923 18.8851C10.1026 18.807 10.2554 18.8331 10.3336 18.9434C10.4117 19.0537 10.3856 19.2065 10.2753 19.2847C9.76908 19.6432 9.05832 19.5802 8.70107 19.0758C8.62292 18.9654 8.64902 18.8126 8.75936 18.7345Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M7.26609 18.6401C7.75355 19.1413 7.7149 19.5488 7.43915 19.8169C7.16341 20.0851 6.755 20.1124 6.26755 19.6112C5.7801 19.11 5.81875 18.7025 6.09449 18.4343C6.37023 18.1662 6.77864 18.1389 7.26609 18.6401Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M10.0286 16.8059C10.429 17.3791 10.3252 17.775 10.0099 17.9953C9.69452 18.2156 9.28705 18.1767 8.88668 17.6036C8.48632 17.0304 8.5901 16.6344 8.90543 16.4142C9.22077 16.1939 9.62825 16.2327 10.0286 16.8059Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M15.821 11.1076C15.5183 9.7976 16.5573 8.56337 17.876 8.66668C18.9503 8.75086 19.7518 9.70595 19.6661 10.7999L19.3713 14.5627C19.3111 15.3315 18.6502 15.9067 17.8953 15.8475C17.3012 15.801 16.8058 15.3691 16.6694 14.7789L15.821 11.1076Z", fill: "#FFC700" }),
            React.createElement("path", { d: "M20.4641 11.4595C20.469 10.121 21.7611 9.16422 23.0195 9.56738C24.0448 9.89586 24.6059 11.0053 24.2727 12.0453L23.1267 15.6224C22.8925 16.3532 22.1187 16.7586 21.3982 16.5277C20.8313 16.3461 20.4482 15.8139 20.4504 15.2108L20.4641 11.4595Z", fill: "#FFC700" }),
            React.createElement("path", { d: "M13.6364 16.264C13.1079 18.7351 15.1302 20.9398 18.072 21.569C21.0138 22.1983 23.7611 21.0137 24.2897 18.5427C24.8182 16.0716 22.7959 13.8669 19.854 13.2376C16.9122 12.6084 14.1649 13.793 13.6364 16.264Z", fill: "#FFC700" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.7678 17.3277C18.638 17.2898 18.5021 17.3644 18.4643 17.4942C18.2913 18.0876 18.6839 18.6835 19.2794 18.8571C19.4092 18.8949 19.5451 18.8203 19.583 18.6905C19.6208 18.5607 19.5462 18.4248 19.4164 18.387C19.0373 18.2765 18.8491 17.9238 18.9344 17.6312C18.9722 17.5014 18.8976 17.3655 18.7678 17.3277Z", fill: "#AE5714" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.7679 17.3275C18.6381 17.2897 18.5022 17.3642 18.4643 17.494C18.379 17.7867 18.0308 17.983 17.6517 17.8725C17.5219 17.8347 17.386 17.9092 17.3482 18.039C17.3103 18.1689 17.3849 18.3048 17.5147 18.3426C18.1103 18.5162 18.7615 18.2245 18.9344 17.631C18.9723 17.5012 18.8977 17.3653 18.7679 17.3275Z", fill: "#AE5714" }),
            React.createElement("path", { d: "M17.78 16.2187C17.6338 16.9024 17.2734 17.0965 16.8973 17.016C16.5212 16.9356 16.2717 16.6111 16.4179 15.9274C16.5642 15.2437 16.9245 15.0496 17.3007 15.13C17.6768 15.2105 17.9263 15.535 17.78 16.2187Z", fill: "#AE5714" }),
            React.createElement("path", { d: "M21.344 17.3356C21.0937 17.9884 20.7077 18.1244 20.3485 17.9867C19.9894 17.849 19.7931 17.4897 20.0434 16.8369C20.2937 16.1841 20.6798 16.0482 21.039 16.1859C21.3981 16.3236 21.5943 16.6828 21.344 17.3356Z", fill: "#AE5714" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.9627 18.7486C14.73 19.7089 15.9227 20.4634 17.3569 20.8477C20.2916 21.6341 23.1259 20.5724 23.7898 18.0947C24.0539 17.1092 23.9086 16.1461 23.4531 15.2939C24.2558 16.2986 24.5929 17.5285 24.2534 18.7954C23.5895 21.2731 20.7552 22.3347 17.8205 21.5484C16.0531 21.0748 14.6523 20.0389 13.9627 18.7486Z", fill: "#EB8C00" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: id },
                React.createElement("rect", { width: "24", height: "24", fill: "white", transform: "translate(0.5 0.5)" })))));
};

var Icon$H = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 16" }, props),
        React.createElement("path", { d: "M10.0002 7.33L15.0002 14H3.00018L8.00018 7.33V2H10.0002V7.33ZM12.9602 0H5.04018C4.62018 0 4.39018 0.48 4.65018 0.81L6.00018 2.5V6.67L0.200175 14.4C-0.289825 15.06 0.180175 16 1.00018 16H17.0002C17.8202 16 18.2902 15.06 17.8002 14.4L12.0002 6.67V2.5L13.3502 0.81C13.6102 0.48 13.3802 0 12.9602 0Z" })));
};

var Icon$G = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React.createElement("path", { d: "M76.2856 28.6526C77.0883 29.4553 77.1989 30.7184 76.548 31.6485C64.6385 48.6643 49.9116 63.5221 33.0019 75.5817L31.6665 76.5341C30.6872 77.2325 29.3467 77.121 28.4962 76.2705L22.4847 70.259C26.0334 66.5844 25.9945 60.7286 22.3678 57.1019C18.7411 53.4752 12.8853 53.4362 9.21067 56.985L3.68116 51.4555C2.62962 50.4039 2.77462 48.6597 3.98536 47.7962L5.32156 46.8433C21.8225 35.0751 36.1934 20.5765 47.815 3.97204C48.6291 2.80897 50.296 2.66297 51.2998 3.66682L56.9276 9.29459C53.3922 12.97 53.4356 18.8158 57.0578 22.438C60.6799 26.0601 66.5257 26.1035 70.2011 22.5681L76.2856 28.6526Z", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M78.9507 30.3151L57.459 57.5291L29.6615 78.5708L24.3156 73.1863L22.3868 70.8482L24.3156 68.0575L24.9915 65.2668L24.6194 62.29L23.5031 59.4993L21.6426 57.2668L19.4101 55.7784L16.9915 55.0342H14.0147L10.8519 56.1505L8.99148 57.8249L4.52637 52.4296L11.7898 51.3463C34.3187 47.9863 55.6053 38.8899 73.6048 24.9307L78.9507 30.3151Z", fill: "#A28BD4" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7724 70.5193C19.7732 69.7287 20.0885 68.971 20.6487 68.4131L20.6586 68.4032C23.1622 65.8996 23.1622 61.8405 20.6586 59.3369C18.155 56.8333 14.0958 56.8333 11.5922 59.3369L11.5823 59.3468C11.0245 59.907 10.2667 60.2223 9.47617 60.2231C8.68561 60.2239 7.92718 59.9103 7.36817 59.3512L1.57656 53.5596C-0.776282 51.2068 -0.451848 47.304 2.25722 45.372L3.59342 44.419L5.32184 46.8426L3.98564 47.7955C2.7749 48.659 2.6299 50.4032 3.68144 51.4548L9.47304 57.2464L9.48735 57.232C9.49192 57.2275 9.49649 57.2229 9.50106 57.2183C13.1682 53.5659 19.1019 53.5705 22.7635 57.232C26.4247 60.8933 26.4295 66.8263 22.778 70.4936C22.7731 70.4984 22.7683 70.5033 22.7635 70.5081L22.7491 70.5224L28.4965 76.2698C29.347 77.1203 30.6875 77.2318 31.6668 76.5334L33.0022 75.581C49.9119 63.5214 64.6388 48.6636 76.5483 31.6478C77.1992 30.7178 77.0886 29.4546 76.2859 28.6519L70.2487 22.6148C70.2268 22.6371 70.2047 22.6594 70.1825 22.6816C70.1603 22.7038 70.138 22.7259 70.1156 22.7479C66.4445 26.3475 60.5503 26.3254 56.9064 22.6816C53.2625 19.0376 53.2405 13.1434 56.8404 9.47221C56.8623 9.44989 56.8843 9.42764 56.9064 9.40548C56.9286 9.38329 56.9509 9.36124 56.9733 9.33932L51.3001 3.66613C50.2962 2.66229 48.6293 2.80829 47.8153 3.97136C36.1937 20.5758 21.8228 35.0744 5.32184 46.8426L3.59342 44.419C19.8185 32.8476 33.9492 18.5913 45.3766 2.26445C47.252 -0.415092 51.0922 -0.751452 53.4049 1.56125L59.0781 7.23444C59.64 7.79626 59.9539 8.55937 59.95 9.35389C59.9461 10.1484 59.6247 10.9084 59.0574 11.4647C59.042 11.4798 59.0267 11.495 59.0113 11.5104C56.5077 14.014 56.5077 18.0731 59.0113 20.5767C61.5149 23.0803 65.5741 23.0803 68.0777 20.5767C68.0929 20.5615 68.1081 20.5461 68.1233 20.5306C68.6796 19.9633 69.4396 19.6419 70.2341 19.6381C71.0287 19.6342 71.7918 19.9481 72.3536 20.5099L78.3907 26.547C80.2148 28.3711 80.4662 31.2413 78.987 33.3547C66.8832 50.648 51.9161 65.7482 34.7306 78.0046L33.3952 78.9569C31.2319 80.4997 28.2705 80.2536 26.3916 78.3747L20.6442 72.6273C20.0852 72.0683 19.7715 71.3099 19.7724 70.5193Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9888 14.0672L41.3044 15.3827C41.8856 15.964 41.8856 16.9064 41.3044 17.4876C40.7231 18.0688 39.7808 18.0688 39.1995 17.4876L37.884 16.1721C37.3027 15.5908 37.3027 14.6484 37.884 14.0672C38.4652 13.4859 39.4076 13.4859 39.9888 14.0672Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.5142 19.5926L46.8298 20.9081C47.411 21.4894 47.411 22.4317 46.8298 23.013C46.2485 23.5942 45.3062 23.5942 44.7249 23.013L43.4094 21.6974C42.8281 21.1162 42.8281 20.1738 43.4094 19.5926C43.9906 19.0113 44.933 19.0113 45.5142 19.5926Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.3542 28.5384C51.773 29.1196 50.8306 29.1196 50.2493 28.5384L48.6707 26.9597C48.0894 26.3785 48.0894 25.4361 48.6707 24.8549C49.2519 24.2736 50.1943 24.2736 50.7755 24.8549L52.3542 26.4335C52.9354 27.0148 52.9354 27.9571 52.3542 28.5384Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.8796 34.0638C57.2983 34.645 56.356 34.645 55.7747 34.0638L54.1961 32.4851C53.6148 31.9039 53.6148 30.9615 54.1961 30.3802C54.7773 29.799 55.7197 29.799 56.3009 30.3802L57.8796 31.9589C58.4608 32.5401 58.4608 33.4825 57.8796 34.0638Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.8267 35.9051L63.1423 37.2206C63.7235 37.8019 63.7235 38.7442 63.1423 39.3255C62.561 39.9067 61.6187 39.9067 61.0374 39.3255L59.7219 38.0099C59.1406 37.4287 59.1406 36.4863 59.7219 35.9051C60.3031 35.3238 61.2455 35.3238 61.8267 35.9051Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.3521 41.4305L68.6677 42.746C69.2489 43.3273 69.2489 44.2696 68.6677 44.8509C68.0864 45.4321 67.144 45.4321 66.5628 44.8509L65.2472 43.5353C64.666 42.9541 64.666 42.0117 65.2472 41.4305C65.8285 40.8492 66.7709 40.8492 67.3521 41.4305Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2915 37.1288C30.6927 35.53 30.6927 32.9378 32.2915 31.3389C34.1033 29.5272 37.1152 29.806 38.5636 31.9196L42.2107 37.2416C45.3939 36.2204 48.7719 36.3559 51.0104 38.5945C53.0227 40.6067 53.3281 43.5721 52.6459 46.3981C51.9561 49.256 50.2117 52.2664 47.6467 54.8314C45.0817 57.3964 42.0713 59.1408 39.2134 59.8306C36.3874 60.5128 33.422 60.2073 31.4098 58.1951C29.1842 55.9696 29.0377 52.6168 30.0388 49.4519L24.694 45.7892C22.5804 44.3408 22.3016 41.3289 24.1134 39.5171C25.7122 37.9183 28.3044 37.9183 29.9032 39.5171L33.6067 43.2206C33.9734 42.7908 34.3625 42.3691 34.7735 41.9582C35.1704 41.5613 35.5772 41.1847 35.9918 40.8291L32.2915 37.1288Z", fill: "#633001" }),
        React.createElement("ellipse", { cx: "36.9019", cy: "50.5685", rx: "1.79015", ry: "2.60385", transform: "rotate(-45 36.9019 50.5685)", fill: "#DBCDF9" }),
        React.createElement("ellipse", { rx: "1.79015", ry: "2.60385", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)", fill: "#DBCDF9" })));
};

var Icon$F = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 70 70" }, props),
        React.createElement("path", { d: "M0 0H70V70H0V0Z", fill: "url(#pattern0)" }),
        React.createElement("defs", null,
            React.createElement("pattern", { id: "pattern0", patternContentUnits: "objectBoundingBox", width: "1", height: "1" },
                React.createElement("use", { xlinkHref: "#image0", transform: "scale(0.0078125)" })),
            React.createElement("image", { id: "image0", width: "128", height: "128", xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAMg0lEQVR4Ae2de3ATxx3H3bTTdjI005l2pn+k/zSUtGl5hFAe7QQKTQuEAiGhvEpITNJSQtKGaQCHR0BYZ0NIYAhpSz3QTAiEEmb4IzxCywzYGNsytjExxtYJ8wwPZxpbfkkaQ2x/Oyv55HvpHtJJupN+ntlZ6e4k336/n/3t3u3eKieH/kgBUoAUIAVIAVKAFCAFSAFSgBQgBUgBUkCuAJp2fAMNrkHy7fQ+CxRAg+vr4LnD4Lly8G9+KwuKTEUUFBCZD/AcSwSBIE6m5yrmEwSZbrpQPg3zCQJBpEzNDZhPEJD54f4A9QkyCQQTNV+IAEJOHUOng5CA+QQBmU/NgWMZCN/h47lP+q/xhdqcQO7+0LFiZNuJWxD25aB0wZs/LNt0dGR5ra/5HOAtyHWkGNl20kmo+YCPuwgc/Gq2aem48ial5ofHCApecJwY2XbCSan5kQGiXtQXfC/b9HRUeZNX81nbzzU4SoxsO9kk1vzIVYCPO5FtmjqmvEmt+ZHwD/gKDjlGkGw60aTXfAEAL3c6m3R1RFlTUvMFAHj3DUeIki0nmbKaHwWAA3yFP84WfW1dznhrft/FDfLbuubee7k1thYmG04u3pof3D8bbdxj6K1dY850cQTguS/Q5HogG3S2ZRnjrfnM/JYVD4VT4hC4t9hSnEw/qURqvmC+kCcIQR98BfMzXW9blc+Kmi+YL+QJQhCE1/1MPCLBxz0IvuAf9ASSQfWSYb5FEPTBxxWgxnW/waLkgHdPBc81RyamuEsJAh3lkmm+RRCwDuUd8O5X0eT6vlpxGCDwuqeD504pZyQRBGqahbdZbb6/cDz826ZFO4MCACxPsDkYuKpg8wV83BHw3G7w3EHw7jLwXEhpfHR+IcATBAoIrOzwMYNbuV8geKcWobYm+LfPSC4E0svGATg0tzNQ6IHUSM0feErXoHiR2iS+1BPX7rD5t88hFGqOJIJAUeFss8Hymu/+OYJi8wkC23itOJGUmU8QKLRP+4ZkmB+4JQr7gunynJqDtHufY73542DIfAEGgiB9ECTH/JqBDp9gsl5OEKQeAtuYL8BBEKQOAqtv8rTmj0XgVhw1XzBfyNMBgTcfaHgDqH8dqPsrcP4V4NyfgOoXgLPPApULenFu2cLUuZPk/2R5zWfm36w2H/YF0+V5ohB4NwIN64GLqyOG1r4cMbTmRaDqOcAzDyh/GiibDpyeChRP0khPAFULNyXZktR9veXmu0YjcMNjnfkCDFoQ5A9Hb1kuUL2Y1U6gYo7I0N9omKlltNo+Mj98JzDmHT7Xz5JjvhEIXD9C7/EJFpotB4DM1zf/ehJqvmC+kGtFgqRBkM3mC+1nfR6CHzypOmjTymp+KsxPCwSZZn7xskG4sKJEtXfLOkMV/Z2h0smScBosGmkP81MKQSaaXz7rc+1errztm4SY5m8YheCNCus7fILJenlSmwMyPxwBbGu+AEdSICDztc1PdZsvmB0j7zixVbV58q8bgp6jj0uaMv3oR+Zrm7/+MQSvl6cv7Msg6CzbhZaVP1QA4F87BD1HyPxBsLLNZ+ZfK7OR+bvJ/Fj3DMF6+5lsfvl7ZH62mt9VtQ8tq4ZQ2FcDwOqa37JuBAKXS2wT9ruq95P5asazbRlvfs0BMj915g9H4HKxfWr+uYNoyXs4c8I+Lm16yLJ09a3hqH25NTxZgU1YYKn8KeDMNM109+AkdGwZpUzbxiFYtw+hW2W2SMHze9CxdYzyPLeORs9/J2uWUanBdKD2jzst0z4eHxvdQ3K0H00SP6Zk4PWVv0Pxd3O/qYc4LD0fzSduDJQnUz/PBtZqXwLO/BYEQKaarFauxvUAm310emByCgGgJlSmbWNzCllzXPKE4nY0AZBpZkfL447MO2TT0op/pTBeGIsgAKKCZUifgM0kZpNNz0yPabpgPssJgEwBINy+/wEonWLIeAECAsDOAFz5G/BFiTRdelt6VdWwJjKlXKV9F0zWygkAOwPALqHlf+xSm53zhRWR5whKYrfvWsYL+6wF4PJ2IHBFmq7/S0qsCcH7Pn0D904uc3RiZYj73oYaAI35kZtrmg+NKKfTCYbLc2sBMGGuEVG6j+YqbrmKV/hwwuvuY4utBaByoak2Xm64/L2tAQjsmel4AIJ7noofgBvvyxsAIFsA6GvYCP+GoY4HwO8aBlYWIxEvekx9XuTRsrq87AUguP8Zx5svNFGh/bP1AfByQN1yoGL2QIivW+UwAK7sAO61SdONPfqFl/Udug8/j5aVgxUAdDUeD6/wwVb5sGti5ygYH81XDkb3kVx1HUQDM/L2Gc4DILHRwJ6qPHQVTVYKyNbzc41GKHjbNvMCokvLyWYHhwK3wB5Ri5rfvxI5e8/KxsoYDvUqAzNZCwAThq3IqSaasK3j+Gb7m98PQ8cnmzXL0pY/FF3bhw+E+liXdOWzgQa3NJVO0/9crO9T2W7tVUCc8wH867U7e23/nI9Q103HABDs/AxtO+dqQuBf+7ClRiqih4rZasfkwMcVgecOw8c1RXuhsjbZ8HaLAWhdOxQdR/MdZX60aei6iY7DG8HKIEQxcZ5WAEqfvBeequ+Z0yiZ2oeG/J+C594EzwUNmy6GxSIA2vcuRaDpJFhNigoqb2sd8p6VgZWFlSmtALCxgsp5HlTlzpCYrvYm/MMFkZWt1XuuYtPFry0CoOPoRscbLweXlck0AGdmAudflabT5kb7wmG/4ulmVL84Us3rmNsA133g3VtMRQICICa4cQFgxWVg5bxKFLu+FtNovR39fQRjkYANX/Z9KU2ffaj7WXknkCJA/2BOogBUzL6k56/u/v7Vu86bigTiZsHAawIgxuhdIgCUTQ+iZonhn6zRBAFe90QCoP83BeLsfKa8Caha9JqmqWZ3wsd5kgUBRQCLI0DZjE6z/uoeD75gJQEQfxRIaQSoXPCxrqFmD0BT/khdAJq2Ae110nStiDqBoWakFICa3Dlm/dU9Ht7C7+gCQJeB9rgMPLvoB7qGmj0AwFfAcz2aEBAA1gJwNhe4/bE0lc3SHkNgk0Thus+sv7rH45rr25rms8s9AsBaAAwO6CgGeSqWPqhrqNkD0FT4EwIgxZ3AeAGozp1m1l/d48G7XyIAHAJA5cK9uoaaPQA89x8CwCEAlM36n1l/NY8HXzAcPNdLAKQYgERuBVc9N0/TVKM7w71/H3dC13zqBMbsALKh4ZTeB2B9B6uiALzcGkPmMwB8m4Dr70nTpbfoRlA6AGAQVC44ZrSiqx4Hb0GuodBvYMRPCyIaC7B4LEB89eD5/S5Vc7U24prrm/ByW7VMs3IfAZBEABgMnrlVqPzzA1qeh/ehxnU/vNzz4LnrVhqs911yANoPvY5g21XNNlU+5crO71lZWJlMTwlLpBMojgLsdenUL1H1bBGKl3xXAgJ47i/g3ZvDM4N5LqRnlub+S1uA5iPSdPkd032AsFArB8O/dQo6Kz9wLAidnvfR+vYU1aecDM0KthIAAQg2OZQt3u2Z64Fn/iFHPBfQ/tFrCAXvOAeE4B20H1guqfHi2s9epw0AAYT+3BYAtG8Zi9Y85arbYtHYDzLYOcyLz63zTJGm+a2rBqOde0R7UIcZVPsKELgmTRVz9T8nM1kxViDan2YABpYy6zs5CXcPjEW7+xFV8fybJjgjCgTvwF/4uGoZmOl3PxqHvpMTLTVRy2C9fekBQGsps1MTEdz5qKqAwc/rbR8Fgs116ue+81HglH2MF8BILQAmljLr2j5MIWTrumFgvxtg5xQ+R9ETwawZ63rHwIOgorAsmJOKPDUAxLGUWd+JCWhdrfwRJnG/wAmvW1cPQd+JX9om5MuhSj4A3kIgzqXMAjtGKKKAE0wXn2Pg3RHxm1+zFGi/IE0Vv4v/+1SiTPIBYNeyKv/YyLbuvWMcD0D3vjFxl99ZK4Q0bgQ+XQ5c3QVc3jmQPPPjFqDn6HiEdo9ydOo5Nj7u8jsDgIa1QPViyRr0Rmo3HRPj/r84WibjTqD4+xNaLFpYykxjKXIy2YDJMkMkmtkOALWlzLQKQPviD/9MO9sAoLWUmdjkkl9HVrJkq1kK6fTUxEQQf3+2vU47AEaWMhObwkyX/7FCiI+h18b1SBsAGr8xo2kmAWDcXCMVIbUADAzMaP3GDAGQYMfOiPHCMaxJLZspTRZ3unOgNTAjnIjRnCKAtRHAqO4JHJeDc0uWoHrRKkvS+aVrcfPfuyWpfpXLku+26hzpeyReS6aH0RtSgBQgBUgBUoAUIAVIAVKAFCAFSIFMV+D/lvuuio0sIbYAAAAASUVORK5CYII=" }))));
};

var Icon$E = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.0701 1.01H9.07007V3.01H15.0701V1.01ZM11.0701 14.01H13.0701V8.01H11.0701V14.01ZM19.1001 7.39L20.5201 5.97C20.0901 5.46 19.6201 4.98 19.1101 4.56L17.6901 5.98C16.1401 4.74 14.1901 4 12.0701 4C7.10007 4 3.07007 8.03 3.07007 13C3.07007 17.97 7.09007 22 12.0701 22C17.0501 22 21.0701 17.97 21.0701 13C21.0701 10.89 20.3301 8.94 19.1001 7.39ZM12.0701 20.01C8.20007 20.01 5.07007 16.88 5.07007 13.01C5.07007 9.14 8.20007 6.01 12.0701 6.01C15.9401 6.01 19.0701 9.14 19.0701 13.01C19.0701 16.88 15.9401 20.01 12.0701 20.01Z" })));
};

var Icon$D = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M16.8196 4.04526C17.2184 2.78478 16.2774 1.5 14.9553 1.5C13.8754 1.5 13 2.37543 13 3.45534L13 7.25679C13 8.01243 13.6126 8.625 14.3682 8.625C14.9648 8.625 15.4927 8.2384 15.6727 7.66958L16.8196 4.04526Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M8.05539 4.04526C7.65652 2.78478 8.59753 1.5 9.91962 1.5C10.9995 1.5 11.875 2.37543 11.875 3.45534L11.875 7.25679C11.875 8.01243 11.2624 8.625 10.5067 8.625C9.91013 8.625 9.3823 8.2384 9.2023 7.66958L8.05539 4.04526Z", fill: "#FFD800" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.24713 8.9375L13.4374 8.9375V17.0625H7.96396C7.92764 17.0625 7.89183 17.0625 7.85651 17.0625C7.06169 17.0627 6.51444 17.0629 6.00729 16.9494C4.88983 16.6995 3.90253 16.0491 3.23171 15.1211C2.92726 14.6999 2.71136 14.1971 2.39779 13.4667C2.38385 13.4342 2.36972 13.4013 2.35539 13.368L2.34484 13.3434C2.19078 12.9849 2.05946 12.6793 1.96737 12.4255C1.87345 12.1667 1.79043 11.8847 1.78065 11.583C1.7455 10.4988 2.39693 9.50984 3.40701 9.11409C3.68809 9.00396 3.97989 8.96895 4.25478 8.95306C4.5243 8.93749 4.85692 8.93749 5.24713 8.9375ZM4.36295 10.8249C4.15337 10.837 4.09575 10.858 4.09101 10.8599C3.82001 10.9661 3.64524 11.2314 3.65467 11.5223C3.65483 11.5274 3.65831 11.5886 3.72992 11.7859C3.80127 11.9825 3.91061 12.238 4.0781 12.6278C4.4505 13.4945 4.5838 13.791 4.75127 14.0227C5.15376 14.5795 5.74615 14.9697 6.41662 15.1197C6.6956 15.1821 7.02062 15.1875 7.96396 15.1875H11.5624V10.8125H5.27387C4.84961 10.8125 4.57176 10.8129 4.36295 10.8249Z", fill: "#FFD800" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.637 10.8249C20.4282 10.8129 20.1503 10.8125 19.7261 10.8125H13.4375V15.1875H17.036C17.9793 15.1875 18.3043 15.1821 18.5833 15.1197C19.2538 14.9697 19.8462 14.5795 20.2487 14.0227C20.4161 13.791 20.5494 13.4945 20.9218 12.6278C21.0893 12.238 21.1987 11.9825 21.27 11.7859C21.3416 11.5886 21.3451 11.5274 21.3453 11.5223C21.3547 11.2314 21.1799 10.9661 20.9089 10.8599C20.9042 10.858 20.8466 10.837 20.637 10.8249ZM20.7452 8.95306C21.0201 8.96895 21.3118 9.00396 21.5929 9.11409C22.603 9.50984 23.2544 10.4988 23.2193 11.583C23.2095 11.8847 23.1265 12.1667 23.0326 12.4255C22.9405 12.6793 22.8092 12.9849 22.6551 13.3434L22.6446 13.368C22.6302 13.4013 22.6161 13.4342 22.6022 13.4667C22.2886 14.197 22.0727 14.6999 21.7682 15.1211C21.0974 16.0491 20.1101 16.6995 18.9927 16.9494C18.4855 17.0629 17.9383 17.0627 17.1434 17.0625C17.1081 17.0625 17.0723 17.0625 17.036 17.0625H11.5625V8.9375L19.7528 8.9375C20.143 8.93749 20.4756 8.93749 20.7452 8.95306Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M8.07961 10.8125H4.6577C4.61915 10.8125 4.58174 10.8125 4.5454 10.8125C4.39673 10.5329 4.3125 10.2138 4.3125 9.875C4.3125 9.53623 4.39673 9.21713 4.54539 8.9375C4.57317 8.9375 4.60124 8.9375 4.62961 8.9375L8.07961 8.9375C8.22827 9.21713 8.3125 9.53623 8.3125 9.875C8.3125 10.2138 8.22827 10.5329 8.07961 10.8125Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M8.4231 15.1875L9.18751 17.0104L9.06332 17.0625L7.23815 17.0625C7.0893 17.0626 6.94898 17.0626 6.81591 17.0619L6.01688 15.1564C6.27346 15.1844 6.63759 15.1875 7.3468 15.1875H8.4231Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M16.9204 10.8125H20.3423C20.3809 10.8125 20.4183 10.8125 20.4546 10.8125C20.6033 10.5329 20.6875 10.2138 20.6875 9.875C20.6875 9.53623 20.6033 9.21713 20.4546 8.9375C20.4268 8.9375 20.3988 8.9375 20.3704 8.9375L16.9204 8.9375C16.7717 9.21713 16.6875 9.53623 16.6875 9.875C16.6875 10.2138 16.7717 10.5329 16.9204 10.8125Z", fill: "#EB8C00" }),
        React.createElement("path", { d: "M16.5769 15.1875L15.8125 17.0104L15.9367 17.0625L17.7619 17.0625C17.9107 17.0626 18.051 17.0626 18.1841 17.0619L18.9831 15.1564C18.7266 15.1844 18.3624 15.1875 17.6532 15.1875H16.5769Z", fill: "#EB8C00" }),
        React.createElement("path", { d: "M10.9347 16.6152C10.8361 15.6854 11.5651 14.875 12.5002 14.875C13.4353 14.875 14.1642 15.6853 14.0656 16.6152L13.7087 19.9805C13.6547 20.4891 13.2257 20.875 12.7142 20.875H12.2861C11.7746 20.875 11.3456 20.4891 11.2917 19.9805L10.9347 16.6152Z", fill: "#EB8C00" }),
        React.createElement("path", { d: "M8.875 21.5312C8.875 20.5475 9.67249 19.75 10.6562 19.75H14.3438C15.3275 19.75 16.125 20.5475 16.125 21.5312C16.125 21.8592 15.8592 22.125 15.5312 22.125H9.46875C9.14083 22.125 8.875 21.8592 8.875 21.5312Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M6.88325 14.6524C5.89136 12.0714 5.39541 10.7809 5.56796 9.74082C5.75596 8.6076 6.43705 7.61619 7.42741 7.03418C8.33639 6.5 9.72434 6.5 12.5002 6.5C15.2761 6.5 16.664 6.5 17.573 7.03418C18.5634 7.61619 19.2445 8.6076 19.4325 9.74082C19.605 10.7809 19.1091 12.0714 18.1172 14.6524C17.6137 15.9625 17.362 16.6176 16.9476 17.1125C16.494 17.6543 15.9009 18.0617 15.2324 18.2908C14.6218 18.5 13.9146 18.5 12.5002 18.5C11.0858 18.5 10.3786 18.5 9.768 18.2908C9.09952 18.0617 8.5064 17.6543 8.0528 17.1125C7.63848 16.6176 7.38674 15.9625 6.88325 14.6524Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M17.903 7.86713C18.1516 8.78956 17.8918 9.94993 17.3722 12.2707L17.1257 13.372C16.8386 14.6541 16.6951 15.2952 16.4026 15.8048C15.9154 16.6532 15.1253 17.286 14.1908 17.5761C13.6297 17.7503 12.9728 17.7503 11.6589 17.7503C10.5622 17.7503 10.0139 17.7503 9.52467 17.6202C8.79145 17.4253 8.13341 17.02 7.63037 16.4569C7.76277 16.7161 7.89603 16.9258 8.05248 17.1127C8.50608 17.6545 9.0992 18.062 9.76768 18.291C10.3783 18.5002 11.0855 18.5002 12.4999 18.5002C13.9143 18.5002 14.6215 18.5002 15.2321 18.291C15.9006 18.062 16.4937 17.6545 16.9473 17.1127C17.3616 16.6178 17.6134 15.9627 18.1169 14.6526C19.1088 12.0716 19.6047 10.7811 19.4321 9.74103C19.2442 8.60781 18.5631 7.6164 17.5727 7.0344C17.572 7.034 17.5713 7.0336 17.5707 7.0332C17.7122 7.29512 17.8242 7.57465 17.903 7.86713Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M20.1942 7.55201C20.1249 7.816 19.7501 7.816 19.6808 7.55201L19.308 6.13133C19.2837 6.03869 19.2113 5.96634 19.1187 5.94202L17.698 5.56917C17.434 5.49988 17.434 5.12512 17.698 5.05584L19.1187 4.68298C19.2113 4.65867 19.2837 4.58632 19.308 4.49368L19.6808 3.073C19.7501 2.809 20.1249 2.809 20.1942 3.073L20.567 4.49368C20.5913 4.58632 20.6637 4.65867 20.7563 4.68298L22.177 5.05584C22.441 5.12512 22.441 5.49988 22.177 5.56917L20.7563 5.94202C20.6637 5.96634 20.5913 6.03869 20.567 6.13133L20.1942 7.55201Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M4.46705 4.12184C4.50969 3.95939 4.74031 3.95939 4.78295 4.12184L5.0124 4.99611C5.02736 5.05312 5.07188 5.09764 5.12889 5.1126L6.00316 5.34205C6.16561 5.38469 6.16561 5.61531 6.00316 5.65795L5.12889 5.8874C5.07188 5.90236 5.02736 5.94688 5.0124 6.00389L4.78295 6.87816C4.74031 7.04061 4.50969 7.04061 4.46705 6.87816L4.2376 6.00389C4.22264 5.94688 4.17812 5.90236 4.12111 5.8874L3.24684 5.65795C3.08439 5.61531 3.08439 5.38469 3.24684 5.34205L4.12111 5.1126C4.17812 5.09764 4.22264 5.05312 4.2376 4.99611L4.46705 4.12184Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M5.3257 21.0184C5.2884 21.1605 5.0866 21.1605 5.0493 21.0184L4.84853 20.2534C4.83543 20.2035 4.79648 20.1646 4.74659 20.1515L3.98161 19.9507C3.83946 19.9134 3.83946 19.7116 3.98161 19.6743L4.74659 19.4735C4.79648 19.4604 4.83543 19.4215 4.84853 19.3716L5.0493 18.6066C5.0866 18.4645 5.2884 18.4645 5.3257 18.6066L5.52647 19.3716C5.53957 19.4215 5.57852 19.4604 5.62841 19.4735L6.39339 19.6743C6.53554 19.7116 6.53554 19.9134 6.39339 19.9507L5.62841 20.1515C5.57852 20.1646 5.53957 20.2035 5.52647 20.2534L5.3257 21.0184Z", fill: "#FEED8D" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.13603 7.98393C8.40807 8.2437 8.418 8.67482 8.15822 8.94685L8.04567 9.06471C7.79436 9.32787 7.65414 9.67776 7.65414 10.0416L7.65414 10.2898C7.65414 10.6659 7.34921 10.9708 6.97306 10.9708C6.59692 10.9708 6.29199 10.6659 6.29199 10.2898L6.29199 10.0416C6.29199 9.32735 6.56725 8.64055 7.06056 8.12398L7.17311 8.00611C7.43289 7.73408 7.864 7.72415 8.13603 7.98393Z", fill: "#FEED8D" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.93527 2.21472C10.1387 2.409 10.1461 2.73142 9.95187 2.93487L9.86769 3.02302C9.67974 3.21983 9.57487 3.4815 9.57487 3.75363V3.93921C9.57487 4.22052 9.34682 4.44857 9.06551 4.44857C8.7842 4.44857 8.55615 4.22052 8.55615 3.93921V3.75363C8.55615 3.21944 8.76201 2.70579 9.13094 2.31946L9.21512 2.23131C9.4094 2.02786 9.73183 2.02044 9.93527 2.21472Z", fill: "#FEED8D" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.8469 2.21472C15.0503 2.409 15.0578 2.73142 14.8635 2.93487L14.7793 3.02302C14.5914 3.21983 14.4865 3.4815 14.4865 3.75363V3.93921C14.4865 4.22052 14.2584 4.44857 13.9771 4.44857C13.6958 4.44857 13.4678 4.22052 13.4678 3.93921V3.75363C13.4678 3.21944 13.6736 2.70579 14.0426 2.31946L14.1267 2.23131C14.321 2.02786 14.6434 2.02044 14.8469 2.21472Z", fill: "#FEED8D" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.789 9.61642C12.789 9.0473 13.2462 8.58594 13.8102 8.58594C14.4493 8.58594 14.9313 9.17163 14.814 9.80558L14.5186 11.4019C15.2601 11.7867 15.832 12.412 15.832 13.2088C15.832 13.9251 15.3629 14.5072 14.7441 14.8888C14.1184 15.2747 13.2798 15.5 12.375 15.5C11.4702 15.5 10.6316 15.2747 10.0059 14.8888C9.38712 14.5072 8.91797 13.9251 8.91797 13.2088C8.91797 12.4166 9.48346 11.7938 10.2182 11.4087L9.92155 9.80559C9.80423 9.17163 10.2863 8.58594 10.9254 8.58594C11.4894 8.58594 11.9466 9.04731 11.9466 9.61642L11.9466 10.9347C12.087 10.9235 12.23 10.9177 12.375 10.9177C12.515 10.9177 12.6532 10.9231 12.789 10.9336V9.61642Z", fill: "#FFAF00" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.789 9.15548C12.789 8.58636 13.2462 8.125 13.8102 8.125C14.4493 8.125 14.9313 8.71069 14.814 9.34464L14.5186 10.9409C15.2601 11.3257 15.832 11.9511 15.832 12.7479C15.832 13.4642 15.3629 14.0463 14.7441 14.4279C14.1184 14.8137 13.2798 15.0391 12.375 15.0391C11.4702 15.0391 10.6316 14.8137 10.0059 14.4279C9.38712 14.0463 8.91797 13.4642 8.91797 12.7479C8.91797 11.9557 9.48346 11.3329 10.2182 10.9478L9.92155 9.34465C9.80423 8.7107 10.2863 8.12501 10.9254 8.12501C11.4894 8.12501 11.9466 8.58637 11.9466 9.15548L11.9466 10.4738C12.087 10.4625 12.23 10.4567 12.375 10.4567C12.515 10.4567 12.6532 10.4621 12.789 10.4726V9.15548ZM11.6782 12.3681C11.6782 12.73 11.4783 13.0234 11.2317 13.0234C10.9851 13.0234 10.7852 12.73 10.7852 12.3681C10.7852 12.0061 10.9851 11.7127 11.2317 11.7127C11.4783 11.7127 11.6782 12.0061 11.6782 12.3681ZM13.5861 13.0234C13.8327 13.0234 14.0326 12.73 14.0326 12.368C14.0326 12.0061 13.8327 11.7127 13.5861 11.7127C13.3395 11.7127 13.1396 12.0061 13.1396 12.368C13.1396 12.73 13.3395 13.0234 13.5861 13.0234Z", fill: "#ED8103" })));
};

var Icon$C = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11.9679 9.64868C10.7226 9.64868 9.69678 10.6706 9.69678 11.9514C9.69678 13.2323 10.7227 14.2542 11.9679 14.2542C13.2132 14.2542 14.2391 13.2323 14.2391 11.9514C14.2391 10.6706 13.2132 9.64868 11.9679 9.64868ZM7.69678 11.9514C7.69678 9.58417 9.6 7.64868 11.9679 7.64868C14.3359 7.64868 16.2391 9.58417 16.2391 11.9514C16.2391 14.3187 14.3359 16.2542 11.9679 16.2542C9.6 16.2542 7.69678 14.3187 7.69678 11.9514Z", fill: "#520237" }),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M13.5272 2.38533C14.5639 0.986744 16.5422 0.581616 18.0557 1.473C19.5689 2.3642 20.1291 4.27312 19.4762 5.83823C19.7644 6.20716 20.0346 6.6166 20.2734 6.97846C20.2847 6.99548 20.2958 7.01239 20.3069 7.02919C20.3404 7.0799 20.3692 7.13355 20.3929 7.18947C20.4501 7.32415 20.5109 7.46234 20.5732 7.60405C20.705 7.90365 20.8437 8.21897 20.9698 8.55008C22.6677 8.76186 23.91 10.1888 24.0297 11.8809C24.0314 11.9044 24.0322 11.9279 24.0322 11.9515C24.0322 13.8561 22.6012 15.2963 20.8646 15.4613C20.5102 16.3867 20.0095 17.3 19.3542 18.1016C20.0472 19.6776 19.4922 21.6244 17.9595 22.5271C16.4431 23.4203 14.4599 23.0118 13.4249 21.6065C12.4709 21.7512 11.4591 21.7555 10.5017 21.6193C9.46406 23.0143 7.48836 23.4176 5.97652 22.5271C4.44146 21.623 3.88713 19.6715 4.58509 18.0942C4.2674 17.695 3.99419 17.2811 3.74826 16.9086L3.72529 16.8738C3.70256 16.8394 3.68197 16.8035 3.66366 16.7666C3.46106 16.3574 3.25697 15.9004 3.08118 15.4531C1.27202 15.2438 0 13.6969 0 11.9515C0 10.1416 1.32526 8.75157 3.06029 8.4708C3.41044 7.54829 3.90584 6.63682 4.5546 5.83491C3.90394 4.27042 4.46443 2.36357 5.97652 1.473C7.56669 0.536435 9.51154 1.14451 10.5742 2.38919C11.5581 2.24726 12.5433 2.24597 13.5272 2.38533ZM15.0701 3.67022C15.0292 3.90783 14.9032 4.12482 14.7126 4.27862C14.4772 4.46846 14.1687 4.54165 13.8732 4.47772C12.6656 4.21645 11.4628 4.21645 10.2553 4.47772C9.95976 4.54165 9.65119 4.46846 9.41589 4.27862C9.24612 4.14165 9.12763 3.95457 9.0748 3.74744C9.06518 3.72688 9.05384 3.70166 9.04245 3.67399C8.49482 3.0326 7.57822 2.85075 6.99149 3.19631C6.35182 3.57306 6.09564 4.45597 6.43967 5.15153C6.56609 5.25382 6.66821 5.3874 6.73349 5.54393C6.88883 5.91642 6.80503 6.34578 6.52103 6.63253C5.69455 7.46699 5.0939 8.57801 4.74667 9.71737C4.61841 10.1383 4.23011 10.4259 3.79011 10.4259H3.53868C2.58527 10.5033 2 11.1777 2 11.9515C2 12.7937 2.64449 13.4771 3.50148 13.4771H3.79011C4.2216 13.4771 4.60442 13.7539 4.7397 14.1636C4.90866 14.6754 5.16585 15.287 5.42899 15.8243C5.80893 16.3992 6.13325 16.8789 6.52103 17.2705C6.8803 17.6332 6.90518 18.2023 6.59567 18.5936C6.57073 18.6434 6.52366 18.7318 6.44871 18.8306C6.09125 19.5289 6.3463 20.4238 6.99149 20.8038C7.66286 21.1992 8.5594 20.9758 8.96211 20.3299C9.00353 20.0896 9.13184 19.8706 9.32586 19.7166C9.56484 19.5269 9.87735 19.4566 10.1745 19.5259C11.276 19.7825 12.5638 19.7825 13.6653 19.5259C13.9625 19.4566 14.275 19.5269 14.5139 19.7166C14.6446 19.8203 14.7455 19.9536 14.8101 20.103C14.8641 20.1599 14.9112 20.223 14.9505 20.2909C15.341 20.9667 16.2598 21.2071 16.9445 20.8038C17.5897 20.4238 17.8448 19.5289 17.4873 18.8306C17.4124 18.7318 17.3653 18.6434 17.3403 18.5936C17.0308 18.2023 17.0557 17.6332 17.415 17.2705C18.2415 16.436 18.8421 15.325 19.1893 14.1856C19.3176 13.7647 19.7059 13.4771 20.1459 13.4771H20.5308C21.3309 13.4771 22.014 12.857 22.0319 11.9865C21.9542 11.1206 21.2949 10.523 20.5308 10.523H20.2421C19.7947 10.523 19.4017 10.2258 19.2799 9.79529C19.1531 9.34723 18.9861 8.96657 18.7776 8.49137C18.7178 8.35522 18.6547 8.21131 18.5881 8.05582C18.2071 7.4796 17.895 7.02005 17.6074 6.72967C17.4615 6.58232 17.3219 6.36296 17.2864 6.07598C17.2522 5.79992 17.3287 5.57576 17.3977 5.43647C17.4555 5.31985 17.5332 5.21752 17.5959 5.14476C17.9349 4.45026 17.6783 3.57184 17.0407 3.19631C16.3694 2.8009 15.4728 3.02429 15.0701 3.67022Z", fill: "#520237" })));
};

var Icon$B = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8382 2.20573L16.12 6.82916L21.2222 7.57057C22.9037 7.81489 23.5751 9.88123 22.3584 11.0672L18.6663 14.6661L19.5379 19.7477C19.8251 21.4224 18.0674 22.6995 16.5635 21.9088L11.9998 19.5096L7.43624 21.9088C5.93232 22.6995 4.17457 21.4224 4.4618 19.7477L5.33337 14.6661L1.64134 11.0672C0.424631 9.88125 1.09601 7.8149 2.77747 7.57057L7.87974 6.82916L10.1615 2.20573C10.9135 0.682081 13.0862 0.682068 13.8382 2.20573Z" })));
};

var Icon$z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.17726 8.2193C9.10443 8.36687 8.96365 8.46916 8.80079 8.49282L3.49187 9.26425C3.08176 9.32385 2.918 9.82783 3.21476 10.1171L7.05633 13.8617C7.17418 13.9766 7.22795 14.1421 7.20013 14.3043L6.29326 19.5917C6.22321 20.0002 6.65192 20.3117 7.01873 20.1188L11.7672 17.6224C11.9128 17.5458 12.0869 17.5458 12.2325 17.6224L16.981 20.1188C17.3478 20.3117 17.7765 20.0002 17.7064 19.5917L16.7996 14.3043C16.7718 14.1421 16.8255 13.9766 16.9434 13.8617L20.7849 10.1171C21.0817 9.82783 20.9179 9.32385 20.5078 9.26425L15.1989 8.49282C15.0361 8.46916 14.8953 8.36687 14.8224 8.2193L12.4482 3.4086C12.2648 3.03698 11.7349 3.03698 11.5515 3.4086L9.17726 8.2193ZM16.2669 6.62701L14.2417 2.52347C13.3247 0.665354 10.675 0.665354 9.75801 2.52347L7.73279 6.62701L3.20427 7.28504C1.15372 7.583 0.334945 10.1029 1.81874 11.5493L5.09561 14.7434L4.32204 19.2537C3.97177 21.2959 6.11535 22.8533 7.94942 21.8891L11.9999 19.7597L16.0503 21.8891C17.8844 22.8533 20.0279 21.2959 19.6777 19.2537L18.9041 14.7434L22.181 11.5493C23.6648 10.1029 22.846 7.583 20.7954 7.28504L16.2669 6.62701Z" })));
};

var Icon$y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$x = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11.1955 0.272795C11.6064 -0.0961936 12.2387 -0.0621914 12.6077 0.348741L17.7213 6.04366C17.985 6.33734 18.0513 6.75866 17.8905 7.11913C17.7297 7.4796 17.372 7.71177 16.9773 7.71177H1.02271C0.47042 7.71177 0.0227051 7.26405 0.0227051 6.71177C0.0227051 6.15948 0.47042 5.71177 1.02271 5.71177H14.7353L11.1196 1.68497C10.7506 1.27404 10.7846 0.641784 11.1955 0.272795Z", fill: "#F556AB" }),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M0.109456 10.8807C0.270243 10.5203 0.62802 10.2881 1.02272 10.2881H16.9773C17.5296 10.2881 17.9773 10.7358 17.9773 11.2881C17.9773 11.8404 17.5296 12.2881 16.9773 12.2881H3.26463L6.88042 16.3149C7.24941 16.7258 7.21541 17.3581 6.80447 17.7271C6.39354 18.096 5.76129 18.062 5.3923 17.6511L0.278664 11.9562C0.0149574 11.6625 -0.0513306 11.2412 0.109456 10.8807Z", fill: "#F556AB" })));
};

var Icon$w = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 6.49999C14.76 6.49999 17 8.73999 17 11.5C17 12.01 16.9 12.5 16.76 12.96L19.82 16.02C21.21 14.79 22.31 13.25 23 11.49C21.27 7.10999 17 3.99999 12 3.99999C10.73 3.99999 9.51 4.19999 8.36 4.56999L10.53 6.73999C11 6.59999 11.49 6.49999 12 6.49999ZM2.71 3.15999C2.32 3.54999 2.32 4.17999 2.71 4.56999L4.68 6.53999C3.06 7.82999 1.77 9.52999 1 11.5C2.73 15.89 7 19 12 19C13.52 19 14.97 18.7 16.31 18.18L19.03 20.9C19.42 21.29 20.05 21.29 20.44 20.9C20.83 20.51 20.83 19.88 20.44 19.49L4.13 3.15999C3.74 2.76999 3.1 2.76999 2.71 3.15999ZM12 16.5C9.24 16.5 7 14.26 7 11.5C7 10.73 7.18 9.99999 7.49 9.35999L9.06 10.93C9.03 11.11 9 11.3 9 11.5C9 13.16 10.34 14.5 12 14.5C12.2 14.5 12.38 14.47 12.57 14.43L14.14 16C13.49 16.32 12.77 16.5 12 16.5ZM14.97 11.17C14.82 9.76999 13.72 8.67999 12.33 8.52999L14.97 11.17Z" })));
};

var Icon$v = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 4C7 4 2.73 7.11 1 11.5C2.73 15.89 7 19 12 19C17 19 21.27 15.89 23 11.5C21.27 7.11 17 4 12 4ZM12 16.5C9.24 16.5 7 14.26 7 11.5C7 8.74 9.24 6.5 12 6.5C14.76 6.5 17 8.74 17 11.5C17 14.26 14.76 16.5 12 16.5ZM12 8.5C10.34 8.5 9 9.84 9 11.5C9 13.16 10.34 14.5 12 14.5C13.66 14.5 15 13.16 15 11.5C15 9.84 13.66 8.5 12 8.5Z" })));
};

var Icon$u = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M3.63 3.63C3.24 4.02 3.24 4.65 3.63 5.04L7.29 8.7L7 9H4C3.45 9 3 9.45 3 10V14C3 14.55 3.45 15 4 15H7L10.29 18.29C10.92 18.92 12 18.47 12 17.58V13.41L16.18 17.59C15.69 17.96 15.16 18.27 14.58 18.5C14.22 18.65 14 19.03 14 19.42C14 20.14 14.73 20.6 15.39 20.33C16.19 20 16.94 19.56 17.61 19.02L18.95 20.36C19.34 20.75 19.97 20.75 20.36 20.36C20.75 19.97 20.75 19.34 20.36 18.95L5.05 3.63C4.66 3.24 4.03 3.24 3.63 3.63ZM19 12C19 12.82 18.85 13.61 18.59 14.34L20.12 15.87C20.68 14.7 21 13.39 21 12C21 8.17 18.6 4.89 15.22 3.6C14.63 3.37 14 3.83 14 4.46V4.65C14 5.03 14.25 5.36 14.61 5.5C17.18 6.54 19 9.06 19 12ZM10.29 5.71L10.12 5.88L12 7.76V6.41C12 5.52 10.92 5.08 10.29 5.71ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V9.76L16.48 12.24C16.49 12.16 16.5 12.08 16.5 12Z" })));
};

var Icon$t = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M3 10V14C3 14.55 3.45 15 4 15H7L10.29 18.29C10.92 18.92 12 18.47 12 17.58V6.41C12 5.52 10.92 5.07 10.29 5.7L7 9H4C3.45 9 3 9.45 3 10ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 4.45V4.65C14 5.03 14.25 5.36 14.6 5.5C17.18 6.53 19 9.06 19 12C19 14.94 17.18 17.47 14.6 18.5C14.24 18.64 14 18.97 14 19.35V19.55C14 20.18 14.63 20.62 15.21 20.4C18.6 19.11 21 15.84 21 12C21 8.16 18.6 4.89 15.21 3.6C14.63 3.37 14 3.82 14 4.45Z" })));
};

var Icon$s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Icon$r = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M17.65 6.35C16.02 4.72 13.71 3.78 11.17 4.04C7.50002 4.41 4.48002 7.39 4.07002 11.06C3.52002 15.91 7.27002 20 12 20C15.19 20 17.93 18.13 19.21 15.44C19.53 14.77 19.05 14 18.31 14C17.94 14 17.59 14.2 17.43 14.53C16.3 16.96 13.59 18.5 10.63 17.84C8.41002 17.35 6.62002 15.54 6.15002 13.32C5.31002 9.44 8.26002 6 12 6C13.66 6 15.14 6.69 16.22 7.78L14.71 9.29C14.08 9.92 14.52 11 15.41 11H19C19.55 11 20 10.55 20 10V6.41C20 5.52 18.92 5.07 18.29 5.7L17.65 6.35Z" })));
};

var Icon$q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 200 200" }, props),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M60.5625 95.9185C56.0665 95.9185 52.4219 92.2738 52.4219 87.7779L52.4219 55.2155C52.4219 29.1392 73.5609 8.00013 99.6373 8.00013C125.714 8.00013 146.853 29.1392 146.853 55.2155L146.853 66.2867C146.853 70.7826 143.208 74.4273 138.712 74.4273C134.216 74.4273 130.572 70.7826 130.572 66.2867L130.572 55.2155C130.572 38.131 116.722 24.2813 99.6373 24.2813C82.5528 24.2813 68.703 38.131 68.703 55.2155L68.703 87.7779C68.703 92.2738 65.0584 95.9185 60.5625 95.9185Z", fill: "#3E2412" }),
        React.createElement("path", { d: "M28 94.2901C28 87.0966 33.8315 81.2651 41.0249 81.2651H158.249C165.443 81.2651 171.274 87.0966 171.274 94.2901V178.952C171.274 186.146 165.443 191.977 158.249 191.977H41.0249C33.8315 191.977 28 186.146 28 178.952V94.2901Z", fill: "#FFD884" }),
        React.createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "28", y: "81", width: "144", height: "111" },
            React.createElement("path", { d: "M28 94.2901C28 87.0966 33.8315 81.2651 41.0249 81.2651H158.249C165.443 81.2651 171.274 87.0966 171.274 94.2901V178.952C171.274 186.146 165.443 191.977 158.249 191.977H41.0249C33.8315 191.977 28 186.146 28 178.952V94.2901Z", fill: "#FFD884" })),
        React.createElement("g", { mask: "url(#mask0)" },
            React.createElement("path", { d: "M41.025 191.977L171.274 191.977L28.0001 81.2651L28.0001 178.952C28.0001 186.146 33.8315 191.977 41.025 191.977Z", fill: "#FFBF41" })),
        React.createElement("path", { d: "M48 113.828C48 106.634 53.8315 100.803 61.0249 100.803H139.175C146.368 100.803 152.2 106.634 152.2 113.828V159.415C152.2 166.608 146.368 172.44 139.175 172.44H61.0249C53.8315 172.44 48 166.608 48 159.415V113.828Z", fill: "#EC7725" }),
        React.createElement("path", { d: "M111.034 139.063C111.034 145.807 105.567 151.274 98.8229 151.274C92.0791 151.274 86.6121 145.807 86.6121 139.063C86.6121 132.319 92.0791 126.852 98.8229 126.852C105.567 126.852 111.034 132.319 111.034 139.063Z", fill: "white" }),
        React.createElement("path", { d: "M94.7527 143.133H102.893V159.414H94.7527V143.133Z", fill: "white" })));
};

var ExpandableButton = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React.createElement(IconButton, { "aria-label": "Hide or show expandable content", onClick: onClick },
        children,
        expanded ? React.createElement(Icon$1d, { color: "invertedContrast" }) : React.createElement(Icon$1g, { color: "invertedContrast" })));
};
ExpandableButton.defaultProps = {
    expanded: false,
};
var ExpandableLabel = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React.createElement(Button, { variant: "text", "aria-label": "Hide or show expandable content", onClick: onClick, endIcon: expanded ? React.createElement(Icon$1d, { color: "primary" }) : React.createElement(Icon$1g, { color: "primary" }) }, children));
};
ExpandableLabel.defaultProps = {
    expanded: false,
};

var Box = styled.div(templateObject_1$R || (templateObject_1$R = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), background, border, layout, position, space);
var templateObject_1$R;

var Flex = styled(Box)(templateObject_1$Q || (templateObject_1$Q = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), flexbox);
var templateObject_1$Q;

var variants$2 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$2.INFO : _b;
    switch (variant) {
        case variants$2.DANGER:
            return theme.colors.failure;
        case variants$2.WARNING:
            return theme.colors.warning;
        case variants$2.SUCCESS:
            return theme.colors.success;
        case variants$2.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$2.INFO; }
    switch (variant) {
        case variants$2.DANGER:
            return Icon$1B;
        case variants$2.WARNING:
            return Icon$1C;
        case variants$2.SUCCESS:
            return Icon$1D;
        case variants$2.INFO:
        default:
            return Icon$1A;
    }
};
var IconLabel = styled.div(templateObject_1$P || (templateObject_1$P = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled.div(templateObject_2$n || (templateObject_2$n = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? "".concat(withHandlerSpacing, "px") : "12px");
});
var CloseHandler = styled.div(templateObject_3$b || (templateObject_3$b = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled(Flex)(templateObject_4$8 || (templateObject_4$8 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React.createElement(StyledAlert, null,
        React.createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React.createElement(Icon, { color: "currentColor", width: "24px" })),
        React.createElement(Details, { hasHandler: !!onClick },
            React.createElement(Text, { bold: true }, title),
            typeof children === "string" ? React.createElement(Text, { as: "p" }, children) : children),
        onClick && (React.createElement(CloseHandler, null,
            React.createElement(IconButton, { scale: "sm", variant: "text", onClick: onClick },
                React.createElement(Icon$1c, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$P, templateObject_2$n, templateObject_3$b, templateObject_4$8;

var scales$7 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow$1 = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$7.MD : _b;
    switch (scale) {
        case scales$7.SM:
            return "32px";
        case scales$7.LG:
            return "48px";
        case scales$7.MD:
        default:
            return "40px";
    }
};
var Input$1 = styled.input(templateObject_1$O || (templateObject_1$O = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input$1.defaultProps = {
    scale: scales$7.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$O;

var StyledBalanceInput = styled(Box)(templateObject_1$N || (templateObject_1$N = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.inputSecondary;
}, function (_a) {
    var theme = _a.theme, isWarning = _a.isWarning;
    return theme.shadows[isWarning ? "warning" : "inset"];
});
var StyledInput$1 = styled(Input$1)(templateObject_2$m || (templateObject_2$m = __makeTemplateObject(["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: right;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"], ["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: right;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var templateObject_1$N, templateObject_2$m;

var BalanceInput = function (_a) {
    var value = _a.value, _b = _a.placeholder, placeholder = _b === void 0 ? "0.0" : _b, onUserInput = _a.onUserInput, currencyValue = _a.currencyValue, inputProps = _a.inputProps, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, props = __rest(_a, ["value", "placeholder", "onUserInput", "currencyValue", "inputProps", "isWarning"]);
    var handleOnChange = function (e) {
        if (e.currentTarget.validity.valid) {
            onUserInput(e.currentTarget.value.replace(/,/g, "."));
        }
    };
    return (React.createElement(StyledBalanceInput, __assign({ isWarning: isWarning }, props),
        React.createElement(StyledInput$1, __assign({ pattern: "^[0-9]*[.,]?[0-9]*$", inputMode: "decimal", min: "0", value: value, onChange: handleOnChange, placeholder: placeholder }, inputProps)),
        currencyValue && (React.createElement(Text, { fontSize: "12px", textAlign: "right", color: "textSubtle" }, currencyValue))));
};

var Separator = styled.div(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled.ul(templateObject_2$l || (templateObject_2$l = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArray(__spreadArray([], accum, true), [item], false);
        }
        return __spreadArray(__spreadArray([], accum, true), [
            React.createElement(Separator, { "aria-hidden": true, key: "seperator-".concat(index) }, separator),
            item,
        ], false);
    }, []);
};
var DefaultSeparator = React.createElement(Icon$1e, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = Children.toArray(children).filter(function (child) { return isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React.createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React.createElement("li", { key: "child-".concat(index) }, item)); })));
};
var templateObject_1$M, templateObject_2$l;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants$3.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled.div(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", ";\n  display: inline-flex;\n\n  a{\n    height: ", ";\n    text-align: center;\n    // margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: ", ";\n  display: inline-flex;\n\n  a{\n    height: ", ";\n    text-align: center;\n    // margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor, function (_a) {
    var isMobile = _a.isMobile;
    return isMobile ? '24px' : '16px';
}, function (_a) {
    var isMobile = _a.isMobile;
    return isMobile ? '42px' : '32px';
});
var templateObject_1$L;

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return "".concat(breakpoint, "px"); });
var mediaQueries$1 = {
    xs: "@media screen and (min-width: ".concat(breakpointMap.xs, "px)"),
    sm: "@media screen and (min-width: ".concat(breakpointMap.sm, "px)"),
    md: "@media screen and (min-width: ".concat(breakpointMap.md, "px)"),
    lg: "@media screen and (min-width: ".concat(breakpointMap.lg, "px)"),
    xl: "@media screen and (min-width: ".concat(breakpointMap.xl, "px)"),
    nav: "@media screen and (min-width: ".concat(breakpointMap.lg, "px)"),
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #FFFFFF, 0px 0px 0px 4px rgba(255,145,0, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #FFFFFF, 0px 0px 0px 4px rgba(255,145,0, 0.4)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries$1,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: ".concat(prevMinWidth, "px)"), _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: ".concat(minWidth, "px) and (max-width: ").concat(breakpoint, "px)"), _b));
    }, {});
})();
var getKey = function (size) { return "is".concat(size.charAt(0).toUpperCase()).concat(size.slice(1)); };
var useMatchBreakpoints = function () {
    var _a = useState(function () {
        return Object.keys(mediaQueries).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries).map(function (size) {
            var mql = window.matchMedia(mediaQueries[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(".concat(imgSrc, ")");
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = "".concat(width, "px");
    particle.style.height = "".concat(height, "px");
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(".concat(x, "px, ").concat(y, "px) rotate(0deg)"),
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(".concat(x + destinationX, "px, ").concat(y + destinationY, "px) rotate(").concat(rotation, "deg)"),
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = useCallback(function () {
        return debounce(function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var useKonamiCheatCode = function (matchedCodeHandler) {
    useEffect(function () {
        var pattern = [
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
        ];
        var currentIndex = 0;
        var onKeyUpHandler = function (event) {
            var key = event.key;
            // is key in correct order otherwise reset
            if (key !== pattern[currentIndex]) {
                currentIndex = 0;
                return;
            }
            currentIndex += 1;
            if (pattern.length === currentIndex) {
                currentIndex = 0;
                matchedCodeHandler();
            }
        };
        document.addEventListener("keyup", onKeyUpHandler);
        return function () { return document.removeEventListener("keyup", onKeyUpHandler); };
    }, [matchedCodeHandler]);
};

var baseColors = {
    failure: "#FFFFFF",
    primary: "#FFFFFF",
    primaryBright: "#53DEE9",
    primaryDark: "#0098A1",
    secondary: "#7645D9",
    success: "#31D0AA",
    warning: "#FFB237",
};
var brandColors = {
    binance: "#F0B90B",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#FAF9FA", backgroundDisabled: "#E9EAEB", backgroundAlt: "#FFFFFF", cardBorder: "#E7E3EB", contrast: "#191326", dropdown: "#F6F6F6", dropdownDeep: "#EEEEEE", invertedContrast: "#FFFFFF", input: "#FEF0F7", inputSecondary: "#d7caec", tertiary: "#FEF0F7", text: "#210216", textDisabled: "#BDC2C4", textSubtle: "#FFFFFF", borderColor: "#E9EAEB", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
        inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
        cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
        blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
        violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
        violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    }, meta: '#BAA2B1', head: '#7E1D5E', buttonActive: '#FFC2E3', yellow: '#ECA947', cardHeading: '#520237' });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#9A6AFF", background: "#100C18", backgroundDisabled: "#C2C2C2", backgroundAlt: "#213A6C", cardBorder: "#383241", contrast: "#FFFFFF", dropdown: "#1E1D20", dropdownDeep: "#100C18", invertedContrast: "#191326", input: "#483f5a", inputSecondary: "#66578D", primaryDark: "#0098A1", tertiary: "#344e85", text: "#E8E8E8", textDisabled: "#fff", textSubtle: "#FFFFFF", borderColor: "#6d727c", card: "#213A6C", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
        inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
        cardHeader: "#213A6C",
        blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
        violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
        violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    }, meta: '#BAA2B1', head: '#FFFFFF', buttonActive: '#FFFFFF', yellow: '#ECA947', cardHeading: '#E8E8E8', tabButton: '#4E82D2' });

var light$7 = {
    background: lightColors.backgroundAlt,
};
var dark$7 = {
    background: darkColors.backgroundAlt,
};

var light$6 = {
    background: lightColors.backgroundAlt,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: {
        default: lightColors.gradients.cardHeader,
        blue: lightColors.gradients.blue,
        violet: lightColors.gradients.violet,
    },
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$6 = {
    background: darkColors.backgroundAlt,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: {
        // default: darkColors.gradients.cardHeader,
        blue: darkColors.gradients.blue,
        violet: darkColors.gradients.violet,
    },
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$5 = {
    handleBackground: lightColors.backgroundAlt,
    handleShadow: lightColors.textDisabled,
};
var dark$5 = {
    handleBackground: darkColors.backgroundAlt,
    handleShadow: darkColors.textDisabled,
};

var light$4 = {
    handleBackground: lightColors.backgroundAlt,
};
var dark$4 = {
    handleBackground: darkColors.backgroundAlt,
};

var light$3 = {
    handleBackground: lightColors.backgroundAlt,
};
var dark$3 = {
    handleBackground: darkColors.backgroundAlt,
};

var light$2 = {
    background: lightColors.card,
    hover: "#EEEAF4",
};
var dark$2 = {
    background: darkColors.card,
    hover: "#473d5d",
};

var light$1 = {
    background: lightColors.card,
};
var dark$1 = {
    background: darkColors.card,
};

var light = {
    background: darkColors.backgroundAlt,
    text: darkColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};
var dark = {
    background: lightColors.backgroundAlt,
    text: lightColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark$7, colors: darkColors, card: dark$6, toggle: dark$3, nav: dark$2, modal: dark$1, pancakeToggle: dark$5, radio: dark$4, tooltip: dark });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light$7, colors: lightColors, card: light$6, toggle: light$3, nav: light$2, modal: light$1, pancakeToggle: light$5, radio: light$4, tooltip: light });

var Arrow = styled.div(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"], ["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.tooltip.background;
});
var StyledTooltip = styled.div(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["\n  padding: 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 16px;\n  max-width: 320px;\n  z-index: 10;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"], ["\n  padding: 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 16px;\n  max-width: 320px;\n  z-index: 10;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.tooltip.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.tooltip.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.tooltip.boxShadow;
}, Arrow, Arrow, Arrow, Arrow);
var templateObject_1$K, templateObject_2$k;

function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
var invertTheme = function (currentTheme) {
    if (currentTheme.isDark) {
        return lightTheme;
    }
    return darkTheme;
};
var useTooltip = function (content, options) {
    var _a = options.placement, placement = _a === void 0 ? "auto" : _a, _b = options.trigger, trigger = _b === void 0 ? "hover" : _b, _c = options.arrowPadding, arrowPadding = _c === void 0 ? 16 : _c, _d = options.tooltipPadding, tooltipPadding = _d === void 0 ? { left: 16, right: 16 } : _d, _e = options.tooltipOffset, tooltipOffset = _e === void 0 ? [0, 10] : _e;
    var _f = useState(null), targetElement = _f[0], setTargetElement = _f[1];
    var _g = useState(null), tooltipElement = _g[0], setTooltipElement = _g[1];
    var _h = useState(null), arrowElement = _h[0], setArrowElement = _h[1];
    var _j = useState(false), visible = _j[0], setVisible = _j[1];
    var isHoveringOverTooltip = useRef(false);
    var hideTimeout = useRef();
    var hideTooltip = useCallback(function (e) {
        var hide = function () {
            e.stopPropagation();
            e.preventDefault();
            setVisible(false);
        };
        if (trigger === "hover") {
            if (hideTimeout.current) {
                window.clearTimeout(hideTimeout.current);
            }
            if (e.target === tooltipElement) {
                isHoveringOverTooltip.current = false;
            }
            if (!isHoveringOverTooltip.current) {
                hideTimeout.current = window.setTimeout(function () {
                    if (!isHoveringOverTooltip.current) {
                        hide();
                    }
                }, 100);
            }
        }
        else {
            hide();
        }
    }, [tooltipElement, trigger]);
    var showTooltip = useCallback(function (e) {
        e.stopPropagation();
        e.preventDefault();
        setVisible(true);
        if (trigger === "hover") {
            if (e.target === targetElement) {
                // If we were about to close the tooltip and got back to it
                // then prevent closing it.
                clearTimeout(hideTimeout.current);
            }
            if (e.target === tooltipElement) {
                isHoveringOverTooltip.current = true;
            }
        }
    }, [tooltipElement, targetElement, trigger]);
    var toggleTooltip = useCallback(function (e) {
        e.stopPropagation();
        setVisible(!visible);
    }, [visible]);
    // Trigger = hover
    useEffect(function () {
        if (targetElement === null || trigger !== "hover")
            return undefined;
        if (isTouchDevice()) {
            targetElement.addEventListener("touchstart", showTooltip);
            targetElement.addEventListener("touchend", hideTooltip);
        }
        else {
            targetElement.addEventListener("mouseenter", showTooltip);
            targetElement.addEventListener("mouseleave", hideTooltip);
        }
        return function () {
            targetElement.removeEventListener("touchstart", showTooltip);
            targetElement.removeEventListener("touchend", hideTooltip);
            targetElement.removeEventListener("mouseenter", showTooltip);
            targetElement.removeEventListener("mouseleave", showTooltip);
        };
    }, [trigger, targetElement, hideTooltip, showTooltip]);
    // Keep tooltip open when cursor moves from the targetElement to the tooltip
    useEffect(function () {
        if (tooltipElement === null || trigger !== "hover")
            return undefined;
        tooltipElement.addEventListener("mouseenter", showTooltip);
        tooltipElement.addEventListener("mouseleave", hideTooltip);
        return function () {
            tooltipElement.removeEventListener("mouseenter", showTooltip);
            tooltipElement.removeEventListener("mouseleave", hideTooltip);
        };
    }, [trigger, tooltipElement, hideTooltip, showTooltip]);
    // Trigger = click
    useEffect(function () {
        if (targetElement === null || trigger !== "click")
            return undefined;
        targetElement.addEventListener("click", toggleTooltip);
        return function () { return targetElement.removeEventListener("click", toggleTooltip); };
    }, [trigger, targetElement, visible, toggleTooltip]);
    // Handle click outside
    useEffect(function () {
        if (trigger !== "click")
            return undefined;
        var handleClickOutside = function (_a) {
            var target = _a.target;
            if (target instanceof Node) {
                if (tooltipElement != null &&
                    targetElement != null &&
                    !tooltipElement.contains(target) &&
                    !targetElement.contains(target)) {
                    setVisible(false);
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () { return document.removeEventListener("mousedown", handleClickOutside); };
    }, [trigger, targetElement, tooltipElement]);
    // Trigger = focus
    useEffect(function () {
        if (targetElement === null || trigger !== "focus")
            return undefined;
        targetElement.addEventListener("focus", showTooltip);
        targetElement.addEventListener("blur", hideTooltip);
        return function () {
            targetElement.removeEventListener("focus", showTooltip);
            targetElement.removeEventListener("blur", hideTooltip);
        };
    }, [trigger, targetElement, showTooltip, hideTooltip]);
    // On small screens Popper.js tries to squeeze the tooltip to available space without overflowing beyound the edge
    // of the screen. While it works fine when the element is in the middle of the screen it does not handle well the
    // cases when the target element is very close to the edge of the screen - no margin is applied between the tooltip
    // and the screen edge.
    // preventOverflow mitigates this behaviour, default 16px paddings on left and right solve the problem for all screen sizes
    // that we support.
    // Note that in the farm page where there are tooltips very close to the edge of the screen this padding works perfectly
    // even on the iPhone 5 screen (320px wide), BUT in the storybook with the contrived example ScreenEdges example
    // iPhone 5 behaves differently overflowing beyound the edge. All paddings are identical so I have no idea why it is,
    // and fixing that seems like a very bad use of time.
    var _k = usePopper(targetElement, tooltipElement, {
        placement: placement,
        modifiers: [
            {
                name: "arrow",
                options: { element: arrowElement, padding: arrowPadding },
            },
            { name: "offset", options: { offset: tooltipOffset } },
            { name: "preventOverflow", options: { padding: tooltipPadding } },
        ],
    }), styles = _k.styles, attributes = _k.attributes;
    var tooltip = (React.createElement(StyledTooltip, __assign({ ref: setTooltipElement, style: styles.popper }, attributes.popper),
        React.createElement(ThemeProvider, { theme: invertTheme }, content),
        React.createElement(Arrow, { ref: setArrowElement, style: styles.arrow })));
    return {
        targetRef: setTargetElement,
        tooltip: tooltip,
        tooltipVisible: visible,
    };
};

var ButtonMenu$1 = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.scale, scale = _c === void 0 ? scales$8.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$3.PRIMARY : _d, onItemClick = _a.onItemClick, children = _a.children, style = _a.style;
    var _e = useMatchBreakpoints(), isSm = _e.isSm, isXs = _e.isXs, isLg = _e.isLg, isMd = _e.isMd; _e.isXl;
    var isMobile = isXs || isSm || isLg || isMd;
    return (React.createElement(StyledButtonMenu, { variant: variant, isMobile: isMobile, style: style }, Children.map(children, function (child, index) {
        return cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            scale: scale,
            variant: variant,
        });
    })));
};

var InactiveButton = styled(Button)(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  box-shadow: none;\n  a{\n    height: ", ";\n    text-align: center;\n  }\n \n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n  box-shadow: none;\n  a{\n    height: ", ";\n    text-align: center;\n  }\n \n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return (variant === variants$3.TAB_BUTTON ? theme.colors.contrast : theme.colors.textSubtle);
}, function (_a) {
    var isMobile = _a.isMobile;
    return isMobile ? '42px' : '32px';
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? variants$3.TAB_BUTTON : _c, as = _a.as, props = __rest(_a, ["isActive", "variant", "as"]);
    var _d = useMatchBreakpoints(), isSm = _d.isSm, isXs = _d.isXs, isLg = _d.isLg, isMd = _d.isMd; _d.isXl;
    var isMobile = isXs || isSm || isLg || isMd;
    if (!isActive) {
        return React.createElement(InactiveButton, __assign({ isMobile: isMobile, forwardedAs: as, variant: variant }, props));
    }
    return React.createElement(Button, __assign({ as: as, variant: variant }, props));
};
var templateObject_1$J;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled.div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$I;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React.createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled.div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$H;

var CardHeader = styled.div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  background: ", ";\n  ", "\n"], ["\n  background: ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "default" : _b;
    return theme.card.cardHeaderBackground[variant];
}, space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$G;

var CardFooter = styled.div(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$F;

var StyledCardRibbon = styled.div(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  z-index: 1;\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ", ";\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform: ", ";\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  z-index: 1;\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ", ";\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform: ", ";\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var ribbonPosition = _a.ribbonPosition;
    return (ribbonPosition === "right" ? 0 : "auto");
}, function (_a) {
    var ribbonPosition = _a.ribbonPosition;
    return ribbonPosition === "right"
        ? "translateX(30%) translateY(0%) rotate(45deg)"
        : "translateX(0%) translateY(200%) rotate(-45deg)";
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text, ribbonPosition = _a.ribbonPosition, props = __rest(_a, ["variantColor", "text", "ribbonPosition"]);
    return (React.createElement(StyledCardRibbon, __assign({ variantColor: variantColor, ribbonPosition: ribbonPosition }, props),
        React.createElement("div", { title: text }, text)));
};
CardRibbon.defaultProps = {
    ribbonPosition: "right",
};
var templateObject_1$E;

var scales$6 = {
    SM: "sm",
    MD: "md",
};

var getScale$3 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$6.SM:
            return "24px";
        case scales$6.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled.input.attrs({ type: "checkbox" })(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale$3, getScale$3, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales$6.MD,
};
var templateObject_1$D;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled.div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container$4 = styled.div(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React.createElement(Container$4, null,
        target,
        React.createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$C, templateObject_2$j;

var bunnyFall = keyframes(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"])));
var Bunny = styled.div(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"], ["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"])), function (_a) {
    var position = _a.position;
    return "".concat(position, "vw");
}, bunnyFall, function (_a) {
    var duration = _a.duration;
    return "".concat(duration, "s");
}, function (_a) {
    var iterations = _a.iterations;
    return (Number.isFinite(iterations) ? String(iterations) : "infinite");
}, function (_a) {
    var duration = _a.duration;
    return "".concat((duration / 10) * 1.3, "s");
}, function (_a) {
    var duration = _a.duration;
    return "".concat((duration / 10) * 1.5, "s");
}, function (_a) {
    var duration = _a.duration;
    return "".concat((duration / 10) * 1.7, "s");
}, function (_a) {
    var duration = _a.duration;
    return "".concat((duration / 10) * 2.7, "s");
}, function (_a) {
    var duration = _a.duration;
    return "".concat((duration / 10) * 3.5, "s");
}, function (_a) {
    var duration = _a.duration;
    return "".concat((duration / 10) * 5.5, "s");
}, function (_a) {
    var duration = _a.duration;
    return "".concat((duration / 10) * 8, "s");
});
var FallingBunnies = function (_a) {
    var _b = _a.count, count = _b === void 0 ? 30 : _b, _c = _a.size, size = _c === void 0 ? 32 : _c, _d = _a.iterations, iterations = _d === void 0 ? Infinity : _d, _e = _a.duration, duration = _e === void 0 ? 10 : _e;
    var bunnies = __spreadArray([], Array(count), true).map(function (_, index) { return (React.createElement(Bunny, { key: String(index), position: Math.random() * 100, iterations: iterations, duration: duration },
        React.createElement(Icon$11, { width: size, height: size }))); });
    return React.createElement("div", null, bunnies);
};
var templateObject_1$B, templateObject_2$i;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var scales$5 = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$3;
var style = (_a$3 = {},
    _a$3[scales$5.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a$3[scales$5.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a$3[scales$5.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a$3[scales$5.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a$3);
var Heading = styled(Text).attrs({ bold: true })(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var scale = _a.scale;
    return style[scale || scales$5.MD].fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var scale = _a.scale;
    return style[scale || scales$5.MD].fontSizeLg;
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$A;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper$3 = styled.div(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, space);
var templateObject_1$z;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = useRef(null);
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"".concat(src, "\")");
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React.createElement(Wrapper$3, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled.img(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled.div(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = useRef(null);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React.createElement(Wrapper$3, __assign({ ref: imgRef }, otherProps), isLoaded ? React.createElement(StyledImage, { src: src, alt: alt }) : React.createElement(Placeholder, null)));
};
var templateObject_1$y, templateObject_2$h;

var GridLayout$1 = styled.div(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$x;

var GridLayout = styled(GridLayout$1)(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$w;

var StyledLink$1 = styled(Text)(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React.createElement(StyledLink$1, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$v;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(Link, __assign({ external: true }, props),
        children,
        React.createElement(Icon$T, { color: "primary", ml: "4px" })));
};

var NotificationDotRoot = styled.span(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  display: inline-flex;\n  position: relative;\n"], ["\n  display: inline-flex;\n  position: relative;\n"])));
var Dot = styled.span(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"], ["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? "inline-flex" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var NotificationDot = function (_a) {
    var _b = _a.show, show = _b === void 0 ? false : _b, children = _a.children, props = __rest(_a, ["show", "children"]);
    return (React.createElement(NotificationDotRoot, null,
        Children.map(children, function (child) { return cloneElement(child, props); }),
        React.createElement(Dot, { show: show })));
};
var templateObject_1$u, templateObject_2$g;

var scales$4 = {
    SM: "sm",
    MD: "md",
};

var scaleKeyValues$1 = {
    sm: {
        pancakeSize: "16px",
        travelDistance: "16px",
        toggleHeight: "20px",
        toggleWidth: "36px",
        pancakeThickness: "1px",
        pancakeTwoOffset: "0px",
        pancakeThreeOffset: "-3px",
        butterTop: "3px",
        butterLeft: "10px",
        butterWidth: "6px",
        butterHeight: "5px",
        butterThickness: "0.5px",
        butterRadius: "2px",
        butterSmearOneTop: "10px",
        butterSmearOneLeft: "2.5px",
        butterSmearTwoTop: "11px",
        butterSmearTwoRight: "2.5px", // these values adjust the position of it
    },
    md: {
        pancakeSize: "32px",
        travelDistance: "34px",
        toggleHeight: "40px",
        toggleWidth: "72px",
        pancakeThickness: "2px",
        pancakeTwoOffset: "-3px",
        pancakeThreeOffset: "-8px",
        butterTop: "3px",
        butterLeft: "16px",
        butterWidth: "12px",
        butterHeight: "11px",
        butterThickness: "1px",
        butterRadius: "4px",
        butterSmearOneTop: "20px",
        butterSmearOneLeft: "5px",
        butterSmearTwoTop: "22px",
        butterSmearTwoRight: "5px",
    },
};
var getScale$2 = function (property) { return function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$4.MD : _b;
    return scaleKeyValues$1[scale][property];
}; };
var PancakeStack = styled.div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n\n  &:label:before {\n    content: none;\n  }\n\n  .pancakes {\n    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n\n  .pancake {\n    background: #e27c31;\n    border-radius: 50%;\n    width: ", ";\n    height: ", ";\n    position: absolute;\n    transition: 0.4s ease;\n    top: 2px;\n    left: 4px;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n  }\n\n  .pancake:nth-child(1) {\n    background: ", ";\n    box-shadow: 0 ", " 0 ", "\n      ", ";\n  }\n\n  .pancake:nth-child(2) {\n    left: 0;\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3) {\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3):before,\n  .pancake:nth-child(3):after {\n    content: \"\";\n    position: absolute;\n    background: #ef8927;\n    border-radius: 20px;\n    width: 50%;\n    height: 20%;\n  }\n\n  .pancake:nth-child(3):before {\n    top: ", ";\n    left: ", ";\n  }\n\n  .pancake:nth-child(3):after {\n    top: ", ";\n    right: ", ";\n  }\n\n  .butter {\n    width: ", ";\n    height: ", ";\n    background: #fbdb60;\n    top: ", ";\n    left: ", ";\n    position: absolute;\n    border-radius: ", ";\n    box-shadow: 0 ", " 0 ", " #d67823;\n    transform: scale(0);\n    transition: 0.2s ease;\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n\n  &:label:before {\n    content: none;\n  }\n\n  .pancakes {\n    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n\n  .pancake {\n    background: #e27c31;\n    border-radius: 50%;\n    width: ", ";\n    height: ", ";\n    position: absolute;\n    transition: 0.4s ease;\n    top: 2px;\n    left: 4px;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n  }\n\n  .pancake:nth-child(1) {\n    background: ", ";\n    box-shadow: 0 ", " 0 ", "\n      ", ";\n  }\n\n  .pancake:nth-child(2) {\n    left: 0;\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3) {\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3):before,\n  .pancake:nth-child(3):after {\n    content: \"\";\n    position: absolute;\n    background: #ef8927;\n    border-radius: 20px;\n    width: 50%;\n    height: 20%;\n  }\n\n  .pancake:nth-child(3):before {\n    top: ", ";\n    left: ", ";\n  }\n\n  .pancake:nth-child(3):after {\n    top: ", ";\n    right: ", ";\n  }\n\n  .butter {\n    width: ", ";\n    height: ", ";\n    background: #fbdb60;\n    top: ", ";\n    left: ", ";\n    position: absolute;\n    border-radius: ", ";\n    box-shadow: 0 ", " 0 ", " #d67823;\n    transform: scale(0);\n    transition: 0.2s ease;\n  }\n"])), getScale$2("pancakeSize"), getScale$2("pancakeSize"), getScale$2("pancakeThickness"), getScale$2("pancakeThickness"), function (_a) {
    var theme = _a.theme;
    return theme.pancakeToggle.handleBackground;
}, getScale$2("pancakeThickness"), getScale$2("pancakeThickness"), function (_a) {
    var theme = _a.theme;
    return theme.pancakeToggle.handleShadow;
}, getScale$2("pancakeTwoOffset"), getScale$2("pancakeThreeOffset"), getScale$2("butterSmearOneTop"), getScale$2("butterSmearOneLeft"), getScale$2("butterSmearTwoTop"), getScale$2("butterSmearTwoRight"), getScale$2("butterWidth"), getScale$2("butterHeight"), getScale$2("butterTop"), getScale$2("butterLeft"), getScale$2("butterRadius"), getScale$2("butterThickness"), getScale$2("butterThickness"));
var PancakeInput = styled.input(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  height: 40px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 40px;\n\n  &:focus + label {\n    box-shadow: ", ";\n  }\n\n  &:checked + label .pancakes {\n    transform: translateX(", ");\n  }\n\n  &:checked + label .pancake:nth-child(1) {\n    background: #e27c31;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(2) {\n    transform: scale(1);\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(3) {\n    transform: scale(1);\n    transition-delay: 0.4s;\n  }\n\n  &:checked + label .butter {\n    transform: scale(1);\n    transition-delay: 0.6s;\n  }\n"], ["\n  height: 40px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 40px;\n\n  &:focus + label {\n    box-shadow: ", ";\n  }\n\n  &:checked + label .pancakes {\n    transform: translateX(", ");\n  }\n\n  &:checked + label .pancake:nth-child(1) {\n    background: #e27c31;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(2) {\n    transform: scale(1);\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(3) {\n    transform: scale(1);\n    transition-delay: 0.4s;\n  }\n\n  &:checked + label .butter {\n    transform: scale(1);\n    transition-delay: 0.6s;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, getScale$2("travelDistance"), getScale$2("pancakeThickness"), getScale$2("pancakeThickness"));
var PancakeLabel = styled.label(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  display: inline-block;\n  border-radius: 50px;\n  position: relative;\n  transition: all 0.3s ease;\n  transform-origin: 20% center;\n  cursor: pointer;\n"], ["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  display: inline-block;\n  border-radius: 50px;\n  position: relative;\n  transition: all 0.3s ease;\n  transform-origin: 20% center;\n  cursor: pointer;\n"])), getScale$2("toggleWidth"), getScale$2("toggleHeight"), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$t, templateObject_2$f, templateObject_3$a;

var PancakeToggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales$4.MD : _b, props = __rest(_a, ["checked", "scale"]);
    return (React.createElement(PancakeStack, { scale: scale },
        React.createElement(PancakeInput, __assign({ id: props.id || "pancake-toggle", scale: scale, type: "checkbox", checked: checked }, props)),
        React.createElement(PancakeLabel, { scale: scale, checked: checked, htmlFor: props.id || "pancake-toggle" },
            React.createElement("div", { className: "pancakes" },
                React.createElement("div", { className: "pancake" }),
                React.createElement("div", { className: "pancake" }),
                React.createElement("div", { className: "pancake" }),
                React.createElement("div", { className: "butter" })))));
};
PancakeToggle.defaultProps = {
    scale: scales$4.MD,
};

var variants$1 = {
    ROUND: "round",
    FLAT: "flat",
};
var scales$3 = {
    MD: "md",
    SM: "sm",
};

var _a$2, _b$1;
var styleVariants$1 = (_a$2 = {},
    _a$2[variants$1.ROUND] = {
        borderRadius: "32px",
    },
    _a$2[variants$1.FLAT] = {
        borderRadius: 0,
    },
    _a$2);
var styleScales = (_b$1 = {},
    _b$1[scales$3.MD] = {
        height: "16px",
    },
    _b$1[scales$3.SM] = {
        height: "8px",
    },
    _b$1);

var Bar = styled.div(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 100%;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 100%;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.primary : "".concat(props.theme.colors.primary, "80")); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled.div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonActive;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, Bar, function (_a) {
    var variant = _a.variant;
    return (variant === variants$1.FLAT ? "0" : "32px");
}, function (_a) {
    var variant = _a.variant;
    return (variant === variants$1.FLAT ? "0" : "32px");
}, variant$1({
    variants: styleVariants$1,
}), variant$1({
    prop: "scale",
    variants: styleScales,
}), space);
var templateObject_1$s, templateObject_2$e;

var ProgressBunnyWrapper = styled.div(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$r;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? variants$1.ROUND : _b, _c = _a.scale, scale = _c === void 0 ? scales$3.MD : _c, _d = _a.primaryStep, primaryStep = _d === void 0 ? 0 : _d, _e = _a.secondaryStep, secondaryStep = _e === void 0 ? null : _e, _f = _a.showProgressBunny, showProgressBunny = _f === void 0 ? false : _f;
    return (React.createElement(StyledProgress, { variant: variant, scale: scale },
        showProgressBunny && (React.createElement(ProgressBunnyWrapper, { style: { left: "".concat(stepGuard(primaryStep), "%") } },
            React.createElement(Icon$L, null))),
        React.createElement(Bar, { primary: true, style: { width: "".concat(stepGuard(primaryStep), "%") } }),
        secondaryStep ? React.createElement(Bar, { style: { width: "".concat(stepGuard(secondaryStep), "%") } }) : null));
};

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled.input.attrs({ type: "radio" })(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$q;

var bunnyHeadMain = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2247px%22%20height%3D%2247px%22%20viewBox%3D%220%200%2047%2047%22%20enable-background%3D%22new%200%200%2047%2047%22%20xml%3Aspace%3D%22preserve%22%3E%20%20%3Cimage%20id%3D%22image0%22%20width%3D%2247%22%20height%3D%2247%22%20x%3D%220%22%20y%3D%220%22%20%20%20%20href%3D%22data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAAABGdBTUEAALGPC%2FxhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA%2FwD%2FAP%2BgvaeTAAAHcUlEQVRo3s2Ze3BVVxXGf%2BvckwfJjSEQ8iIJFKjpGKFQCoXIIHSGUqAz2LFgqXYYkYdjdWrVqTNOsWFaHG3VPrCAlNZxWnEoFaF0wFo7YgMS3hAUUUAKhF7SpJAQEpJ7z97LPwLxkntvcu8lPL6Z%2Fc8%2Ba%2B%2Fz7bW%2Bvc7e6wjXiGFvbR6Q6U8pFtE7HbUVVnWkCIOBHFF1VcQTaFT4CHUOGrU7cGU%2FIrU1U%2B%2BrB9Fk3y3JDrxry5YRojxl1U4UJBs0Pd6xCu2INDmwXa1duu%2BBB%2FZef%2FKVlc7I0ffcL2IXotwvkJbs4sMQFHhfrLNqz%2F6d71JZaXud%2FKiNfy5CvN%2BJtZN6gXB0MiI7rcdX9n95xsneIa8qozb8aZ5gn1bRYtHkpRYHG0UJiLB0b7D118yebZImX7ZxY1amcRej9nuA77qRjmRlFOcVx0v98d7ZU5pimbndzeEPuSstds519XZ0%2BBD7HXWCA4GHYq8xCspe25iVkeWsFNVHbjDpKAzljzbFP%2B%2FAg5MbI1fYFapScuToM6K6SKwKCjezqXKH44X8geFl77F1q3ZLftTtY%2Bb51P4Ei3OziaMgFhHV0aX9BjacWf%2F73VcF5Srir20sclytBkpulkpiQgioyMR9j848dqXL6XyoKo5P31SlGKvceo0CMfo6lZWdnDtlM6p09DSx5qlbQedRm1XB6qCC7IJDZ99Z%2By8IS5WOMQu7RionPZU014cq1LVcAiDFceif0XEqaPcM59uCAPRNSyU9Jb5PQUvQozkYSko9DiwA%2FtChJGD0sg3D1TW7Ra8%2Bq7w8o4KK0gJCxjJ%2B1YaOCBXl8urMiQBsOxngu5t3ALB0yhimDotvq6ypOcovtx9KijxC0LHOPbsfe%2FCAA6A%2B8yMxmhahs%2FDEFN5%2FBRrenwABJXntG01FzDOA%2BEb%2FfE2u4DyP4u%2Bqs6A1HPnkPDtP11Hz8acdedcq51rb2HW6jj219Zz49AIohIzhaEMje8%2FUU5rjx5%2BaEjv0IhRnZTK2OA%2FPWAJNrQnp31qKiqY%2B%2FBvX%2BNxin9HsaC%2F54EhtRF9dUyu%2F3fXviP6qYwGqCJDm%2Bpg0pIh8f0ZM8uX5%2FSjP7wfAxbYQ%2B07VJ6gcSVfsMNfFNxzrxX2R6HFi00VuPUEVsYkMAFBXxTfC1ZBXIRp98KNj7%2BD2vL4YqyzZvBOAwf2zmDe%2BPOa0PhEGZmdG9AeaWnilqgaAitsKmV4%2BGIApny1haP%2BOwD%2F%2FwT6aLwXjc5Jjxrii3EmMld9dmkfFkEJCxrLk3WoActLTmPa5QQl6Ci60BXnvHx13jJw%2B6Z3ky%2FJzKMvPAWDZXw%2FQHGcURCl3MXpbzDCHR%2BRKNkn2uqxhGSkWwQSyloiWyphn1wSxGjU1FPbNJCM1BVXlv%2FUdd4L0FJeBOX4ARpbk8sPpY68aE%2FQMle9Uc%2BKy%2FctzJjHgMxm0hTxqz18EILtPGgOy%2BkS8b8aLG6hvbo2PvCMhF4Mby5uBcy0RfW3tHsfPNgKQ748kYFU509DcaeNZ27noYXl9448OPZq6LtZ6qKb0ZDwoNzKb5mVFpkMRoTA7g9b2js%2B%2F6zg9Td2J4r5%2BMlwXz1oC5y9itRuNihgZu%2FiNAFYLupvU53P4%2B5Kvxk3iWvHx%2BYvMXbGZC63tsY0c%2BcTF2o%2BwdEseSeTb3wvQKEeRSJxysRzE6rhoT8tLc%2BmXmY6TQOh7A%2BkpLuOHFdLaHqLNM%2Bw5FiBCQaqHXQw7RHVRtEm%2BMXkE48oG3lDiADn%2BdJ6ePQGAusYWZj23HtMlCirObtd6oRpXnDY0stboiOC7wV6Hjk3vE%2BnkIFYREyZdwVPLQdeEnFrXNRdQIshXHTrJ6fqmuF44rqyY0rzsuGzDUXOijiO1DTGfN7cGUWO66F%2FaQp49LoCMe3z1WlGddS3eWjJ3MlPuGprwuBWbdvHGX2oSGqMiW6pfmj%2FDBdRaWepgZ4pqarLkRZM8NyhgE8hmIsEgLAa0s%2FRR8a1VG8DOTJZ8Xk4m%2Fj6Jr%2F3chUs0XmyL297C%2B9XLv3kfhNcq1XtVLEmTr29oJrErxf%2BRUCFUZHW0cfKFRcursFohYRG5VaCIIuzavuqx8Vw%2B24ZXiTUY1Dlpjm7nFqyYCVqn6s0l7FAe4eEJ83%2B1UIwuB71x9fieqRsr8oPtr3%2F7xfDeCIKnhmYeKE0tzRKr41FugeqZqDi6cltzwRIOr%2Bu%2BSszhw1pYPq3aEYY6quWiHT8bb1pDN4Va7OO16%2BZH3FK63ZgTv%2FbCWygP3YwNfHmDbvrwzSdiZsBuDy4t7RkLFF5C1UM7Kv03ooliQFeE2vXr3fGLw6Mqkx7%2BxSKFxSCF1zMKiihonRX5WZVXsox11%2FA3MBwTHnlhiGvMatDJ14s8SLWHzN229vv%2Fics60dm%2FOOv5LwksELgXtFf%2BgFvYirL6b28%2F%2BTYJFFeSlsDEWT8dLuo8K8pkhHSh50t8JxRPhTYV%2BdA6LK5a%2B%2BS%2BZDhcs34nTX%2BuQNIZasWOcHDuRvTzKCWI5KK4oAahQVRPW5x%2Fgt2D4x40xne8av0TZxPxdFf8D7%2BHafbqX10WAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTEyLTEwVDA3OjI4OjM3KzAwOjAw8CEyxgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0xMi0xMFQwNzoyODozNyswMDowMIF8inoAAAAASUVORK5CYII%3D%22%20%2F%3E%3C%2Fsvg%3E";

var bunnyButt = "data:image/svg+xml,%3Csvg%20width%3D%2215%22%20height%3D%2232%22%20viewBox%3D%220%200%2015%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M9.58803%2020.8649C7.72935%2021.3629%208.02539%2024.0334%208.76388%2026.7895C9.50238%2029.5456%2010.5812%2032.0062%2012.4399%2031.5082C14.2986%2031.0102%2015.2334%2028.0099%2014.4949%2025.2538C13.7564%2022.4978%2011.4467%2020.3669%209.58803%2020.8649Z%22%20fill%3D%22%230098A1%22%2F%3E%3Cpath%20d%3D%22M1%2024.4516C1%2020.8885%203.88849%2018%207.45161%2018H15V28H4.54839C2.58867%2028%201%2026.4113%201%2024.4516Z%22%20fill%3D%22%23eb6930%22%2F%3E%3Cpath%20d%3D%22M6.11115%2017.2246C6.79693%2018.4124%205.77784%2019.3343%204.52793%2020.0559C3.27802%2020.7776%201.97011%2021.1992%201.28433%2020.0114C0.598546%2018.8236%201.1635%2017.1151%202.41341%2016.3935C3.66332%2015.6718%205.42537%2016.0368%206.11115%2017.2246Z%22%20fill%3D%22%2353DEE9%22%2F%3E%3Cpath%20d%3D%22M1.64665%2023.6601C0.285995%2025.0207%201.87759%2027.1854%203.89519%2029.203C5.91279%2031.2206%208.07743%2032.8122%209.43808%2031.4515C10.7987%2030.0909%2010.1082%2027.0252%208.09058%2025.0076C6.07298%2022.99%203.0073%2022.2994%201.64665%2023.6601Z%22%20fill%3D%22%23eb6930%22%2F%3E%3C%2Fsvg%3E";

var getCursorStyle = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    return disabled ? "not-allowed" : "cursor";
};
// background-image: url(${isMax ? bunnyHeadMax : bunnyHeadMain});
var getBaseThumbStyles = function (_a) {
    _a.isMax; var disabled = _a.disabled;
    return "\n  -webkit-appearance: none;\n  background-image: url(".concat(bunnyHeadMain, ");\n  background-color: transparent;\n  border: 0;\n  cursor: ").concat(getCursorStyle, ";\n  width: 24px;\n  height: 30px;\n  filter: ").concat(disabled ? "grayscale(100%)" : "none", ";\n  transform: translate(-2px, -2px);\n  transition: 200ms transform;\n  background-size: contain;\n  background-position: 0px 5px;\n  background-repeat: no-repeat;\n\n  &:hover {\n    transform: ").concat(disabled ? "scale(1) translate(-2px, -2px)" : "scale(1.1) translate(-3px, -3px)", ";\n  }\n");
};
var SliderLabelContainer = styled.div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  bottom: 0;\n  position: absolute;\n  //left: 14px;\n  width: calc(100% - 15px);\n"], ["\n  bottom: 0;\n  position: absolute;\n  //left: 14px;\n  width: calc(100% - 15px);\n"])));
var SliderLabel = styled(Text)(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  bottom: 0;\n  font-size: 12px;\n  left: ", ";\n  position: absolute;\n  text-align: center;\n  min-width: 24px; // Slider thumb size\n"], ["\n  bottom: 0;\n  font-size: 12px;\n  left: ", ";\n  position: absolute;\n  text-align: center;\n  min-width: 24px; // Slider thumb size\n"])), function (_a) {
    var progress = _a.progress;
    return progress;
});
var BunnyButt = styled.div(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  //background: url(", ") no-repeat;\n  height: 32px;\n  filter: ", ";\n  position: absolute;\n  // width: 15px;\n"], ["\n  //background: url(", ") no-repeat;\n  height: 32px;\n  filter: ", ";\n  position: absolute;\n  // width: 15px;\n"])), bunnyButt, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "grayscale(100%)" : "none");
});
var BunnySlider = styled.div(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["\n  position: absolute;\n  //left: 14px;\n  width: 100%;\n"], ["\n  position: absolute;\n  //left: 14px;\n  width: 100%;\n"])));
var StyledInput = styled.input(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n  cursor: ", ";\n  height: 32px;\n  position: relative;\n\n  ::-webkit-slider-thumb {\n    ", "\n  }\n\n  ::-moz-range-thumb {\n    ", "\n  }\n\n  ::-ms-thumb {\n    ", "\n  }\n"], ["\n  cursor: ", ";\n  height: 32px;\n  position: relative;\n\n  ::-webkit-slider-thumb {\n    ", "\n  }\n\n  ::-moz-range-thumb {\n    ", "\n  }\n\n  ::-ms-thumb {\n    ", "\n  }\n"])), getCursorStyle, getBaseThumbStyles, getBaseThumbStyles, getBaseThumbStyles);
var BarBackground = styled.div(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  background-color: ", ";\n  height: 2px;\n  position: absolute;\n  top: 18px;\n  width: 100%;\n"], ["\n  background-color: ", ";\n  height: 2px;\n  position: absolute;\n  top: 18px;\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return theme.colors[disabled ? "textDisabled" : "inputSecondary"];
});
var BarProgress = styled.div(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  background-color: ", ";\n  filter: ", ";\n  height: 10px;\n  position: absolute;\n  top: 13px;\n"], ["\n  background-color: ", ";\n  filter: ", ";\n  height: 10px;\n  position: absolute;\n  top: 13px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "grayscale(100%)" : "none");
});
var templateObject_1$p, templateObject_2$d, templateObject_3$9, templateObject_4$7, templateObject_5$4, templateObject_6$1, templateObject_7$1;

var Slider = function (_a) {
    var name = _a.name, min = _a.min, max = _a.max, value = _a.value, onValueChanged = _a.onValueChanged, valueLabel = _a.valueLabel, _b = _a.step, step = _b === void 0 ? "any" : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, props = __rest(_a, ["name", "min", "max", "value", "onValueChanged", "valueLabel", "step", "disabled"]);
    var handleChange = function (_a) {
        var target = _a.target;
        onValueChanged(parseFloat(target.value));
    };
    var progressPercentage = (value / max) * 100;
    var isMax = value === max;
    var labelProgress = isMax ? "calc(100% - 12px)" : "".concat(progressPercentage, "%");
    var barWidth = isMax ? "99%" : "".concat(progressPercentage, "%");
    var displayValueLabel = isMax ? "MAX" : valueLabel;
    return (React.createElement(Box, __assign({ position: "relative", height: "48px" }, props),
        React.createElement(BunnyButt, { disabled: disabled }),
        React.createElement(BunnySlider, null,
            React.createElement(BarBackground, { disabled: disabled }),
            React.createElement(BarProgress, { style: { width: barWidth }, disabled: disabled }),
            React.createElement(StyledInput, { name: name, type: "range", min: min, max: max, value: value, step: step, onChange: handleChange, isMax: isMax, disabled: disabled })),
        valueLabel && (React.createElement(SliderLabelContainer, null,
            React.createElement(SliderLabel, { progress: labelProgress }, displayValueLabel)))));
};

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = keyframes(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = keyframes(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled.div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, layout, space);
var Pulse = styled(Root)(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled(Root)(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React.createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React.createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$o, templateObject_2$c, templateObject_3$8, templateObject_4$6, templateObject_5$3;

var Icon$p = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 256 256" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M166.898 204.279C172.402 190.795 170.197 176.127 166.942 163.633C164.747 155.208 156.522 149.043 143.339 146.339C130.289 143.662 113.23 144.62 95.212 149.658C77.1941 154.696 61.9863 162.761 52.0088 171.877C41.9295 181.085 37.8164 190.7 40.0117 199.126C43.2669 211.619 48.4857 225.444 59.7919 234.228C70.9463 242.894 88.7701 247.193 118.461 238.891C148.152 230.589 161.467 217.582 166.898 204.279ZM119.268 241.986C179.746 225.075 176.514 188.072 169.929 162.798C164.622 142.43 131.106 136.301 94.4056 146.563C57.7053 156.825 31.7183 179.593 37.0251 199.961C43.6102 225.235 58.7891 258.897 119.268 241.986Z", fill: "#464649" }),
        React.createElement("path", { d: "M155.801 175.68C158.653 186.628 180.351 181.576 214.977 171.894C249.604 162.212 257.158 150.578 254.305 139.63C251.453 128.682 244.685 121.053 216.678 128.884C182.051 138.566 152.948 164.732 155.801 175.68Z", fill: "#606063" }),
        React.createElement("path", { d: "M159.97 178.737L175.437 178.709C178.284 178.704 178.523 174.429 177.474 164.815C176.82 158.816 173.457 154.101 171.27 155.477L159.942 163.875L159.97 178.737Z", fill: "#464649" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M162.261 177.996C160.059 177.319 159.158 176.266 158.788 174.845C158.644 174.296 158.636 173.375 159.104 171.965C159.566 170.568 160.432 168.889 161.754 166.98C164.397 163.161 168.612 158.775 174.091 154.332C185.037 145.456 200.6 136.7 217.484 131.979C231.34 128.104 239.201 128.297 243.777 130.191C248.018 131.946 250.005 135.425 251.319 140.465C251.901 142.7 251.928 144.848 251.283 146.962C250.634 149.091 249.235 151.411 246.622 153.858C241.312 158.83 231.342 163.998 214.171 168.799C196.798 173.657 182.967 177.263 173.149 178.336C168.216 178.875 164.644 178.728 162.261 177.996ZM214.977 171.894C180.351 181.576 158.653 186.628 155.801 175.68C152.948 164.732 182.051 138.566 216.678 128.884C244.685 121.053 251.453 128.682 254.305 139.63C257.158 150.578 249.604 162.212 214.977 171.894Z", fill: "#464649" }),
        React.createElement("path", { d: "M169.925 161.024C176.511 186.298 179.743 223.301 119.264 240.212C58.7859 257.123 43.607 223.461 37.022 198.187C31.7151 177.819 57.7022 155.052 94.4024 144.789C131.103 134.527 164.619 140.656 169.925 161.024Z", fill: "#606063" }),
        React.createElement("path", { d: "M62.2322 217.512C45.5076 212.12 42.4613 203.795 40.3848 196.052L41.9594 211.275L50.2352 225.685L64.4374 238.481L80.947 244.327C82.4065 243.612 89.4986 243.299 83.1029 242.028C76.7073 240.758 72.7474 234.756 69.9914 231.378C68.2638 226.484 67.7365 219.287 62.2322 217.512Z", fill: "#464649" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M166.895 202.505C172.399 189.021 170.194 174.353 166.939 161.86C164.744 153.434 156.519 147.269 143.336 144.565C130.286 141.888 113.227 142.846 95.2088 147.884C77.1909 152.922 61.9831 160.987 52.0056 170.103C41.9263 179.311 37.8132 188.926 40.0086 197.352C43.2637 209.845 48.4825 223.67 59.7887 232.454C70.9431 241.12 88.7669 245.419 118.458 237.117C148.149 228.815 161.464 215.809 166.895 202.505ZM119.264 240.212C179.743 223.301 176.511 186.298 169.925 161.024C164.619 140.656 131.103 134.527 94.4024 144.789C57.7022 155.052 31.7151 177.819 37.022 198.187C43.607 223.461 58.7859 257.123 119.264 240.212Z", fill: "#464649" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M164.233 181.686C165.018 182.322 165.157 183.497 164.543 184.311C162.98 186.382 161.187 188.422 159.188 190.412C158.469 191.128 157.327 191.104 156.636 190.36C155.945 189.615 155.968 188.431 156.687 187.716C158.576 185.834 160.252 183.925 161.7 182.007C162.314 181.193 163.448 181.05 164.233 181.686ZM57.4215 216.239C57.6566 215.235 58.6323 214.619 59.6008 214.863C73.2899 218.308 91.7045 217.793 111.035 212.388C120.262 209.808 128.779 206.37 136.271 202.374C137.157 201.901 138.245 202.263 138.701 203.181C139.157 204.099 138.809 205.226 137.923 205.699C130.195 209.821 121.438 213.352 111.976 215.998C92.2044 221.527 73.1589 222.124 58.7494 218.497C57.7809 218.253 57.1863 217.242 57.4215 216.239Z", fill: "#979797" }),
        React.createElement("path", { d: "M159.836 163.292C164.405 180.829 141.059 195.381 109.857 204.106C78.655 212.831 51.4793 212.682 46.8428 194.887C42.2064 177.092 65.6193 162.798 96.8214 154.074C128.024 145.349 155.266 145.755 159.836 163.292Z", fill: "#464649" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M145.831 183.549C154.508 176.998 157.462 170.578 155.854 164.406C154.245 158.233 148.575 154.225 137.894 153.086C127.333 151.96 113.281 153.898 97.8965 158.2C82.4985 162.506 69.3986 168.094 60.8132 174.54C52.1526 181.043 49.1801 187.461 50.825 193.774C52.4698 200.087 58.1557 204.083 68.7987 205.189C79.3491 206.285 93.384 204.285 108.782 199.98C124.166 195.678 137.251 190.028 145.831 183.549ZM110.264 205.113C141.466 196.388 164.405 180.829 159.836 163.292C155.266 145.755 128.024 145.349 96.8214 154.074C65.6193 162.798 42.2064 177.092 46.8428 194.887C51.4793 212.682 79.0614 213.838 110.264 205.113Z", fill: "#737373" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M103.877 181.153C89.0555 185.297 76.4977 192.072 68.1169 199.619C67.3647 200.297 66.2249 200.214 65.5711 199.434C64.9173 198.655 64.997 197.474 65.7492 196.796C74.622 188.806 87.7006 181.803 102.936 177.543C106.034 176.676 109.107 175.955 112.134 175.375C113.114 175.187 114.056 175.858 114.237 176.873C114.419 177.889 113.771 178.864 112.792 179.052C109.86 179.614 106.881 180.313 103.877 181.153ZM123.847 175.658C123.792 174.627 124.554 173.745 125.549 173.688C132.378 173.297 138.774 173.682 144.424 174.797C145.403 174.991 146.046 175.97 145.86 176.984C145.673 177.999 144.728 178.664 143.749 178.471C138.431 177.421 132.333 177.045 125.749 177.422C124.753 177.479 123.902 176.69 123.847 175.658Z", fill: "#606063" })));
};

var Icon$o = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("svg", { width: "128", height: "128", viewBox: "0 0 128 128", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { d: "M56.7204 37.5858C56.7204 45.3822 58.0271 54.1169 60.2906 60.8591C61.4246 64.2369 62.7705 67.0285 64.249 68.946C65.742 70.8826 67.1906 71.7103 68.5307 71.7103C71.1919 71.7103 74.4165 70.5307 77.8384 68.3524C81.235 66.1902 84.7001 63.1234 87.8127 59.5481C94.0844 52.3439 98.6784 43.3694 98.6784 35.942C98.6784 28.1653 97.1567 21.2636 93.9931 16.3543C90.8793 11.5222 86.1363 8.54284 79.3564 8.54284C72.6009 8.54284 66.9825 11.9157 63.0072 17.2564C59.0174 22.6164 56.7204 29.9263 56.7204 37.5858Z", fill: "#FEDC90", stroke: "#D1884F", strokeWidth: "2.89134" }),
            React.createElement("path", { d: "M32.7442 66.7859C39.4364 62.9222 47.2575 60.5211 53.8454 59.9252C57.1411 59.6272 60.0564 59.7876 62.336 60.3933C64.6294 61.0028 66.1079 62.0118 66.8368 63.2742C69.6116 68.0804 69.9429 76.4856 67.7501 84.8501C65.5656 93.1829 61.0085 100.957 54.6069 104.653C47.9434 108.5 40.9505 110.185 34.8292 109.454C28.7533 108.729 23.476 105.626 20.0729 99.7316C16.6658 93.8305 16.5364 87.5528 18.8757 81.7754C21.228 75.9659 26.1018 70.6209 32.7442 66.7859Z", fill: "#D1884F", stroke: "#633001", strokeWidth: "2.89134" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M73.6122 7.76013C69.4145 8.86483 64.8207 11.0867 61.24 16.1556C53.2804 27.4231 51.7006 41.9592 58.5495 60.7386C65.3984 79.518 63.3431 89.9236 56.0487 98.3189C48.7543 106.714 29.475 108.685 23.3482 101.929C21.8481 100.274 17.4954 97.4588 20.3675 102.54C23.2397 107.622 30.7527 111.748 39.59 111.748C48.4273 111.748 55.5943 108.146 61.958 101.338C68.3217 94.5306 74.292 78.3883 68.3268 61.7709C60.6331 40.3385 62.8311 27.508 68.2893 19.7815C71.0879 15.8198 75.5453 12.3629 78.6077 10.5868C81.8233 8.72183 84.8797 8.42294 86.8682 8.42294C83.3332 6.65548 77.8099 6.65542 73.6122 7.76013Z", fill: "#633001" }))));
};

var rotate = keyframes(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var float = keyframes(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container$3 = styled.div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled(Icon$o)(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate);
var FloatingPanIcon = styled(Icon$p)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])), float);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React.createElement(Container$3, null,
        React.createElement(RotatingPancakeIcon, { width: "".concat(size * 0.5, "px") }),
        React.createElement(FloatingPanIcon, { width: "".concat(size, "px") })));
};
var templateObject_1$n, templateObject_2$b, templateObject_3$7, templateObject_4$5, templateObject_5$2;

var StepperWrapper = styled.div(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n"])));
var Stepper = function (_a) {
    var children = _a.children;
    var numberOfSteps = React.Children.count(children);
    return (React.createElement(StepperWrapper, null, React.Children.map(children, function (child) {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { numberOfSteps: numberOfSteps });
        }
        return child;
    })));
};
var templateObject_1$m;

var getStepNumberFontColor = function (_a) {
    var theme = _a.theme, status = _a.status;
    if (status === "past") {
        return theme.colors.success;
    }
    if (status === "current") {
        return theme.colors.invertedContrast;
    }
    return theme.colors.textDisabled;
};
var StyledStep = styled(Flex)(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  ", " {\n    justify-content: center;\n  }\n"], ["\n  ", " {\n    justify-content: center;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Connector = styled.div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  position: absolute;\n  width: 4px;\n  height: 100%;\n  top: 50%;\n  left: calc(50% - 2px);\n  background-color: ", ";\n"], ["\n  position: absolute;\n  width: 4px;\n  height: 100%;\n  top: 50%;\n  left: calc(50% - 2px);\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme, status = _a.status;
    return theme.colors[status === "past" ? "success" : "textDisabled"];
});
var ChildrenWrapper = styled(Box)(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  ", " {\n    visibility: ", ";\n  }\n"], ["\n  ", " {\n    visibility: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var isVisible = _a.isVisible;
    return (isVisible ? "visible" : "hidden");
});
var ChildrenLeftWrapper = styled(ChildrenWrapper)(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  display: none;\n  ", " {\n    display: block;\n    margin-right: 16px;\n  }\n"], ["\n  display: none;\n  ", " {\n    display: block;\n    margin-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ChildrenRightWrapper = styled(ChildrenWrapper)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  margin-left: 8px;\n  ", " {\n    margin-left: 16px;\n  }\n"], ["\n  margin-left: 8px;\n  ", " {\n    margin-left: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Wrapper$2 = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n"])));
var StepNumber = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  z-index: 1;\n  ", " {\n    font-size: 40px;\n    width: 80px;\n    height: 80px;\n  }\n"], ["\n  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  z-index: 1;\n  ", " {\n    font-size: 40px;\n    width: 80px;\n    height: 80px;\n  }\n"])), function (_a) {
    var theme = _a.theme, status = _a.status;
    return theme.colors[status === "current" ? "secondary" : "invertedContrast"];
}, function (_a) {
    var theme = _a.theme, status = _a.status;
    return (status === "past" ? theme.colors.success : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.circle;
}, getStepNumberFontColor, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
/**
 * ChildrenLeftWrapper and ChildrenRightWrapper are used on the non mobile version, to force the alternate layout.
 * One of the child is hidden based on the step number.
 */
var Step = function (_a) {
    var index = _a.index, status = _a.status, _b = _a.numberOfSteps, numberOfSteps = _b === void 0 ? 0 : _b, children = _a.children;
    var isIndexPair = index % 2 === 0;
    return (React.createElement(StyledStep, { mb: index < numberOfSteps - 1 ? "16px" : 0 },
        React.createElement(ChildrenLeftWrapper, { isVisible: !isIndexPair }, children),
        React.createElement(Wrapper$2, null,
            React.createElement(StepNumber, { status: status }, index + 1),
            index < numberOfSteps - 1 && React.createElement(Connector, { status: status })),
        React.createElement(ChildrenRightWrapper, { isVisible: isIndexPair }, children)));
};
var templateObject_1$l, templateObject_2$a, templateObject_3$6, templateObject_4$4, templateObject_5$1, templateObject_6, templateObject_7;

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArray([], data, true);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArray([], action.data, true);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            columnCopy = state.columns.map(function (column) {
                if (state.sortColumn === column.name) {
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: column.sorted.asc,
                        } });
                }
                return column;
            });
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, ".concat(action.columnName, " not found"));
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, ".concat(column.name, " not found"));
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop,
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = useMemo(function () {
        return __spreadArray([], state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }), true);
    }, [state.columns]);
    useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var Wrapper$1 = styled(Flex)(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  border-bottom: 2px solid ", ";\n  overflow-x: scroll;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"], ["\n  border-bottom: 2px solid ", ";\n  overflow-x: scroll;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var Inner$1 = styled(Flex)(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > button + button {\n    margin-left: 4px;\n  }\n\n  ", " {\n    flex-grow: 0;\n  }\n"], ["\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > button + button {\n    margin-left: 4px;\n  }\n\n  ", " {\n    flex-grow: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, onItemClick = _a.onItemClick, children = _a.children;
    return (React.createElement(Wrapper$1, { p: ["0 4px", "0 16px"] },
        React.createElement(Inner$1, null, Children.map(children, function (child, index) {
            var isActive = activeIndex === index;
            return cloneElement(child, {
                isActive: isActive,
                onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
                color: isActive ? "backgroundAlt" : "textSubtle",
                backgroundColor: isActive ? "textSubtle" : "input",
            });
        }))));
};
var templateObject_1$k, templateObject_2$9;

var getBorderRadius = function (_a) {
    var scale = _a.scale;
    return (scale === "md" ? "16px 16px 0 0" : "24px 24px 0 0");
};
var getPadding = function (_a) {
    var scale = _a.scale;
    return (scale === "md" ? "8px" : "16px");
};
var Tab = styled.button(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: ", ";\n  border-radius: ", ";\n  font-size: 16px;\n  font-weight: 600;\n\n  ", " {\n    flex-grow: 0;\n  }\n\n  ", "\n"], ["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: ", ";\n  border-radius: ", ";\n  font-size: 16px;\n  font-weight: 600;\n\n  ", " {\n    flex-grow: 0;\n  }\n\n  ", "\n"])), getPadding, getBorderRadius, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, color);
Tab.defaultProps = {
    scale: "md",
};
var templateObject_1$j;

var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    SUCCESS: "success",
    TEXTDISABLED: "textDisabled",
    TEXTSUBTLE: "textSubtle",
    BINANCE: "binance",
    FAILURE: "failure",
    YELLOW: "yellow",
    TERTIARY: 'tertiary'
};
var scales$1 = {
    MD: "md",
    SM: "sm",
};

var _a$1, _b;
var scaleVariants = (_a$1 = {},
    _a$1[scales$1.MD] = {
        height: "28px",
        padding: "0 8px",
        fontSize: "14px",
    },
    _a$1[scales$1.SM] = {
        height: "24px",
        padding: "0 4px",
        fontSize: "12px",
    },
    _a$1);
var styleVariants = (_b = {},
    _b[variants.PRIMARY] = {
        backgroundColor: "primary",
    },
    _b[variants.TERTIARY] = {
        backgroundColor: "tertiary",
    },
    _b[variants.SECONDARY] = {
        backgroundColor: "secondary",
    },
    _b[variants.SUCCESS] = {
        backgroundColor: "success",
    },
    _b[variants.TEXTDISABLED] = {
        backgroundColor: "textDisabled",
    },
    _b[variants.TEXTSUBTLE] = {
        backgroundColor: "textSubtle",
    },
    _b[variants.BINANCE] = {
        backgroundColor: "binance",
    },
    _b[variants.FAILURE] = {
        backgroundColor: "failure",
    },
    _b[variants.YELLOW] = {
        backgroundColor: "yellow",
    },
    _b);

var getOutlineStyles = function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variantKey = _b === void 0 ? variants.PRIMARY : _b;
    if (outline) {
        var themeColorKey = styleVariants[variantKey].backgroundColor;
        var color = theme.colors[themeColorKey];
        return "\n      color: ".concat(color, ";\n      background: transparent;\n      border: 2px solid ").concat(color, ";\n    ");
    }
    return "";
};
var StyledTag = styled.div(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n  ", "\n  ", "\n\n  ", "\n"], ["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n  ", "\n  ", "\n\n  ", "\n"])), variant$1({
    prop: "scale",
    variants: scaleVariants,
}), variant$1({
    variants: styleVariants,
}), space, getOutlineStyles);
var templateObject_1$i;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React.createElement(StyledTag, __assign({}, props),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5em",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5em",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    scale: scales$1.MD,
    outline: false,
};

var scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "2px",
        handleTop: "2px",
        checkedLeft: "calc(100% - 18px)",
        toggleHeight: "20px",
        toggleWidth: "36px",
    },
    md: {
        handleHeight: "30px",
        handleWidth: "30px",
        handleLeft: "0px",
        handleTop: "0px",
        checkedLeft: "calc(100% - 30px)",
        toggleHeight: "30px",
        toggleWidth: "60px",
    },
};
var getScale = function (property) { return function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$6.MD : _b;
    return scaleKeyValues[scale][property];
}; };
var Handle = styled.div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  background-color: #5A7DC2;\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: #5A7DC2;\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), getScale("handleHeight"), getScale("handleLeft"), getScale("handleTop"), getScale("handleWidth"));
var Input = styled.input(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, getScale("checkedLeft"), Handle, function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonActive;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonActive;
});
var StyledToggle = styled.div(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "tertiary" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getScale("toggleHeight"), getScale("toggleWidth"));
var templateObject_1$h, templateObject_2$8, templateObject_3$5;

var scales = {
    SM: "sm",
    MD: "md",
};

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales.MD : _b, props = __rest(_a, ["checked", "scale"]);
    var isChecked = !!checked;
    return (React.createElement(StyledToggle, { checked: isChecked, scale: scale },
        React.createElement(Input, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        React.createElement(Handle, { scale: scale })));
};
Toggle.defaultProps = {
    scale: scales.MD,
};

var ModalHeader = styled.div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  align-items: center;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 12px 24px;\n"], ["\n  align-items: center;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 12px 24px;\n"])), function (_a) {
    var background = _a.background;
    return background || "transparent";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
});
var ModalTitle = styled(Flex)(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var ModalBody = styled(Flex)(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  flex-direction: column;\n"], ["\n  flex-direction: column;\n"])));
var ModalCloseButton = function (_a) {
    var onDismiss = _a.onDismiss;
    return (React.createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
        React.createElement(Icon$1c, { color: "primary" })));
};
var ModalBackButton = function (_a) {
    var onBack = _a.onBack;
    return (React.createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
        React.createElement(Icon$1y, { color: "primary" })));
};
var ModalContainer = styled(Box)(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  overflow: hidden;\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  //border: 1px solid ", ";\n  border-radius: 20px;\n  width: 100%;\n  z-index: ", ";\n\n  ", " {\n    width: auto;\n    min-width: ", ";\n    max-width: 100%;\n  }\n"], ["\n  overflow: hidden;\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  //border: 1px solid ", ";\n  border-radius: 20px;\n  width: 100%;\n  z-index: ", ";\n\n  ", " {\n    width: auto;\n    min-width: ", ";\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
}, function (_a) {
    var minWidth = _a.minWidth;
    return minWidth;
});
var templateObject_1$g, templateObject_2$7, templateObject_3$4, templateObject_4$3;

var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c, _d = _a.headerBackground, headerBackground = _d === void 0 ? "transparent" : _d, _e = _a.minWidth, minWidth = _e === void 0 ? "320px" : _e, props = __rest(_a, ["title", "onDismiss", "onBack", "children", "hideCloseButton", "bodyPadding", "headerBackground", "minWidth"]);
    return (React.createElement(ModalContainer, __assign({ minWidth: minWidth }, props),
        React.createElement(ModalHeader, { background: headerBackground },
            React.createElement(ModalTitle, null,
                onBack && React.createElement(ModalBackButton, { onBack: onBack }),
                React.createElement(Heading, { color: "head" }, title)),
            !hideCloseButton && React.createElement(ModalCloseButton, { onDismiss: onDismiss })),
        React.createElement(ModalBody, { p: bodyPadding }, children)));
};

var Overlay = styled.div.attrs({ role: "presentation" })(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$f;

var ModalWrapper = styled.div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React.createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React.createElement(ModalWrapper, null,
            React.createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React.isValidElement(modalNode) &&
                React.cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$e;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 28 28" }, props),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M0.166687 14.8557C0.166687 14.3034 0.614402 13.8557 1.16669 13.8557H6.28636C6.82715 13.8557 7.26995 14.2856 7.28593 14.8262C7.38147 18.0594 10.3882 20.8071 14.0228 20.8071C17.6378 20.8071 20.5497 18.0775 20.6458 14.8262C20.6618 14.2856 21.1046 13.8557 21.6454 13.8557H26.6513C27.2036 13.8557 27.6513 14.3034 27.6513 14.8557C27.6513 22.0959 21.4559 27.8335 13.909 27.8335C6.36212 27.8335 0.166687 22.0959 0.166687 14.8557ZM2.21469 15.8557C2.75087 21.4158 7.7154 25.8335 13.909 25.8335C20.1026 25.8335 25.0671 21.4158 25.6033 15.8557H22.5549C21.9306 19.8289 18.2606 22.8071 14.0228 22.8071C9.80183 22.8071 6.01831 19.8427 5.37847 15.8557H2.21469Z" }),
        React.createElement("path", { d: "M13.909 18.1709C16.0453 18.1709 17.7772 16.543 17.7772 14.5348C17.7772 12.5266 16.0453 10.8987 13.909 10.8987C11.7726 10.8987 10.0408 12.5266 10.0408 14.5348C10.0408 16.543 11.7726 18.1709 13.909 18.1709Z" }),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10.2879 0.234128L9.92695 1.16671L9.02034 0.744746C9.24253 0.267356 9.79685 0.0440572 10.2879 0.234128ZM13.3687 3.17476C12.9829 2.09692 12.1683 1.36246 11.538 0.921907C11.2122 0.694202 10.909 0.526331 10.6858 0.414584C10.5736 0.358397 10.4799 0.315556 10.4117 0.285722C10.3775 0.270785 10.3496 0.259049 10.3287 0.250476L10.3027 0.239962L10.2939 0.236463L10.2905 0.23515L10.2891 0.234603C10.2888 0.234487 10.2879 0.234128 9.92695 1.16671C9.02034 0.744746 9.02048 0.744453 9.02034 0.744746L9.01915 0.74731L9.01767 0.750522L9.01386 0.75887L9.00303 0.783136C8.99445 0.802616 8.98321 0.828684 8.96988 0.860883C8.94326 0.925204 8.90809 1.01444 8.86891 1.12492C8.79092 1.34486 8.6951 1.65444 8.61999 2.02317C8.47278 2.74581 8.38846 3.77714 8.75692 4.8162L8.76461 4.83715C9.15196 5.85665 9.96503 6.58676 10.5783 7.03018C10.8976 7.26108 11.1948 7.43702 11.413 7.55587C11.5226 7.61561 11.6139 7.66176 11.68 7.69398C11.7131 7.71011 11.74 7.72281 11.7599 7.73203L11.7844 7.74326L11.7925 7.74692L11.7955 7.74826L11.7968 7.74881C11.797 7.74892 11.7978 7.74928 12.2024 6.83476L11.7978 7.74928C12.0409 7.85682 12.3169 7.86313 12.5647 7.76682C12.8124 7.67051 13.0117 7.4795 13.1183 7.236L12.2024 6.83476C13.1183 7.236 13.1182 7.23626 13.1183 7.236L13.1194 7.23363L13.1207 7.23058L13.1242 7.22245L13.1344 7.19822C13.1426 7.17859 13.1534 7.15206 13.1663 7.11916C13.1921 7.05344 13.2265 6.96181 13.2649 6.84862C13.3413 6.62338 13.4358 6.30663 13.5101 5.93419C13.6534 5.21601 13.7452 4.17461 13.3687 3.17476ZM11.5923 5.29069C11.1661 4.95703 10.802 4.55944 10.6381 4.13689C10.4713 3.65894 10.4678 3.13802 10.5369 2.66667C10.9552 2.98505 11.3217 3.38633 11.4874 3.8537L11.4951 3.87465C11.6551 4.29576 11.6629 4.80203 11.5923 5.29069Z" }),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11.7016 5.80579C12.2108 5.59196 12.7969 5.83141 13.0108 6.34062L14.7173 10.4045C14.9312 10.9137 14.6917 11.4999 14.1825 11.7137C13.6733 11.9275 13.0871 11.6881 12.8733 11.1789L11.1668 7.11498C10.9529 6.60577 11.1924 6.01963 11.7016 5.80579Z" }),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M18.0049 1.1666L18.8876 0.697052C18.6499 0.250182 18.1158 0.0513813 17.6438 0.234084L17.6411 0.235107L17.6378 0.23642L17.6289 0.239919L17.603 0.250432C17.5821 0.259006 17.5542 0.270742 17.52 0.285679C17.4517 0.315513 17.3581 0.358354 17.2459 0.41454C17.0227 0.526287 16.7195 0.694159 16.3937 0.921864C15.7634 1.36242 14.9488 2.09688 14.563 3.17471C14.1865 4.17456 14.2783 5.21597 14.4216 5.93415C14.4873 6.26372 14.5689 6.5497 14.6398 6.76724L13.2055 10.4268C13.0039 10.941 13.2574 11.5212 13.7716 11.7227C14.2858 11.9243 14.866 11.6708 15.0675 11.1566L16.4652 7.59067C16.4732 7.58651 16.4813 7.58228 16.4895 7.57797C16.7027 7.46594 16.9925 7.29854 17.3077 7.07243C17.9247 6.62985 18.7111 5.91062 19.1524 4.87349C19.6068 3.8057 19.5173 2.74192 19.3498 2.00198C19.2645 1.62509 19.154 1.30939 19.064 1.08568C19.0187 0.973208 18.9779 0.882286 18.9469 0.81661C18.9314 0.783726 18.9183 0.757032 18.9082 0.736987L18.8954 0.711911L18.8909 0.703185L18.8891 0.699792L18.8883 0.69834C18.8881 0.698025 18.8876 0.697052 18.0049 1.1666ZM18.004 1.1648C17.6459 0.239524 17.6441 0.234002 17.6438 0.234083L17.6438 0.234084L18.004 1.1648ZM17.3121 4.09038C17.1053 4.57633 16.7342 4.98157 16.3404 5.29698C16.2687 4.80636 16.2759 4.29753 16.4366 3.87461L16.4443 3.85366C16.6156 3.3705 17.0015 2.95798 17.4373 2.63466C17.5183 3.10336 17.5127 3.61907 17.3121 4.09038Z" })));
};

var Icon$m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 28 28" }, props),
        React.createElement("path", { d: "M13.3298 3.13707C13.6836 2.95431 13.9831 2.95431 14.3368 3.13707L25.0313 8.66207C25.0491 8.67125 25.0671 8.67989 25.0854 8.68799C25.4011 8.82781 25.6667 9.19027 25.6667 9.76263V26.4481C25.6667 27.0004 26.1144 27.4481 26.6667 27.4481C27.219 27.4481 27.6667 27.0004 27.6667 26.4481V9.76263C27.6667 8.57721 27.0867 7.4027 25.9254 6.87283L15.2548 1.36018C14.3252 0.879939 13.3414 0.879939 12.4118 1.36018L1.74132 6.87283C0.579977 7.4027 0 8.57721 0 9.76263V23.7961C0 25.5328 1.37964 27.0061 3.13889 27.0061H17.7903C19.5495 27.0061 20.9292 25.5328 20.9292 23.7961V15.5086C20.9292 14.9563 20.4815 14.5086 19.9292 14.5086C19.3769 14.5086 18.9292 14.9563 18.9292 15.5086V23.7961C18.9292 24.4904 18.3838 25.0061 17.7903 25.0061H3.13889C2.54536 25.0061 2 24.4904 2 23.7961V9.76263C2 9.19027 2.26553 8.82781 2.58129 8.68799C2.59957 8.67989 2.61761 8.67125 2.63538 8.66207L13.3298 3.13707ZM7.41665 21.6966H11.6944C12.7639 21.6966 13.7264 20.7021 13.7264 19.5971V15.1771C13.7264 14.0721 12.8708 13.0776 11.6944 13.0776H7.41665C6.3472 13.0776 5.3847 13.9616 5.3847 15.1771V19.5971C5.3847 20.7021 6.24026 21.6966 7.41665 21.6966Z" })));
};

var Icon$i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 28 28" }, props),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2.79951 2.74278C3.30299 1.84162 4.27852 1.3335 5.23866 1.3335H22.6753C23.7688 1.3335 24.7025 2.08328 25.1441 3.02424L27.5 8L27.3846 8.81759C27.03 11.543 24.8136 13.7614 22.0489 13.7614C20.3327 13.7614 18.9201 12.9044 17.9374 11.7171L17.9246 11.7018L17.9119 11.7171C16.9292 12.9044 15.5166 13.7614 13.8004 13.7614C12.0842 13.7614 10.6716 12.9044 9.68888 11.7171L9.67614 11.7018L9.6634 11.7171C8.68072 12.9044 7.26809 13.7614 5.5519 13.7614C2.53219 13.7614 0.166626 11.1149 0.166626 8.05205V7.45525L2.79951 2.74278ZM25.4302 8.23152L25.3336 7.98575L23.3385 3.88458L23.335 3.87686C23.1484 3.47624 22.8315 3.3335 22.6753 3.3335H5.23866C4.94587 3.3335 4.66847 3.49814 4.54548 3.71827L2.16663 7.97607V8.05205C2.16663 10.1471 3.76869 11.7614 5.5519 11.7614C6.54404 11.7614 7.42355 11.2792 8.10954 10.4577C8.49135 9.95966 9.0578 9.65904 9.67614 9.65904C10.2945 9.65904 10.8609 9.95967 11.2427 10.4577C11.9287 11.2792 12.8082 11.7614 13.8004 11.7614C14.7925 11.7614 15.672 11.2792 16.358 10.4577C16.7398 9.95967 17.3063 9.65904 17.9246 9.65904C18.543 9.65904 19.1094 9.95965 19.4912 10.4577C20.1772 11.2792 21.0567 11.7614 22.0489 11.7614C23.7808 11.7614 25.3419 10.2386 25.4302 8.23152Z" }),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2.94159 11.313C3.49387 11.313 3.94159 11.7607 3.94159 12.313V25.0956C3.94159 25.1744 3.97376 25.2526 4.02121 25.307C4.02921 25.3162 4.03665 25.3234 4.04305 25.329H23.391C23.4114 25.3015 23.4503 25.2254 23.4503 25.0956V12.313C23.4503 11.7607 23.898 11.313 24.4503 11.313C25.0026 11.313 25.4503 11.7607 25.4503 12.313V25.0956C25.4503 26.1195 24.7666 27.329 23.4062 27.329H3.9857C3.36753 27.329 2.85008 27.0066 2.51454 26.6223C2.17045 26.2281 1.94159 25.6897 1.94159 25.0956V12.313C1.94159 11.7607 2.3893 11.313 2.94159 11.313Z" }),
        React.createElement("path", { d: "M18.3945 21.9559H8.99752C8.16223 21.9559 7.53577 21.2832 7.53577 20.3861V18.48C7.53577 17.5829 8.16223 16.9102 8.99752 16.9102H18.3945C19.2298 16.9102 19.8563 17.5829 19.8563 18.48V20.3861C19.9607 21.171 19.2298 21.9559 18.3945 21.9559Z" })));
};

var Icon$g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M15.239 2.51721C15.4604 2.93891 15.6605 3.39984 15.8398 3.88883C16.329 5.22292 16.6937 6.84919 16.8984 8.64673H21.5367C21.4521 8.41187 21.3569 8.1812 21.2509 7.95397C21.0173 7.4535 21.2337 6.85846 21.7342 6.6249C22.2346 6.39135 22.8297 6.60773 23.0632 7.1082C23.7804 8.64509 24.0769 10.2665 24.0769 12.0385C24.0769 14.8408 23.1075 17.4269 21.4874 19.478C21.426 19.6007 21.3382 19.7126 21.225 19.8048C21.2198 19.8091 21.2146 19.8133 21.2093 19.8174C18.997 22.4197 15.7026 24.0769 12.0385 24.0769C5.41502 24.0769 0 18.6619 0 12.0385C0 5.41502 5.41502 0 12.0385 0C12.0386 0 12.0388 0 12.0389 0M20.491 17.4351C21.4939 15.8738 22.0769 14.0206 22.0769 12.0385C22.0769 11.5543 22.0516 11.0916 21.9993 10.6467H17.0555C17.0759 11.1038 17.0864 11.5683 17.0864 12.0385C17.0864 13.0663 17.0365 14.067 16.9418 15.0231C18.2661 15.6118 19.4698 16.4317 20.491 17.4351ZM19.2399 19.0129C18.1385 20.1495 16.7728 21.0287 15.2451 21.5481C15.4641 21.1295 15.6621 20.6726 15.8398 20.1881C16.1722 19.2816 16.4471 18.2402 16.6534 17.1019C17.6169 17.5982 18.4916 18.2451 19.2399 19.0129ZM12.0391 22.0769C12.2002 22.0769 12.4803 21.991 12.8588 21.5544C13.2351 21.1204 13.6194 20.4342 13.962 19.4996C14.2876 18.6117 14.5584 17.5471 14.7526 16.3549C13.8847 16.1118 12.9731 15.9822 12.0385 15.9822C11.1029 15.9822 10.1918 16.1113 9.32519 16.3544C9.51941 17.5468 9.79026 18.6116 10.1159 19.4996C10.4585 20.4342 10.8428 21.1204 11.2191 21.5544C11.5976 21.991 11.8777 22.0769 12.0389 22.0769M8.83302 21.5485C7.31106 21.0313 5.94986 20.157 4.85058 19.0268C5.59577 18.2524 6.46596 17.6025 7.42498 17.1047C7.63125 18.242 7.90601 19.2824 8.23811 20.1881C8.41582 20.6727 8.61392 21.1298 8.83302 21.5485ZM3.59589 17.4506C4.615 16.4381 5.81512 15.6146 7.13627 15.0245C7.04148 14.068 6.99152 13.0668 6.99152 12.0385C6.99152 11.5683 7.00196 11.1038 7.02236 10.6467H2.09695C2.03305 11.1019 2 11.5665 2 12.0385C2 14.0272 2.58687 15.8861 3.59589 17.4506ZM2.5938 8.64673H7.17946C7.38418 6.84919 7.74894 5.22292 8.23811 3.88883C8.41582 3.40417 8.61392 2.94708 8.83302 2.52842C5.94228 3.51082 3.63146 5.78134 2.5938 8.64673ZM12.0446 1.41196e-06C14.1446 0.000974194 16.0575 0.5046 17.8594 1.50565C18.3421 1.77386 18.5161 2.38267 18.2479 2.86545C17.9797 3.34823 17.3708 3.52218 16.8881 3.25396C16.3493 2.95465 15.8013 2.70915 15.239 2.51721M9.02447 10.6467C9.00277 11.1011 8.99152 11.5657 8.99152 12.0385C8.99152 12.835 9.02347 13.6082 9.08347 14.349C10.0331 14.1089 11.0241 13.9822 12.0385 13.9822C13.0524 13.9822 14.0438 14.1094 14.9944 14.3496C15.0544 13.6086 15.0864 12.8353 15.0864 12.0385C15.0864 11.5657 15.0751 11.1011 15.0534 10.6467H9.02447ZM14.8845 8.64673C14.6914 7.07749 14.3696 5.68893 13.962 4.57734C13.6194 3.64274 13.2351 2.95654 12.8588 2.52249C12.4802 2.08579 12.2001 2 12.0389 2C11.8778 2 11.5977 2.08579 11.2191 2.52249C10.8428 2.95654 10.4585 3.64274 10.1159 4.57734C9.70828 5.68893 9.3865 7.07749 9.19341 8.64673H14.8845ZM19.2425 3.60442C19.6331 3.21389 20.2662 3.21389 20.6568 3.60442L20.6624 3.61009C20.9459 3.89354 21.0947 4.04236 21.3336 4.40073C21.64 4.86026 21.5158 5.48113 21.0563 5.78748C20.5967 6.09384 19.9759 5.96966 19.6695 5.51013C19.5421 5.31897 19.5073 5.2834 19.2425 5.01863C18.852 4.62811 18.852 3.99494 19.2425 3.60442Z" })));
};

var Logo$2 = function (_a) {
    _a.isDark; var props = __rest(_a, ["isDark"]);
    return (React.createElement(Svg, __assign({ viewBox: "0 0 192 40" }, props),
        React.createElement("path", { d: "M56.9759 33.153L56.2094 28.7124C56.1436 28.3501 56.3759 28.1699 56.8095 28.1447L65.3963 27.6798V11.6709C65.3963 11.3357 65.6286 11.1536 66.0622 11.1536H72.2526C72.6862 11.1536 72.9185 11.3337 72.9185 11.6709V26.5173C72.9185 31.3202 71.4203 32.1726 65.9964 32.9205C64.3994 33.153 61.4029 33.463 57.7425 33.618C57.3089 33.6431 57.0418 33.463 56.9759 33.153Z", fill: "#F556AB" }),
        React.createElement("path", { d: "M90.7117 35.0498L86.7705 35.4954C86.5344 35.5128 86.3757 35.4024 86.3176 35.1989L85.2529 31.9751C84.6413 32.8837 83.4605 33.1608 82.239 33.1608C81.5499 33.1608 80.3865 33.1608 79.2058 33.124L78.4973 35.2183C78.4179 35.4218 78.2805 35.5147 78.0443 35.4973L74.3394 35.2009C74.0838 35.1834 73.9445 35.0149 74.0238 34.7747C75.4814 29.6773 77.452 24.8415 79.4613 20.0406C79.5406 19.8371 79.6974 19.7441 79.9142 19.7441H85.0574C85.2742 19.7441 85.431 19.8371 85.5104 20.0231C87.5603 24.8221 89.5502 29.4739 91.0078 34.608C91.0872 34.8444 90.9691 35.013 90.7117 35.0498ZM80.3285 29.7315H84.5058L83.0675 25.3568C82.8314 24.6536 82.6533 23.9677 82.5158 23.2625H82.299C82.181 23.9658 82.0222 24.671 81.7861 25.3743L80.3285 29.7315Z", fill: "#F556AB" }),
        React.createElement("path", { d: "M106.676 31.6768C106.552 31.9132 106.379 31.9984 106.108 31.9984H104.407C104.136 31.9984 103.964 31.9132 103.84 31.6768L99.4282 23.6791H99.1824L98.1971 33.2384C98.1719 33.5174 97.9745 33.6665 97.6551 33.6239L92.8487 33.1105C92.5274 33.0679 92.3802 32.8974 92.4306 32.6184L95.2645 16.0437C95.3129 15.7648 95.5103 15.6582 95.8065 15.6582H99.7495C100.021 15.6582 100.193 15.7435 100.317 15.9585L105.123 24.1073H105.394L110.2 15.9585C110.324 15.7454 110.497 15.6582 110.768 15.6582H114.711C115.007 15.6582 115.204 15.7648 115.253 16.0437L118.087 32.6184C118.135 32.8954 117.988 33.0466 117.668 33.0892L112.862 33.6026C112.541 33.6452 112.345 33.5387 112.32 33.2384L111.335 23.6791H111.089L106.676 31.6768Z", fill: "#F556AB" }),
        React.createElement("path", { d: "M131.412 20.3253V22.6347C131.412 22.8284 131.304 22.933 131.102 22.933H125.299V25.6009C125.843 25.5117 126.401 25.4672 126.944 25.4672H130.638C130.839 25.4672 130.948 25.5718 130.948 25.7655V28.0149C130.948 28.2086 130.839 28.3132 130.638 28.3132H125.299V32.2772C125.299 32.4709 125.191 32.5756 124.989 32.5756H122.15C121.948 32.5756 121.84 32.4709 121.84 32.2772V20.3272C121.84 20.1335 121.948 20.0288 122.15 20.0288H131.102C131.304 20.0269 131.412 20.1315 131.412 20.3253Z", fill: "#520235" }),
        React.createElement("path", { d: "M136.114 32.5735H132.841C132.639 32.5735 132.531 32.4689 132.531 32.2752V22.9329C132.531 22.7392 132.639 22.6346 132.841 22.6346H136.098C136.3 22.6346 136.408 22.7392 136.408 22.9329L136.424 32.2752C136.426 32.4689 136.317 32.5735 136.114 32.5735ZM132.732 19.804C132.732 18.8062 133.493 18.1204 134.47 18.1204C135.417 18.1204 136.178 18.8062 136.178 19.804C136.178 20.7882 135.417 21.4585 134.47 21.4585C133.493 21.4585 132.732 20.7882 132.732 19.804Z", fill: "#520235" }),
        React.createElement("path", { d: "M147.597 25.7638V32.2755C147.597 32.4692 147.488 32.5739 147.287 32.5739H144.184C143.983 32.5739 143.874 32.4692 143.874 32.2755V25.7793H141.282V32.2755C141.282 32.4692 141.174 32.5739 140.973 32.5739H137.87C137.668 32.5739 137.56 32.4692 137.56 32.2755V22.9178C137.56 22.724 137.668 22.6194 137.87 22.6194H140.694C140.864 22.6194 140.988 22.693 141.05 22.8577C141.081 22.9468 141.112 23.0359 141.143 23.1406C141.78 22.6795 142.523 22.4102 143.704 22.4102C146.062 22.4121 147.597 23.3808 147.597 25.7638Z", fill: "#520235" }),
        React.createElement("path", { d: "M159.002 25.436V32.2751C159.002 32.4689 158.893 32.5735 158.692 32.5735H154.379C150.655 32.5735 148.731 31.6494 148.731 29.8011C148.731 27.8636 150.717 26.5229 155.372 26.4183V25.3895H154.178L149.616 25.6724C149.414 25.6879 149.29 25.5678 149.29 25.374V23.2739C149.29 23.1092 149.352 22.991 149.507 22.9465C151.075 22.5299 152.517 22.4543 154.534 22.4543C157.016 22.4563 159.002 23.2913 159.002 25.436ZM155.372 30.1905V28.2531C153.557 28.2821 152.331 28.656 152.331 29.3419C152.331 30.0704 153.774 30.1905 155.372 30.1905Z", fill: "#520235" }),
        React.createElement("path", { d: "M170.175 25.7638V32.2755C170.175 32.4692 170.066 32.5739 169.865 32.5739H166.762C166.561 32.5739 166.452 32.4692 166.452 32.2755V25.7793H163.861V32.2755C163.861 32.4692 163.752 32.5739 163.551 32.5739H160.448C160.247 32.5739 160.138 32.4692 160.138 32.2755V22.9178C160.138 22.724 160.247 22.6194 160.448 22.6194H163.272C163.442 22.6194 163.566 22.693 163.628 22.8577C163.659 22.9468 163.69 23.0359 163.721 23.1406C164.358 22.6795 165.101 22.4102 166.282 22.4102C168.64 22.4121 170.175 23.3808 170.175 25.7638Z", fill: "#520235" }),
        React.createElement("path", { d: "M180.014 22.7394V25.1825C180.014 25.3762 179.906 25.4808 179.689 25.4653C179.379 25.4498 178.866 25.4498 178.183 25.4498C176.708 25.4498 174.987 26.0466 174.987 27.6101C174.987 29.129 176.71 29.6657 178.183 29.6657H179.72C179.921 29.6657 180.03 29.7703 180.03 29.964L180.014 32.4071C180.014 32.5854 179.906 32.7055 179.72 32.7191C179.317 32.7191 178.649 32.7191 177.718 32.7191C173.233 32.7191 171.123 30.2159 171.123 27.6236C171.123 25.0159 173.419 22.4236 178.183 22.4236C178.882 22.4236 179.377 22.4236 179.72 22.4236C179.906 22.441 180.014 22.5611 180.014 22.7394Z", fill: "#520235" }),
        React.createElement("path", { d: "M191.654 27.8947C191.623 28.0729 191.499 28.164 191.313 28.164H184.656C184.966 29.2663 186.208 29.6693 188.038 29.6693C188.86 29.6693 189.807 29.6693 190.661 29.5512C190.877 29.5221 191.001 29.6248 191.001 29.8185V32.2616C191.001 32.4398 190.908 32.5445 190.723 32.5735C189.776 32.7227 188.706 32.7227 187.573 32.7227C183.088 32.7227 180.978 30.2196 180.978 27.6273C180.978 25.0195 182.732 22.4272 186.58 22.4272C190.181 22.4272 191.7 24.6766 191.7 26.7477C191.698 27.3134 191.685 27.6273 191.654 27.8947ZM188.611 26.7477C188.673 25.839 187.788 25.2733 186.764 25.2733C185.647 25.2733 184.995 25.9592 184.732 26.7477H188.611Z", fill: "#520235" }),
        React.createElement("path", { d: "M19.3127 40.0001C29.9788 40.0001 38.6253 38.4509 38.6253 36.5398C38.6253 34.6288 29.9788 33.0796 19.3127 33.0796C8.64658 33.0796 0 34.6288 0 36.5398C0 38.4509 8.64658 40.0001 19.3127 40.0001Z", fill: "#520235" }),
        React.createElement("path", { d: "M25.8883 39.6009L24.4423 39.5835L23.0098 39.6009V39.566H22.975V39.5486C17.4563 39.3471 13.4125 38.3571 10.5806 34.7806C7.8551 31.3397 6.65302 26.9999 6.79432 21.1237C6.89885 16.7916 8.37 11.9074 8.99524 10.0165C7.21825 7.63538 7.16018 4.69437 8.86942 1.8173C9.52562 0.712971 10.7277 0.0232491 12.0053 0.0213116C14.1946 0.0174368 19.4017 0.00581226 24.4287 0H24.4539C29.4887 0.00581226 34.69 0.0174368 36.8793 0.0213116C38.1568 0.0251865 39.3589 0.712971 40.0151 1.8173C41.7244 4.69243 41.6663 7.63344 39.8893 10.0165C40.5145 11.9074 41.9857 16.7897 42.0902 21.1237C42.2315 26.9999 41.0294 31.3397 38.304 34.7806C35.4739 38.3551 31.436 39.3451 25.9231 39.5466V39.5641H25.8863L25.8883 39.6009ZM24.4461 2.90613C19.4094 2.91194 14.2004 2.92357 12.0092 2.92744C11.744 2.92744 11.502 3.06887 11.3607 3.3033C10.1392 5.35697 10.2496 7.18008 11.6898 8.72033L12.2976 9.37131L11.9937 10.2102C11.9724 10.2703 9.81211 16.2801 9.69403 21.1915C9.57015 26.3509 10.5728 30.094 12.8531 32.973C14.9185 35.5807 18.0583 36.5843 24.4403 36.6734C30.8224 36.5843 33.9641 35.5788 36.0275 32.973C38.3078 30.094 39.3105 26.3509 39.1866 21.1915C39.0686 16.2801 36.9083 10.2683 36.887 10.2083L36.5831 9.37131L37.1909 8.72033C38.6311 7.18008 38.7414 5.35697 37.52 3.3033C37.3806 3.06887 37.1387 2.92744 36.8715 2.92744C34.6803 2.92357 29.4713 2.91194 24.4461 2.90613Z", fill: "#F556AB" }),
        React.createElement("path", { d: "M26.9704 14.7303C26.9704 14.7303 27.3536 11.1306 29.723 10.8322C32.0923 10.5339 34.6068 12.5178 35.9366 14.3544C37.2665 16.1911 38.9873 20.0524 38.6718 21.6527C38.3563 23.253 36.0315 24.9735 33.8751 25.4559C31.7187 25.9383 29.3939 26.6396 27.7079 25.0413C26.0219 23.4429 26.5581 16.6445 26.9704 14.7303Z", fill: "#F556AB" }),
        React.createElement("path", { d: "M36.4772 21.9575C36.9027 21.9575 37.2476 21.6122 37.2476 21.1864C37.2476 20.7605 36.9027 20.4153 36.4772 20.4153C36.0517 20.4153 35.7068 20.7605 35.7068 21.1864C35.7068 21.6122 36.0517 21.9575 36.4772 21.9575Z", fill: "white" }),
        React.createElement("path", { d: "M36.4767 22.0538C35.9986 22.0538 35.6095 21.6644 35.6095 21.1858C35.6095 20.7073 35.9986 20.3179 36.4767 20.3179C36.9548 20.3179 37.3439 20.7073 37.3439 21.1858C37.3439 21.6644 36.9548 22.0538 36.4767 22.0538ZM36.4767 20.5097C36.105 20.5097 35.8031 20.8119 35.8031 21.1839C35.8031 21.5559 36.105 21.8581 36.4767 21.8581C36.8484 21.8581 37.1503 21.5559 37.1503 21.1839C37.1503 20.8119 36.8484 20.5097 36.4767 20.5097Z", fill: "white" }),
        React.createElement("path", { d: "M34.7737 17.9374C35.1767 17.9374 35.5035 17.6104 35.5035 17.207C35.5035 16.8036 35.1767 16.4766 34.7737 16.4766C34.3707 16.4766 34.0439 16.8036 34.0439 17.207C34.0439 17.6104 34.3707 17.9374 34.7737 17.9374Z", fill: "white" }),
        React.createElement("path", { d: "M34.7732 18.0337C34.3164 18.0337 33.9467 17.6617 33.9467 17.2064C33.9467 16.7492 34.3183 16.3792 34.7732 16.3792C35.2281 16.3792 35.5998 16.7511 35.5998 17.2064C35.5998 17.6617 35.2281 18.0337 34.7732 18.0337ZM34.7732 16.571C34.4248 16.571 34.1402 16.8558 34.1402 17.2045C34.1402 17.5532 34.4248 17.838 34.7732 17.838C35.1216 17.838 35.4062 17.5532 35.4062 17.2045C35.4062 16.8558 35.1216 16.571 34.7732 16.571Z", fill: "white" }),
        React.createElement("path", { d: "M31.2429 14.607C31.6909 14.607 32.054 14.2435 32.054 13.7952C32.054 13.3468 31.6909 12.9834 31.2429 12.9834C30.795 12.9834 30.4319 13.3468 30.4319 13.7952C30.4319 14.2435 30.795 14.607 31.2429 14.607Z", fill: "white" }),
        React.createElement("path", { d: "M31.2424 14.7033C30.7411 14.7033 30.3346 14.2945 30.3346 13.7946C30.3346 13.2948 30.7411 12.886 31.2424 12.886C31.7438 12.886 32.1503 13.2928 32.1503 13.7946C32.1503 14.2964 31.7438 14.7033 31.2424 14.7033ZM31.2424 13.0797C30.8476 13.0797 30.5282 13.4013 30.5282 13.7946C30.5282 14.1899 30.8495 14.5095 31.2424 14.5095C31.6373 14.5095 31.9567 14.1879 31.9567 13.7946C31.9567 13.3994 31.6373 13.0797 31.2424 13.0797Z", fill: "white" }),
        React.createElement("path", { d: "M30.9178 18.8306C31.3657 18.8306 31.7288 18.4671 31.7288 18.0188C31.7288 17.5705 31.3657 17.207 30.9178 17.207C30.4698 17.207 30.1067 17.5705 30.1067 18.0188C30.1067 18.4671 30.4698 18.8306 30.9178 18.8306Z", fill: "white" }),
        React.createElement("path", { d: "M30.9173 18.9269C30.4159 18.9269 30.0094 18.5181 30.0094 18.0183C30.0094 17.5184 30.4159 17.1096 30.9173 17.1096C31.4186 17.1096 31.8251 17.5184 31.8251 18.0183C31.8251 18.5181 31.4186 18.9269 30.9173 18.9269ZM30.9173 17.3034C30.5224 17.3034 30.203 17.625 30.203 18.0183C30.203 18.4116 30.5243 18.7332 30.9173 18.7332C31.3121 18.7332 31.6315 18.4116 31.6315 18.0183C31.6315 17.625 31.3121 17.3034 30.9173 17.3034Z", fill: "white" }),
        React.createElement("path", { d: "M19.9423 27.5332C25.0963 27.5332 29.2744 23.3514 29.2744 18.1928C29.2744 13.0343 25.0963 8.85254 19.9423 8.85254C14.7884 8.85254 10.6102 13.0343 10.6102 18.1928C10.6102 23.3514 14.7884 27.5332 19.9423 27.5332Z", fill: "#FCA547" }),
        React.createElement("path", { d: "M19.9418 27.6295C14.7425 27.6295 10.5129 23.3962 10.5129 18.1923C10.5129 12.9884 14.7425 8.75513 19.9418 8.75513C25.1412 8.75513 29.3707 12.9884 29.3707 18.1923C29.3707 23.3962 25.1412 27.6295 19.9418 27.6295ZM19.9418 8.94887C14.8489 8.94887 10.7065 13.095 10.7065 18.1923C10.7065 23.2897 14.8489 27.4357 19.9418 27.4357C25.0347 27.4357 29.1771 23.2897 29.1771 18.1923C29.1771 13.095 25.0347 8.94887 19.9418 8.94887Z", fill: "white" }),
        React.createElement("path", { d: "M19.4501 19.2581C19.4308 21.5927 18.3661 23.9021 16.5833 25.4791C16.4943 25.5566 16.3975 25.638 16.2794 25.6535C16.0684 25.6806 15.8865 25.483 15.8555 25.2815C15.8265 25.0781 15.9078 24.8785 15.9891 24.6887C16.895 22.6079 18.0661 20.6394 19.4501 19.2581Z", fill: "white" }),
        React.createElement("path", { d: "M18.9565 18.6455C17.2937 20.2826 14.9089 21.1622 12.5357 21.015C12.4176 21.0072 12.2918 20.9956 12.197 20.922C12.0286 20.7922 12.0382 20.5229 12.1602 20.3601C12.2821 20.1954 12.4815 20.1121 12.6732 20.0366C14.7831 19.2074 17.0034 18.6436 18.9565 18.6455Z", fill: "white" }),
        React.createElement("path", { d: "M19.0398 17.8631C16.7072 17.8437 14.3999 16.7781 12.8242 14.9957C12.7468 14.9066 12.6655 14.8097 12.65 14.6915C12.6229 14.4804 12.8203 14.2982 13.0216 14.2672C13.2249 14.2382 13.4243 14.3196 13.614 14.4009C15.691 15.3057 17.6596 16.4778 19.0398 17.8631Z", fill: "white" }),
        React.createElement("path", { d: "M19.6514 17.3689C18.0157 15.7028 17.1369 13.3178 17.284 10.9425C17.2917 10.8243 17.3033 10.6984 17.3769 10.6054C17.5066 10.4369 17.7757 10.4465 17.9383 10.5686C18.1028 10.6907 18.186 10.8902 18.2615 11.082C19.09 13.1919 19.6533 15.4141 19.6514 17.3689Z", fill: "white" }),
        React.createElement("path", { d: "M20.4335 17.4524C20.4528 15.1178 21.5175 12.8084 23.2983 11.2313C23.3874 11.1538 23.4842 11.0724 23.6022 11.0569C23.8132 11.0298 23.9952 11.2274 24.0262 11.4289C24.0552 11.6324 23.9739 11.8319 23.8926 12.0218C22.9867 14.1006 21.8156 16.071 20.4335 17.4524Z", fill: "white" }),
        React.createElement("path", { d: "M20.9271 18.0644C22.5899 16.4272 24.9747 15.5476 27.3479 15.6949C27.466 15.7026 27.5918 15.7143 27.6847 15.7879C27.8531 15.9177 27.8434 16.187 27.7215 16.3497C27.5995 16.5144 27.4002 16.5977 27.2085 16.6733C25.1005 17.5025 22.8803 18.0663 20.9271 18.0644Z", fill: "white" }),
        React.createElement("path", { d: "M20.8439 18.8472C23.1764 18.8665 25.4838 19.9321 27.0595 21.7146C27.1369 21.8037 27.2182 21.9005 27.2337 22.0187C27.2608 22.228 27.0633 22.412 26.862 22.4411C26.6588 22.4701 26.4594 22.3888 26.2697 22.3074C24.1907 21.4026 22.224 20.2305 20.8439 18.8472Z", fill: "white" }),
        React.createElement("path", { d: "M20.2322 19.3411C21.8679 21.0072 22.7467 23.3922 22.5996 25.7675C22.5918 25.8857 22.5802 26.0116 22.5067 26.1046C22.377 26.2732 22.1079 26.2635 21.9453 26.1414C21.7808 26.0194 21.6975 25.8198 21.622 25.628C20.7936 23.5181 20.2283 21.2959 20.2322 19.3411Z", fill: "white" }),
        React.createElement("path", { d: "M26.0225 22.7304C26.0225 22.7304 29.1564 20.3106 30.9199 20.3571C32.6833 20.4036 33.5041 21.2638 34.0441 22.0155C34.5842 22.7673 35.7146 24.6485 35.3914 27.6612C35.0681 30.6739 33.4576 34.7831 31.7716 35.3489C30.0856 35.9146 27.3949 35.6162 24.8843 34.0276C22.3737 32.4389 20.7419 31.5767 20.6702 29.3971C20.5986 27.2156 23.5099 24.4703 26.0225 22.7304Z", fill: "#F556AB" }),
        React.createElement("path", { d: "M29.9824 35.7143C28.3448 35.7143 26.4768 35.1505 24.8295 34.1082C24.6534 33.9978 24.483 33.8893 24.3165 33.7847C22.1021 32.3955 20.6406 31.4772 20.5709 29.3983C20.4993 27.2265 23.31 24.4889 25.9619 22.6522C26.1168 22.5341 29.09 20.2595 30.8651 20.2595C30.8825 20.2595 30.9019 20.2595 30.9193 20.2595C32.7098 20.308 33.5693 21.1914 34.119 21.9567C34.903 23.0494 35.7779 24.9287 35.4837 27.6702C35.3211 29.193 34.8333 30.9831 34.1771 32.4595C33.4435 34.1101 32.5995 35.168 31.7981 35.4373C31.2503 35.6233 30.6347 35.7143 29.9824 35.7143ZM30.867 20.4533C29.15 20.4533 26.1129 22.784 26.0819 22.8072L26.078 22.8111C23.4648 24.6187 20.6987 27.2982 20.7684 29.3925C20.8322 31.3687 22.1834 32.2153 24.423 33.6219C24.5895 33.7265 24.7618 33.835 24.9379 33.9455C27.6789 35.6795 30.3173 35.7356 31.742 35.2571C33.3428 34.7204 34.9669 30.7274 35.2959 27.6508C35.5824 24.9713 34.7307 23.1385 33.9661 22.071C33.4105 21.296 32.613 20.4978 30.9173 20.4533C30.8999 20.4533 30.8825 20.4533 30.867 20.4533Z", fill: "white" }),
        React.createElement("path", { d: "M27.7045 25.1558C28.0851 25.1558 28.3936 24.847 28.3936 24.4661C28.3936 24.0852 28.0851 23.7764 27.7045 23.7764C27.3239 23.7764 27.0154 24.0852 27.0154 24.4661C27.0154 24.847 27.3239 25.1558 27.7045 25.1558Z", fill: "white" }),
        React.createElement("path", { d: "M27.704 25.2541C27.2704 25.2541 26.9181 24.9015 26.9181 24.4675C26.9181 24.0335 27.2704 23.6809 27.704 23.6809C28.1376 23.6809 28.4899 24.0335 28.4899 24.4675C28.4899 24.9015 28.1376 25.2541 27.704 25.2541ZM27.704 23.8727C27.3769 23.8727 27.1117 24.1381 27.1117 24.4656C27.1117 24.793 27.3769 25.0584 27.704 25.0584C28.0311 25.0584 28.2963 24.793 28.2963 24.4656C28.2983 24.1381 28.0311 23.8727 27.704 23.8727Z", fill: "white" }),
        React.createElement("path", { d: "M32.0948 27.479C32.5202 27.479 32.8652 27.1337 32.8652 26.7079C32.8652 26.282 32.5202 25.9368 32.0948 25.9368C31.6693 25.9368 31.3243 26.282 31.3243 26.7079C31.3243 27.1337 31.6693 27.479 32.0948 27.479Z", fill: "white" }),
        React.createElement("path", { d: "M32.0943 27.5753C31.6161 27.5753 31.2271 27.1859 31.2271 26.7073C31.2271 26.2288 31.6161 25.8394 32.0943 25.8394C32.5724 25.8394 32.9615 26.2288 32.9615 26.7073C32.9615 27.1859 32.5724 27.5753 32.0943 27.5753ZM32.0943 26.0331C31.7226 26.0331 31.4206 26.3353 31.4206 26.7073C31.4206 27.0793 31.7226 27.3815 32.0943 27.3815C32.4659 27.3815 32.7679 27.0793 32.7679 26.7073C32.7679 26.3353 32.4659 26.0331 32.0943 26.0331Z", fill: "white" }),
        React.createElement("path", { d: "M28.0375 28.535C28.4405 28.535 28.7673 28.208 28.7673 27.8046C28.7673 27.4012 28.4405 27.0742 28.0375 27.0742C27.6345 27.0742 27.3077 27.4012 27.3077 27.8046C27.3077 28.208 27.6345 28.535 28.0375 28.535Z", fill: "white" }),
        React.createElement("path", { d: "M28.037 28.6314C27.5802 28.6314 27.2104 28.2594 27.2104 27.8041C27.2104 27.3469 27.5821 26.9768 28.037 26.9768C28.4938 26.9768 28.8636 27.3488 28.8636 27.8041C28.8636 28.2613 28.4938 28.6314 28.037 28.6314ZM28.037 27.1705C27.6886 27.1705 27.404 27.4553 27.404 27.8041C27.404 28.1528 27.6886 28.4376 28.037 28.4376C28.3854 28.4376 28.67 28.1528 28.67 27.8041C28.67 27.4553 28.3874 27.1705 28.037 27.1705Z", fill: "white" }),
        React.createElement("path", { d: "M31.6089 23.662C32.012 23.662 32.3387 23.335 32.3387 22.9316C32.3387 22.5282 32.012 22.2012 31.6089 22.2012C31.2059 22.2012 30.8792 22.5282 30.8792 22.9316C30.8792 23.335 31.2059 23.662 31.6089 23.662Z", fill: "white" }),
        React.createElement("path", { d: "M31.6084 23.7583C31.1516 23.7583 30.7819 23.3863 30.7819 22.931C30.7819 22.4757 31.1535 22.1038 31.6084 22.1038C32.0633 22.1038 32.435 22.4757 32.435 22.931C32.435 23.3863 32.0633 23.7583 31.6084 23.7583ZM31.6084 22.2975C31.26 22.2975 30.9754 22.5823 30.9754 22.931C30.9754 23.2798 31.26 23.5646 31.6084 23.5646C31.9568 23.5646 32.2414 23.2798 32.2414 22.931C32.2414 22.5823 31.9568 22.2975 31.6084 22.2975Z", fill: "white" }),
        React.createElement("path", { d: "M30.188 33.0024C30.7033 33.0024 31.121 32.5843 31.121 32.0686C31.121 31.5529 30.7033 31.1348 30.188 31.1348C29.6727 31.1348 29.255 31.5529 29.255 32.0686C29.255 32.5843 29.6727 33.0024 30.188 33.0024Z", fill: "white" }),
        React.createElement("path", { d: "M30.1875 33.0988C29.6204 33.0988 29.1577 32.6357 29.1577 32.0681C29.1577 31.5004 29.6204 31.0374 30.1875 31.0374C30.7547 31.0374 31.2173 31.5004 31.2173 32.0681C31.2173 32.6357 30.7547 33.0988 30.1875 33.0988ZM30.1875 31.2311C29.7268 31.2311 29.3513 31.607 29.3513 32.0681C29.3513 32.5292 29.7268 32.905 30.1875 32.905C30.6482 32.905 31.0237 32.5292 31.0237 32.0681C31.0237 31.607 30.6482 31.2311 30.1875 31.2311Z", fill: "white" }),
        React.createElement("path", { d: "M23.8175 28.7788C24.1757 28.7788 24.466 28.4882 24.466 28.1298C24.466 27.7713 24.1757 27.4807 23.8175 27.4807C23.4594 27.4807 23.1691 27.7713 23.1691 28.1298C23.1691 28.4882 23.4594 28.7788 23.8175 28.7788Z", fill: "white" }),
        React.createElement("path", { d: "M23.817 28.8751C23.4067 28.8751 23.0718 28.5399 23.0718 28.1292C23.0718 27.7185 23.4067 27.3833 23.817 27.3833C24.2274 27.3833 24.5623 27.7185 24.5623 28.1292C24.5623 28.5399 24.2293 28.8751 23.817 28.8751ZM23.817 27.5751C23.5131 27.5751 23.2653 27.8231 23.2653 28.1273C23.2653 28.4314 23.5131 28.6794 23.817 28.6794C24.1209 28.6794 24.3687 28.4314 24.3687 28.1273C24.3687 27.8231 24.1229 27.5751 23.817 27.5751Z", fill: "white" })));
};
var Logo$3 = React.memo(Logo$2, function (prev, next) { return prev.isDark === next.isDark; });

var Icon$f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$c = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 28 28" }, props),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.3582 2.16675C7.92393 2.16675 7.60547 2.48597 7.60547 2.91829V6.07812H12.0687V2.91829C12.0687 2.48597 11.7502 2.16675 11.3159 2.16675H8.3582ZM5.60547 2.91829V6.15451C3.17804 6.57586 1.33331 8.6899 1.33331 11.238V23.061C1.33331 25.9128 3.64395 28.2209 6.49606 28.2209H13.1784C14.2 28.2209 15.0928 27.9784 15.8852 27.4933C16.9443 28.0737 18.2322 28.4398 19.532 28.4398C23.4796 28.4398 26.6666 25.2559 26.6666 21.3094C26.6666 17.2772 23.4987 14.0594 19.5156 14.179C19.1113 14.1803 18.7149 14.2307 18.3411 14.3054V12.576C20.5996 12.1176 22.2847 10.1344 22.2847 7.73492C22.2847 5.07613 20.0669 2.9289 17.3909 2.79519L17.366 2.79395H17.341C16.097 2.79395 14.9431 3.28848 14.0687 4.09404V2.91829C14.0687 1.38012 12.8535 0.166748 11.3159 0.166748H8.3582C6.82065 0.166748 5.60547 1.38012 5.60547 2.91829ZM3.33331 11.238C3.33331 9.49975 4.73482 8.09057 6.473 8.07821H13.0687V8.07812H13.451C13.6644 8.10382 13.8725 8.15025 14.0728 8.21532C14.1879 8.2527 14.3004 8.29622 14.41 8.34548C15.5338 8.85097 16.341 9.96078 16.341 11.238V12.6759H16.3411V23.1704C16.3411 24.0608 15.938 24.8872 15.2625 25.4795C14.6839 25.9738 14.0413 26.2209 13.1784 26.2209H6.49606C4.74724 26.2209 3.33331 24.8069 3.33331 23.061V11.238ZM14.8067 6.35379C15.0144 6.42693 15.217 6.51275 15.4135 6.61041C16.9076 7.35313 18.0434 8.78078 18.2908 10.5224C19.4566 10.132 20.2847 9.03885 20.2847 7.73492C20.2847 6.24123 19.0097 4.89138 17.3165 4.79406C16.2788 4.80379 15.3097 5.42916 14.8067 6.35379ZM24.6666 21.3094C24.6666 18.3407 22.3656 16.0882 19.5643 16.1785L19.5482 16.179H19.532C19.1491 16.179 18.7489 16.2504 18.3411 16.3583V23.2799C18.3411 24.298 18.0297 25.2463 17.4997 26.0441C18.1323 26.2918 18.8354 26.4398 19.532 26.4398C22.3763 26.4398 24.6666 24.1501 24.6666 21.3094ZM6.82487 22.9517H12.8499C13.8358 22.9517 14.7122 22.0759 14.7122 21.0907V17.0402C14.7122 16.055 13.9454 15.1792 12.8499 15.1792H6.82487C5.83895 15.1792 4.96259 15.9455 4.96259 17.0402V21.0907C4.96259 22.0759 5.72941 22.9517 6.82487 22.9517Z" })));
};

var Icon$b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M3.18731 5.68438C2.44993 5.52604 2.44993 4.47393 3.18731 4.31559L5.3203 3.85755C5.58957 3.79973 5.79991 3.58939 5.85774 3.32012L6.31577 1.18713C6.47411 0.449748 7.52622 0.449751 7.68457 1.18713L8.1426 3.32012C8.20042 3.58939 8.41076 3.79973 8.68003 3.85755L10.813 4.31559C11.5504 4.47393 11.5504 5.52604 10.813 5.68438L8.68003 6.14241C8.41076 6.20024 8.20042 6.41058 8.1426 6.67985L7.68457 8.81284C7.52622 9.55022 6.47411 9.55022 6.31577 8.81284L5.85774 6.67985C5.79991 6.41058 5.58957 6.20024 5.3203 6.14241L3.18731 5.68438Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.99998C15.866 2.99998 19 6.13399 19 9.99998C19 13.866 15.866 17 12 17C8.13401 17 5 13.866 5 9.99998C5 9.4477 4.55228 8.99998 4 8.99998C3.44772 8.99998 3 9.4477 3 9.99998C3 12.8894 4.36163 15.4608 6.47822 17.1075L5.58579 18C5.21071 18.3751 5 18.8838 5 19.4142V21.5C5 22.3284 5.67157 23 6.5 23H17.5C18.3284 23 19 22.3284 19 21.5V19.4142C19 18.8838 18.7893 18.3751 18.4142 18L17.5218 17.1075C19.6384 15.4608 21 12.8894 21 9.99998C21 5.02942 16.9706 0.999985 12 0.999985C11.4477 0.999985 11 1.4477 11 1.99998C11 2.55227 11.4477 2.99998 12 2.99998ZM12 19C10.6564 19 9.38156 18.7056 8.23649 18.1777L7 19.4142L7 21H17V19.4142L15.7635 18.1777C14.6184 18.7056 13.3436 19 12 19Z" })));
};

var Icon$a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React.createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React.createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React.createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React.createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React.createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React.createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React.createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$9 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 5H17C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5H5C3.9 5 3 5.9 3 7V8C3 10.55 4.92 12.63 7.39 12.94C8.02 14.44 9.37 15.57 11 15.9V19H8C7.44772 19 7 19.4477 7 20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19H13V15.9C14.63 15.57 15.98 14.44 16.61 12.94C19.08 12.63 21 10.55 21 8V7C21 5.9 20.1 5 19 5ZM5 8V7H7V10.82C5.84 10.4 5 9.3 5 8ZM12 14C10.35 14 9 12.65 9 11V5H15V11C15 12.65 13.65 14 12 14ZM19 8C19 9.3 18.16 10.4 17 10.82V7H19V8Z" })));
};

var Icon$8 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M23.8554 1.01205L20.3855 21.5422C20.3855 21.8313 20.241 21.9759 19.9518 22.1205C19.8072 22.1205 19.6627 22.2651 19.5181 22.2651C19.3735 22.2651 19.3735 22.2651 19.2289 22.2651L13.7349 19.9518C13.4458 19.8072 13.012 19.9518 12.8675 20.241L9.9759 23.7108C9.83133 23.8554 9.54217 24 9.25301 24C9.10843 24 9.10843 24 8.96385 24C8.81928 24 8.6747 23.8554 8.53012 23.7108C8.38554 23.5663 8.38554 23.4217 8.38554 23.2771V19.2289C8.38554 18.9398 8.53012 18.506 8.6747 18.2169L20.0964 4.33735L6.07229 16.4819C5.92771 16.6265 5.78313 16.6265 5.63855 16.4819L0.578313 14.4578C0.144578 14.3133 0 14.0241 0 13.7349C0 13.4458 0.144578 13.1566 0.433735 13.012L22.5542 0.144578C22.6988 0 22.8434 0 22.988 0C23.1325 0 23.2771 0 23.4217 0.144578C23.8554 0.289157 24 0.578313 23.8554 1.01205Z", fill: "#ffffff" })));
};

var Icon$7 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 28 28" }, props),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M13 2.20841C7.26234 2.68854 2.68849 7.26236 2.20835 13H5.23045C5.78273 13 6.23045 13.4477 6.23045 14C6.23045 14.5523 5.78273 15 5.23045 15H2.20834C2.68843 20.7377 7.2623 25.3116 13 25.7917V22.7695C13 22.2172 13.4477 21.7695 14 21.7695C14.5523 21.7695 15 22.2172 15 22.7695V25.7917C20.7377 25.3116 25.3117 20.7377 25.7917 15H22.7694C22.2171 15 21.7694 14.5523 21.7694 14C21.7694 13.4477 22.2171 13 22.7694 13H25.7917C25.3116 7.26234 20.7377 2.68849 15 2.2084V5.23062C15 5.7829 14.5523 6.23062 14 6.23062C13.4477 6.23062 13 5.7829 13 5.23062V2.20841ZM14 0.166748C6.36009 0.166748 0.166687 6.36013 0.166687 14.0001C0.166687 21.64 6.36009 27.8334 14 27.8334C21.64 27.8334 27.8334 21.64 27.8334 14.0001C27.8334 6.36013 21.64 0.166748 14 0.166748ZM14 18.9194C15.6042 18.9194 16.8875 17.6361 16.8875 16.0319C16.8875 14.4278 15.6042 9.08057 14 9.08057C12.3958 9.08057 11.1125 14.4278 11.1125 16.0319C11.1125 17.6361 12.3958 18.9194 14 18.9194Z" })));
};

var Icon$6 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 28 28" }, props),
        React.createElement("path", { d: "M17.4224 7.69043L10.7919 7.79737L14.1071 11.1127L17.4224 7.69043Z" }),
        React.createElement("path", { d: "M10.5778 20.3099L17.2083 20.203L13.893 16.8877L10.5778 20.3099Z" }),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2.16675 14.0001C2.16675 7.46471 7.46471 2.16675 14.0001 2.16675C20.5354 2.16675 25.8334 7.46471 25.8334 14.0001C25.8334 20.5354 20.5354 25.8334 14.0001 25.8334C7.46471 25.8334 2.16675 20.5354 2.16675 14.0001ZM14.0001 0.166748C6.36014 0.166748 0.166748 6.36014 0.166748 14.0001C0.166748 21.64 6.36014 27.8334 14.0001 27.8334C21.64 27.8334 27.8334 21.64 27.8334 14.0001C27.8334 6.36014 21.64 0.166748 14.0001 0.166748ZM18.3736 7.38181C18.3471 7.30005 18.3099 7.22103 18.2619 7.14697C18.1971 7.04683 18.1155 6.96021 18.022 6.89014C17.8891 6.79026 17.737 6.72784 17.58 6.70289C17.5288 6.69473 17.4766 6.69049 17.4237 6.69043L17.4063 6.69056L17.4028 6.69062L10.7757 6.7975C10.3742 6.80398 10.0156 7.04996 9.8649 7.42215C9.71424 7.79434 9.80081 8.22056 10.0847 8.50448L12.6393 11.0591L6.98314 16.7153C6.59262 17.1058 6.59262 17.739 6.98314 18.1295C7.37366 18.52 8.00683 18.52 8.39735 18.1295L14.4907 12.0362C14.6154 11.9844 14.7295 11.9074 14.8254 11.8084L18.1406 8.38623C18.2507 8.27264 18.3297 8.13751 18.3756 7.99286C18.4378 7.79669 18.4389 7.583 18.3736 7.38181ZM14.0535 9.64487L14.9683 8.73014L13.1679 8.75918L14.0535 9.64487ZM21.0169 11.285C21.4074 10.8945 21.4074 10.2613 21.0169 9.87077C20.6263 9.48025 19.9932 9.48025 19.6027 9.87077L13.5091 15.9644C13.3845 16.0162 13.2705 16.0931 13.1748 16.1919L9.86593 19.6075C9.69956 19.7761 9.60524 19.9891 9.58298 20.2081C9.57309 20.3046 9.57719 20.4027 9.59586 20.4994C9.62354 20.6435 9.68309 20.7827 9.7745 20.9056C9.8288 20.9788 9.89249 21.0437 9.96344 21.099C10.0766 21.1873 10.2044 21.2479 10.3376 21.2807C10.4202 21.3011 10.5062 21.3112 10.5939 21.3098L17.2245 21.2028C17.6259 21.1964 17.9846 20.9504 18.1353 20.5782C18.2859 20.206 18.1994 19.7798 17.9154 19.4959L15.3607 16.9411L21.0169 11.285ZM14.8323 19.2412L13.0316 19.2702L13.9465 18.3554L14.8323 19.2412Z" })));
};

var Icon$5 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5.30653 6.40344C9.04523 8.50863 12.3015 8.37705 12.3015 8.37705C12.3015 8.37705 11.0955 3.77197 14.8342 1.66678C18.5729 -0.438398 21.1055 3.1141 21.1055 3.1141C21.1055 3.1141 21.7085 2.98252 22.191 2.71938C22.6734 2.5878 23.397 2.19308 23.397 2.19308L22.191 4.42984L24 4.16669C24 4.16669 23.7588 4.56141 23.0352 5.21928C22.4322 6.00872 22.0704 6.27187 22.0704 6.27187C22.0704 6.27187 22.3116 11.798 19.6583 16.1399C17.005 20.4819 13.5075 22.9818 8.44221 23.5081C3.37688 24.0343 0.120603 21.7976 0.120603 21.7976C0.120603 21.7976 2.29146 21.666 3.73869 21.0081C5.18593 20.4819 7.11558 18.903 7.11558 18.903C7.11558 18.903 4.34171 18.1135 3.37688 17.0609C2.29146 16.0083 2.05025 15.3505 2.05025 15.3505H4.82412C4.82412 15.3505 1.80905 13.64 0.964824 12.1927C0.120603 10.877 0 9.56122 0 9.56122L2.17085 10.4822C2.17085 10.4822 0.361809 7.85076 0.120603 5.74558C0 3.50882 0.603015 2.32465 0.603015 2.32465C0.603015 2.32465 1.44724 4.29826 5.30653 6.40344Z", fill: "#ffffff" })));
};

var Icon$4 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 24.0006C1.79087 23.9996 0 22.2091 0 20C0 14.6648 0 9.3352 0 4.00001C0 1.79087 1.79087 0 4.00001 0C9.3345 0 14.6613 0 20 0C22.2091 0 24 1.79085 24 3.99999C24 9.32111 24 14.6485 24 19.9906C24 22.1997 22.2092 23.9906 20 23.9906C18.881 23.9906 17.7568 23.9906 16.6248 23.9906C16.6248 20.9388 16.6248 17.8681 16.6248 14.7504C17.5479 14.7504 18.4521 14.7598 19.3564 14.741C19.4882 14.741 19.7331 14.6374 19.7425 14.5526C19.9215 13.4129 20.0722 12.2732 20.2418 11.0675C18.9984 11.0675 17.8305 11.0675 16.6719 11.0675C16.6719 10.022 16.606 9.02355 16.7002 8.03454C16.7661 7.36578 17.3595 7.05495 18.3014 7.03611C18.989 7.01727 19.6766 7.03611 20.383 7.03611C20.383 5.90581 20.383 4.83203 20.383 3.68289C18.6217 3.57928 16.8509 3.23077 15.1648 4.05966C13.6295 4.81319 12.9513 6.15071 12.8477 7.78022C12.7724 8.84459 12.8383 9.90895 12.8383 11.0581C12.5651 11.0581 12.3203 11.0581 12.0754 11.0581C11.3972 11.0581 10.7284 11.0769 10.0502 11.0581C9.76766 11.0487 9.66405 11.1523 9.66405 11.4349C9.67347 12.405 9.67347 13.3846 9.65463 14.3548C9.64521 14.6939 9.79592 14.7692 10.1068 14.7692C10.9827 14.7504 11.8587 14.7598 12.7818 14.7598C12.7818 17.8493 12.7818 20.9199 12.7818 24.0188C9.86309 24.0059 6.93993 24.0018 4 24.0006Z", fill: "#7B7B7B" })));
};

var Icon$3 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M24 4C24 1.79086 22.2091 0 20 0H4C1.79086 0 0 1.79086 0 4V20C0 22.2091 1.79086 24 4 24H20C22.2091 24 24 22.2091 24 20V4ZM12 12C12 14.7614 9.76142 17 7 17C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7C9.76142 7 12 9.23858 12 12ZM15.5 16.5C16.8807 16.5 18 14.4853 18 12C18 9.51472 16.8807 7.5 15.5 7.5C14.1193 7.5 13 9.51472 13 12C13 14.4853 14.1193 16.5 15.5 16.5ZM21 12.5C21 14.7091 20.5523 16.5 20 16.5C19.4477 16.5 19 14.7091 19 12.5C19 10.2909 19.4477 8.5 20 8.5C20.5523 8.5 21 10.2909 21 12.5Z", fill: "#ffffff" })));
};

var Icon$2 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 972 972" }, props),
        React.createElement("path", { d: "M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667", fill: "#ffffff" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$n,
    GroupsIcon: Icon$m,
    HamburgerIcon: Icon$l,
    HamburgerCloseIcon: Icon$k,
    HomeIcon: Icon$j,
    IfoIcon: Icon$i,
    InfoIcon: Icon$h,
    LanguageIcon: Icon$g,
    LogoIcon: Logo$3,
    MoonIcon: Icon$f,
    MoreIcon: Icon$e,
    NftIcon: Icon$d,
    PoolIcon: Icon$c,
    PredictionsIcon: Icon$b,
    SunIcon: Icon$a,
    TeamBattleIcon: Icon$9,
    TelegramIcon: Icon$8,
    TicketIcon: Icon$7,
    TradeIcon: Icon$6,
    TwitterIcon: Icon$5,
    FaceBookIcon: Icon$4,
    MediumIcon: Icon$3,
    GithubIcon: Icon$2
});

var MenuButton = styled(Button)(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$d;

var StyledLink = styled(Link$1)(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: flex;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: flex;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var StyledLogoBox = styled.div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  align-items: center;\n"], ["\n  align-items: center;\n"])));
var StyledLogo = styled.img(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  width: 220px;\n"], ["\n  width: 220px;\n"])));
styled.span(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  font-size: 16px;\n  color: #E8E8E8;\n"], ["\n  font-size: 16px;\n  color: #E8E8E8;\n"])));
var Logo = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush; _a.isDark; var href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var isLand = window.location.href.indexOf("/land") !== -1;
    var innerLogo = (React.createElement(React.Fragment, null,
        React.createElement(StyledLogoBox, { className: "desktop-icon" },
            React.createElement(StyledLogo, { src: isLand ? "/images/land-logo.png" : "/images/logo.png" }))));
    return (React.createElement(Flex, null,
        React.createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React.createElement(Icon$k, { width: "40px", color: "#fff" })) : (React.createElement(Icon$l, { width: "40px", color: "#fff" }))),
        isAbsoluteUrl ? (React.createElement(StyledLink, { as: "a", href: href, "aria-label": "AMT home page" }, innerLogo)) : (React.createElement(StyledLink, { to: href, "aria-label": "AMT home page" }, innerLogo))));
};
var Logo$1 = React.memo(Logo, function (prev, next) { return prev.isPushed === next.isPushed && prev.isDark === next.isDark; });
var templateObject_1$c, templateObject_2$6, templateObject_3$3, templateObject_4$2;

var status = {
    LIVE: {
        text: "LIVE",
        color: "failure",
    },
    SOON: {
        text: "SOON",
        color: "warning",
    },
    NEW: {
        text: "NEW",
        color: "success",
    },
};
var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "/Exchange",
            },
            {
                label: "Liquidity",
                href: "/Liquidity",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
        status: status.LIVE,
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        href: "/syrup",
    },
    {
        label: "Lottery",
        icon: "TicketIcon",
        href: "/lottery",
    },
];
var socials = [
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/pixelfi_org",
    },
    {
        label: "Telegram",
        icon: "TelegramIcon",
        href: "https://t.me/pixel_announcement",
    },
    {
        label: "Medium",
        icon: "MediumIcon",
        href: "https://medium.com/@pixel.finance/pixelfinances-medium-has-been-renewed-ecdbe9998636?source=friends_link&sk=af0795411e95b8808a237921677a656a",
    },
    {
        label: "Github",
        icon: "GithubIcon",
        href: "https://docs.pixelfinance.io/welcome/readme",
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = keyframes(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled.div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed; _a.theme;
    return (isPushed ? "" : "transparent");
});
// box-shadow: ${({ isActive, theme }) =>
//   isActive ? `inset 4px -1px -1px ${theme.colors.primary}` : "none"};
var MenuEntry = styled.div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  // background-color: ", ";\n  color: ", ";\n  border-left: ", ";\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  img {\n    opacity: ", ";\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  // background-color: ", ";\n  color: ", ";\n  border-left: ", ";\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  img {\n    opacity: ", ";\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return secondary ? theme.colors.background : "transparent";
}, function (_a) {
    var isActive = _a.isActive;
    return (isActive ? "#E8E8E8" : "#67717A");
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return isActive ? "4px solid ".concat(theme.colors.primary) : "none";
}, function (_a) {
    var isActive = _a.isActive;
    return (isActive ? 1 : 0.3);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var LinkStatus = styled(Text)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"], ["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.radii.default;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
});
var LinkLabelMemo = React.memo(LinkLabel, function (prev, next) { return prev.isPushed === next.isPushed; });
var templateObject_1$b, templateObject_2$5, templateObject_3$2, templateObject_4$1;

var Container$2 = styled.div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  /* border-color: ", "; */\n  border-style: solid;\n  /* border-width: ", "; */\n  background: #112651;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  /* border-color: ", "; */\n  border-style: solid;\n  /* border-width: ", "; */\n  background: #112651;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? "".concat(maxHeight, "px") : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent";
}, function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? 1 : 0);
});
var Accordion = function (_a) {
    var label = _a.label, status = _a.status, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className, isActive = _a.isActive;
    var _c = useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React.createElement(Container$2, null,
        React.createElement(MenuEntry, { onClick: handleClick, className: className, isActive: isActive },
            icon,
            React.createElement(LinkLabelMemo, { isPushed: isPushed }, label),
            status && (React.createElement(LinkStatus, { color: status.color, fontSize: "14px" }, status.text)),
            isOpen ? (React.createElement(Icon$1d, { style: { fill: "#67717A" } })) : (React.createElement(Icon$1g, { style: { fill: "#67717A" } }))),
        React.createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React.Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var templateObject_1$a, templateObject_2$4;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React.createElement(Tag, __assign({}, props, otherProps));
};

var Container$1 = styled.div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var StyledSvgImg = styled.img(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  /* width: 20px;\n  height: 20px; */\n  margin-right: 8px;\n  max-width: max-content;\n"], ["\n  width: ", ";\n  height: ", ";\n  /* width: 20px;\n  height: 20px; */\n  margin-right: 8px;\n  max-width: max-content;\n"])), function (_a) {
    var size = _a.size;
    return size;
}, function (_a) {
    var size = _a.size;
    return size;
});
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = useLocation();
    var isLand = window.location.href.indexOf("/land") !== -1;
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React.createElement(Container$1, null, links.map(function (entry) {
        // const Icon = Icons[entry.icon];
        // const iconElement = <Icon width="24px" mr="8px" />;
        var src = entry.href === location.pathname
            ? "/images/menu/dark/".concat(entry.icon, ".svg")
            : "/images/menu/dark/".concat(entry.icon, ".svg");
        var iconElement = React.createElement(StyledSvgImg, { src: src, size: isLand && (entry.icon !== 'Home') ? '30px' : '20px' });
        var calloutClass = entry.calloutClass
            ? entry.calloutClass
            : undefined;
        if (entry.items) {
            var itemsMatchIndex = entry.items.findIndex(function (item) { return item.href === location.pathname; });
            var initialOpenState = entry.initialOpenState === true
                ? entry.initialOpenState
                : itemsMatchIndex >= 0;
            return (React.createElement(Accordion, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, status: entry.status, initialOpenState: initialOpenState, className: calloutClass, isActive: entry.items.some(function (item) { return item.href === location.pathname; }) }, isPushed &&
                entry.items.map(function (item) { return (React.createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React.createElement(MenuLink, { href: item.href },
                        React.createElement(LinkLabelMemo, { isPushed: isPushed }, item.label),
                        item.status && (React.createElement(LinkStatus, { color: item.status.color, fontSize: "14px" }, item.status.text))))); })));
        }
        return (React.createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React.createElement(MenuLink, { href: entry.href, style: { pointerEvents: entry.disabled ? 'none' : 'auto' }, onClick: handleClick },
                iconElement,
                React.createElement(LinkLabelMemo, { isPushed: isPushed }, entry.label),
                entry.status && (React.createElement(LinkStatus, { color: entry.status.color, fontSize: "14px" }, entry.status.text)))));
    })));
};
var templateObject_1$9, templateObject_2$3;

var Icons = IconModule;
var SocialLinks = function () { return (React.createElement(Flex, { justifyContent: "center" }, socials.map(function (social, index) {
    var Icon = Icons[social.icon];
    var iconProps = { width: "24px", color: "contrast", style: { cursor: "pointer" } };
    var mr = index < socials.length - 1 ? "24px" : 0;
    // if (social.items) {
    //   return (
    //     <Dropdown key={social.label} position="top" target={<Icon {...iconProps} mr={mr} />}>
    //       {social.items.map((item) => (
    //         <Link external key={item.label} href={item.href} aria-label={item.label} color="textSubtle">
    //           {item.label}
    //         </Link>
    //       ))}
    //     </Dropdown>
    //   );
    // }
    return (React.createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
        React.createElement(Icon, __assign({}, iconProps))));
}))); };
var SocialLinks$1 = React.memo(SocialLinks, function () { return true; });

var Container = styled.div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
styled.div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav; _a.toggleTheme; _a.isDark; _a.cakePriceUsd; _a.currentLang; _a.langs; _a.setLang;
    if (!isPushed) {
        return (React.createElement(Container, null,
            React.createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React.createElement(Icon$1b, null))));
    }
    return (React.createElement(Container, null,
        React.createElement(SocialLinks$1, null)));
};
var templateObject_1$8, templateObject_2$2, templateObject_3$1;

var StyledPanel = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n  ", ";\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n  ", ";\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "".concat(SIDEBAR_WIDTH_FULL, "px") : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var isPushed = _a.isPushed;
    return !isPushed && "white-space: nowrap;";
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return "".concat(isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED, "px");
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React.createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React.createElement(PanelBody, __assign({}, props)),
        React.createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$7;

var Icon$1 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React.createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React.createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React.createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React.createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React.createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React.createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React.createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React.createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React.createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React.createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React.createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React.createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon = function (props) {
    var id = uniqueId("svg");
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("g", { clipPath: "url(#".concat(id, ")") },
            React.createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React.createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: id },
                React.createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var ConnectorNames;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
})(ConnectorNames || (ConnectorNames = {}));

var connectors = [
    {
        title: "Metamask",
        icon: Icon$1,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "TrustWallet",
        icon: Icon,
        connectorId: ConnectorNames.WalletConnect,
    },
    // {
    //   title: "MathWallet",
    //   icon: MathWallet,
    //   connectorId: ConnectorNames.Injected,
    // },
    // {
    //   title: "TokenPocket",
    //   icon: TokenPocket,
    //   connectorId: ConnectorNames.Injected,
    // },
    /*{
      title: "WalletConnect",
      icon: WalletConnect,
      connectorId: ConnectorNames.WalletConnect,
    },
    {
      title: "Binance Chain Wallet",
      icon: BinanceChain,
      connectorId: ConnectorNames.BSC,
    },
    {
      title: "SafePal Wallet",
      icon: SafePalWallet,
      connectorId: ConnectorNames.Injected,
    },*/
];
var connectorLocalStorageKey = "connectorId";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React.createElement(Button, { width: "100%", variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-".concat(title.toLocaleLowerCase()) },
        React.createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React.createElement(Icon, { width: "32px" })));
};

styled(Link)(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss }, connectors.map(function (entry, index) { return (React.createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); })));
};
var templateObject_1$6;

var StyleButton = styled(Text).attrs({ role: "button" })(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    var copyToClipboardWithCommand = function (content) {
        var el = document.createElement("textarea");
        el.value = content;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
    };
    function displayTooltip() {
        setIsTooltipDisplayed(true);
        setTimeout(function () {
            setIsTooltipDisplayed(false);
        }, 1000);
    }
    return (React.createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard && navigator.permissions) {
                navigator.clipboard.writeText(toCopy).then(function () { return displayTooltip(); });
            }
            else if (document.queryCommandSupported("copy")) {
                copyToClipboardWithCommand(toCopy);
                displayTooltip();
            }
        } }, props),
        children,
        React.createElement(Icon$19, { width: "20px", color: "primary", ml: "4px" }),
        React.createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$5, templateObject_2$1;

var AccountModal = function (_a) {
    var account = _a.account, isMobile = _a.isMobile, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React.createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, isMobile ? "".concat(account.slice(0, 6), "...").concat(account.slice(36)) : account),
        React.createElement(Flex, { mb: "32px" },
            React.createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/".concat(account), mr: "16px" }, "View on BscScan"),
            React.createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React.createElement(Flex, { justifyContent: "center" },
            React.createElement(Button, { scale: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(connectorLocalStorageKey);
                    onDismiss();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var _a = useMatchBreakpoints(), isSm = _a.isSm, isXs = _a.isXs, isLg = _a.isLg, isMd = _a.isMd;
    var isMobile = isXs || isSm || isLg || isMd;
    var onPresentConnectModal = useModal(React.createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React.createElement(AccountModal, { isMobile: isMobile, account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var Userdiv = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  margin-left: 10px;\n"], ["\n  margin-left: 10px;\n"])));
var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useMatchBreakpoints(), isSm = _b.isSm, isXs = _b.isXs, isLg = _b.isLg, isMd = _b.isMd; _b.isXl;
    var isMobile = isXs || isSm || isLg || isMd;
    var _c = useWalletModal(login, logout, account), onPresentConnectModal = _c.onPresentConnectModal, onPresentAccountModal = _c.onPresentAccountModal;
    var accountEllipsis = account
        ? "".concat(account.substring(0, 4), "...").concat(account.substring(account.length - 4))
        : null;
    return (React.createElement(Userdiv, null, account ? (React.createElement(Button, { scale: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        }, style: { backgroundColor: "#FFFFFF", color: "#030708", height: isMobile ? '42px' : '32px' } }, accountEllipsis)) : (React.createElement(Button, { style: { height: isMobile ? '42px' : '32px' }, scale: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "CONNECT"))));
};
var UserBlock$1 = React.memo(UserBlock, function (prevProps, nextProps) { return prevProps.account === nextProps.account; });
var templateObject_1$4;

var Wrapper = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled.nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";  \n  // background-image: ", ";;\n  // background-repeat: no-repeat;\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";  \n  // background-image: ", ";;\n  // background-repeat: no-repeat;\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-".concat(MENU_HEIGHT, "px"));
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isMobile = _a.isMobile, isLand = _a.isLand;
    return isMobile ? "".concat(isLand ? "url('/images/land-logo.png')" : "url('/images/logo.png')") : 'none';
});
var BodyWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "".concat(MENU_HEIGHT, "px") : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return "".concat(isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED, "px");
}, function (_a) {
    var isPushed = _a.isPushed;
    return "calc(100% - ".concat(isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED, "px)");
});
var MobileOnlyOverlay = styled(Overlay)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links; _a.profile; var children = _a.children, toggleNav = _a.toggleNav;
    var activeInd = window.location.href.indexOf("/land") !== -1 ? 0 : 1;
    var _c = useMatchBreakpoints(), isSm = _c.isSm, isXs = _c.isXs, isLg = _c.isLg, isMd = _c.isMd; _c.isXl;
    var isMobile = isXs || isSm || isLg || isMd;
    var _d = useState(!isMobile), isPushed = _d[0], setIsPushed = _d[1];
    var _e = useState(true), showMenu = _e[0], setShowMenu = _e[1];
    var _f = useState(activeInd), activeTab = _f[0], setActiveTab = _f[1];
    var refPrevOffset = useRef(window.pageYOffset);
    useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight ===
                currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle(handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label == "HOME"; });
    var _g = useState(0); _g[0]; _g[1];
    var _h = useState(1); _h[0]; _h[1];
    // const activeIndex = () => (window.location.host.search("land") > -1 ? 0 : 1);
    var onItemClick = function (e) {
        setActiveTab(e);
    };
    // const swaphref = "https://pixel.pixelfinance.io";
    var swaphref = window.location.origin;
    var isLand = window.location.href.indexOf("/land") !== -1;
    var handleToggleNav = function () {
        setIsPushed(function (prevState) { return !prevState; });
        if (toggleNav && typeof toggleNav === "function") {
            toggleNav(isPushed);
        }
    };
    return (React.createElement(Wrapper, null,
        React.createElement(StyledNav, { showMenu: showMenu, isLand: isLand, isMobile: isMobile },
            React.createElement(Logo$1, { isPushed: isPushed, togglePush: function () { return handleToggleNav(); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React.createElement(Flex, null,
                React.createElement(ButtonMenu$1, { scale: "sm", onItemClick: function (e) {
                        onItemClick(e);
                    }, activeIndex: activeTab, variant: "tabButton" },
                    React.createElement(ButtonMenuItem, { as: "a", href: "".concat(swaphref, "/land/home") }, "PIXEL LAND"),
                    React.createElement(ButtonMenuItem, { as: "a", href: "".concat(swaphref, "/home") }, "PIXEL SWAP")),
                React.createElement(UserBlock$1, { account: account, login: login, logout: logout }))),
        React.createElement(BodyWrapper, null,
            React.createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links }),
            React.createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React.createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$3, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a;
var alertTypeMap = (_a = {},
    _a[types.INFO] = variants$2.INFO,
    _a[types.SUCCESS] = variants$2.SUCCESS,
    _a[types.DANGER] = variants$2.DANGER,
    _a[types.WARNING] = variants$2.WARNING,
    _a);
var StyledToast = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = useRef();
    var ref = useRef(null);
    var removeHandler = useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type;
    var handleRemove = useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React.createElement(CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React.createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React.createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, description))));
};
var templateObject_1$2;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React.createElement(StyledToastContainer, null,
        React.createElement(TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React.createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: "".concat(top, "px"), zIndex: zIndex } }));
        }))));
};
var templateObject_1$1;

var ResetCSS = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /* Number */\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /* Number */\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1;

export { Icon$1z as AddIcon, Alert, Icon$1y as ArrowBackIcon, Icon$1x as ArrowDownIcon, Icon$1w as ArrowDropDownIcon, Icon$1v as ArrowDropUpIcon, Icon$1u as ArrowForwardIcon, Icon$1t as ArrowUpIcon, Icon$1s as AutoRenewIcon, BackgroundImage, BalanceInput, GridLayout$1 as BaseLayout, Icon$1r as BinanceIcon, Icon$1B as BlockIcon, Icon$1q as BnbUsdtPairTokenIcon, Box, Breadcrumbs, Icon$1p as BunnyCardsIcon, Icon$1o as BunnyPlaceholderIcon, Button, ButtonMenu$1 as ButtonMenu, ButtonMenuItem, Icon$1k as CalculateIcon, Card, CardBody, CardFooter, CardHeader, CardRibbon, Icon$1l as CardViewActiveIcon, Icon$1m as CardViewIcon, Icon$1n as Cards, GridLayout as CardsLayout, Icon$1i as ChartIcon, Checkbox, Icon$1D as CheckmarkCircleIcon, Icon$1h as CheckmarkIcon, Icon$1g as ChevronDownIcon, Icon$1f as ChevronLeftIcon, Icon$1e as ChevronRightIcon, Icon$1d as ChevronUpIcon, Icon$1j as CircleOutlineIcon, Icon$1c as CloseIcon, Icon$1b as CogIcon, Icon$1a as CommunityIcon, ConnectorNames, Icon$19 as CopyIcon, Icon$18 as CrownIcon, Dropdown, Icon$1C as ErrorIcon, ExpandableButton, ExpandableLabel, FallingBunnies, Flex, Heading, Icon$17 as HelpIcon, Icon$16 as HistoryIcon, IconButton, Image, Icon$1A as InfoIcon, Input$1 as Input, Icon$15 as LaurelLeftIcon, Icon$14 as LaurelRightIcon, Link, LinkExternal, Icon$12 as ListViewActiveIcon, Icon$13 as ListViewIcon, Icon$11 as LogoIcon, Icon$10 as LogoRoundIcon, Icon$$ as MedalBronzeIcon, Icon$_ as MedalGoldIcon, Icon$Z as MedalPurpleIcon, Icon$Y as MedalSilverIcon, Icon$X as MedalTealIcon, Menu, Icon$W as MetamaskIcon, Icon$V as MinusIcon, Modal, ModalBackButton, ModalBody, ModalCloseButton, ModalContainer, ModalHeader, ModalProvider, ModalTitle, Icon$U as NoProfileAvatarIcon, NotificationDot, Icon$T as OpenNewIcon, Icon$R as PancakeRoundIcon, PancakeToggle, Icon$S as PancakesIcon, Icon$P as PlayCircleOutlineIcon, Icon$Q as PocketWatchIcon, Icon$O as PrizeIcon, Progress, Icon$L as ProgressBunny, Radio, Icon$r as RefreshIcon, Icon$N as RemoveIcon, ResetCSS, Icon$B as SearchIcon, Skeleton, Slider, Spinner, Icon$A as StarFillIcon, Icon$z as StarLineIcon, Step, Stepper, Svg, Icon$y as SwapVertIcon, Icon$x as SyncAltIcon, Tab, ButtonMenu as TabMenu, Tag, Icon$I as TeamPlayerIcon, Icon$H as TestnetIcon, Text, Icon$G as Ticket, Icon$F as TicketRound, Icon$E as TimerIcon, ToastContainer, Toggle, TooltipText, Icon$D as TrophyGoldIcon, Icon$C as TuneIcon, Icon$q as UnlockIcon, Icon$M as VerifiedIcon, Icon$w as VisibilityOff, Icon$v as VisibilityOn, Icon$u as VolumeOffIcon, Icon$t as VolumeUpIcon, Icon$K as WaitIcon, Icon$s as WarningIcon, Icon$J as Won, variants$2 as alertVariants, byTextAscending, byTextDescending, connectorLocalStorageKey, darkTheme as dark, darkColors, lightTheme as light, lightColors, makeRender, links as menuConfig, status as menuStatus, types as toastTypes, useKonamiCheatCode, useMatchBreakpoints, useModal, useParticleBurst, useTable, useTooltip, useWalletModal };
