import React from "react";
import styles from "./HomeComponent.module.css";
import ImageCard from "./ImageCard";
const ImagesData = [
  {
    img: "/images/product-img1.svg",
    img2: "/images/product-img2.svg",
    name: "Soft Pinch Liquid Blush",
    price: "1200",
  },
  {
    img: "/images/product-img1.svg",
    img2: "/images/product-img2.svg",
    name: "Soft Pinch Liquid Blush",
    price: "1200",
  },
  {
    img: "/images/product-img1.svg",
    img2: "/images/product-img2.svg",
    name: "Soft Pinch Liquid Blush",
    price: "1200",
  },
  {
    img: "/images/product-img1.svg",
    img2: "/images/product-img2.svg",
    name: "Soft Pinch Liquid Blush",
    price: "1200",
  },
];
function ProductComponent(props) {
  return (
    <div className={styles.productMainDiv}>
      <div className={styles.productLeftDiv}>
        <img
          img={"/images/category-bg-img.svg"}
          className={styles.productLeftBgImg}
        />
        <div className={styles.shopByCategory}>
          <p className={styles.shopByText}>shop by</p>
          <p className={styles.categoryText}>Category</p>
          <hr className={styles.hr} />
          <div className={styles.leftButtons}>
            <button className={styles.eyeButton}>Eye</button>
            <button className={styles.otherButtons}>Lips</button>
            <button className={styles.otherButtons}>Face</button>
            <a className={styles.viewAllText}>View All</a>
          </div>
        </div>
      </div>
      {props.showCart && (
        <div className={styles.cartDiv}>
          <div className={styles.cartInnerDiv}>
            <p>My Bag</p>
            <p
              className={styles.crossIcon}
              onClick={() => {
                props.setShowCart(false);
              }}
            >
              X
            </p>
          </div>
          <div className={styles.cartProductMainDiv}>
            <div className={styles.cartProductDiv}>
              <img
                className={styles.cartImg}
                src={"/images/product-img1.svg"}
              />
              <div className={styles.cartProductText}>
                <p className={styles.cartText}>Eye shadow Stick</p>
                <p className={styles.cartText}>shades: Truely yours</p>
              </div>
            </div>
            <div className={styles.cartProductDiv}>
              <img
                className={styles.cartImg}
                src={"/images/product-img1.svg"}
              />
              <div className={styles.cartProductText}>
                <p className={styles.cartText}>Eye shadow Stick</p>
                <p className={styles.cartText}>shades: Truely yours</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={styles.productRightDiv}>
        {ImagesData?.map((data) => (
          <ImageCard
            cartCount={props.cartCount}
            setCartCount={props.setCartCount}
            data={data}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductComponent;
