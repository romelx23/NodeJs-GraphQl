const {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
} = require('./product.resolver');
const { login } = require('./auth.resolver');
const { addCategory, getCategory } = require('./category.resolver');

const { RegularExpression } = require("graphql-scalars");

const CategoryNameType = new RegularExpression('CategoryNameType', /^[a-zA-Z0-9]{3,8}$/);


const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    getPerson: (_, args) =>
      `Hello, I'm ${ args.name } and I'm ${ args.age } years old`,
    getInt: (_, args) => args.age,
    getFloat: (_, args) => args.price,
    getString: () => 'Hello world! 123',
    getBoolean: () => true,
    getID: () => '1234567890',
    getNumbers: (_, args) => args.numbers,

    product: getProduct,
    products: getProducts,
    category: getCategory,
  },
  Mutation: {
    addProduct,
    updateProduct,
    deleteProduct,
    login,
    addCategory,
  },
  CategoryNameType,
  Category: {
    products: getProductsByCategory
  }
};

module.exports = resolvers;
