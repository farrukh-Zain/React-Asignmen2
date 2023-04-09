import React from 'react'
import MainCards from './Hero'
import product from './ProductDetail'
import Hero from './Hero'

const Main = () => {
  return (

    <div className="main">
      {
      product.map((elements,index)=>{ 
      return (
        <Hero title={elements.title} price= {elements.price}  imgSrc={elements.image}/> 
      )
      })
}
    {/* <MainCards title={product[0].title} price={product[0].price} image={product[0].image}/>
     */}
     </div>
    
  )
}

export default Main
