//const systemRepository = require('../repositories/systemRepository');
//const logService = require('../services/logService');

import systemRepository from '../repositories/systemRepository.js';
import logService from '../services/logService.js';

// Função para criar um sistema
export async function createSystem({ name, description }, userId) {
  const systemData = { name, description };
  
  // Cria o sistema
  const system = await systemRepository.save(systemData);

  // Criando o log com o systemId
  const logMessage = `Sistema ${name} criado com sucesso.`;
  await logService.createLog(userId, {
    systemId: system._id,  // ID do sistema recém-criado
    message: logMessage,
    level: 'info',
    service: 'aplicacao'
  });

  return system;
}

// Função para buscar um sistema pelo ID
export async function getSystemById(systemId) {
  return await systemRepository.findById(systemId);
}

// Função para encontrar um sistema pelo nome
export async function findSystemByName(name) {
  return await systemRepository.findOne({ name });
}
