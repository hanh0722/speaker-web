import { BaseProductProps } from "../../request";
import { ClassNameProps } from "../../string";

export interface SideBarProps extends ClassNameProps {
  isMobileScreen?: boolean;
  in?: boolean;
  onHide?: () => void;
}

export interface LoadingTableManageProps extends ClassNameProps {
  cols?: number;
}

export interface ProductRowProps extends ClassNameProps {
  product: BaseProductProps
  onTick?: (id: string) => void;
  onDelete?: (_: any, id: string) => void
}

export interface StatusProducts extends ClassNameProps {
  quantity: number
};

export interface CreateBlogProps extends ClassNameProps {
  onChange?: (value: string) => void;
}