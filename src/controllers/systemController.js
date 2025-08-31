// const systemService = require('../services/systemService');
import { createSystem, getSystemById, findSystemByName } from '../services/systemService.js';

export const create = async (req, res) => {
  try {
    const { name, description } = req.body;
    const userId = req.userId;

    if (!name || !description) {
      return res.status(400).json({ error: 'Campos obrigatórios: name, description' });
    }

    const existingSystem = await findSystemByName(name); // ← chamar direto
    if (existingSystem) {
      return res.status(400).json({ error: 'Já existe um sistema com esse nome.' });
    }

    const system = await createSystem({ name, description }, userId); // ← chamar direto

    res.status(201).json(system);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao cadastrar sistema' });
  }
};
