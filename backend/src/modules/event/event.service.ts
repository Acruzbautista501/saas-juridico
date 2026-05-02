import Event from "./event.model";
import Case from "../case/case.model";

export const createEvent = async (data: any, userId: string) => {
  const { caseId } = data;

  // 🔐 VALIDACIÓN CRÍTICA (multi-tenant en cascada)
  const caseDoc = await Case.findOne({
    _id: caseId,
    userId,
  });

  if (!caseDoc) {
    throw new Error("Caso no válido");
  }

  return await Event.create({
    ...data,
    userId,
  });
};

export const getEvents = async (userId: string) => {
  return await Event.find({ userId })
    .populate({
      path: "caseId",
      select: "title status",
      populate: {
        path: "clientId",
        select: "name",
      },
    })
    .sort({ date: 1 }); // 🔥 orden cronológico
};

export const getEventById = async (id: string, userId: string) => {
  return await Event.findOne({ _id: id, userId }).populate({
    path: "caseId",
    select: "title",
  });
};

export const updateEvent = async (
  id: string,
  data: any,
  userId: string
) => {
  // Si cambia el caso → validar
  if (data.caseId) {
    const caseDoc = await Case.findOne({
      _id: data.caseId,
      userId,
    });

    if (!caseDoc) {
      throw new Error("Caso no válido");
    }
  }

  return await Event.findOneAndUpdate(
    { _id: id, userId },
    data,
    { new: true }
  );
};

export const deleteEvent = async (id: string, userId: string) => {
  return await Event.findOneAndDelete({ _id: id, userId });
};

// 🔥 CLAVE PARA DASHBOARD
export const getUpcomingEvents = async (userId: string) => {
  const now = new Date();

  return await Event.find({
    userId,
    date: { $gte: now },
  })
    .sort({ date: 1 })
    .limit(5);
};