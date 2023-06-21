import React from "react";
interface Props {
    isMobile: boolean;
    account: string;
    logout: () => void;
    onDismiss?: () => void;
}
declare const AccountModal: React.FC<Props>;
export default AccountModal;
