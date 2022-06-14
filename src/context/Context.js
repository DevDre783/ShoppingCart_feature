import { createContext, useContext, useReducer } from 'react'
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducer';

const Cart = createContext();

const Context = ({ children }) => {
    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.abstract(640, 480, true),
        inStock: faker.datatype.number(10),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.datatype.number(5),
        rates: faker.datatype.number(5)
    }));

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
    });

    return (
        <Cart.Provider value={{ state, dispatch }}>
            {children}
        </Cart.Provider>
    )
}

export default Context;

export const CartState = () => {
    return useContext(Cart);
}
