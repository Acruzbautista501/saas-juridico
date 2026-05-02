import Client from "../client/client.model";
import Case from "../case/case.model";
import Event from "../event/event.model";

export const getDashboardData = async (userId: string) => {
  const now = new Date();

  // 🔥 Ejecutar en paralelo (performance real)
  const [totalClients, activeCases, upcomingEvents] = await Promise.all([
    Client.countDocuments({ userId }),

    Case.countDocuments({
      userId,
      status: "activo",
    }),

    Event.find({
      userId,
      date: { $gte: now },
    })
      .sort({ date: 1 })
      .limit(5)
      .populate({
        path: "caseId",
        select: "title",
      }),
  ]);

  return {
    totalClients,
    activeCases,
    upcomingEvents,
  };
};