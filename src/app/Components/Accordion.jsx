"use client";
import React from "react";
import { useState } from "react";

export default function Accordion() {
  //um festzustellen, welcher Reiter geöffnet wurde
  const [selected, setSelected] = useState(null);

  //toggle, um "answer" nur anzuzeigen, wenn entsprechende "question" geklickt wurde
  const toggle = (id) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };
  return (
    <div className="flex w-screen justify-center items-center py-12">
      <div className="w-[80%] flex justify-center items-start gap-10 tracking-wider">
        <div className="w-[50%] flex justify-start items-start">
          <h1 className="text-[40px] font-semibold">FAQ</h1>
        </div>
        <div className="w-[50%]">
          {info.map((element, id) => {
            return (
              <div className="mb-[5px]" key={id}>
                <div
                  className="py-[20px] px-[20px] flex justify-between items-center cursor-pointer border-b-2 border-b-black"
                  onClick={() => toggle(id)}
                >
                  <h2 className={`font-semibold ${selected == id ? "text-[#C058C6ff]" : "text-black"}`}>
                    {element.question.toUpperCase()}
                  </h2>
                  <span className="text-black font-semibold">
                    {selected === id ? "-" : "+"}
                  </span>
                </div>
                <div
                  className={`${
                    selected === id
                      ? "h-auto transition-all"
                      : "max-h-0 overflow-hidden transition-all"
                  }`}
                >
                  <h2 className="leading-6 pl-6 pt-6">{element.answer}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

//data for the accordion
const info = [
  {
    question: "Where are you operating?",
    answer:
      "We are operating around the globe, providing you with the best offers.",
  },

  {
    question: "Which fishing method do you apply?",
    answer:
      "To be the least harmful possible to both, the environment and the jellyfish, we concentrate on the EcoFa-method.",
  },

  {
    question: "Do you offer any services post-buy?",
    answer:
      "Of course! We offer support in taking care of the jellyfish from day one after your purchase.",
  },

  {
    question: "Do I have to fulfill any criteria to buy a jellyfish?",
    answer:
      "Yes! Once shown interest in a purchase, we will provide you with a questionnaire to make sure the jellyfish enjoys the best living conditions possible.",
  },
];
