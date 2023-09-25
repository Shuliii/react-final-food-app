import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isModal, setIsModal] = useState(false);

  const HeaderHandler = () => {
    setIsModal(true);
  };

  const closeHandler = () => {
    setIsModal(false);
  };
  return (
    <CartProvider>
      {isModal && <Cart onClick={closeHandler} />}
      <Header onClick={HeaderHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
