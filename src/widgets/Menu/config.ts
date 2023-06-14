import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
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

export const socials = [
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

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
