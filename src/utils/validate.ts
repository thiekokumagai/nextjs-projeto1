import { TUserLogin } from "@/types/UserLogin";

type Error = {
  [key: string]: string;
};

export const validate = (data: TUserLogin) => {
  const errors: Error = {};

  if (!data.cpf) {
    errors["cpf"] = "O Campo CPF é obrigatório";
  }

  if (!data.senha) {
    errors["senha"] = "O Campo SENHA é obrigatório";
  }

  return errors;
};
