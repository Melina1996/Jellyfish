import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="bg-banner bg-cover h-[600px] w-[100%] absolute top-0 flex justify-center items-center">
        <h1 className="text-[70px] text-white font-semibold tracking-widest">
          <span className="hover:text-[#C058C6ff]">DIVE IN</span> .
        </h1>
      </div>
    </main>
  );
}
