import React, { createContext, useReducer } from "react";
import axios from "axios";
import ProductsReducer from "./ProductsReducer";

const cart=JSON.parse(localStorage.getItem('cart'))
const favs= JSON.parse(localStorage.getItem('favs'))
const token = JSON.parse(localStorage.getItem('token'))

const initialState = {
    token: token ? token : null,
    products: [],
    cart: cart ? cart : [],
    favs: favs ? favs : [],
    product:{}
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

        const addProduct = async(product) => {
            const token = JSON.parse(localStorage.getItem('token'))
            try {
                const res = await axios.post(API_URL + '/products', product,{
                    headers:{
                        authorization:token,
                    }
                })
                dispatch({
                    type: "ADD_PRODUCT",
                    payload: res.data,
                  });
            } catch (error) {
                console.error(error)
            }
        };

        const filterProduct = async(product) => {
            console.log(product)
            const token = JSON.parse(localStorage.getItem('token'))
            try {
                const res = await axios.get(API_URL + '/products',product,{
                    headers:{
                        authorization:token
                    }
                })
                dispatch({
                    type:"FILTER_PRODUCT",
                    payload:res.data
                })
            } catch (error) {
                console.error(error)
            }
        }

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
            console.log('soy itemmmmmmmmmmmmm',item)
            dispatch({
                type:'CLEAR_ONE',
                payload:item
            })
        }
        const clearOneFav=(item)=>{
            dispatch({
                type:'CLEAR_ONE_FAV',
                payload:item
            })
        }
        return ( <
            ProductsContext.Provider 
            value = {
                {
                    products: state.products,
                    product:state.product,
                    cart:state.cart,
                    favs:state.favs,
                    token:state.token,
                    getProducts,
                    addCart,
                    clearCart,
                    clearOne,
                    clearFavs,
                    addFavs,
                    addProduct,
                    clearOneFav,
                    filterProduct
                }
            } > { children } </ProductsContext.Provider>);
        }