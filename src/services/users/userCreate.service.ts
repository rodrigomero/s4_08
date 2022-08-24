// import { users } from "../../database";

import { IUserCreate, IUser } from "../../interfaces/users";


const userCreateService = ({ name, email, password }: IUserCreate) => {
  const users: any[] = []
  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new Error("Email already exists");
  }
  if (email.length > 180) {
    throw new Error("Email com tamanho superior a 180 caracteres");
  }
  if (name.length > 256) {
    throw new Error("Nome com tamanho superior a 256 caracteres");
  }
  if (password.length > 180) {
    throw new Error("Senha com tamanho superior a 180 caracteres");
  }

  const newUser: IUser = {
    id: users.length + 1,
    name,
    email,
    password,
  };

  users.push(newUser);

  return newUser;
};

export default userCreateService;
