const AuthService = require('../services/auth.service');

const service = new AuthService();

const login = async (_, { email, password }, context) => {

  const { user } = await context.authenticate('graphql-local', { email, password });

  // const token = service.signToken(user);
  console.log(user)
  return service.signToken(user);
};

module.exports = {
  login,
};
