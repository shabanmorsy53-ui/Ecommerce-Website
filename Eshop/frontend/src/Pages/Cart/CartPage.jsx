import React, { useEffect, useState } from "react";
import CartItem from "../../Componants/Cart/CartItem";
import CheckOut from "../../Componants/Cart/CheckOut";
import { useDispatch, useSelector } from "react-redux";
import { getCartItem } from "../../redux/actions/cartAction";

const CartPage = () => {
  const [loading, setLoading] = useState(true);
  const [cartItem, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState('');
  

  const dispatch = useDispatch();

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getCartItem());
      setLoading(false);
    };

    get();
  }, []);

  const cartRes = useSelector((state) => state.allCart.cartitem);

  console.log(cartRes);

  useEffect(() => {
    if (loading === false) {
      if (cartRes.status === "success") {
        setCartItem(cartRes.data.cartItems);
        setTotalPrice(cartRes.data.totalPrice)
      } else {
        setCartItem([]);
      }
    }
  }, [loading]);

  return (
    <div className="container my-3 " style={{ minHeight: "450px" }}>
      <div className="fw-bold bg-light p-2">عربة التسوق</div>

      <div className="row  my-3 ">
        <div className="col-sm-12 me-auto p-2 col-md-7">
          {cartItem.length >= 1 ? (
            cartItem.map((item, index) => <CartItem item={item} key={index} />)
          ) : (
            <div
              style={{
                width: "100%",
                height: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f4eeee",
                marginBlock: "10px",
              }}
            >
              <h3>لايوجد منتجات</h3>
            </div>
          )}

        </div>

        <div className="col-sm-12 me-auto col-md-4  p-2 mx-4">
          <CheckOut totalPrice={totalPrice}/>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
