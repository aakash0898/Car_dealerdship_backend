// Define your middleware function
const myMiddleware = (req, res, next) => {
  // Middleware logic here
  console.log(`Incoming ${req.method} request to ${req.url}`);
  next(); // Call next() to pass control to the next middleware in the stack
};

// Export your middleware function
export { myMiddleware };
