const CategoryService = require("../services/category.service")
// const boom = require('@hapi/boom');
const { checkRolesGql } = require("../utils/auth/checkRolesGql");
const { checkJWTGql } = require("../utils/auth/checkJWTGql");
// const addCategory = async (parent, args, context, info) => {
const service = new CategoryService();
const addCategory = async (_, { dto }, context) => {
    const user = await checkJWTGql(context);
    // console.log("user", user)
    // console.log(dto)
    checkRolesGql(user, 'admin');

    return service.create({
        ...dto,
        image: dto.image.href
    });
}

const getCategory = async (_, { id }) => {
    // const user = await checkJWTGql(context);

    // checkRolesGql(user, 'admin');

    return service.findOne(id);
}

module.exports = {
    addCategory,
    getCategory
}