import Case from "./case.model";
import Client from "../client/client.model";
import mongoose from "mongoose";

export const createCase = async (data: any, userId: string) => {
  const { clientId } = data;

  // 🔐 VALIDACIÓN CRÍTICA
  const client = await Client.findOne({
    _id: clientId,
    userId,
  });

  if (!client) {
    throw new Error("Cliente no válido");
  }

  return await Case.create({
    ...data,
    userId,
  });
};

export const getCases = async (userId: string) => {
  return await Case.find({ userId })
    .populate("clientId", "name email")
    .sort({ createdAt: -1 });
};

export const getCaseById = async (id: string, userId: string) => {
  return await Case.findOne({ _id: id, userId }).populate(
    "clientId",
    "name email phone"
  );
};

export const updateCase = async (
  id: string,
  data: any,
  userId: string
) => {
  // Si se intenta cambiar el cliente, validar
  if (data.clientId) {
    const client = await Client.findOne({
      _id: data.clientId,
      userId,
    });

    if (!client) {
      throw new Error("Cliente no válido");
    }
  }

  return await Case.findOneAndUpdate(
    { _id: id, userId },
    data,
    { new: true }
  );
};

export const deleteCase = async (id: string, userId: string) => {
  return await Case.findOneAndDelete({ _id: id, userId });
};