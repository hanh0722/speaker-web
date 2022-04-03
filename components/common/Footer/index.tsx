import React from "react";
import { SOCIAL } from "../../../constants/link";
import { Container, Grid, Input, Link } from "../../core";
import { IconArrowRight, IconGoogle } from "../../core/Icons";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <>
      <Container>
        <Grid cols={4} className={styles.footer}>
          <div className={styles.email}>
            <h4 className="f-40 lh-48 weight-500">{"Don't"} miss a thing</h4>
            <p>Sign up for our newsletter.</p>
            <Input iconName={IconArrowRight} placeholder="Enter your email" label="Email" />
          </div>
          <ul className={styles.cols}>
            <Link href={"/"}>
              <li>About</li>
            </Link>
            <Link href={"/"}>
              <li>Shop</li>
            </Link>
            <Link href={"/"}>
              <li>FAQs</li>
            </Link>
            <Link href={"/"}>
              <li>Blog</li>
            </Link>
            <Link href={"/"}>
              <li>Contact us</li>
            </Link>
          </ul>
          <ul className={styles.cols}>
            <Link href={"/"}>
              <li>Information</li>
            </Link>
            <Link href={"/"}>
              <li>My Account</li>
            </Link>
            <Link href={"/"}>
              <li>Cart</li>
            </Link>
            <Link href={"/"}>
              <li>Wishlist</li>
            </Link>
            <Link href={"/"}>
              <li>Product compare</li>
            </Link>
          </ul>
        </Grid>
      </Container>
      <div className={`color-white ${styles.content}`}>
        <Container
          className={`d-flex justify-between align-center ${styles.contain}`}
        >
          <p className="f-16">© Régler 2022</p>
          <div className={`d-flex align-center gap-16 ${styles.icons}`}>
            {SOCIAL.map(({ href, icon: IconElement }, index) => {
              return (
                <Link key={index} href={href}>
                  <IconElement />
                </Link>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
