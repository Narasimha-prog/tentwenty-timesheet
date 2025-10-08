import express from 'express';
import cors from 'cors';
import { entries, timesheets, users } from './models/model_data';
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
//  adding cors middleware to allow cross-origin requests
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Simple route for testing
app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

// Login endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({
      success: true,
      token: "dummy-token-123",
      user: { id: user.id, email: user.email, name: user.name },
    });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// Get all timesheets
app.get('/api/timesheets', (req, res) => {
  res.json(timesheets);
});

// Get entries for a timesheet
app.get('/api/timesheets/:weekId/entries', (req, res) => {
  const weekId = Number(req.params.weekId);
  const weekEntries = entries.filter(e => e.weekId === weekId);
  res.json(weekEntries);
});


// Start the server
app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
