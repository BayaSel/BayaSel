import './CheckoutForm.css';
import CustomCheckbox from '../../CustomCheckbox';
import CustomRadioButton from '../../CustomRadioButton';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
    const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);

    const states = ['State 1', 'State 2', 'State 3'];
    const cities = {
        'State 1': ['City A', 'City B', 'City C'],
        'State 2': ['City D', 'City E', 'City F'],
        'State 3': ['City G', 'City H', 'City I'],
    };

    const handleStateChange = (state) => {
        setSelectedState(state);
        setSelectedCity(''); // Reset city when state changes
        setIsStateDropdownOpen(false);
    };

    const handleCityChange = (city) => {
        setSelectedCity(city);
        setIsCityDropdownOpen(false);
    };

    const handleCheckboxChange = (isChecked) => {
        console.log("Checkbox is now: ", isChecked);
      };

    const handleRadioChange = (option) => {
      setSelectedOption((prevOption) => (prevOption === option ? null : option));
    };

    

    return (
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
                                <div 
                                    className="dropdown-header"
                                    onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)}>
                                    <i className='bx bx-map-alt'></i>
                                        <span>{selectedState || "Select State"}</span>
                                    <i className='bx bx-chevron-down'></i>
                                </div>
                                {isStateDropdownOpen && (
                                    <ul className='dropdown-list dropdown-list-entered'>
                                        {states.map((state) => (
                                            <li
                                                key={state}
                                                className='dropdown-item'
                                                onClick={() => handleStateChange(state)}
                                            >
                                                {state}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="dropdown">
                                <div 
                                    className="dropdown-header"
                                    onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}>
                                    <i className='bx bx-map-alt'></i>
                                    <span>{selectedCity || "Select City"}</span>
                                    <i className='bx bx-chevron-down'></i>
                                </div>
                                {isCityDropdownOpen && selectedState &&(
                                    <ul>
                                        {cities[selectedState].map((city) => (
                                            <li
                                                key={city}
                                                className='dropdown-item'
                                                onClick={() => handleCityChange(city)}
                                            >
                                                {city}
                                            </li>
                                        ))
                                        }
                                    </ul>
                                )}
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
                        <CustomCheckbox 
                            onChange={handleCheckboxChange}
                            className='shipOtherAdd'
                        />
                        <label htmlFor="ship">Ship to another address</label>
                    </div>
                    <div className='check'>
                        <input type="checkbox" className="hidden peer" />
                        <CustomCheckbox 
                            onChange={handleCheckboxChange}
                            className='saveInfo'
                        />
                        <label htmlFor="save-info">Save this information for next time</label>
                    </div>
                </section>
                <section className='radios'>
                    <CustomRadioButton
                        label="Pay with Card"
                        isChecked={selectedOption === 'Pay with Card'}
                        onChange={() => handleRadioChange('Pay with Card')}
                    />
                    <CustomRadioButton
                        label="Pay on Delivery"
                        isChecked={selectedOption === 'Pay on Delivery'}
                        onChange={() => handleRadioChange('Pay on Delivery')}
                    />
                </section>
                <Link to='/success-details' className='btn'>Proceed</Link>
            </section>
         </div>
    );
}

export default Checkout;
