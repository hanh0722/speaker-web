import React, { FC, useRef, useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";
import { Link, Container, Image, Button } from "../../core";
import { Cart } from "../../container";
import styles from "./styles.module.scss";
import {
  IconCaret,
  IconCart,
  IconPeople,
  IconSearch,
  IconStar,
} from "../../core/Icons";
import {
  BLOGS,
  FEATURES,
  HOME,
  LOGIN,
  PRODUCTS,
  SHOP,
  WISHLIST,
  REGISTER,
} from "../../../constants/path";
import Hamburger from "../Hamburger";
import useDropdown from "../../../hook/useDropdown";
import Modal from "../Modal";
import SearchField from "./SearchField";
import { AppDispatch, RootState } from "../../../store";
import { cartActions } from "../../../store/slices/cart";
import { onLogoutUser } from "../../../store/slices/user";

const Navigation: FC<{ isActive: boolean }> = (props) => {
  const { isActive } = props;
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector<RootState>((state) => state.user.user);
  const isMobile = useSelector<RootState>((state) => state.ui.isMobileScreen);
  const [isOpenSearchField, setIsOpenSearchField] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const { isToggle, onChangeToggle } = useDropdown(listRef);
  const onMoveLogin = () => {
    router.push({
      pathname: LOGIN,
      query: {
        welcome: true,
      },
    });
  };
  const renderListItem = () => {
    return (
      <ul ref={listRef} className={`d-flex ${styles.list}`}>
        <Link activeClassname={styles.active} href={HOME}>
          <li>Home</li>
          <IconCaret variant="sm" />
        </Link>
        <Link activeClassname={styles.active} href={SHOP}>
          <li>Collections</li>
          <IconCaret variant="sm" />
        </Link>
        <Link activeClassname={styles.active} href={PRODUCTS}>
          <li>Products</li>
          <IconCaret variant="sm" />
        </Link>
        <Link activeClassname={styles.active} href={BLOGS}>
          <li>Blogs</li>
          <IconCaret variant="sm" />
        </Link>
        <Link activeClassname={styles.active} href={FEATURES}>
          <li>Features</li>
          <IconCaret variant="sm" />
        </Link>
        {isMobile && !user && (
          <div className={`d-flex flex-column justify-end ${styles.login}`}>
            <p>My Account</p>
            <Button onClick={onMoveLogin} fullWidth size="large">
              Log In
            </Button>
            <Link href={REGISTER}>
              <Button
                fullWidth
                size="large"
                variant="outlined"
                prefix="normal"
                color="inherit"
              >
                Register
              </Button>
            </Link>
          </div>
        )}
      </ul>
    );
  };
  const onOpenSearchField = () => {
    setIsOpenSearchField((prevState) => !prevState);
  };
  const onDispatchCart = () => {
    dispatch(cartActions.onChangeActiveCart());
  };
  const onLogout = () => {
    dispatch(onLogoutUser());
  }
  return (
    <>
      <SearchField
        onClick={onOpenSearchField}
        isOpenSearchField={isOpenSearchField}
      />
      <Cart />
      <nav
        className={`bg-white shadow-sm ${!isActive && styles.hide} ${
          styles.nav
        }`}
      >
        <Container className={styles.navigation}>
          {isMobile && (
            <Hamburger ref={targetRef} onClick={onChangeToggle} variant={3} />
          )}
          <div className={`d-flex align-center ${styles.left}`}>
            <div className={styles.image}>
              <Link href={HOME}>
                <Image alt="" src="/logo.webp" />
              </Link>
            </div>
            {!isMobile && renderListItem()}
            {isMobile && (
              <CSSTransition
                timeout={500}
                classNames="fade-right"
                unmountOnExit
                mountOnEnter
                in={isToggle}
              >
                <>
                  {ReactDOM.createPortal(
                    <>
                      {renderListItem()}
                      <Modal />
                    </>,
                    document.getElementById("destination")!
                  )}
                </>
              </CSSTransition>
            )}
          </div>
          <div className={styles.right}>
            <ul className="d-flex gap-24">
              <li onClick={onOpenSearchField} data-hover="Search">
                <IconSearch variant={isMobile ? "md" : "lg"} />
              </li>
              {!isMobile && (
                <>
                  {!user && (
                    <Link href={`${LOGIN}?welcome=true`}>
                      <li data-hover="Account">
                        <IconPeople variant={isMobile ? "md" : "sm"} />
                      </li>
                    </Link>
                  )}
                  <Link href={WISHLIST}>
                    <li data-hover="Wishlist">
                      <IconStar variant={isMobile ? "md" : "lg"} />
                    </li>
                  </Link>
                </>
              )}
              <li data-hover="Cart">
                <IconCart
                  onClick={onDispatchCart}
                  variant={isMobile ? "md" : "lg"}
                />
              </li>
              {user && !isMobile && <Button onClick={onLogout} prefix="normal" variant="outlined" color="inherit">Log out</Button>}
            </ul>
          </div>
        </Container>
      </nav>
    </>
  );
};

Navigation.defaultProps = {
  isActive: false,
};

Navigation.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Navigation;
