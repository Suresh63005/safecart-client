// import React, { useReducer } from "react";

// export const cartStateContext = React.createContext(null);
// export const CartDispatchContext = React.createContext(null);

// export const initialState = {
//   cart: [],
// };

// export const getBasketTotal = (basket) =>
//   basket?.reduce((amount, item, index) => item.price + amount, 0);

// export function reducer(state, action) {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       return { ...state, cart: [...state.cart, action.payload] };
//     case "DELETE_ITEM_CART":
//       const newCart = [...state.cart];
//       const UpdatedCart = newCart.filter(
//         (item) => item.id !== action.payload.id
//       );
//       return {
//         ...state,
//         cart: UpdatedCart,
//       };

//     default:
//       return state;
//   }
// }

// export function CartProvider({ children }) {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <cartStateContext.Provider value={state}>
//       <CartDispatchContext.Provider value={dispatch}>
//         {children}
//       </CartDispatchContext.Provider>
//     </cartStateContext.Provider>
//   );
// }
