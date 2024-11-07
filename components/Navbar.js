"use client"
import React from 'react'

function Navbar({ cartCount, onCartClick}) {
  return (
    <nav className= "fixed shadow-md sticky top-0 z-10 w-full text-white" >
    <div className="container mx-auto p-4">
      <ul className=" items flex space-x-4">
        <li><a href="#soups" className=" ">Soups</a></li>
        <li><a href="#salads" className=" ">Salads</a></li>
        <li><a href="#appetiser" className=" ">Appetisers</a></li>
        <li><a href="#mains" className=" ">Mains</a></li>
        <li><a href="#desserts" className="">Desserts</a></li>
        <li><a href="#refreshments" className="">Refreshments</a></li>
        <li onClick={onCartClick} className="relative">
          Cart <span className="ml-1">({cartCount})</span>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar