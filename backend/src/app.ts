import express from "express";
import authRoutes from "./modules/auth/auth.routes";
import clientRoutes from "./modules/client/client.routes";
import caseRoutes from "./modules/case/case.routes";
import eventRoutes from "./modules/event/event.routes";
import dashboardRoutes from "./modules/dashboard/dashboard.routes";
import { errorHandler } from "./shared/middlewares/error.middleware";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  next();
});

app.use("/api/auth", authRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/cases", caseRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.use(errorHandler);

export default app;