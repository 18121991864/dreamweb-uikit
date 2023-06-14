import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
        <path d="M3 4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V14C15 14.5523 14.5523 15 14 15H4C3.44772 15 3 14.5523 3 14V4Z" fill="#E0DCDE"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 2C17 1.5 16.6 1 16 1H9.5V17H16C16.5 17 17 16.6 17 16V2ZM8.5 17V9.5H1V16C1 16.5 1.4 17 2 17H8.5ZM1 8.5V2C1 1.4 1.5 1 2 1H8.5V8.5H1ZM2 0H16C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0ZM1.5 4.6001C1.5 4.32396 1.72386 4.1001 2 4.1001H4.09998V2.1001C4.09998 1.82396 4.32383 1.6001 4.59998 1.6001C4.87612 1.6001 5.09998 1.82396 5.09998 2.1001V4.1001H7.1C7.37614 4.1001 7.6 4.32396 7.6 4.6001C7.6 4.87624 7.37614 5.1001 7.1 5.1001H5.09998V7.1001C5.09998 7.37624 4.87612 7.6001 4.59998 7.6001C4.32383 7.6001 4.09998 7.37624 4.09998 7.1001V5.1001H2C1.72386 5.1001 1.5 4.87624 1.5 4.6001ZM2 12.8999C1.72386 12.8999 1.5 13.1238 1.5 13.3999C1.5 13.676 1.72386 13.8999 2 13.8999H7.1C7.37614 13.8999 7.6 13.676 7.6 13.3999C7.6 13.1238 7.37614 12.8999 7.1 12.8999H2ZM10.3 10.3C10.3 10.0239 10.5238 9.80005 10.8 9.80005H15.6C15.8761 9.80005 16.1 10.0239 16.1 10.3C16.1 10.5762 15.8761 10.8 15.6 10.8H10.8C10.5238 10.8 10.3 10.5762 10.3 10.3ZM10.8 7.19995C10.5238 7.19995 10.3 7.42381 10.3 7.69995C10.3 7.97609 10.5238 8.19995 10.8 8.19995H15.6C15.8761 8.19995 16.1 7.97609 16.1 7.69995C16.1 7.42381 15.8761 7.19995 15.6 7.19995H10.8Z" fill="#A77E99"/>
    </Svg>
  );
};

export default Icon;