import { useContext, useEffect, useState } from "react";
import ctx from "../../store/cart-context";

import CartIcon from "./CartIcon";

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnisHighlighted, setBtnIsHighLighted] = useState(false);
  const cartCtx = useContext(ctx);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce(
    (curNumber, item) => curNumber + item.amount,
    0
  );

  const btnClasses = `${styles.button} ${btnisHighlighted && styles.bump}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighLighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighLighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  // const numberOfCartItems = 0;
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
      {/* <CartIcon className={styles.icon} />
      Your Cart
      <div className={styles.badge}>0</div> */}
    </button>
  );
};

export default HeaderCartButton;
