import express from "express";
import authRoutes from "./modules/auth/auth.routes";
import clientRoutes from "./modules/client/client.routes";
import caseRoutes from "./modules/case/case.routes";
import eventRoutes from "./modules/event/event.routes";
import { errorHandler } from "./shared/middlewares/error.middleware";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/cases", caseRoutes);
app.use("/api/events", eventRoutes);

app.use(errorHandler);

export default app;