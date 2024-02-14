import Background from "@/components/background/page";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Link from "next/link";
import FormCadastro from "@/components/formCadastro/page";
import Image from "next/image";
export default function cadastro() {
  return (
    <main className="min-h-screen">
      <Background />
      <div className="mx-auto my-auto">
        <div className="flex justify-center">
          <div className="gap-12  lg:w-1/2 w-full flex flex-col p-10">
            <div className="px-16">
              <Header />
            </div>
            <div className="w-full relative text-center ">
              <Link
                className="absolute z-40 lg:left-8 -top-4 lg:top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
                href="/"
              >
                <Image
                  src="/back.svg"
                  alt="Back"
                  width={33}
                  height={33}
                  priority
                />
                <span className="text-white hidden lg:block text-[12.86px] font-normal font-['Intro Book']">
                  Voltar
                </span>
              </Link>
              <div className="w-full relative text-center ">
                <h1 className="text-white lg:text-4xl text-lg font-bold font-['Intro Bold']">
                  Cadastro de Novo Usuário
                </h1>
                <p className="text-white lg:text-md text-sm font-normal font-['Intro Book']">
                  Insira suas informações pessoais abaixo e clique me cadastrar.
                </p>
              </div>
            </div>

            <div className="lg:px-14 px-8 py-12 flex flex-col rounded-md relative bg-black/15 justify-center items-center">
              <FormCadastro />
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
