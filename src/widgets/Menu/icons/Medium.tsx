import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M24 4C24 1.79086 22.2091 0 20 0H4C1.79086 0 0 1.79086 0 4V20C0 22.2091 1.79086 24 4 24H20C22.2091 24 24 22.2091 24 20V4ZM12 12C12 14.7614 9.76142 17 7 17C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7C9.76142 7 12 9.23858 12 12ZM15.5 16.5C16.8807 16.5 18 14.4853 18 12C18 9.51472 16.8807 7.5 15.5 7.5C14.1193 7.5 13 9.51472 13 12C13 14.4853 14.1193 16.5 15.5 16.5ZM21 12.5C21 14.7091 20.5523 16.5 20 16.5C19.4477 16.5 19 14.7091 19 12.5C19 10.2909 19.4477 8.5 20 8.5C20.5523 8.5 21 10.2909 21 12.5Z" fill="#ffffff" />
    </Svg>
  );
};

export default Icon;