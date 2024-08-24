import Header from "../components/Header"
import Footer from "../components/Footer"
import CheckoutForm from "../components/Form/CheckoutForm"
import CheckoutOrder from "../components/CheckoutOrder"

const Checkout =()=>{
    return(
        <>
            <Header />
            <div className="block md:flex md:mt-20">
                <CheckoutForm />
                <CheckoutOrder />
            </div>
            <Footer />
        </>
    )
}

export default Checkout