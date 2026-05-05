export interface DashboardEvent {
  _id: string;
  title: string;
  date: string;
  caseId: {
    _id: string;
    title: string;
  };
}

export interface DashboardData {
  totalClients: number;
  activeCases: number;
  upcomingEvents: DashboardEvent[];
}
