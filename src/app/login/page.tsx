import Background from "@/components/background/page";
import Footer from "@/components/footer/footer";
import FormLogin from "@/components/formLogin/page";
import Header from "@/components/header/header";
import Image from "next/image";
import Link from "next/link";
export default function login() {
  return (
    <main className="min-h-screen">
      <Background />
      <div className="mx-auto my-auto">
        <div className="flex justify-center">
          <div className="gap-12 lg:w-1/2 w-full flex flex-col p-10">
            <div className="px-16">
              <Header />
            </div>
            <div className="w-full relative text-center ">
              <Link className="absolute left-3 text-center" href="/">
                <Image
                  src="/back.svg"
                  alt="Back"
                  width={33}
                  height={33}
                  priority
                />
                <span className="text-white text-[12.86px] font-normal font-['Intro Book']">
                  Voltar
                </span>
              </Link>
              <h1 className="text-white text-4xl font-bold font-['Intro Bold']">
                Login
              </h1>
            </div>
            <div className="lg:px-14 px-8 py-12 flex flex-col rounded-md relative bg-black/15 justify-center items-center">
              <FormLogin />
            </div>
            <div className="text-center text-white text-sm font-normal font-book w-full">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
