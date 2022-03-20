import React, { FC, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import { Link, Container, Image } from "../core";
import { Cart } from "../container";
import styles from "./styles.module.scss";
import {
  IconCaret,
  IconCart,
  IconPeople,
  IconSearch,
  IconStar,
} from "../core/Icons";
import {
  BLOGS,
  FEATURES,
  HOME,
  LOGIN,
  PRODUCTS,
  SHOP,
  WISHLIST,
} from "../../constants/path";
import Hamburger from "../common/Hamburger";
import { CSSTransition } from "react-transition-group";
import useDropdown from "../../hook/useDropdown";
import Modal from "../common/Modal";
import SearchField from "./SearchField";
import { AppDispatch, RootState } from "../../store";
import { cartActions } from "../../store/slices/cart";

const Navigation: FC<{ isActive: boolean }> = (props) => {
  const { isActive } = props;
  const dispatch = useDispatch<AppDispatch>();
  const isMobile = useSelector<RootState>((state) => state.ui.isMobileScreen);
  const [isOpenSearchField, setIsOpenSearchField] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const { isToggle, onChangeToggle } = useDropdown(listRef);
  const renderListItem = () => {
    return (
      <ul ref={listRef} className={`d-flex ${styles.list}`}>
        <Link href={HOME}>
          <li>Home</li>
          <IconCaret variant="sm" />
        </Link>
        <Link href={SHOP}>
          <li>Shop</li>
          <IconCaret variant="sm" />
        </Link>
        <Link href={PRODUCTS}>
          <li>Products</li>
          <IconCaret variant="sm" />
        </Link>
        <Link href={BLOGS}>
          <li>Blogs</li>
          <IconCaret variant="sm" />
        </Link>
        <Link href={FEATURES}>
          <li>Features</li>
          <IconCaret variant="sm" />
        </Link>
      </ul>
    );
  };
  const onOpenSearchField = () => {
    setIsOpenSearchField((prevState) => !prevState);
  };
  const onDispatchCart = () => {
    dispatch(cartActions.onChangeActiveCart());
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
            <Link href={HOME}>
              <Image alt="" className={styles.image} src="/logo.webp" />
            </Link>
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
                  <Link href={LOGIN}>
                    <li data-hover="Account">
                      <IconPeople variant={isMobile ? "md" : "lg"} />
                    </li>
                  </Link>
                  <Link href={WISHLIST}>
                    <li data-hover="Wishlist">
                      <IconStar variant={isMobile ? "md" : "lg"} />
                    </li>
                  </Link>
                </>
              )}
              <li data-hover="Cart">
                <IconCart onClick={onDispatchCart} variant={isMobile ? "md" : "lg"} />
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navigation;
