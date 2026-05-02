import { Response, NextFunction } from "express";
import { AuthRequest } from "../../shared/middlewares/auth.middleware";
import { getDashboardData } from "./dashboard.service";

export const getDashboard = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await getDashboardData(req.userId!);
    res.json(data);
  } catch (error) {
    next(error);
  }
};
