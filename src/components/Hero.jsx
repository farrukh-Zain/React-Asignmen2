import React from 'react'

const Hero = (props) => {
  return (
    <>
        <section>
      <div className="card">
       
        <h1 className="cardtitle">{props.title}</h1>
        <img src={props.imgSrc} alt="" className="cardimage" />
        <p className="price">{props.price}</p>
      </div>
    </section>
      
    </>
  )
}

export default Hero
