import api from "../api";
import type { DashboardData } from '../../types/dashboard.types';

export const getDashboard = async (): Promise<DashboardData> => {
  const { data } = await api.get<DashboardData>("/dashboard");
  return data;
};
