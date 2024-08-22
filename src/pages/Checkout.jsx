import Footer from "../components/Footer"
import Header from "../components/Header"
import CheckoutForm from "../components/Form/CheckoutForm"
import Order from "../components/Order"

const Checkout =()=>{
    return(
        <>
            <Header />
            <div className="block md:flex md:mt-20">
                <CheckoutForm />
                <Order />
            </div>
            <Footer/>
        </>
    )
}

export default Checkout