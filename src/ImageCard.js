import React, { useState } from "react";
import styles from "./HomeComponent.module.css";
function ImageCard({ data, setCartCount, cartCount }) {
  const [showImage2, setShowImage2] = useState(false);
  return (
    <div className={styles.ImageCardDiv}>
      <img
        onMouseOver={()=>setShowImage2(true)}
        onMouseLeave={()=>setShowImage2(false)}
        className={styles.cardImage1}
        src={showImage2 ? data.img2 : data.img}
      />

      <p className={styles.cardTitle}>{data.name}</p>
      <div className={styles.AddToCartCardDiv}>
        <p className={styles.priceDiv}>₹{data.price}</p>
        <p
          onClick={() => {
            setCartCount(cartCount + 1);
          }}
          className={styles.addToBagtext}
        >
          Add to Bag
        </p>
      </div>
    </div>
  );
}
export default ImageCard;
