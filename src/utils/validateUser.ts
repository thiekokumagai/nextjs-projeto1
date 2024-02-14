import { TCreateUser } from "@/types/CreateUser";

type Error = {
  [key: string]: string;
};

export const validateUser = (data: TCreateUser) => {
  const errors: Error = {};

  if (!data.nome) {
    errors["nome"] = "O campo nome é obrigatório";
  }

  if (!data.sobreNome) {
    errors["sobreNome"] = "O campo sobrenome é obrigatório";
  }

  if (!data.cpf) {
    errors["cpf"] = "O campo sobrenome é obrigatório";
  }

  if (!data.email) {
    errors["email"] = "O campo email é obrigatório";
  }

  if (!data.senha) {
    errors["senha"] = "O campo senha é obrigatório";
  }

  return errors;
};
