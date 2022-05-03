import { useRouter } from "next/router";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { HOME, LOGIN } from "../../../../../constants/path";
import { AppDispatch, RootState } from "../../../../../store";
import { onLogoutUser } from "../../../../../store/slices/user";
import { UserState } from "../../../../../types/redux";
import { Button, Dropdown, Image, Link } from "../../../../core";
import styles from "./styles.module.scss";

const ProfileOptions = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector<RootState, UserState>(state => state.user);
  const onLogoutHandler = () => {
    router.push(LOGIN);
    dispatch(onLogoutUser());
  }
  return (
    <div className={styles.avatar}>
      <Dropdown
        className={styles.dropdown}
        trigger={
          <div className={styles.image}>
            <Image src="/default-image.png" alt="" />
          </div>
        }
      >
        <div className={styles.element}>
          <div className={styles.option}>
            <p className="weight-500">{user?.name}</p>
          </div>
          <div className={styles.content}>
            <Link href={HOME}>
              <Button variant="text" fullWidth color="inherit" prefix="normal">
                Home
              </Button>
            </Link>
            <Link href={"/"}>
              <Button variant="text" fullWidth color="inherit" prefix="normal">
                Profile
              </Button>
            </Link>
          </div>
          <div className={styles.footer}>
            <Button onClick={onLogoutHandler} variant="text" fullWidth color="inherit" prefix="normal">Logout</Button>
          </div>
        </div>
      </Dropdown>
    </div>
  );
};

export default ProfileOptions;
