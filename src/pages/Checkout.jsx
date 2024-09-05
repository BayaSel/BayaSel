import CheckoutForm from "../components/Form/CheckoutForm";
import CheckoutOrder from "../components/CheckoutOrder";

const Checkout = () => {
    return (
        <>
            <div className="block lg:flex md:mt-20 custom-1024:block">
                <CheckoutForm />
                <CheckoutOrder />
            </div>
        </>
    );
}

export default Checkout;
