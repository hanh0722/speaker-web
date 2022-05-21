import React, { FC, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import { ADMIN } from "../../../../constants/roles";
import { RootState } from "../../../../store";
import { User } from "../../../../types/redux";
import { Image, Link } from "../../../core";
import { IconDoubleArrow } from "../../../core/Icons";
import BoxUser from "./BoxUser";
import ListManagement from "./ListManagement";
import styles from "./styles.module.scss";
import { SideBarProps } from "../../../../types/components/Dashboard";
import { Modal } from "../../../common";
import { HOME } from "../../../../constants/path";
import ListUtils from "./ListUtils";
import ListAccount from "./ListAccount";

const SideBar: FC<SideBarProps> = (props) => {
  const { in: when, isMobileScreen, className, onHide, ...restProps } = props;
  const [isOpen, setIsOpen] = useState(true);
  const user = useSelector<RootState, User | null>((state) => state.user.user);
  const onHidden = () => {
    setIsOpen((prevState) => !prevState);
  };
  const renderSideBar = () => {
    return (
      <div className={styles.main}>
        <div className={styles.sidebar}>
          <div
            className={`d-flex align-center justify-between ${styles.header}`}
          >
            <Link href={HOME}>
              <Image src="/logo.webp" alt="" />
            </Link>
            <IconDoubleArrow onClick={onHidden} />
          </div>
          <BoxUser className={styles.box} />
          <ListAccount/>
          {user?.role === ADMIN && <ListManagement />}
          <ListUtils/>
        </div>
      </div>
    );
  };
  return isMobileScreen
    ? ReactDOM.createPortal(
        <CSSTransition
          in={when}
          timeout={500}
          unmountOnExit
          mountOnEnter
          classNames="fade-right"
        >
          <>
            {renderSideBar()}
            <Modal className={styles.modal} onClick={onHide} />
          </>
        </CSSTransition>,
        document.getElementById("portal")!
      )
    : renderSideBar();
};

export default SideBar;
