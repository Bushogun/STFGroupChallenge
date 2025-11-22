// import { createContext, useState } from 'react'

// export const ShoppingCartContext = createContext()

// export const ShoppingCartProvider = ( {children} ) =>{
//   //shopping cart increase quantity
//   const [count, setCount] = useState(0)
//   //product detail open/close
//   const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
//   const openProductDetail = () => setIsProductDetailOpen(true)
//   const closeProductDetail = () => setIsProductDetailOpen(false)
//   //checkout detail open/close
//   const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
//   const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
//   const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
//   //product detail  show product 
//   const [productToShow, setProductToShow] = useState({})
//   //shopping show products
//   const [cartProducts, setCartProducts] = useState([])

// return(
//     <ShoppingCartContext.Provider 
//     value={{
//         count,
//         setCount,
//         openProductDetail,
//         closeProductDetail,
//         isProductDetailOpen,
//         productToShow,
//         setProductToShow,
//         cartProducts,
//         setCartProducts,
//         isCheckoutSideMenuOpen,
//         openCheckoutSideMenu,
//         closeCheckoutSideMenu,
//     }}>
//       { children }
//     </ShoppingCartContext.Provider>
//     );
// };

// export default ShoppingCartProvider;