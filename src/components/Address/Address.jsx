import './address.css';
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useProduct } from 'contexts';
import { AddressForm } from './AddressForm';
import { Addresslist } from './Addresslist';
import { getAllAddress, addAddress, deleteAddress } from 'services';

export const Address = () => {
    const formField = {
        fullName: "",
        mobile: "",
        pinCode: "",
        city: "",
        houseNo: "",
        detailAddress: "",
        state: "",
        isEdit: false
    };
    const { dispatch, state: { address } } = useProduct();
    const [addressFields, setAddress] = useState(formField);
    const [newAddress, setNewAddress] = useState(false);
    const [isEditable, setIsEditable] = useState(false);

    const setAddressFields = (e) => {
        const { value, name } = e.target;
        setAddress({
            ...addressFields,
            [name]: value
        })
    }    

    const cancelFormHanlder = () => {
        setNewAddress(false);
        setAddress(formField);
    };

    const formHandler = async e => {
        e.preventDefault();
        try {
            const { data: { address } } = await addAddress({ address: { id: uuid(), ...addressFields } });
            dispatch({
                type: "SET_ADDRESS",
                payload: address
            });
            setNewAddress(false);
            setAddress(formField);
        } catch (err) {
            console.log(err.response.data);
        }
    }

    const openEditFormHandler = () => {
        setIsEditable(prevState => !prevState);
    }

    return (
        <div className="wishlist-wrapper">
            <div className="wishlist-container d-flex flex-col items-center">
                <h5 className="wishlist-header py-4">Address Management</h5>
                {!newAddress && (
                    <button onClick={() => setNewAddress(a => !a)} className="bttn bttn-primary">
                        + Add a new address
                    </button>
                )}
                {newAddress && (
                    <AddressForm
                        formHandler={formHandler}
                        setAddressFields={setAddressFields}
                        address={addressFields}
                        isEdit={false}
                        cancelFormHanlder={cancelFormHanlder}
                    />
                )}
                <div className='addresslist-wrapper d-flex justify-center'>
                    {address.length > 0 && (
                        <Addresslist
                            addressList={address}
                            // setAddressList={setAddressList}
                            openEditFormHandler={openEditFormHandler}
                            isEditable={isEditable}
                        />
                    )}
                </div>

            </div>
        </div>
    )
}