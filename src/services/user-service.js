const getUser = async (id) => {
    // Simulated database call
    return { id, name: "John Doe", email: "john@example.com" };
  };
  
module.exports = { getUser }