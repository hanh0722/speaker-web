import React, { ReactElement } from "react";
import { HeadGeneral } from "../../../components/common";
import BreadCrumbDirection from "../../../components/core/BreadCrumbDirection";
import { DashboardLayout } from "../../../components/layout";
import { CHAT, HOME } from "../../../constants/path";
import styles from "./styles.module.scss";
import { NextPageWithLayout } from "../../../types/layout";
import ChatContainer from '../../../components/container/Dashboard/Chat';

const Chat: NextPageWithLayout = () => {
  return (
    <>
      <HeadGeneral title="Dashboard | Chat" />
      <div className={styles.container}>
        <BreadCrumbDirection className={styles.breadcrumb} left>
          <BreadCrumbDirection.Element href={HOME}>
            Home
          </BreadCrumbDirection.Element>
          <BreadCrumbDirection.Element href={CHAT}>
            Chat
          </BreadCrumbDirection.Element>
        </BreadCrumbDirection>
        <ChatContainer/>
      </div>
    </>
  );
};

Chat.getLayout = function (page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Chat;
