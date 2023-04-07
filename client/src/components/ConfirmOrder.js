import React from "react";


function ConfirmOrder({ friDate }){

    return(
        <div>
            <h1>Congratulations! Your order is confirmed.</h1>
            <p>You should receive a confirmation email to the email you provided on the order form.</p>
            <p>Don't forget to pick up your order on {friDate} between noon and 4:00 PM!</p>
        </div>
    )
}

export default ConfirmOrder;