"use client"; // This is a client component
import { useState, FormEvent, useEffect } from "react";
import { IPayloadLogin, TUserLogin } from "@/types/UserLogin";
import { validate } from "@/utils/validate";
import Link from "next/link";
import loginServices from "@/services/loginServices/login";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";

const FormLogin = () => {
  const [cpf, setCpf] = useState("fulano@qa.com");
  const [senha, setSenha] = useState("teste");

  const [errors, setErrors] = useState<TUserLogin | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setErrors(null);

    const data: TUserLogin = {
      cpf,
      senha,
    };

    const validateErrors = validate(data);

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    const form = {
      email: data.cpf,
      password: data.senha,
    };

    payLoadLogin(form);
  };

  async function payLoadLogin(data: IPayloadLogin) {
    const parar = toast.loading("carregando");

    try {
      const res = await loginServices.postLogin(data);
      if (res) {
        toast.success(res.message);
        toast.dismiss(parar);
        setCpf("");
        setSenha("");
      }
    } catch (error: any) {
      toast.error(error.response.data.email);
      toast.dismiss(parar);
    }
  }

  // useEffect(() => {
  //   toast.loading("carregando");
  //   toast.pause();
  // }, []);

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          className="block text-white text-base font-normal font-['Intro Book'] mb-2"
          htmlFor="cpf"
        >
          CPF
        </label>
        {/* <InputMask 
          className="w-full shadow appearance-none border rounded-md lg:py-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          maskChar=""
          mask="999.999.999-99"
          placeholder="Digite o seu CPF"
          id="cpf" 
          type="text" 
          value={cpf}        
          onChange={(e) => setCpf(e.target.value)}
        /> */}
        <input
          className="w-full shadow appearance-none border rounded-md lg:py-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="cpf"
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        {errors?.cpf && (
          <small className="text-xs text-red-500 mt-1">{errors?.cpf}</small>
        )}
      </div>
      <div>
        <label
          className="block text-white text-base font-normal font-['Intro Book'] mb-2"
          htmlFor="senha"
        >
          Senha
        </label>
        <input
          className="w-full  shadow appearance-none border rounded-md lg:py-5 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="senha"
          type="password"
          placeholder="******************"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        {errors?.senha && (
          <small className="text-xs text-red-500 mt-1">{errors?.senha}</small>
        )}
      </div>
      <div className="mb-6 text-right ">
        <Link
          className="w-full text-white text-sm font-bold font-['Intro Bold'] underline"
          href="#"
        >
          Esqueci minha senha
        </Link>
      </div>
      <div className="mb-6 text-center ">
        <button
          className="text-white focus:ring-4  mt-4 bg-principal-escuro
                font-medium rounded-[5px] lg:text-[25px] text-[20px] lg:w-1/2 w-full py-2  focus:outline-none"
          type="submit"
        >
          Entrar
        </button>
        <div className="text-center mt-2 flex flex-col lg:flex-row justify-center lg:gap-1 gap-0">
          <span className="text-white text-sm font-normal font-['Intro Book']">
            Primeiro acesso?
          </span>
          <Link
            href="/cadastro"
            className="text-white text-sm font-bold font-['Intro Bold'] underline"
          >
            Clique aqui
          </Link>
        </div>
      </div>
    </form>
  );
};

export default FormLogin;
