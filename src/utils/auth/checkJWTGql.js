const boom = require('@hapi/boom');
async function checkJWTGql(context) {
    const { user } = await context.authenticate('jwt', { session: false });
    // console.log("user checkJWTGql", user)
    if (!user) {
        throw boom.unauthorized('jwt is not valid');
    }

    return user;
}

module.exports = {
    checkJWTGql
}