// // server.js
// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.post('/api/register', (req, res) => {
//   const { name, email, password, userType } = req.body;

//   // Basic validation
//   if (!name || !email || !password || !userType) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   // For demo, just simulate success
//   res.json({ message: 'Registered successfully' });
// });


// // Simple test route
// app.get('/api/hello', (req, res) => {
//   res.send('Hello from backend!');
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`✅ Server is running on http://localhost:${PORT}`);
// });


// // Dummy login route
// app.post('/api/login', (req, res) => {
//   const { email, password } = req.body;

//   // Dummy user data (in real case, you'd check DB)
//   const dummyUser = {
//     email: 'admin@bulkbazaar.com',
//     password: '123456'
//   };

//   if (email === dummyUser.email && password === dummyUser.password) {
//     res.json({ message: 'Login successful' });
//   } else {
//     res.status(401).json({ message: 'Invalid credentials' });
//   }
// });


const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ Basic route to test
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// ✅ Login route
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  // Dummy login check (you can improve this)
  if (email === "test@example.com" && password === "123456") {
    res.json({ success: true, message: "Login successful!" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// ✅ Register route
app.post("/api/register", (req, res) => {
  const { email, password } = req.body;
  // Dummy success (you can store in DB later)
  res.json({ success: true, message: "Registration successful!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});