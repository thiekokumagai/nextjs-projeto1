"use client"; // This is a client component
import { TCreateUser } from "@/types/CreateUser";
import cadastroServices from "@/services/cadastroServices/cadastroServices";
import React, { FormEvent, useState, ChangeEvent } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import InputMask from "react-input-mask";
import ModalComponent from "@/components/modal/page";
const FormCadastro = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [nome, setNome] = useState("");
  const [sobreNome, setSobreNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [resenha, setReSenha] = useState("");
  const [imagem, setImagem] = useState<File | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data: TCreateUser = {
      nome,
      sobreNome,
      cpf,
      email,
      senha,
      imagem,
    };

    await payLoadCadastro(data);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      debugger;
      setImagem(file);
    }
  };

  async function payLoadCadastro(data: TCreateUser) {
    const parar = toast.loading("carregando");

    try {
      const res = await cadastroServices.createUser(data);
      if (res) {
        toast.success(res.message);
        toast.dismiss(parar);
        setNome("");
        setSobreNome("");
        setCpf("");
        setEmail("");
        setSenha("");
        setImagem(null);
      }
    } catch (error: any) {
      toast.error(error.response?.data?.email || "Erro ao cadastrar usuário.");
      toast.dismiss(parar);
    }
  }

  return (
    <main>
      <form
        className="w-full"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-3 gap-2">
          <div>
            <label
              htmlFor="nome"
              className="block text-white text-base font-normal mb-2"
            >
              Nome
            </label>
            <input
              id="nome"
              type="text"
              className="w-full shadow appearance-none border rounded-md lg:py-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Nome"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="sobrenome"
              className="block text-white text-base font-normal mb-2"
            >
              Sobrenome
            </label>
            <input
              id="sobrenome"
              type="text"
              className="w-full shadow appearance-none border rounded-md lg:py-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Sobrenome"
              required
              value={sobreNome}
              onChange={(e) => setSobreNome(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="cpf"
              className="block text-white text-base font-normal mb-2"
            >
              CPF
            </label>
            <InputMask
              className="w-full shadow appearance-none border rounded-md lg:py-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              maskChar=""
              mask="999.999.999-99"
              placeholder="Digite o seu CPF"
              id="cpf"
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-white text-base font-normal mb-2"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              className="w-full shadow appearance-none border rounded-md lg:py-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="email@inovvati.com.br"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="senha"
              className="block text-white text-base font-normal mb-2"
            >
              Senha
            </label>
            <input
              id="senha"
              type="password"
              className="w-full shadow appearance-none border rounded-md lg:py-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              value={senha}
              placeholder="*********"
              onChange={(e) => setSenha(e.target.value)}
            />

            {senha.length >= 6 &&
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+/.test(senha) ? (
              ""
            ) : (
              <>
                <p className="text-white text-md font-normal font-book">
                  Nível de Segurança
                </p>
                <p className="text-white text-xs font-normal text-justify font-book">
                  Sua senha deve conter pelo menos 6 caracteres, sendo pelo
                  menos uma letra maiúscula, uma minúscula e um número.
                </p>
              </>
            )}
          </div>
          <div>
            <label
              htmlFor="confirmar-senha"
              className="block text-white text-base font-normal mb-2"
            >
              Confirmar senha
            </label>
            <input
              id="confirmar-senha"
              type="password"
              placeholder="*********"
              onChange={(e) => setReSenha(e.target.value)}
              className="w-full shadow appearance-none border rounded-md lg:py-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            {resenha !== senha && (
              <p className="text-red-500 text-sm mt-1">
                As senhas não coincidem.
              </p>
            )}
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <svg
                className="w-8 h-8 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <div className="w-1/3 rounded-full h-2.5">
                <div className="bg-red-600 h-2.5 rounded-full"></div>
              </div>
              <div className="w-1/3 rounded-full h-2.5">
                <div
                  className={`border ${
                    senha.length >= 4 ||
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+/.test(senha)
                      ? "bg-yellow-400"
                      : "bg-gray-200"
                  } h-2.5 rounded-full`}
                ></div>
              </div>
              <div className="w-1/3 rounded-full h-2.5">
                <div
                  className={`border ${
                    senha.length >= 6 &&
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+/.test(senha)
                      ? "bg-green-600"
                      : "bg-gray-200"
                  } h-2.5 rounded-full`}
                ></div>
              </div>

              <svg
                className={`${
                  senha.length >= 6 &&
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+/.test(senha)
                    ? "text-white"
                    : "text-principal-claro"
                } w-8 h-8`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.5 11.5 11 13l4-3.5M12 20A16.4 16.4 0 0 1 5 6.7L12 4l7 2.7A16.7 16.7 0 0 1 12 20Z"
                />
              </svg>
            </div>
          </div>
          <div></div>
          <div className="lg:mt-12 mt-6 ">
            <label className="items-center cursor-pointer" onClick={openModal}>
              <div className="flex items-center lg:justify-left justify-center gap-2 lg:pt-2 pt-0 pb-6">
                <Image
                  src="/icone-upload.svg"
                  alt="icone-upload"
                  width={40}
                  height={40}
                  priority
                />
                <p className="text-white lg:text-md text-xs font-bold">
                  TIRAR FOTO
                </p>
              </div>
              {/* <input
              id="dropzone-file"
              type="file"
              className="hidden"
              required
              onChange={handleFileChange}
            /> */}
            </label>
          </div>

          <div className="mt-8 lg:mt-12 text-center lg:text-left">
            <button
              type="submit"
              className="w-3/4 lg:w-full px-5 py-2 text-[20px] lg:text-[25px] text-white font-medium text-center rounded-[5px] bg-principal-claro focus:outline-none focus:ring-4"
            >
              Cadastrar
            </button>
          </div>
        </div>
      </form>
      <ModalComponent isOpen={isOpen} onClose={closeModal} />
    </main>
  );
};

export default FormCadastro;
