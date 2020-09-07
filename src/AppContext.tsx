import React, { useReducer } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Cart {
  products: string[];
  shippingValue?: number;
}

type CartActionType = {
  type: "ADD_PRODUCT" | "REMOVE_PRODUCT";
};

const AppContext: React.FC = () => {
  const cart = useReducer(
    (state: Cart, action: CartActionType) => {
      switch (action.type) {
        case "ADD_PRODUCT":
          return {
            ...state,
            product: [...state.products, "Novo prod"],
          };
        default:
          return state;
      }
    },
    {
      products: ["ASDSA"],
      shippingValue: 0,
    }
  );
  return <div />;
};

export default AppContext;
