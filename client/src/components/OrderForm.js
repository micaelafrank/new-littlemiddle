import React, { useState } from "react";
// import Payment from "./Payment";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";


function OrderForm({ friDate }) {
    const [orderDate, setOrderDate] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    // const [address1, setAddress1] = useState("");
    // const [address2, setAddress2] = useState("");
    // const [city, setCity] = useState("");
    // const [zipCode, setZipCode] = useState("");
    const [phone, setPhone] = useState("");
    // const [orderQuantity, setOrderQuantity] = useState("");
    const [donation, setDonation] = useState("");
    const [plain, setPlain] = useState("");
    const [chocChip, setChocChip] = useState("");
    const navigate = useNavigate();

    // const [showPayment, setShowPayment] = useState(false);
    // const [showCheckout, setShowCheckout] = useState(false)
    // const curr = new Date();
    // const today = `${curr.getMonth() + 1}/${curr.getDate()}/${curr.getFullYear()}`;
    // console.log("today's date: ", today);

    // const firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
    // const fridayDate = new Date(curr.setDate(curr.getDate() - curr.getDay() + 5));
    // const friDate = `${fridayDate.getMonth() + 1}/${fridayDate.getDate()}/${fridayDate.getFullYear()}`;

    // console.log("testing: ", friDate);
    // console.log("first day: ", firstday);
    // console.log("last day: ", fridayDate);
    const newDonation = parseFloat(donation).toFixed(2);
    console.log(newDonation);

    // function togglePayment() {
    //     setShowCheckout(showCheckout => (!showCheckout));
    // }

    // function toggleStripe(){
    //     setShowPayment(showPayment => !showPayment);
    // }

    function handleSubmit(e) {
        e.preventDefault();
        setOrderDate(friDate);
        console.log(orderDate)
        fetch("/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "phone": phone, 
                "plain_challah_count": plain,
                "choc_challah_count": chocChip,
                "donation": donation
            }),
        })
        .then(res => res.json())
        .then(data => console.log(data))
        navigate("/confirmation")
    }
    //         .then(data => console.log(data));
    //     toggleOrderForm();
    // }

    return (
        <>
            <form 
            onSubmit={handleSubmit} 
            className="form-spacing">
                <div className="centerContent">
                    <div className="form-heading form-date">
                        {/* <p style={{ fontFamily: "monospace" }}>insert braid detail image here</p> */}
                        <h1 className="pageTitle">Order Form</h1>
                        <p className="form-subtitle">For pickup on {friDate}</p>
                    </div>
                    {/* <p className="centerText uppercaseText width70 paddingB30">Order close on Thursdays at 5:00 PM PT.</p> */}
                    <div className="form-couplet">
                        <label className="form-label">First Name:</label>
                        <input type="text"
                            placeholder="First Name" className="orderFormInput"
                            name="firstName"
                            require="true"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="form-couplet">
                        <label className="form-label">Last Name:</label>
                        <input type="text" require="true" className="orderFormInput"
                            placeholder="Last Name"
                            name="lastName"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    {/* <div className="form-couplet">
                        <label className="form-label">Street Address:</label>
                        <input type="text" require="true" placeholder="Street Address"
                        name="address1"
                        id="address1"
                        value={address1}
                        onChange={(e) => setAddress1(e.target.value)}
                        />
                    </div>
                    <div className="form-couplet">
                        <label className="form-label">Floor/Suite/Apartment Number:</label>
                        <input type="text" 
                        placeholder="Address 2"
                        name="address2"
                        id="address2"
                        value={address2}
                        onChange={(e) => setAddress2(e.target.value)}
                        />
                    </div>
                    <div className="form-couplet">
                        <label className="form-label">City:</label>
                        <input type="text" placeholder="City"
                        require="true"
                        name="city"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div className="form-couplet">
                        <label className="form-label">Zip Code:</label>
                        <input type="number" placeholder="Zip Code"
                        require="true" 
                        name="zipCode"
                        id="zipCode"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        />
                    </div> */}
                    <div className="form-couplet">
                        <label className="form-label">Email:</label>
                        <input type="email" placeholder="Email" className="orderFormInput"
                            require="true"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-couplet">
                        <label className="form-label">Phone Number:</label>
                        <input type="tel" placeholder="Phone Number" className="orderFormInput"
                            name="phone"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-couplet">
                        <label className="form-label">Number of Olive Oil Rosemary Challahs:</label>
                        <input type="number" require="true" className="orderFormInput"
                            name="plain" style={{ paddingRight: "0" }}
                            id="plain" max={6}
                            placeholder="0"
                            value={plain}
                            onChange={(e) => setPlain(e.target.value)}
                        />
                    </div>
                    <div className="form-couplet">
                        <label className="form-label">Number of Chocolate Chip Challahs:</label>
                        <input type="number" require="true" placeholder="0" className="orderFormInput"
                            name="chocChip" style={{ paddingRight: "0" }}
                            id="chocChip" max={6}
                            value={chocChip}
                            onChange={(e) => setChocChip(e.target.value)}
                        />
                    </div>
                    <div className="form-couplet">
                        <label className="form-label">Donation pledge:</label>
                        <input
                            type="number" require="true" placeholder="$0" className="orderFormInput"
                            name="donation"
                            id="donation"
                            value={donation}
                            onChange={(e) => setDonation(e.target.value)}
                        />
                    </div>
                </div>
                    {/* <button onClick={togglePayment}>Submit Payment of ${newDonation}</button> */}
                    {/* {showCheckout ? <StripeContainer total={newDonation} /> : null} */}
                <div className="centerText paddingT20">
                    <button className="formSubmitBtn" type="submit">Submit Order</button>
                </div>
            </form>
            {/* {showPayment ? <Payment donation={donation}/> : null}  */}
        </>
    )
}

export default OrderForm;