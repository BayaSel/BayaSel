import Header from '../Header';
import Footer from '../Footer';
import './Checkout.css';
import CustomCheckbox from '../CustomCheckbox';
import CustomRadioButton from '../CustomRadioButton';
import { useState } from 'react';

const Checkout = () => {

    const [selectedOption, setSelectedOption] = useState(null);

    const handleRadioChange = (option) => {
      setSelectedOption((prevOption) => (prevOption === option ? null : option));
    };

    return (
     <>
         <Header/>
         <div className='checkout-container'>
            <section className='checkout-form'>
                <section className='contact-info'>
                    <h2>Contact Information</h2>
                    <div className='info'>
                        <div className='input-container'>
                            <input type="email" placeholder=" " />
                            <span className='placeholder'>
                                <i className='bx bx-envelope'></i> Email address
                            </span>
                        </div>
                        <div className='input-container'>
                            <input type="text" placeholder=" " />
                            <span className='placeholder'>
                                <i className='bx bx-phone'></i> Enter phone no
                            </span>
                        </div>
                    </div>
                    <div className='info'>
                        <div className='input-container'>
                            <input type="text" placeholder=" " />
                            <span className='placeholder'>
                                <i className='bx bx-user'></i> Enter your first name
                            </span>
                        </div>
                        <div className='input-container'>
                            <input type="text" placeholder=" " />
                            <span className='placeholder'>
                                <i className='bx bx-user'></i> Enter your last name
                            </span>
                        </div>
                    </div>
                </section>
                <section className='shipping-add'>
                    <div className='shipping'>
                        <h2>Shipping Address</h2>
                        <p>Clear</p>
                    </div>
                    <div className='input-container address-input'>
                        <input type="text" placeholder=" " />
                        <span className='placeholder'>
                            <i className='bx bx-globe'></i> Enter your address
                        </span>
                    </div>
                    <div className='shipping-info'>
                        <div className='dropdown-container'>
                            <div className="dropdown">
                                <div className="dropdown-header">
                                    <i className='bx bx-map-alt'></i>
                                    <span>State</span>
                                    <i className='bx bx-chevron-down'></i>
                                </div>
                            </div>
                            <div className="dropdown">
                                <div className="dropdown-header">
                                    <i className='bx bx-map-alt'></i>
                                    <span>City</span>
                                    <i className='bx bx-chevron-down'></i>
                                </div>
                            </div>
                        </div>
                        <div className='input-container postal-code'>
                            <input type="number" placeholder=" " />
                            <span className='placeholder'>
                                <i className='bx bx-navigation'></i> Postal Code/Zip
                            </span>
                        </div>
                    </div>
                </section>
                <section className='checkboxes'>
                    <div className='check'>
                        <CustomCheckbox />
                        <label htmlFor="ship">Ship to another address</label>
                    </div>
                    <div className='check'>
                        <input type="checkbox" className="hidden peer" />
                        <CustomCheckbox />
                        <label htmlFor="save-info">Save this information for next time</label>
                    </div>
                </section>
                <section className='radios'>
                    <div className='radio'>
                    <CustomRadioButton
                        label="Pay with Card"
                        isChecked={selectedOption === 'Pay with Card'}
                        onChange={() => handleRadioChange('Pay with Card')}
                    />
                    </div>
                    <div className='radio'>
                    <CustomRadioButton
                        label="Pay on Delivery"
                        isChecked={selectedOption === 'Pay on Delivery'}
                        onChange={() => handleRadioChange('Pay on Delivery')}
                    />
                    </div>
                </section>
                <button className='btn'>Proceed</button>
            </section>
         </div>
         <Footer />
     </>   
    );
}

export default Checkout;
