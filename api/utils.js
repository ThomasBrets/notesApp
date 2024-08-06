const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]; // Obtenemos el encabezado de autorización de la solicitud HTTP.

  // Extraemos el token del encabezado 'Authorization' si existe.
  // El encabezado generalmente tiene el formato 'Bearer <token>',
  // por lo que dividimos la cadena por el espacio y obtenemos el segundo elemento.
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  // Verificamos el token JWT utilizando la función 'verify' del módulo 'jsonwebtoken'.
  jwt.verify(token, process.env.ACCES_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(401); // Si la verificación del token falla, respondemos con un estado 401 (Unauthorized).

    // Si el token es válido, asignamos la información decodificada del usuario al objeto 'req'.
    // Esto permite que otras funciones middleware o rutas puedan acceder a los datos del usuario.
    req.user = user;

    next();
  });
};

module.exports = { authenticateToken };
