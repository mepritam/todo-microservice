const axios = require("axios");

const USER_SERVICE_BASE = "http://localhost:4000";

const validateUser = async (email) => {
  console.log("Validating user with email", email);
  try {
    const res = await axios.get(`${USER_SERVICE_BASE}/auth/${email}`);
    console.log("User validation response:", res.data);
    return res.data; // { valid: true, user: {...} }
  } catch (err) {
    console.error("Error validating user:", err.message);
    return null;
  }
};

module.exports = { validateUser };
