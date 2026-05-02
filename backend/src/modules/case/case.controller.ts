import { Response, NextFunction } from "express";
import { AuthRequest } from "../../shared/middlewares/auth.middleware";
import * as caseService from "./case.service";
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
    const data = await caseService.createCase(req.body, req.userId!);
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
    const data = await caseService.getCases(req.userId!);
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
    const data = await caseService.getCaseById(
      req.params.id,
      req.userId!
    );

    if (!data) {
      return res.status(404).json({ message: "Caso no encontrado" });
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
    const data = await caseService.updateCase(
      req.params.id,
      req.body,
      req.userId!
    );

    if (!data) {
      return res.status(404).json({ message: "Caso no encontrado" });
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
    const data = await caseService.deleteCase(
      req.params.id,
      req.userId!
    );

    if (!data) {
      return res.status(404).json({ message: "Caso no encontrado" });
    }

    res.json({ message: "Caso eliminado" });
  } catch (error) {
    next(error);
  }
};