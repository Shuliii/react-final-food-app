import HeaderCartButton from "./HeaderCartButton";

import styles from "./Header.module.css";

import meals from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onClick} />
      </header>
      <div className={styles["main-image"]}>
        <img src={meals} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
