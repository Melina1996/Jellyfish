import React from "react";
import { promises as fs } from "fs";
import Image from "next/image";
import Link from "next/link";

export default async function MyProducts() {
  const file = await fs.readFile(process.cwd() + "/json/data.json", "utf8");
  const data = JSON.parse(file);
  return (
    <div className="flex flex-wrap justify-center items-center gap-6">
      {data.map((element, id) => {
        return (
          <div className="w-[300px] h-[280px]">
            <div
              className="w-[100%] h-[80%] image-container rounded-lg"
              key={id}
            >
              <Image
                src={`${element.image_path}`}
                width={300}
                height={200}
                className="w-[100%] h-[100%] object-cover my-image"
                alt=""
              />
            </div>

            <div className="pt-2 tracking-wider h-[20%]">
              <Link href={`/products/${id}`}>
                <h1 className="font-semibold">{element.name.toUpperCase()}</h1>
              </Link>
              <h1>{element.price}€</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}
