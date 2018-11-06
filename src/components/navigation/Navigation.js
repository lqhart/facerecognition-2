import React from "react";

const Signin = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flext-end" }}>
        <p
          onClick={() => onRouteChange("signout")}
          className="white f3 link dim  underline pa3 pointer"
        >
          Sign out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signin")}
          className="white f3 link dim  underline pa3 pointer"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="white f3 link dim  underline pa3 pointer"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Signin;
