import React from "react";
import styles from "./HomeComponent.module.css";
function HeaderComponet(props) {
  return (
    <div className={styles.header}>
      <div>
        <img className={styles.logoImg} src={"/images/logo.png"} />
      </div>
      <div className={styles.headerIcons}>
        <p className={styles.shopText}>Shop</p>
        <img className={styles.headerLogo} src={"/images/hamburger-icon.svg"} />
        <div className={styles.cartIconDiv} onClick={()=>{props.setShowCart(true)}}>
          <img className={styles.headerLogo} src={"/images/shopping-bag.png"} />
          <p className={styles.cartCount}>{props?.cartCount}</p>
        </div>
        <img className={styles.headerLogo} src={"/images/hamburger-icon.svg"} />
      </div>
    </div>
  );
}

export default HeaderComponet;
