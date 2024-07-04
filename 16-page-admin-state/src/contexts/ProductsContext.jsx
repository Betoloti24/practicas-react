import { createContext } from "react";
import useIndicator from "../hooks/useIndicator";

export const ProductsContext = createContext({});

export function ProductsProvider({ children }) {
  const { head, body, total, loading, error } = useIndicator();

  return (
    <ProductsContext.Provider value={{ head, body, total, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
}
