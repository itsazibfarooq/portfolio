import Image from "next/image";
import Link from "next/link";
import React from "react";

function WebinarItem(item: any) {
  return (
    <div
      className="relative flex items-center justify-center
     shaodw-xl shadow-gray-400 rounded-xl p-4 group
    hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
    >
      <div style={{ width: "400px", height: "400px" }}>
        <Image
          className="rounded-xl group-hover:opacity-10"
          layout="fill"
          objectFit="cover"
          src={item.image}
          alt="/"
        />
      </div>
      <div className="hidden group-hover:block absolute ">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {item.title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{...item.tools}</p>
        <Link href={item.url} scroll={true}>
          <p className="text-center py-3 roundede-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            Details{" >"}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default WebinarItem;
