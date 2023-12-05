import Image from "next/image";
import Link from "next/link";
import React from "react";

function ExpItem(item: any) {
  return (
    <div className="relative flex items-center justify-center h-auto shaodw-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#2E8B57] to-[#20B2AA]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={item.image}
        alt="/"
      />
      <div className="hidden group-hover:block absolute ">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {item.title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{item.timeline}</p>
      </div>
    </div>
  );
}

export default ExpItem;
