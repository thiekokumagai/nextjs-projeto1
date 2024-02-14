import { TCreateUser } from "@/types/CreateUser";
import api from "../api";

interface LoginResponse {
  status: number;
  message: string;
}

async function createUser(formData: TCreateUser): Promise<LoginResponse> {
  try {
    const response = await api.post("/usuarios", formData);

    return { status: response.status, message: response.data.message };
  } catch (error) {
    throw error;
  }
}

export default { createUser };
