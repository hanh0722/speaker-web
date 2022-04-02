import React, { FC } from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";
import { SearchFieldProps } from "../../../../types/component";
import styles from "./styles.module.scss";
import { classList } from "../../../../utils/string";
import Modal from "../../Modal";
import { Container, Image, Input } from "../../../core";
import { IconCart, IconClose, IconPeople, IconStar } from "../../../core/Icons";
import { RootState } from "../../../../store";
import { IconSearch } from "../../../core/Icons";

const SearchField: FC<SearchFieldProps> = (props) => {
  const isMobileSCreen = useSelector<RootState>(
    (state) => state.ui.isMobileScreen
  );
  const { className, onClick, isOpenSearchField } = props;
  return (
    <>
      {ReactDOM.createPortal(
        <CSSTransition
          in={isOpenSearchField}
          unmountOnExit
          mountOnEnter
          classNames="fade-down"
          timeout={300}
        >
          <>
            <div className={classList(styles.search, className)}>
              <Container className={`w-100 h-100 ${styles.container}`}>
                {isMobileSCreen && (
                  <div
                    className={`f-14 weight-500 text-capitalize d-flex justify-between align-center ${styles.title}`}
                  >
                    Search our store
                    <span onClick={onClick}><IconClose variant="lg" /></span>
                  </div>
                )}
                <div
                  className={`d-flex justify-between align-center ${styles["search-field"]}`}
                >
                  {!isMobileSCreen && (
                    <Image className={styles.logo} src="/logo.webp" alt="" />
                  )}
                  <div className={styles.field}>
                    <Input
                      className={styles.input}
                      label="Search Products"
                      placeholder="Search Products"
                      iconName={IconSearch}
                    />
                  </div>
                  {!isMobileSCreen && (
                    <ul className={`d-flex gap-20 ${styles.icons}`}>
                      <li>
                        <IconPeople variant="lg" />
                      </li>
                      <li>
                        <IconStar variant="lg" />
                      </li>
                      <li>
                        <IconCart variant="lg" />
                      </li>
                    </ul>
                  )}
                </div>
              </Container>
            </div>
            <Modal onClick={onClick} />
          </>
        </CSSTransition>,
        document.getElementById("destination")!
      )}
    </>
  );
};

export default SearchField;
