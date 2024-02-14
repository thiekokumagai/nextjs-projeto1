import Footer from "@/components/footer/footer";
import Image from "next/image";
import Header from "@/components/header/header";
import Background from "@/components/background/page";
import Link from "next/link";
export default function Home() {
  return (
    <main className="relative">
      <Background />
      <div className="min-h-screen flex">
        <div className="mx-auto my-auto">
          <div className="flex justify-center">
            <div className="flex lg:p-10 p-0">
              <div className="w-1/2 lg:grid hidden lg:border-r">
                <Header />

                <div className="text-center self-end  ">
                  <Footer />
                </div>
              </div>

              <div className="lg:w-1/2 w-full gap-12 flex flex-col p-10">
                <div className="lg:hidden px-16 mb-8">
                  <Header />
                </div>
                <div className="flex gap-5">
                  <p>
                    <Image
                      src="/calendar.svg"
                      alt="Calendar"
                      width={80}
                      height={90}
                      priority
                    />
                  </p>
                  <div className="flex flex-col w-full">
                    <h1 className="text-white lg:text-[27px]  md:text-[25px] text-[21px] font-black font-black-caps uppercase lg:leading-8 leading-7">
                      <span className="lg:block hidden">
                        Cabine de
                        <br /> SERVIÇOS DIGITAIS
                      </span>
                      <span className="lg:hidden">
                        Cabine de SERVIÇOS DIGITAIS
                      </span>
                    </h1>

                    <h5 className="lg:mt-2 mt-0 text-white font-book lg:text-[14px] text-[12px]">
                      Uma plataforma tecnológica a seu serviço.
                    </h5>
                  </div>
                </div>

                <div className="lg:px-14 px-8 py-24 mt-[52px] flex flex-col rounded-md relative bg-black/15 ">
                  <p className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Image
                      src="/user.svg"
                      alt="User"
                      width={75}
                      height={75}
                      priority
                    />
                  </p>
                  <Link
                    href="/cadastro"
                    className="text-white font-medium text-center focus:ring-4 bg-principal-claro  rounded-[5px] lg:text-[25px] text-[20px] px-5 py-2  focus:outline-none"
                  >
                    Cadastro
                  </Link>

                  <Link
                    href="/login"
                    className="text-white text-center focus:ring-4  mt-4 bg-principal-escuro
                  font-medium rounded-[5px] lg:text-[25px] text-[20px] px-5 py-2  focus:outline-none"
                  >
                    Login
                  </Link>
                </div>
                <div className="lg:hidden text-center text-white text-sm font-normal font-book w-full">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
