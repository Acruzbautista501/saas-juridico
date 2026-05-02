import { Response, NextFunction } from "express";
import { AuthRequest } from "../../shared/middlewares/auth.middleware";
import * as eventService from "./event.service";
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
    const data = await eventService.createEvent(
      req.body,
      req.userId!
    );

    res.status(201).json(data);
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
    const data = await eventService.getEvents(req.userId!);
    res.json(data);
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
    const data = await eventService.getEventById(
      req.params.id,
      req.userId!
    );

    if (!data) {
      return res.status(404).json({ message: "Evento no encontrado" });
    }

    res.json(data);
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
    const data = await eventService.updateEvent(
      req.params.id,
      req.body,
      req.userId!
    );

    if (!data) {
      return res.status(404).json({ message: "Evento no encontrado" });
    }

    res.json(data);
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
    const data = await eventService.deleteEvent(
      req.params.id,
      req.userId!
    );

    if (!data) {
      return res.status(404).json({ message: "Evento no encontrado" });
    }

    res.json({ message: "Evento eliminado" });
  } catch (error) {
    next(error);
  }
};