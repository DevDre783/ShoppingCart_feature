import React from 'react'
import { CartState } from '../context/Context';
import Filters from './Filters';
import SingleProduct from './SingleProduct';
import "./styles.css";

const Home = () => {
    const test = "Testing";
    const { state: { products },} = CartState();
    // console.log(products);

    return (
        <div className='home'>
            <Filters />
            <div className='productContainer'>
                {
                    products.map(prod => (
                        <SingleProduct prod={prod} key={prod.id}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Home;
