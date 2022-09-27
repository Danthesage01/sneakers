import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_SP_PRODUCT_BEGIN,
  FETCH_SP_PRODUCT_ERROR,
  FETCH_SP_PRODUCT_SUCCESS
} from "../ACTIONS"

function products_reducer(state, action) {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return { ...state, isSidebarOpen: true }
    case CLOSE_SIDEBAR:
      return { ...state, isSidebarOpen: false }
    case FETCH_PRODUCTS_BEGIN:
      return { ...state, products_isLoading: true }
    case FETCH_PRODUCTS_SUCCESS:
      const featured_products = action.payload.filter(product => product.featured === true)
      return {
        ...state,
        products_isLoading: false,
        products_isError: false,
        products: action.payload,
        featured_products
      }
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        products_isLoading: false,
        products_isError: true
      }
    case FETCH_SP_PRODUCT_BEGIN:
      return {
        ...state,
        singleProduct_isLoading: true,
        singleProduct_isError: false
      }
    case FETCH_SP_PRODUCT_SUCCESS:
      return {
        ...state,
        singleProduct_isLoading: false,
        singleProduct: action.payload,
        singleProduct_isError: false,
      }
    case FETCH_SP_PRODUCT_ERROR:
      return {
        ...state,
        singleProduct_isLoading: false,
        singleProduct_isError: true
      }
    default:
      throw new Error(`There is no "${action.type}" action type`)
  }

}

export default products_reducer