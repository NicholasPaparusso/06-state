import DatePurchase from "./DatePurchase";
import React, { useState } from "react";

export default function Product(props) {
    
    let amount = props.amount.toLocaleString('en-US', {style : "currency" , currency : 'USD'});

    const [title, setTitle ] = useState(props.title)

    const changeTitle = () => {
        setTitle("Title updated")
    }
    return (
        <div>
            <article className="product">
                <div>
                    <h2>{title}</h2>
                    <button className="change-title" onClick={changeTitle}>
                        Cambia titolo
                    </button>
                    <div className="price">{amount}</div>    
                </div>   
                <DatePurchase date={props.date} />
            </article>
        </div>
    );
}