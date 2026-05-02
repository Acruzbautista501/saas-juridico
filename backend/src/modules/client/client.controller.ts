import { Response, NextFunction } from "express";
import { AuthRequest } from "../../shared/middlewares/auth.middleware";
import * as clientService from "./client.service";
import { Request } from "express";

interface Params {
  id: string;
}

export const create = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const client = await clientService.createClient(
      req.body,
      req.userId!
    );

    res.status(201).json(client);
  } catch (error) {
    next(error);
  }
};

export const getAll = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const clients = await clientService.getClients(req.userId!);

    res.json(clients);
  } catch (error) {
    next(error);
  }
};

export const getById = async (
  req: AuthRequest & Request<Params>,
  res: Response,
  next: NextFunction
) => {
  try {
    const client = await clientService.getClientById(
      req.params.id,
      req.userId!
    );

    if (!client) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    res.json(client);
  } catch (error) {
    next(error);
  }
};

export const update = async (
  req: AuthRequest & Request<Params>,
  res: Response,
  next: NextFunction
) => {
  try {
    const client = await clientService.updateClient(
      req.params.id,
      req.body,
      req.userId!
    );

    if (!client) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    res.json(client);
  } catch (error) {
    next(error);
  }
};

export const remove = async (
  req: AuthRequest & Request<Params>,
  res: Response,
  next: NextFunction
) => {
  try {
    const client = await clientService.deleteClient(
      req.params.id,
      req.userId!
    );

    if (!client) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    res.json({ message: "Cliente eliminado" });
  } catch (error) {
    next(error);
  }
};