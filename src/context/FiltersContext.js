import React, { useContext, useEffect, useReducer } from "react";
import {
 LOAD_PRODUCTS,
 SET_GRIDVIEW,
 SET_LISTVIEW,
 UPDATE_SORT,
 SORT_PRODUCTS,
 UPDATE_FILTERS,
 FILTER_PRODUCTS,
 CLEAR_FILTERS,
} from "../ACTIONS"
import { useGlobalContext } from "../context/ProductsContext"
import reducer from "../reducers/FiltersReducer"
const initialState = {
 filteredProducts: [],
 allProducts: [],
 gridView: true,
 sort: "",
 filters: {
  text: "",
  brand: "all",
  gender: "all",
  color: "all",
  minPrice: 0,
  maxPrice: 0,
  price: 0,
  shipping: false,
 }
}

const FiltersContext = React.createContext()

const FiltersProvider = ({ children }) => {
 const { products } = useGlobalContext()
 const [state, dispatch] = useReducer(reducer, initialState)
 useEffect(() => {
  dispatch({ type: LOAD_PRODUCTS, payload: products })
 }, [products])

 useEffect(() => {
  dispatch({ type: FILTER_PRODUCTS })
  dispatch({ type: SORT_PRODUCTS })
 }, [products, state.sort, state.filters])

 const setGridView = () => {
  dispatch({ type: SET_GRIDVIEW })
 }
 const setListView = () => {
  dispatch({ type: SET_LISTVIEW })
 }
 const updateSort = (e) => {
  // const name = e.target.name
  const value = e.target.value
  dispatch({ type: UPDATE_SORT, payload: value })
 }

 const updateFilters = (e) => {
  let name = e.target.name
  let value = e.target.value
  if (name === "brand") {
   value = e.target.textContent
  }
  if( name === "color"){
   value = e.target.dataset.color
  }
  if(name === "price"){
    value = Number(value)
  }
  if(name === "shipping"){
    value = e.target.checked
  }
  dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
 }
 const clearFilters = () => {
   dispatch({ type: CLEAR_FILTERS})
 }
 return (
  <FiltersContext.Provider
   value={{
    ...state,
    setGridView,
    setListView,
    updateSort,
    updateFilters,
    clearFilters,
   }}
  >
   {children}
  </FiltersContext.Provider>
 )
}
export default FiltersProvider

export const useFiltersContext = () => {
 return useContext(FiltersContext)
}