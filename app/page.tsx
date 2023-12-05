import Navbar from "../components/navbar";
import Main from "../components/main";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/Experience";
import Research from "@/components/research";
import Contact from "@/components/contact";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Research />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-0VHND6XRJV"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0VHND6XRJV');
        `}
      </Script>
    </div>
  );
}
