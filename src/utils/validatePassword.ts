const strongPasswordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

type Error = {
  [key: string]: string;
};

export const validatePassword = (password: any) => {
  const errors: Error = {};

  if (strongPasswordRegex.test(password)) {
    errors["senha"] = "Senha forte!";
  }

  return errors;
};
