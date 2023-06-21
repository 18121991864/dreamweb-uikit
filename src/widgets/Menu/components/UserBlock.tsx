import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import { useWalletModal } from "../../WalletModal";
import { useMatchBreakpoints } from "../../../hooks";
import { Login } from "../../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const Userdiv = styled.div`
  margin-left: 10px;
`;

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { isSm, isXs, isLg, isMd,isXl } = useMatchBreakpoints();
  const isMobile = isXs || isSm || isLg || isMd ;
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    login,
    logout,
    account
  );
  const accountEllipsis = account
    ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}`
    : null;
  return (
    <Userdiv>
      {account ? (
        <Button
          scale="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
          style={{ backgroundColor: "#FFFFFF", color: "#030708", height: isMobile ? '42px' : '32px'}}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          style={{height: isMobile ? '42px' : '32px'}}
          scale="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          CONNECT
        </Button>
      )}
    </Userdiv>
  );
};

export default React.memo(
  UserBlock,
  (prevProps, nextProps) => prevProps.account === nextProps.account
);
