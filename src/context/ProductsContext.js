import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/ProductReducer"
import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_SP_PRODUCT_BEGIN,
  FETCH_SP_PRODUCT_ERROR,
  FETCH_SP_PRODUCT_SUCCESS,
} from "../ACTIONS"
import { URL } from "../utils/constant";
import axios from "axios"

const ProductsContext = React.createContext()

const initialState = {
  isSidebarOpen: false,
  products_isLoading: false,
  products_isError: false,
  products: [],
  featured_products: [],
  singleProduct: {},
  singleProduct_isError: false,
  singleProduct_isLoading: false,
}
const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR })
  }
  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR })
  }

  const fetchProducts = async (url) => {
    dispatch({ type: FETCH_PRODUCTS_BEGIN })
    try {
      const response = await axios(url)
      const products = response.data
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products })

    } catch (error) {
      dispatch({ type: FETCH_PRODUCTS_ERROR })
    }
  }

  const fetchSP = async (SPURL) => {
    dispatch({ type: FETCH_SP_PRODUCT_BEGIN })
    try {
      const res = await axios(SPURL)
      const single_product = res.data
      dispatch({ type: FETCH_SP_PRODUCT_SUCCESS, payload: single_product })
    } catch (error) {
      dispatch({ type: FETCH_SP_PRODUCT_ERROR })
    }
  }
  useEffect(() => {
    fetchProducts(URL)
  }, [])
  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        fetchSP
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider

export const useGlobalContext = () => {
  return useContext(ProductsContext)
}