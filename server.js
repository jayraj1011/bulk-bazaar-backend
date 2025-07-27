const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// Login route
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "test@example.com" && password === "123456") {
    res.json({ success: true, message: "Login successful!" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// Register route
app.post("/api/register", (req, res) => {
  const { email, password } = req.body;
  // You can add validation here
  res.json({ success: true, message: "Registration successful!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
