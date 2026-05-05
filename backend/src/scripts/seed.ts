import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

import User from "../modules/auth/auth.model";
import Client from "../modules/client/client.model";
import Case from "../modules/case/case.model";
import Event from "../modules/event/event.model";

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Mongo conectado");

    // 🧹 limpiar datos previos
    await User.deleteMany();
    await Client.deleteMany();
    await Case.deleteMany();
    await Event.deleteMany();

    // 🔐 crear usuario
    const hashedPassword = await bcrypt.hash("123456", 10);

    const user = await User.create({
      email: "admin@test.com",
      password: hashedPassword,
    });

    console.log("Usuario creado");

    // 👤 crear clientes
    const clients = await Client.insertMany([
      {
        name: "Juan Pérez",
        phone: "8331234567",
        email: "juan@test.com",
        notes: "Cliente importante",
        userId: user._id,
      },
      {
        name: "María López",
        phone: "8339876543",
        email: "maria@test.com",
        notes: "",
        userId: user._id,
      },
      {
        name: "Carlos Ramírez",
        phone: "8335551111",
        email: "carlos@test.com",
        notes: "Seguimiento mensual",
        userId: user._id,
      },
    ]);

    console.log("Clientes creados");

    // 📁 crear casos
    const cases = await Case.insertMany([
      {
        title: "Demanda civil",
        clientId: clients[0]._id,
        type: "civil",
        status: "activo",
        userId: user._id,
      },
      {
        title: "Proceso penal",
        clientId: clients[1]._id,
        type: "penal",
        status: "en proceso",
        userId: user._id,
      },
      {
        title: "Asesoría laboral",
        clientId: clients[2]._id,
        type: "laboral",
        status: "cerrado",
        userId: user._id,
      },
    ]);

    console.log("Casos creados");

    // 📅 crear eventos
    await Event.insertMany([
      {
        title: "Audiencia inicial",
        date: new Date(Date.now() + 86400000),
        description: "Primera audiencia",
        caseId: cases[0]._id,
        userId: user._id,
      },
      {
        title: "Revisión expediente",
        date: new Date(Date.now() + 172800000),
        description: "Revisión interna",
        caseId: cases[1]._id,
        userId: user._id,
      },
      {
        title: "Cierre de caso",
        date: new Date(Date.now() + 259200000),
        description: "Entrega final",
        caseId: cases[2]._id,
        userId: user._id,
      },
    ]);

    console.log("Eventos creados");

    console.log("✅ Seed completado");
    process.exit(0);

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seed();