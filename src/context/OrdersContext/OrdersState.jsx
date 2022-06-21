import { useContext, useReducer } from "react";
import axios from 'axios'
import OrdersReducer from './OrdersReducer'

const initialvalue ={
    order:[]
}

const OrdersContext = useContext(initialvalue)

export const [state,dispatch] = useReducer(OrdersReducer,initialvalue)

