import React from 'react'
import NavList from './NavList'

const Footer = (props) => {
  const itemLists = [];
  const show = itemLists.map((elements, index , compArray) => {
   
   
    return (
      <>
        
        <NavList listItem={elements}/>
        {
          
        }

      </>
    )

    
  })
  return (
    <div className='foot'>
      <h1>{props.title}</h1>
      <ul>
        {/*1. <NavList listItem={"Home"}/>
        <NavList listItem={"About"}/>
        <NavList listItem={"Services"}/>
        <NavList listItem={"Category"}/>
        <NavList listItem={"Contact"}/> */}

        {/*2. <NavList listItem={itemLists[0]}/>
        <NavList listItem={itemLists[1]}/>
        <NavList listItem={itemLists[2]}/>
        <NavList listItem={itemLists[3]}/>
        <NavList listItem={itemLists[4]}/> */}

        {show}

      </ul>
      
    </div>
  )
}

export default Footer
