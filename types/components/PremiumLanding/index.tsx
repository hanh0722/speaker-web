import { ElementType } from "react";
import { IconWrapperProps } from "../../component";
import { BaseProductProps } from "../../request";
import { ClassNameProps } from "../../string";

export interface PremiumLandingState {
  width: number;
  height: number
}
export interface BoxIntroductionProps extends ClassNameProps {
  title: string;
  description: string;
  iconName: ElementType<IconWrapperProps>
}

export interface HeadingProps extends ClassNameProps {
  title: string;
  subtitle: string;
  isCenter?: boolean
}

export interface ProductHomeProps extends ClassNameProps {
  data: Array<BaseProductProps>
}