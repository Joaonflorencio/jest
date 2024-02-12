const { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct } = require('./product');

beforeEach(() => {
  resetProducts();
});

describe('addProduct', () => {
  it('should add a product', () => {
    addProduct('Test Product', 100);
    const products = getProducts();
    expect(products).toHaveLength(1);
    expect(products[0].name).toBe('Test Product');
    expect(products[0].price).toBe(100);
  });

  it('should increment the id by 1 each time a product is added', () => {
    addProduct('Product 1', 50);
    addProduct('Product 2', 150);
    const products = getProducts();
    expect(products[1].id).toBe(2);
  });

  it('should throw an error if the name or price is undefined', () => {
    expect(() => addProduct(undefined, 100)).toThrow();
    expect(() => addProduct('Test Product', undefined)).toThrow();
  });

  it('should throw an error if the product already exists', () => {
    addProduct('Unique Product', 100);
    expect(() => addProduct('Unique Product', 100)).toThrow();
  });
});

describe('removeProduct', () => {
  it('should remove a product', () => {
    addProduct('Product to Remove', 50);
    const product = getProducts()[0];
    removeProduct(product.id);
    expect(getProducts()).toHaveLength(0);
  });

  it('should throw an error if the product does not exist', () => {
    expect(() => removeProduct(999)).toThrow();
  });
});

describe('getProduct', () => {
  it('should get a product by its id', () => {
    addProduct('Product to Find', 100);
    const product = getProducts()[0];
    const foundProduct = getProduct(product.id);
    expect(foundProduct).toMatchObject({ id: 1, name: 'Product to Find', price: 100 });
  });

  it('should throw an error if the product does not exist', () => {
    expect(() => getProduct(999)).toThrow();
  });
});

describe('updateProduct', () => {
  it('should update a product by its id', () => {
    addProduct('Product to Update', 100);
    const product = getProducts()[0];
    updateProduct(product.id, 'Updated Product', 150);
    const updatedProduct = getProduct(product.id);
    expect(updatedProduct).toMatchObject({ id: 1, name: 'Updated Product', price: 150 });
  }) })

  it('should throw an error if the product does not exist', () => {
    expect(() => updateProduct(999, 'Nonexistent Product', 100)).toThrow();
  })