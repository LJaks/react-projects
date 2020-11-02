import React from "react";
import DateFunction from "./DateFunction";

const Header = (props) => {
    return (
        <header>
            <h3>{props.listLength} birthdays this month</h3>
            <h4>{DateFunction(Date()).day}th {DateFunction(Date()).month}</h4>
        </header>
    )
}

export default Header;