const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:10000"  // or your backend local port
    : "https://your-backend-service.onrender.com"; // Replace with your actual backend Render URL

export default baseURL;
