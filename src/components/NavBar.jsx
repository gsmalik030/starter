import React from 'react'
import {CartIcon} from "../icons"
import { useSelector } from 'react-redux'

const NavBar = () => {
    const {amount, cartItem} = useSelector((store)=>store.cart)
  return (
    <nav>
      <div className='nav-center'></div>
      <h3>Redux Toolkit</h3>
      <div className="nav-container">
        <CartIcon />
        <div className="amount-container">{amount}</div>
        <p className="total-amount"></p>
      </div>
    </nav>
  )
}

export default NavBar
