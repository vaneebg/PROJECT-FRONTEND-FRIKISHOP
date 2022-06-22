import React, { createContext, useReducer } from "react";
import axios from "axios";
import ProductsReducer from "./ProductsReducer";

const cart=JSON.parse(localStorage.getItem('cart'))
const favs= JSON.parse(localStorage.getItem('favs'))

const initialState = {
    products: [],
    cart: cart ? cart : [],
    favs: favs ? favs : []
};

export const ProductsContext = createContext(initialState);

const API_URL = "http://localhost:8080";

export const ProductsProvider = ({ children }) => {
        const [state, dispatch] = useReducer(ProductsReducer, initialState);

        const getProducts = async() => {
            const res = await axios.get(API_URL + "/products");
            dispatch({
                type: "GET_PRODUCTS",
                payload: res.data,
            });
            return res;
        };
        const addCart =(product)=>{
            dispatch({
                type:'ADD_CART',
                payload:product,
            })
        }
        const addFavs =(product)=>{
            dispatch({
                type:'ADD_FAVS',
                payload:product,
            })
        }
        const clearFavs=()=> {
            dispatch({
                type:'CLEAR_FAVS'
            })
        }
        const clearCart=()=> {
            dispatch({
                type:'CLEAR_CART'
            })
        }
        const clearOne=(item)=>{
            dispatch({
                type:'CLEAR_ONE',
                payload:item
            })
        }
        return ( <
            ProductsContext.Provider 
            value = {
                {
                    products: state.products,
                    cart:state.cart,
                    favs:state.favs,
                    getProducts,
                    addCart,
                    clearCart,
                    clearOne,
                    clearFavs,
                    addFavs
                }
            } > { children } </ProductsContext.Provider>);
        }