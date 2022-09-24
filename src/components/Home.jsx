import React from 'react'
import { CartState } from '../context/Context'
import Filter from './Filter';
import SingleProduct from './SingleProduct';
import "./styles.css"
const Home = ()=>{
    const {state: {products},
    producState : {byFastDelivery,byRating,byStock,sort,serachQuery}
    } = CartState()


    const transormProducts = ()=> {
        let sortedProducts = products
        if(sort){
            sortedProducts = sortedProducts.sort((a,b)=>
            sort === "lowToHight" ? a.price-b.price : b.price-a.price
            )
        }

        if(!byStock){
            sortedProducts = sortedProducts.filter(prod=>prod.inStock)
        }

        if(byFastDelivery){
            sortedProducts = sortedProducts.filter(prod=>prod.fastDelivery)
        }

        if(byRating){
            sortedProducts = sortedProducts.filter(prod=>prod.ratings >= byRating)
        }

        if(serachQuery){
            sortedProducts = sortedProducts.filter(prod=>prod.name.toLowerCase().includes(serachQuery))
        }



        return sortedProducts;
    }


    return (
        <div className='home'>
            <Filter/>
        <div className='productContainer'>
            
            {transormProducts().map((prod)=>(
                <SingleProduct key={prod.id} prod={prod} />
            ))}
            </div>
            </div>
    )
}

export default Home