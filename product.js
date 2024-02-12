
let products = [];
let id = 0;

const resetProducts = () => {
  products = [];
  id = 0;
};

const addProduct = (name, price) => {
  if (!name || price === undefined) throw new Error('Name or price is undefined');
  if (products.some(product => product.name === name)) throw new Error('Product already exists');
  products.push({ id: ++id, name, price });
};

const removeProduct = (productId) => {
  const productIndex = products.findIndex(product => product.id === productId);
  if (productIndex === -1) throw new Error('Product does not exist');
  products.splice(productIndex, 1);
};

const getProducts = () => {
  return products;
};

const getProduct = (productId) => {
  const product = products.find(product => product.id === productId);
  if (!product) throw new Error('Product does not exist');
  return product;
};

const updateProduct = (productId, name, price) => {
  const productIndex = products.findIndex(product => product.id === productId);
  if (productIndex === -1) throw new Error('Product does not exist');
  if (name !== undefined) products[productIndex].name = name;
  if (price !== undefined) products[productIndex].price = price;
};

module.exports = { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct };