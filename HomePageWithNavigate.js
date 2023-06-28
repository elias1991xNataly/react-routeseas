import { Navigate } from "react-router-dom";
import { useState } from "react";

const imgURL = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/home.gif";
const HomePageWithNavigate = () => {

    const [isLoggedIn, setIsLoggedIn] = useState();
    if (!isLoggedIn) {
        return <Navigate to="/error" />
    }
    return (
        <div>
            <h1>Home with Navigate</h1>
            <img src={imgURL} alt="home" className="page-img" />

        </div>
    )
}

export default HomePageWithNavigate;

