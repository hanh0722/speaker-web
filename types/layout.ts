import { NextPage } from "next"
import { AppProps } from "next/app"
import { ReactElement, ReactNode } from "react"
import { ClassNameProps } from "./string"

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  keySecret?: string
}

export interface FormAuthLayoutProps extends ClassNameProps {
  title?: string;
  mainClass?: string
}

export interface AuthBasicLayoutProps extends ClassNameProps {
  title?: string
}

export interface NavigationDashboardProps extends ClassNameProps {
  isMobileScreen?: boolean;
  onClick?: () => void
}