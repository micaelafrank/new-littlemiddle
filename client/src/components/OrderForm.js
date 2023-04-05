import React, { useState } from "react";
// import Payment from "./Payment";
import NavBar from "./NavBar";

function OrderForm() {
    const [orderDate, setOrderDate] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [phone, setPhone] = useState("");
    // const [orderQuantity, setOrderQuantity] = useState("");
    const [donation, setDonation] = useState("");
    const [plainFlavor, setPlainFlavor] = useState("");
    const [chocChipFlavor, setChocChipFlavor] = useState("");

    // const [showPayment, setShowPayment] = useState(false);
    // const [showCheckout, setShowCheckout] = useState(false)
    const curr = new Date();
    const today = `${curr.getMonth() + 1}/${curr.getDate()}/${curr.getFullYear()}`;
    console.log("today's date: ", today);

    const firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
    const fridayDate = new Date(curr.setDate(curr.getDate() - curr.getDay() + 5));
    const friDate = `${fridayDate.getMonth() + 1}/${fridayDate.getDate()}/${fridayDate.getFullYear()}`;

    console.log("testing: ", friDate);
    console.log("first day: ", firstday);
    console.log("last day: ", fridayDate);
    const newDonation = parseFloat(donation).toFixed(2);
    console.log(newDonation);

    // function togglePayment() {
    //     setShowCheckout(showCheckout => (!showCheckout));
    // }

    // function toggleStripe(){
    //     setShowPayment(showPayment => !showPayment);
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     setOrderDate(friDate);
    //     fetch("/orders", {
    //         method: "POST",
    //         body: JSON.stringify({ orderDate, firstName, lastName, email, address1, address2, city, zipCode, phone, plainFlavor, chocChipFlavor, donation }),
    //     }).then(res => res.json())
    //         .then(data => console.log(data));
    //     toggleOrderForm();
    // }

    return (
        <>
            <NavBar />
            <form 
            // onSubmit={handleSubmit} 
            className="form-spacing">
                <div className="centerContent">
                    <div className="form-heading form-date">
                        <p style={{ fontFamily: "monospace" }}>insert braid detail image here</p>
                        <h1 className="pageTitle">Order Form</h1>
                        <p className="form-subtitle boldText">{friDate}</p>
                    </div>
                    <p className="centerText uppercaseText width70 paddingB30">Order forms open every Sunday at 12:00 PM PT and close on Thursdays at 5:00 PM PT.<br>
                    </br><span><i>*Maximum of 4 challahs total*</i></span></p>
                    <div className="form-couplet">
                        <label className="form-label">First Name:</label>
                        <input type="text"
                            placeholder="First Name"
                            name="firstName"
                            require="true"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="form-couplet">
                        <label className="form-label">Last Name:</label>
                        <input type="text" require="true"
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
                        <input type="email" placeholder="Email"
                            require="true"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-couplet">
                        <label className="form-label">Phone Number:</label>
                        <input type="tel" placeholder="Phone Number"
                            name="phone"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-couplet">
                        <label className="form-label">Number of Olive Oil Rosemary Challahs:</label>
                        <input type="number" require="true"
                            name="plainFlavor" style={{ paddingRight: "0" }}
                            id="plainFlavor"
                            placeholder="0"
                            value={plainFlavor}
                            onChange={(e) => setPlainFlavor(e.target.value)}
                        />
                    </div>
                    <div className="form-couplet">
                        <label className="form-label">Number of Chocolate Chip Challahs:</label>
                        <input type="number" require="true" placeholder="0"
                            name="chocChipFlavor" style={{ paddingRight: "0" }}
                            id="chocChipFlavor"
                            value={chocChipFlavor}
                            onChange={(e) => setChocChipFlavor(e.target.value)}
                        />
                    </div>
                    <div className="form-couplet">
                        <label className="form-label">Donation pledge:</label>
                        <input
                            type="number" require="true" placeholder="$"
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