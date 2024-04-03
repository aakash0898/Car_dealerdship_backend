import express from 'express';
import dotenv from 'dotenv';
//import { connectDB } from './models.js';
import { myMiddleware } from './middleware.mjs'; // Note the extension .mjs
import { authRoutes, commonRoutes, userRoutes, dealershipRoutes } from './routes.js'; // Assuming this file exports these routes

//connectDB();
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(myMiddleware);
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/common', commonRoutes);
app.use('/api/user', userRoutes);
app.use('/api/dealership', dealershipRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
