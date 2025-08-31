import express from "express";
import { create } from "../controllers/systemController.js";
import authenticateToken from '../middlewares/authMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * /api/systems:
 *   post:
 *     summary: Cria um novo sistema
 *     tags: [Sistemas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *             required:
 *               - name
 *               - description
 *     responses:
 *       201:
 *         description: Sistema criado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post('/', authenticateToken, create);

export default router;
