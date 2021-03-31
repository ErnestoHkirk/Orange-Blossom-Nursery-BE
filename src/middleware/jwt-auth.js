const { JsonWebTokenError } = require('jsonwebtoken');
const AuthService = require('../routes/auth/auth-service');

function requireAuth(req, res, next) {
  let bearerToken;
  const authToken = req.get('Authorization') || '';

  if (!authToken.toLowerCase().startsWith('bearer '))
    return res.status(401).json({ error: 'Missing bearer token' });
  else 
    bearerToken = authToken.slice(7, authToken.length);

  try {
    const payload = AuthService.verifyJsonWebToken(bearerToken);
    const user = AuthService.getUserWithUserName(
      req.app.get('db'),
      payload.sub
    );
    
    if (!user)
      return res.status(401).json({ error: 'Unauthorized Request' });
    req.user = user;
    next();
  } catch (error) {
    if (error instanceof JsonWebTokenError)
      return res.status(401).json({ error: 'Unauthorized Request' });

    next(error);
  }
}

module.exports = {
  requireAuth
};