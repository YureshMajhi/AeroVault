import Image from "next/image";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen justify-center items-center bg-gradient-to-r from-brand-100 to-brand">
      <div className="w-xl min-h-[540px] flex bg-white border-collapse shadow-drop-2 rounded-3xl overflow-hidden">
        <section className="hidden w-1/2 p-16 bg-[#d2dcfc] md:flex flex-col xs:hidden">
          <div className="h-1/3">
            <Image
              src={"/assets/icons/aerovault-transparent.png"}
              alt="logo"
              width={254}
              height={82}
            />

            <h1 className="text-2xl text-center">Smart. Secure. Simple.</h1>
          </div>
          <div className="h-2/3">
            <Image
              src={"/assets/images/aerovault logo.png"}
              alt="files"
              width={342}
              height={342}
            />
          </div>
        </section>

        <section className="md:w-1/2 p-10 lg:p-16 bg-[]">
          <div className="md:hidden">
            <Image
              src={"/assets/icons/aerovault-transparent.png"}
              alt="logo"
              width={224}
              height={82}
              className="h-auto w-[200px] md:w-[250px]"
            />
          </div>
          {children}
        </section>
      </div>
    </div>
  );
};

export default Layout;
