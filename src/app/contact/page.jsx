"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveForm } from "../lib/features/form/formSlice";

export default function Contact() {
  const [title, setTitle] = useState("Ms.");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [number, setNumber] = useState("");
  const [myEmail, setEmail] = useState("");
  const [myMessage, setMessage] = useState("");

  const [myContact, setMyContact] = useState({
    title: "",
    name: "",
    lastname: "",
    number: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setMyContact((myContact) => ({ ...myContact, title: title,
    name: name, lastname: lastname, number: number, email: myEmail, message: myMessage}
    ))
  }, [title,name,lastname,number,myEmail,myMessage]);

  const dispatch = useDispatch();

  const[warning,setWarning]=useState("")

  function submit(){
    const hasEmptyString = Object.values(myContact).some(value => value === "");
    if(hasEmptyString){
        setWarning("Please make sure to fill in all of the fields")
    } else {
        dispatch(saveForm(myContact))
    }

  }

  return (
    <main className="min-h-screen">
      <div className="bg-banner bg-cover h-[600px] w-[100%] flex justify-center items-center">
        <h1 className="text-[70px] text-white font-semibold tracking-widest">
          <span className="hover:text-[#C058C6ff]">REACH OUT</span> .
        </h1>
      </div>

      <div className="flex justify-center items-center p-10">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="w-[100%] flex justify-center items-center gap-2">
            <label>
              <span>TITLE:</span>
              <select
                className="rounded border-2 border-black"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              >
                <option value="Ms.">Ms.</option>
                <option value="Mr.">Mr.</option>
                <option value="None">None</option>
              </select>
            </label>
            <label className="flex flex-col w-[100%]">
              <span>NAME:</span>
              <input
                type="text"
                className="w-[100%] rounded border-2 border-black"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </label>
            <label className="flex flex-col w-[100%]">
              <span>LAST NAME:</span>
              <input
                required
                type="text"
                className="w-[100%] rounded border-2 border-black"
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
              />
            </label>
          </div>
          <div className="w-[100%] flex justify-center items-center gap-2">
            <label className="flex flex-col w-[100%]">
              <span>PHONE NUMBER:</span>
              <input
                type="tel"
                className="w-[100%] rounded border-2 border-black"
                onChange={(e) => setNumber(e.target.value)}
                value={number}
              />
            </label>
            <label className="flex flex-col w-[100%]">
              <span>EMAIL:</span>
              <input
                type="email"
                className="w-[100%] rounded border-2 border-black"
                onChange={(e) => setEmail(e.target.value)}
                value={myEmail}
              />
            </label>
          </div>

          <label className="flex flex-col w-[100%]">
            <span>MESSAGE</span>
            <textarea
              type="type"
              className="w-[100%] rounded border-2 border-black"
              onChange={(e) => e.target.value.length != 0 ? setMessage(e.target.value) : ""}
              value={myMessage}
            />
          </label>
          <button className="text-[15px] hover:bg-white hover:text-[#C058C6ff] text-black border-2 border-black py-2 px-8 tracking-wider hover:font-semibold" onClick={()=>submit()}>
            SUBMIT
          </button>
          <p>{warning}</p>
        </div>
      </div>
    </main>
  );
}
