
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
const filtersReducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map(p => p.price)
      maxPrice = Math.max(...maxPrice)
      return {
        ...state,
        allProducts: [...action.payload],
        filteredProducts: [...action.payload],
        filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice }
      }
    case SET_GRIDVIEW:
      return { ...state, gridView: true }
    case SET_LISTVIEW:
      return { ...state, gridView: false }
    case UPDATE_SORT:
      return { ...state, sort: action.payload }
    case SORT_PRODUCTS:
      const { sort, filteredProducts } = state
      let temProducts = [...filteredProducts]
      if (sort === "price-lowest") {
        temProducts = temProducts.sort((a, z) => {
          if (a.price < z.price) {
            return -1
          }
          if (a.price > z.price) {
            return 1
          }
          return 0
        })
      }
      if (sort === "price-highest") {
        temProducts = temProducts.sort((a, z) => z.price - a.price)
      }
      if (sort === "name-a") {
        temProducts = temProducts.sort((a, z) => {
          return a.name.localeCompare(z.name)
        })
      }
      if (sort === "name-z") {
        temProducts = temProducts.sort((a, z) => {
          return z.name.localeCompare(a.name)
        })
      }
      return { ...state, filteredProducts: temProducts }
    case UPDATE_FILTERS:
      const { name, value } = action.payload
      return { ...state, filters: { ...state.filters, [name]: value } }
    case FILTER_PRODUCTS:
      const { allProducts } = state
      const { text, brand, gender, color, price, shipping } = state.filters
      let tempProducts = [...allProducts]
      // filtering
      // text
      if (text) {
        tempProducts = tempProducts.filter(product => {
          return (
            product.name.toLowerCase().startsWith(text) ||
            product.name.toLowerCase().includes(text)
          )
        })
      }
      // brand
      if (brand !== "all") {
        tempProducts = tempProducts.filter(product => product.brand === brand)
      }
      // gender
      if (gender !== "all") {
        tempProducts = tempProducts.filter(product => product.gender === gender)
      }
      // gender
      if (color !== "all") {
        tempProducts = tempProducts.filter(product => {
          return product.colors.find(mainC => mainC === color)
        })
      }
      // price
      tempProducts = tempProducts.filter(product => product.price <= price )
      // shipping
      if(shipping){
        tempProducts = tempProducts.filter(product=>product.shipping === true)
      }
      return { ...state, filteredProducts: tempProducts }
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          brand: "all",
          gender: "all",
          color: "all",
          price: state.filters.maxPrice,
          shipping: false,
        }
      }
    default:
      throw new Error(`No matching ${action.type}- action type`)
  }
}
export default filtersReducer