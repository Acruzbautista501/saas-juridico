import bcrypt from "bcrypt";
import User from "./auth.model";
import { generateToken } from "../../shared/utils/jwt";

export const registerUser = async (email: string, password: string) => {
  const exists = await User.findOne({ email });
  if (exists) throw new Error("Usuario ya existe");

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    password: hashed,
  });

  const token = generateToken(user._id.toString());

  return { user, token };
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Credenciales inválidas");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Credenciales inválidas");

  const token = generateToken(user._id.toString());

  return { user, token };
};