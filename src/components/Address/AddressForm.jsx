

const AddressForm = ({
  formHandler,
  address,
  setAddressFields,
  isEdit,
  cancelFormHanlder
}) => {
    const states = [
        "Select State",
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttarakhand",
        "Uttar Pradesh",
        "West Bengal",
        "Andaman and Nicobar Islands",
        "Chandigarh",
        "Dadra and Nagar Haveli",
        "Daman and Diu",
        "Delhi",
        "Lakshadweep",
        "Puducherry"
      ];
  return (
    <div className="address-table-container">
      <form className="address-form" onSubmit={(e) => formHandler(e, address)}>
        {isEdit ? <h5 className="text-center">EDIT ADDRESS</h5> : <h5 className="text-center">ADD NEW ADDRESS</h5>}
        <div className="row">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name(Required*)"
            value={address.fullName}
            onChange={setAddressFields}
            className="input-section"
            required
          />
          <input
            type="text"
            name="mobile"
            placeholder="Phone No(Required*)"
            value={address.mobile}
            onChange={setAddressFields}
            className="input-section"
            required
          />
           <input
            type="text"
            name="houseNo"
            placeholder="House No(Required*)"
            value={address.houseNo}
            onChange={setAddressFields}
            className="input-section"
            required
          />
          <input
            type="text"
            name="detailAddress"
            placeholder="Colony, street no"
            value={address.detailAddress}
            onChange={setAddressFields}
            className="input-section"
            required
          />
           <input
            type="text"
            name="pinCode"
            placeholder="Pin Code(Required*)"
            value={address.pinCode}
            onChange={setAddressFields}
            className="input-section"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={address.city}
            onChange={setAddressFields}
            className="input-section"
          />
          
          <select
            name="state"
            id="state"
            onChange={setAddressFields}
            className="input-section"
            required
          >
            
            {states.map((state, index) => {
              if (index === 0)
                return (
                  <option value="" defaultValue>Select State</option>
                );
              else
                return (
                  <option value={state} key={state}>
                    {state}
                  </option>
                );
            })}
          </select>
        </div>
        <button className="bttn bttn-primary" type="submit" value="Submit">
          Save Address
        </button>
        <button
          className="bttn bttn-secondary"
          onClick={() => cancelFormHanlder()}
        >
          Cancel Address
        </button>
      </form>
    </div>
  );
};
export { AddressForm}