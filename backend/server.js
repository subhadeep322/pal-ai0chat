import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import aiRoutes from './routes/ai.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Route
app.use('/api/chat', aiRoutes);

// Serve static files from frontend (Render builds both apps together if needed)
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
