import { BaseButtonProps, Scale, variants } from "../Button/types";
export interface ButtonMenuItemProps extends BaseButtonProps {
    isActive?: boolean;
}
export interface ButtonMenuProps {
    variant?: typeof variants.PRIMARY | typeof variants.SUBTLE | typeof variants.BUTTON_ACTIVE | typeof variants.TAB_BUTTON;
    activeIndex?: number;
    onItemClick?: (index: number) => void;
    scale?: Scale;
    children: React.ReactElement[];
    style?: {};
}
