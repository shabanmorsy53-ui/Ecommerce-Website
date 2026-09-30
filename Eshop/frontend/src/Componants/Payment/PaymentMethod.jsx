import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAddress } from "../../redux/actions/addresseAction";
import { getCartItem } from "../../redux/actions/cartAction";
import { createCashOrder } from "../../redux/actions/orderAction";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PaymentMethod = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAddress());
  }, []);

  const allAddress = useSelector((state) => state.alladdress.alladdress);
  
  const [shippingAddress, setshippingAddress] = useState({});
  const [addId, setAddId] = useState('0');

  const onChangeAddress = (e) => {
    const selectedId = e.target.value;

    setAddId(selectedId)

    const selectedAddress = allAddress?.data?.find(
      (item) => item._id === selectedId,
    );
    setshippingAddress(selectedAddress);
  };



  // ======================= get CArt ID =======

  const [loading, setLoading] = useState(true);
  const [cartId, setCartId] = useState();
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getCartItem());
      setLoading(false);
    };

    get();
  }, []);

  const cartRes = useSelector((state) => state.allCart.cartitem);



  useEffect(() => {
    if (loading === false) {
      if (cartRes.status === "success") {
        setCartId(cartRes.data._id);
        if(cartRes.data.totalPriceAfterDiscount){
            setPrice(cartRes?.data?.totalPriceAfterDiscount)
        }else{
            setPrice(cartRes?.data?.totalPrice)
        }
      }
    }
  }, [loading]);

  //  ===================== create cash order ======

  const navigate = useNavigate()

  const [cashLoading , setCashLoading] = useState(true)

  const handleCashOrder = async () => {

    if(addId === '0'){
        notify('من فضلك اختر عنوان للدفع')
        return
    }

    setCashLoading(true)
    await dispatch(
      createCashOrder(cartId, {
        shippingAddress: {
          details:  shippingAddress.details,
          city: shippingAddress.city,
          postalCode: shippingAddress.postalCode,
          phone: shippingAddress.phone,
        },
      }),
    );
    setCashLoading(false)
  };

  const orderRes = useSelector((state) => state.allOrder.cashorder);

  useEffect(()=>{
    if(loading === false){
        if(orderRes?.status === 'success'){
            notify('تم الطلب بنجاح')
            setTimeout(() => {
                navigate('/user/allorder')
            }, 2000);
        }else{
              notify('يوجد مشكله')
        }
    }
  },[cashLoading])

  const notify = (msg) => toast(msg);


  return (
    <div>
      <h2 className="slider-title text-end ">اختر طريقة الدفع:</h2>

      <div className="payment1 p-3 my-3">
        <div className="mb-4">
          <input type="radio" id="card" name="pay" />
          <label htmlFor="card" className="mx-2">
            الدفع عن طريقة البطاقه الائتمانيه
          </label>
        </div>

        <div>
          <input type="radio" id="arr" name="pay" />
          <label htmlFor="arr" className="mx-2">
            الدفع عند الاستلام
          </label>
        </div>

        <select
          name=""
          className="select mt-3 px-2"
          id=""
          onChange={(e) => onChangeAddress(e)}
        >
          <option value="0">اختر عنوان</option>
          {allAddress?.data?.length >= 1 ? (
            allAddress.data?.map((address, index) => (
              <option value={address._id} key={index}>
                {address.alias}
              </option>
            ))
          ) : (
            <option value="0">لايوجد عناوين</option>
          )}
        </select>
      </div>

      <div className="d-flex gap-2 w-100 justify-content-end">
        <div className="border border-2 py-2 px-3 rounded-2">{price} جنيه</div>
        <button className="btn btn-dark" onClick={handleCashOrder}>
          اتمام الشراء
        </button>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default PaymentMethod;
