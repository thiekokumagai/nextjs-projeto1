import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex justify-center lg:px-36 lg:mt-12 mt-0 px-0">
        <div>
          <Image src="/logo.svg" alt="Logo" width={472} height={141} priority />
        </div>
      </div>
    </header>
  );
};

export default Header;
