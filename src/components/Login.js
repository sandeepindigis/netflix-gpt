import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import checkValidate from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignedForm, setIsSignedForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleToggle = () => {
    setIsSignedForm(!isSignedForm);
  };

  const handleButtonClick = () => {
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMsg(message);

    if (message) return;

    if (!isSignedForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + ":" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + ":" + errorMessage);
          console.log(errorCode + ":" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_small.jpg"
          alt="bgImage"
        />
      </div>

      <div className="w-full h-full absolute bg-black  opacity-40"></div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 absolute p-10 bg-black my-20 mx-auto right-0 left-0 flex flex-col rounded-lg shadow-lg gap-4 opacity-75"
      >
        <h1 className="text-white items-start font-bold text-3xl py-5 px-4">
          {isSignedForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="p-3 w-11/12 rounded border border-gray-500 bg-black text-white font-semibold self-center"
        />

        {!isSignedForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-3 w-11/12 rounded border border-gray-500 bg-black text-white font-semibold self-center"
          />
        )}

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 w-11/12 rounded border border-gray-500 bg-black text-white font-semibold self-center"
        />

        <p className="text-red-700 font-semibold mx-4">{errorMsg}</p>
        <button
          className="p-2 w-11/12 bg-red-600 text-white rounded hover:bg-red-700 transition font-bold self-center"
          onClick={handleButtonClick}
        >
          {isSignedForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignedForm && (
          <div>
            <h1 className="text-white items-start text-lg flex justify-center">
              OR
            </h1>

            <button className="p-2 w-11/12 bg-slate-700 text-white rounded hover:bg-slate-500 transition font-bold mx-4 my-4">
              Use a sign-in code
            </button>

            <Link to="/" className="flex justify-center">
              <h1 className="text-white text-base underline">
                Forgot password
              </h1>
            </Link>
          </div>
        )}

        <label className="text-white items-start text-base px-2">
          <input type="checkbox" className="h-4 w-4 mx-2" />
          Remember Me
        </label>

        <div className="flex px-4">
          <h1 className="text-gray-300 items-start text-base self-center">
            New to Netflix?
          </h1>
          <Link to="/">
            <h1
              className="text-white items-start text-base font-semibold self-center"
              onClick={handleToggle}
            >
              {isSignedForm ? "Sign up now." : "Already Registered Sing In Now"}
            </h1>
          </Link>
        </div>

        <h1 className="text-gray-500 items-start text-sm self-center font-semibold px-4">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </h1>

        <h1 className="text-blue-500 items-start text-sm font-semibold px-4 underline">
          Learn more.
        </h1>
      </form>
    </div>
  );
};

export default Login;
