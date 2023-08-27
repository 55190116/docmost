import api from "@/lib/api-client";
import { ICurrentUserResponse, IUser } from "@/features/user/types/user.types";

export async function getMe(): Promise<IUser>{
  const req = await api.get<IUser>("/user/me");
  return req.data as IUser;
}

export async function getUserInfo(): Promise<ICurrentUserResponse>{
  const req = await api.get<ICurrentUserResponse>("/user/info");
  return req.data as ICurrentUserResponse;
}
