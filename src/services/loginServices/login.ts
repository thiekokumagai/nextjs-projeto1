import { IPayloadLogin } from "@/types/UserLogin";
import api from "../api";

interface LoginResponse {
  status: number;
  message: string;
}

async function postLogin(formData: IPayloadLogin): Promise<LoginResponse> {
  try {
    const response = await api.post("/login", formData);

    const { authorization } = response.data;

    localStorage.setItem("token", JSON.stringify(authorization));

    return { status: response.status, message: response.data.message };
  } catch (error) {
    throw error; // por exemplo
  }
}

async function Logout(): Promise<void> {
  try {
    localStorage.clear();
  } catch (error) {
    // Tratamento de erros, se necessário.
    throw new Error("Failed to logout"); // por exemplo
  }
}

export default { postLogin, Logout };
