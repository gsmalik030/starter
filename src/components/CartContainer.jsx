import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { clearCart } from '../feature/cart/cartSlice'
const CartContainer = () => {
    const dispatch= useDispatch();
   const {cartItem, total, amount} = useSelector((store)=> store.cart)
  if(amount<1){
    return (
        <section className='cart'>
            <header>
                <h2>Your Bag</h2>
                <h4 className="empty-cart">is currently empty</h4>
            </header>
        </section>
    )
  }
   return (
    <section className="cart">
        <header>
            <h2>Your Bag</h2>
        </header>
        <div className="">{cartItem.map((item)=>{
            return <CartItem key={item.id} {...item} />
        })}</div>
        <footer>
            <hr />
            <div className="cart-total">
                <h4>total <span>${total}</span></h4>
            </div>
            <button onClick={()=>dispatch(clearCart())} className="btn clear-btn">Clear Cart</button>
        </footer>
    </section>
  )
}

export default CartContainer
