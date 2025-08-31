import mongoose from "mongoose";
import System from "../models/system.js";

// Definindo os sistemas com IDs fixos
const systems = [
  { _id: new mongoose.Types.ObjectId("60b8f37e3d024e3b2c5f6a6b"), name: "Aplicação", description: "Serviço principal de aplicação" },
  { _id: new mongoose.Types.ObjectId("60b8f37e3d024e3b2c5f6a6c"), name: "Email", description: "Microsserviço de envio de e-mails" },
  { _id: new mongoose.Types.ObjectId("60b8f37e3d024e3b2c5f6a6d"), name: "Autenticação", description: "Microsserviço de autenticação de usuários" }
];

// Função que roda o seed
export async function seedFixedSystems() {
  try {
    for (const data of systems) {
      const exists = await System.findById(data._id);
      if (!exists) {
        await System.create(data);
        console.log(`✅ Sistema '${data.name}' criado com ID fixo.`);
      } else {
        console.log(`⚠️ Sistema '${data.name}' já existe.`);
      }
    }
  } catch (error) {
    console.error("❌ Erro ao rodar o seed:", error);
  }
}
