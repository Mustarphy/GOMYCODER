import React from "react";

export default function Greeting() {
    let isLoggedIn = false;
    if (isLoggedIn === false) {
        return <h1>Pleas log in</h1>
    }

    return(
        <div>
            <h1>Welcome Back!</h1>
        </div>
    );
}