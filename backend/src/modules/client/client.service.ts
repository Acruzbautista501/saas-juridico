import Client from "./client.model";

export const createClient = async (data: any, userId: string) => {
  return await Client.create({
    ...data,
    userId,
  });
};

export const getClients = async (userId: string) => {
  return await Client.find({ userId }).sort({ createdAt: -1 });
};

export const getClientById = async (id: string, userId: string) => {
  return await Client.findOne({ _id: id, userId });
};

export const updateClient = async (
  id: string,
  data: any,
  userId: string
) => {
  return await Client.findOneAndUpdate(
    { _id: id, userId },
    data,
    { new: true }
  );
};

export const deleteClient = async (id: string, userId: string) => {
  return await Client.findOneAndDelete({ _id: id, userId });
};