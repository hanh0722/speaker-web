import React, { FC } from "react";
import { Link } from "../core";
import Container from "../core/Container";
import Image from "../core/Image";
import styles from "./styles.module.scss";

const Navigation: FC<{ isActive: boolean }> = (props) => {
  const { isActive } = props;
  return (
    <Container className={`bg-white ${styles.navigation} ${!isActive && styles.hide}`}>
      <div className={`d-flex align-center ${styles.left}`}>
        <Link href="/">
          <Image alt="" className={styles.image} src="/logo.webp" />
        </Link>
        <ul className="d-flex">
          <Link href="/home">
            <li>Home</li>
          </Link>
          <Link href="/shops">
            <li>Shop</li>
          </Link>
          <Link href="/products">
            <li>Products</li>
          </Link>
          <Link href="/blogs">
            <li>Blogs</li>
          </Link>
          <Link href="/features">
            <li>Features</li>
          </Link>
        </ul>
      </div>
      <div className={styles.right}></div>
    </Container>
  );
};

export default Navigation;
