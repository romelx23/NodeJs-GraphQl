const ProductsService = require('../services/product.service');

const service = new ProductsService();

const getProduct = async (_, { id }) => {
  const product = await service.findOne(id);
  return product;
  //   return {
  //     id,
  //     name: 'Product 1',
  //     price: 100,
  //     description: 'Product 1 description',
  //     image: 'https://placeimg.com/640/480/any',
  //     createdAt: new Date().toISOString(),
  //   };
};

const getProducts = () => {
  // const products = await service.find({});
  // return products;
  return service.find({});
};

const addProduct = (_, { dto }) => {
  // const product = await service.create(dto);
  // return product;
  return service.create(dto);
};

const updateProduct = (_, { id, dto }) => {
  // const product = await service.update(id, dto);
  // return product;
  return service.update(id, dto);
};

const deleteProduct = async (_, { id }) => {
  // const product = await service.delete(id);
  // return product;
  await service.delete(id);
  return id;
};

const getProductsByCategory = async (parent) => {
  // const products = await service.find({ categoryId });
  // console.log("getProductsByCategory", parent)
  const id = parent.dataValues.id;

  return service.findByCategory(id);
};

module.exports = {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory
};
