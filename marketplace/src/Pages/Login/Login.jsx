import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import {Heading} from "../../Components/Heading";
import { InputBox } from "../../Components/InputBox";
import { SubHeading } from "../../Components/SubHeading";
import { Button } from "../../Components/Button";
import { BottomWarning } from "../../Components/BottomWarning";
import axios from "axios"

function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className=" flex flex-col justify-center ">
        <div className=" bg-white rounded-lg w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            label={"First Name"}
            placeholder={"nitesh"}
          />
          <InputBox
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            label={"Last Name"}
            placeholder={"sengar"}
          />
          <InputBox
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            label={"Email"}
            placeholder={"nik@gmail.com"}
          />
          <InputBox
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label={"Password"}
            placeholder={"123456"}
          />
          <Link to="/">
          <Button 
            label={"Sign up"}
            // when connect to backend
            // onClick={async () => {
            //   try {
            //     const response = await axios.post(
            //       "http://localhost:3000/api/v1/user/signup",
            //       {
            //         username,
            //         firstName,
            //         lastName,
            //         password,
            //       }
            //     );
            //     console.log(response);
            //     //pass key and value
            //     // name the key whatever you want here i named it "token"
            //     localStorage.setItem("token", response.data.token);
            //     // localStorage.removeItem("token");
            //   } catch (e) {
            //     console.error("Signup failed:", e);
            //   }
            // }}
          />
          </Link>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Login;
