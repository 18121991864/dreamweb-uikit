import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4Z" fill="#E4C9DB"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 2.84931C1.75 2.27723 2.27723 1.75 2.84931 1.75H8.15068C8.72277 1.75 9.25 2.27723 9.25 2.84931V8.15068C9.25 8.72277 8.72277 9.25 8.15068 9.25H2.84931C2.27723 9.25 1.75 8.72277 1.75 8.15068V2.84931ZM2.84931 0.25C1.4488 0.25 0.25 1.4488 0.25 2.84931V8.15068C0.25 9.5512 1.4488 10.75 2.84931 10.75H8.15068C9.5512 10.75 10.75 9.5512 10.75 8.15068V2.84931C10.75 1.4488 9.5512 0.25 8.15068 0.25H2.84931ZM14.75 2.84931C14.75 2.27723 15.2772 1.75 15.8493 1.75H21.1507C21.7228 1.75 22.25 2.27723 22.25 2.84931V8.15068C22.25 8.72277 21.7228 9.25 21.1507 9.25H15.8493C15.2772 9.25 14.75 8.72277 14.75 8.15068V2.84931ZM15.8493 0.25C14.4488 0.25 13.25 1.4488 13.25 2.84931V8.15068C13.25 9.5512 14.4488 10.75 15.8493 10.75H21.1507C22.5512 10.75 23.75 9.5512 23.75 8.15068V2.84931C23.75 1.4488 22.5512 0.25 21.1507 0.25H15.8493ZM2.84931 14.75C2.27723 14.75 1.75 15.2772 1.75 15.8493V21.1507C1.75 21.7228 2.27723 22.25 2.84931 22.25H8.15068C8.72277 22.25 9.25 21.7228 9.25 21.1507V15.8493C9.25 15.2772 8.72277 14.75 8.15068 14.75H2.84931ZM0.25 15.8493C0.25 14.4488 1.4488 13.25 2.84931 13.25H8.15068C9.5512 13.25 10.75 14.4488 10.75 15.8493V21.1507C10.75 22.5512 9.5512 23.75 8.15068 23.75H2.84931C1.4488 23.75 0.25 22.5512 0.25 21.1507V15.8493ZM14.75 15.8493C14.75 15.2772 15.2772 14.75 15.8493 14.75H21.1507C21.7228 14.75 22.25 15.2772 22.25 15.8493V21.1507C22.25 21.7228 21.7228 22.25 21.1507 22.25H15.8493C15.2772 22.25 14.75 21.7228 14.75 21.1507V15.8493ZM15.8493 13.25C14.4488 13.25 13.25 14.4488 13.25 15.8493V21.1507C13.25 22.5512 14.4488 23.75 15.8493 23.75H21.1507C22.5512 23.75 23.75 22.5512 23.75 21.1507V15.8493C23.75 14.4488 22.5512 13.25 21.1507 13.25H15.8493Z" fill="#A77E99"/>
    </Svg>
  );
};

export default Icon;
