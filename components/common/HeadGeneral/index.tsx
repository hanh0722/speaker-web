import Head from "next/head";
import { FC } from "react";
import { HeadProps } from "../../../types/head";

const HeadGeneral: FC<HeadProps> = (props) => {
  const { children, title } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="preload"
          href="/font/Nunito_Sans/NunitoSans-ExtraLight.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        {children}
      </Head>
    </>
  );
};

export default HeadGeneral;
