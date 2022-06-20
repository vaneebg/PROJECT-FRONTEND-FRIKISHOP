import React, { createContext, useReducer } from "react";
import axios from "axios";
import ProductsReducer from "./ProductsReducer";

const initialState = {
    products: [],
    // product: {}
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
        };
        // const getProduct = async(_id) => {
        //     try {
        //         const res = await axios.get(API_URL + "/products/id/" + _id);
        //         dispatch({
        //             type: "GET_PRODUCT",
        //             payload: res.data,
        //         });
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };
        return ( <
            ProductsContext.Provider 
            value = {
                {
                    products: state.products,
                    // product: state.product,
                    getProducts,
                    // getProduct,
                }
            } > { children } </ProductsContext.Provider>);
        }