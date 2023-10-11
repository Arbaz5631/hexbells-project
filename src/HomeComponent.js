import React, { useState } from "react";
import styles from "./HomeComponent.module.css";
import HeaderComponet from "./HeaderComponet";
import ProductComponent from "./ProductComponent";
function HomeComponent() {
  const [cartCount, setCartCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  return (
    <div className={styles.mainDiv}>
      <HeaderComponet setShowCart={setShowCart} cartCount={cartCount} />
      <ProductComponent setShowCart={setShowCart} showCart={showCart} cartCount={cartCount} setCartCount={setCartCount} />
    </div>
  );
}

export default HomeComponent;
