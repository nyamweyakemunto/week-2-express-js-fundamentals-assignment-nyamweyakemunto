let products = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Phone', price: 699.99 }
  ];
  
  // Get all products
  const getProducts = (req, res) => {
    // Optional query parameter for filtering
    if (req.query.minPrice) {
      const minPrice = parseFloat(req.query.minPrice);
      const filteredProducts = products.filter(p => p.price >= minPrice);
      return res.json(filteredProducts);
    }
    res.json(products);
  };
  
  // Get single product
  const getProduct = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
      const error = new Error('Product not found');
      error.statusCode = 404;
      throw error;
    }
    res.json(product);
  };
  
  // Create product
  const createProduct = (req, res) => {
    const { name, price } = req.body;
    if (!name || !price) {
      const error = new Error('Name and price are required');
      error.statusCode = 400;
      throw error;
    }
    
    const newProduct = {
      id: products.length + 1,
      name,
      price: parseFloat(price)
    };
    
    products.push(newProduct);
    res.status(201).json(newProduct);
  };
  
  // Update product
  const updateProduct = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
      const error = new Error('Product not found');
      error.statusCode = 404;
      throw error;
    }
    
    const { name, price } = req.body;
    if (name) product.name = name;
    if (price) product.price = parseFloat(price);
    
    res.json(product);
  };
  
  // Delete product
  const deleteProduct = (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex === -1) {
      const error = new Error('Product not found');
      error.statusCode = 404;
      throw error;
    }
    
    products = products.filter(p => p.id !== parseInt(req.params.id));
    res.status(204).send();
  };
  
  module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
  };