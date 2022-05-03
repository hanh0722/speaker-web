import React, { FC, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { RootState } from "../../../../store";
import { NavigationDashboardProps } from "../../../../types/layout";
import { classList } from "../../../../utils/string";
import { Button, Dropdown } from "../../../core";
import { IconNav, IconSearch } from "../../../core/Icons";
import styles from "./styles.module.scss";
import ProfileOptions from "./ProfileOptions";

const NavigationDashboard: FC<NavigationDashboardProps> = (props) => {
  const { isMobileScreen, onClick, className } = props;
  const [isActive, setIsActive] = useState(false);
  const [frameId, setFrameId] = useState<number | null>(null);
  const user = useSelector<RootState>((state) => state.user.user);

  const onCallbackScroll = () => {
    setIsActive(window.scrollY > 50);
  };
  const onHandleScroll = useCallback(() => {
    const frame = requestAnimationFrame(onCallbackScroll);
    setFrameId(frame);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", onHandleScroll);
    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
        setFrameId(null);
        window.removeEventListener("scroll", onHandleScroll);
      }
    };
  }, [onHandleScroll, frameId]);
  return (
    <nav
      className={classList(
        "d-flex align-center justify-between",
        styles.navigation,
        isActive && styles.active,
        className
      )}
    >
      <div className={`d-flex align-center gap-16`}>
        {isMobileScreen && (
          <Button
            onClick={onClick}
            className={styles.search}
            prefix="normal"
            color="inherit"
            variant="text"
          >
            <IconNav />
          </Button>
        )}
        <Button
          className={styles.search}
          prefix="normal"
          color="inherit"
          variant="text"
        >
          <IconSearch />
        </Button>
      </div>
      <div className="d-flex align-center gap-20">
        <ProfileOptions/>
      </div>
    </nav>
  );
};

NavigationDashboard.defaultProps = {
  onClick: () => {},
  isMobileScreen: false,
  className: "",
};

NavigationDashboard.propTypes = {
  onClick: PropTypes.func,
  isMobileScreen: PropTypes.bool,
  className: PropTypes.string,
};
export default NavigationDashboard;
