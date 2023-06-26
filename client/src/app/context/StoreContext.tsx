import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Basket } from "../models/basket";

interface StoreContextValue {
  basket: Basket | null;
  setBasket: (basket: Basket) => void;
  removeItem: (productId: number, qunanity: number) => void;
}

export const StoreContext = createContext<StoreContextValue | undefined>(
  undefined
);

//useStoreContext is a custom react hook which used UseCotext hook to access StoreContext
export function useStoreContext() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw Error("Opps- we don't seem to be inside the provider");
  }
  return context;
}

export function StoreProvider({ children }: PropsWithChildren<any>) {
  const [basket, setBasket] = useState<Basket | null>(null);

  function removeItem(productId: number, quantity: number) {
    if (!basket) return;
    const items = [...basket.items];
    const itemIndex = items.findIndex((item) => item.productId === productId);
    if (itemIndex > -1) {
      // Modified condition to include index 0
      items[itemIndex].quantity -= quantity;
      if (items[itemIndex].quantity <= 0) items.splice(itemIndex, 1);
      setBasket((prevState) => {
        return { ...prevState!, items: [...items] }; // Create a new array reference
      });
    }
  }
  return (
    <StoreContext.Provider value={{ basket, setBasket, removeItem }}>
      {children}
    </StoreContext.Provider>
  );
}
