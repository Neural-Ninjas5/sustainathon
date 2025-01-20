import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Footer from "../../Components/Footer/Footer"

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <>

            <div className="checkout">
                <div className="checkout__left">
                    <img
                        className="checkout__ad"
                        // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3p2IC6O0TG-PxO69ay-Zy_bmFhVl9a26LyYxy2opj&s"
                        alt=""
                    />

                    <div>
                        <h3>Hello, {user?.email}</h3>
                        <h2 className="checkout__title">Your shopping Basket</h2>

                        {basket?.map(item => (
                            <CheckoutProduct
                                id={item?.id}
                                title={item?.title}
                                image={item?.image}
                                price={item?.price}
                                rating={item?.rating}
                            />
                        ))}

                    </div>
                </div>

                <div className="checkout__right">
                    <Subtotal />
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default Checkout;