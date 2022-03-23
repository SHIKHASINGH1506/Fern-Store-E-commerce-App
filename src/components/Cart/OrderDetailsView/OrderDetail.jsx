import { useFilter } from '../../../contexts/index';
import { getPriceDetails } from "../../../utils/cart/cart";

const OrderDetail = () => {
  const {state: {cart}} = useFilter();
  const {totalPrice, priceAfterDiscount, totalDiscount} = getPriceDetails(cart);
  return (
    <aside className="item-price-card">
      <div className="price-card-header py-4 bold">Order Details</div>
      <div className="order-body">
        <div className="order-breakup py-4">
          <div className="order-item">
            <span>Bag Total</span>
            <span>Rs. {totalPrice}</span>
          </div>
          <div className="order-item">
            <span>Discount</span>
            <span>Rs -{totalDiscount}</span>
          </div>
          <div className="order-item">
            <span>Delivery</span>
            <span>FREE</span>
          </div>
        </div>
        <div className="order-amount py-2 d-flex justify-between bold">
          <span>Total Amount</span>
          <span>Rs {priceAfterDiscount}</span>
        </div>
      </div>
      <button className="bttn bttn-primary bttn-order">place order</button>
    </aside>
  )
}

export {OrderDetail};