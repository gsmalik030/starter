import React from 'react'
import { ChevronUp, ChevronDown } from '../icons'
import { removeItem, increase} from '../feature/cart/cartSlice'
import { useDispatch } from 'react-redux'
console.log(removeItem)
const CartItem = ({id, img, title, price, amount}) => {
  const dispatch = useDispatch();
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div className="">
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button onClick={()=>{
          dispatch(removeItem(id));
          }} className="remove-btn">Remove</button>
      </div>
      <div className="">
        <button onClick={()=> dispatch(increase())} className="amount-btn">
          <ChevronUp />

        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>

  )
}

export default CartItem
