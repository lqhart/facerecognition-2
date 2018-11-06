import React from "react";
import "./Signup.css";

const Register = ({ onRouteChange }) => {
  return (
    <article className="br4 ba shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
      <main className="pa4 black-80">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0 white center">Register</legend>
            <p>I'll give you vaporwave</p>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 white" for="name">
                Name
              </label>
              <input
                className="border pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 white" for="email-address">
                Email
              </label>
              <input
                className="border pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6 white" for="password">
                Password
              </label>
              <input
                className="border b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="center">
            <input
              onClick={() => onRouteChange("home")}
              className="border white ph3 pv2 input-reset ba bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>
        </form>
      </main>
    </article>
  );
};

export default Register;
