const cors = require('cors');

// Configure CORS options (customize as needed)
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend URL
  methods: 'GET, POST, PUT, DELETE',
  credentials: true, // Enable cookies and authentication headers
};

// Export the CORS middleware
module.exports = cors(corsOptions);