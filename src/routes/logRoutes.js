import express from "express";
import logController from "../controllers/logController.js";

const router = express.Router();

/**
 * @swagger
 * /api/logs:
 *   post:
 *     summary: Cria um novo log
 *     tags: [Logs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *               level:
 *                 type: string
 *                 enum: [info, warn, error]
 *               service:
 *                 type: string
 *                 enum: [aplicacao, auth, emails]
 *               systemId:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Log criado com sucesso
 *       400:
 *         description: Erro de validação
 */
router.post('/', logController.create);

/**
 * @swagger
 * /api/logs/{systemId}:
 *   get:
 *     summary: Busca logs por ID do sistema
 *     tags: [Logs]
 *     parameters:
 *       - in: path
 *         name: systemId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do sistema para filtrar logs
 *     responses:
 *       200:
 *         description: Lista de logs
 *       404:
 *         description: Nenhum log encontrado para o sistema
 */
router.get('/:systemId', logController.getBySystem);

export default router;
