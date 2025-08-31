import axios from 'axios';

const authServiceUrl = process.env.AUTH_SERVICE_URL;

const authenticateToken = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split('Bearer ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Token não fornecido!' });
    }

    const response = await axios.post(`${authServiceUrl}/auth/token`, { token });

    if (response.status === 200) {
      return next();
    }
    return res.status(401).json({ error: 'Usuário não autenticado!' });
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: 'Usuário não autenticado!' });
  }
};

export default authenticateToken;
