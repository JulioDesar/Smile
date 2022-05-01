import React from "react";
import "./style.css";

export default function NavbarAdmin(props) {
    return (
        <nav className="NavbarAdmin-container">
            <text>{props.name}</text>
            <ul>
                <li>User</li>
            </ul>
        </nav>
    );
}
