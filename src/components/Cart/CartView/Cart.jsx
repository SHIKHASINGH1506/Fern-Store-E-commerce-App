import './cart.css';
import { useProduct } from '../../../contexts/index';
import { CartItem } from "../CartItemView/CartItem";
import { OrderDetail } from "../OrderDetailsView/OrderDetail";

const Cart = () => {
  const {state: {cart}} = useProduct();

  return (
    <div className="general-wrapper">
      <div className="cart-wrapper">
        <h5 className="cart-header py-4">My Cart {cart.length}</h5>
        {cart.length===0 && <h3 className="text-center">Your cart is empty!</h3>}
        <div className="cart-body">
          <CartItem />
          {cart.length>0 && <OrderDetail />}
        </div>
      </div>
    </div>
  );
}

export { Cart }