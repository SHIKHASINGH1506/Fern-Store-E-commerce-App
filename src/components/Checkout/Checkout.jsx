
import {CheckoutOrderSummary} from './CheckoutOrderSummary';
import {useProduct} from 'contexts';
import { useState } from 'react';   

const Checkout  = () => {
    const {state:{address, cart}} = useProduct();
    const [chekoutAddress, setCheckoutAddress] = useState({});
    const [checkoutMsg, setCheckoutMsg] = useState('');

    return (
        <div className="general-wrapper">
        {checkoutMsg!=='' 
            ? <h3 className="checkout-msg">{checkoutMsg}</h3> 
            : (
          <div className="cart-wrapper">
            <h5 className="cart-header py-4">Checkout</h5>
            {cart.length>0 && <div className="cart-body d-flex">
                <div className="address-option">
                {address.map(address => <div className='address-item'>
                    <label htmlFor="address" className='semi-bold d-flex items-center'>
                        <input className='radio-input' type="radio" name="address" id="" value={address} 
                            onChange={e => setCheckoutAddress(address)}/>
                        {address.fullName}
                    </label>
                    <div className="address-detail">
                        <p>{address.houseNo}, {address.detailAddress}, {address.city} </p>
                        <p>{address.state}</p>
                        <p>{address.pinCode}</p>
                        <p>Mobile - {address.mobile}</p>
                    </div>
                </div>)}
                </div>
                <CheckoutOrderSummary chekoutAddress={chekoutAddress} setCheckoutMsg={setCheckoutMsg}/>
            </div>}
          </div>)
        }
        </div>
      );
}

export {Checkout }