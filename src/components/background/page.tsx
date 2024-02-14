import Image from "next/image";

const Background = () => {
  return (
    <main>
      <Image
        className="absolute lg:block hidden opacity-30"
        src="/fundo3.svg"
        alt="Fundo2"
        width={500}
        height={0}
        priority
      />
      <Image
        className="absolute lg:block hidden opacity-30"
        src="/fundo2.svg"
        alt="Fundo2"
        layout="fill"
        priority
      />

      <Image
        className="absolute lg:hidden opacity-30 top-0"
        src="/fundo-topo-mobile.svg"
        alt="Fundo2"
        width={500}
        height={0}
        priority
      />
      <Image
        className="absolute lg:hidden opacity-30 bottom-0"
        src="/fundo-rodape-mobile.svg"
        alt="Fundo2"
        width={500}
        height={0}
        priority
      />
    </main>
  );
};

export default Background;
