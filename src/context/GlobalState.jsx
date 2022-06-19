import React, { createContext, useReducer } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";

const initialState = {
    products: [],
    // product: {}
};

export const GlobalContext = createContext(initialState);

const API_URL = "http://localhost:8080";

export const GlobalProvider = ({ children }) => {
        const [state, dispatch] = useReducer(AppReducer, initialState);

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
            GlobalContext.Provider 
            value = {
                {
                    products: state.products,
                    // product: state.product,
                    getProducts,
                    // getProduct,
                }
            } > { children } </GlobalContext.Provider>);
        }