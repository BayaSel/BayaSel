import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import WestRoundedIcon from '@mui/icons-material/WestRounded';
export default function CartHeader() {
  return (
    <div>
        <div className="nav-cart">
            <p>Home<ArrowRightRoundedIcon /></p>
            <p>Shopping cart</p>
        </div>
        <div className="continueShopping">
            <p>continue Shopping <WestRoundedIcon /></p>
        </div>
    </div>
  )
}
