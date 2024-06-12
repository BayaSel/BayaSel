import orangeImg from '../assets/cart/orange.png'
import CartHeader from './CartHeader'
import './Styles/cart.css'

function Footer() {
  return (
    <div>
      <CartHeader />
      <div className="cartbody">
        <img src={orangeImg} alt="" />
      </div>
    </div>
  )
}

export default Footer