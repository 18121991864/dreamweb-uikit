import React from "react";
import {useMatchBreakpoints} from '../../hooks'
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import { Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
}

const useWalletModal = (login: Login, logout: () => void, account?: string): ReturnType => {
  const { isSm, isXs, isLg, isMd } = useMatchBreakpoints();
  const isMobile = isXs || isSm || isLg || isMd ;
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} />);
  const [onPresentAccountModal] = useModal(<AccountModal isMobile={isMobile} account={account || ""} logout={logout} />);
  return { onPresentConnectModal, onPresentAccountModal };
};

export default useWalletModal;
