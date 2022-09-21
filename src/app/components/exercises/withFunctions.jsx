import React from "react";
import CardWrapper from "../common/Card";

const withFunctions = (SimpleComponent) => (props) => {
    const isAuth = localStorage.getItem("auth");
    const onLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
    };

    return (
        <CardWrapper>
            <SimpleComponent
                {...props}
                isAuth={isAuth}
                onLogOut={onLogOut}
                onLogin={onLogin}
            />
        </CardWrapper>
    );
};

export default withFunctions;
