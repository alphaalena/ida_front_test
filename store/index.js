import axios from 'axios';
import { serverHost } from '~/config';

const PRICE_SORT_ID = 'price:asc';
const RATING_SORT_ID = 'rating:desc';

export const priceSorting = {
  title: 'По цене',
  shortTitle: 'цене',
  code: PRICE_SORT_ID,
};

export const ratingSorting = {
  title: 'По популярности',
  shortTitle: 'популярности',
  code: RATING_SORT_ID,
};

export const state = () => {
  return {
    products: [],
    isProductsLoading: false,
    sortingPredicate: null,
    sortingPredicates: [
      priceSorting,
      ratingSorting,
    ],
    cart: {},
    isOrderInProcess: false,
    isCartOpened: false,
  };
};

export const getters = {
  productsInCartCount(state) {
    return Object.values(state.cart).filter(isProductInCart => isProductInCart).length;
  },
  productsInCart(state) {
    const productsInCartId = [];
    for (const productId in state.cart) {
      if (state.cart[productId] === true) {
        productsInCartId.push(Number(productId));
      }
    }
    return state.products.filter(product => productsInCartId.includes(product.id));
  },
};

export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  startLoadingProducts(state) {
    state.isProductsLoading = true;
  },
  endLoadingProducts(state) {
    state.isProductsLoading = false;
  },
  sortProducts(state, predicate) {
    const products = state.products;
    products.sort((first, second) => {
      if (predicate.code === PRICE_SORT_ID) {
        return first.price - second.price;
      }
      if (predicate.code === RATING_SORT_ID) {
        return second.rating - first.rating;
      }
    });
    state.products = products;
    state.sortingPredicate = predicate;
  },
  addProductToCart(state, productId) {
    const newCart = { ...state.cart };
    newCart[productId] = true;
    state.cart = newCart;
  },
  removeProductFromCart(state, productId) {
    const newCart = { ...state.cart };
    newCart[productId] = false;
    state.cart = newCart;
  },
  openCart(state) {
    state.isCartOpened = true;
  },
  closeCart(state) {
    state.isCartOpened = false;
  },
  clearCart(state) {
    state.cart = {};
  },
  startOrder(state) {
    state.isOrderInProcess = true;
  },
  endOrder(state) {
    state.isOrderInProcess = false;
  },
};

export const actions = {
  async loadProducts({ commit }, categoryId) {
    commit('startLoadingProducts');
    const response = await axios.get(`${serverHost}/api/product`, {
      params: {
        categoryId,
      },
    });
    commit('endLoadingProducts');
    commit('setProducts', response.data);
  },
  async makeOrder({ commit }) {
    commit('startOrder');
    // DO SOMETHING ASYNC REQUEST
    await new Promise(res => setTimeout(res, 2000));
    commit('endOrder');
    commit('clearCart');
  },
};
