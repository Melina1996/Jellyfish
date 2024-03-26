import React from "react";

export default function Intro() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-[80%] flex justify-center items-center gap-10 tracking-wider leading-8">
        <div className="w-[50%] flex flex-col justify-center items-start gap-4">
          <h1 className="text-[40px] font-semibold">
            TheJelly<span className="text-[#C058C6ff]">.</span>
          </h1>

          <div>
            <p>
              Step right up, jelly aficionados and aquatic enthusiasts! Welcome
              to{" "}
              <span className="font-semibold text-[#C058C6ff]">TheJelly.</span>,
              where we are flipping the script on pet ownership and diving
              headfirst into the wibbly-wobbly world of jellyfish!
            </p>
          </div>
        </div>
        <div className="w-[50%] flex justify-start items-center">
          <p>
            Tired of walking the dog or cleaning up after the cat? Say goodbye
            to fur-covered furniture and hello to the mesmerizing elegance of
            our gelatinous pals from the deep blue. Whether you are a seasoned
            aquarist or just dipping your toes into the underwater realm, we have
            got something for everyone. With worldwide shipping and expert care
            advice, TheJelly is your one-stop-shop for all things gelatinous.
            Let us make waves together and turn your tank into a jelly-filled
            masterpiece. Adventure awaits beneath the surface!
          </p>
        </div>
      </div>
    </div>
  );
}
