import React from "react";
import Navbar from "@/components/navbar";
import Script from "next/script";
import Cllm_bg from "./cllm_bg";

export default function Home() {
  return (
    <>
      <Navbar />
      <Cllm_bg />
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-0VHND6XRJV"
      />
      <Script id="project-1-google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0VHND6XRJV');
        `}
      </Script>
    </>
  );
}
