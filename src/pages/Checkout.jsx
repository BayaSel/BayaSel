import CheckoutForm from "../components/Form/CheckoutForm"
import CheckoutOrder from "../components/CheckoutOrder"

const Checkout =()=>{
    return(
        <div className="block md:flex md:mt-20">
            <CheckoutForm />
            <CheckoutOrder />
        </div>
    )
}

export default Checkout